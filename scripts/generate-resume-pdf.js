import puppeteer from 'puppeteer';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const htmlPath = resolve(import.meta.dirname, '..', 'src', 'resume-source.html');
const outputPath = resolve(import.meta.dirname, '..', 'public', 'resume.pdf');

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });

await page.pdf({
  path: outputPath,
  format: 'Letter',
  margin: { top: '0.5in', bottom: '0.5in', left: '0.6in', right: '0.6in' },
  printBackground: true,
});

await browser.close();

console.log(`Resume PDF generated: ${outputPath}`);
