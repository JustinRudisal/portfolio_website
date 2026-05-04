import puppeteer from 'puppeteer';
import pngToIco from 'png-to-ico';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { writeFileSync } from 'node:fs';

const templatePath = resolve(import.meta.dirname, '..', 'src', 'favicon-template.html');
const publicDir = resolve(import.meta.dirname, '..', 'public');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 512, height: 512 });
await page.goto(pathToFileURL(templatePath).href, { waitUntil: 'networkidle0' });

const pngPath = resolve(publicDir, 'logo512.png');
await page.screenshot({
  path: pngPath,
  type: 'png',
  clip: { x: 0, y: 0, width: 512, height: 512 },
});
console.log('Generated: logo512.png');

await browser.close();

const sharp = await import('sharp').then(m => m.default).catch(() => null);
if (sharp) {
  await sharp(pngPath).resize(192, 192).toFile(resolve(publicDir, 'logo192.png'));
  console.log('Generated: logo192.png (resized from 512)');
} else {
  const { execSync } = await import('node:child_process');
  try {
    execSync(`npx sharp-cli resize 192 192 -i "${pngPath}" -o "${resolve(publicDir, 'logo192.png')}"`);
    console.log('Generated: logo192.png (resized from 512)');
  } catch {
    console.log('Warning: Could not generate logo192.png. Install sharp for resizing: npm i -D sharp');
  }
}

const icoBuffer = await pngToIco(pngPath);
writeFileSync(resolve(publicDir, 'favicon.ico'), icoBuffer);
console.log('Generated: favicon.ico');
