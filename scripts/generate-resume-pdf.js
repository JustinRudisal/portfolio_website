import puppeteer from 'puppeteer';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { readFileSync } from 'node:fs';

const isPrivate = process.argv.includes('--private');
const htmlPath = resolve(import.meta.dirname, '..', 'src', 'resume-source.html');
const outputPath = resolve(
  import.meta.dirname, '..',
  isPrivate ? 'resume-private.pdf' : 'public/resume.pdf'
);

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });

if (isPrivate) {
  const envPath = resolve(import.meta.dirname, '..', '.env.local');
  const env = Object.fromEntries(
    readFileSync(envPath, 'utf-8')
      .split('\n')
      .filter(line => line.includes('='))
      .map(line => line.trim().split('='))
  );

  await page.evaluate((phone, email) => {
    const contact = document.querySelector('.contact');
    const contactLink = contact.querySelector('a[href*="/contact"]');
    if (contactLink) {
      const separator = contactLink.previousSibling;
      if (separator && separator.textContent.includes('|')) separator.remove();
      contactLink.remove();
    }
    const firstChild = contact.firstChild;
    const fragment = document.createDocumentFragment();
    const phoneText = document.createTextNode(phone + ' | ');
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    emailLink.style.color = '#1a5276';
    emailLink.style.textDecoration = 'none';
    const emailSep = document.createTextNode(' | ');
    fragment.appendChild(phoneText);
    fragment.appendChild(emailLink);
    fragment.appendChild(emailSep);
    contact.insertBefore(fragment, firstChild);
  }, env.RESUME_PHONE, env.RESUME_EMAIL);
}

await page.pdf({
  path: outputPath,
  format: 'Letter',
  margin: { top: '0.35in', bottom: '0.35in', left: '0.6in', right: '0.6in' },
  printBackground: true,
});

await browser.close();

const label = isPrivate ? 'Private resume' : 'Public resume';
console.log(`${label} PDF generated: ${outputPath}`);
