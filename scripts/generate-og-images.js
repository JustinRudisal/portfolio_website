import puppeteer from 'puppeteer';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { mkdirSync } from 'node:fs';

const pages = [
  {
    slug: 'home',
    title: 'Justin Rudisal',
    tag: 'Senior Software Engineer',
    subtitle: 'Building scalable, secure, and thoughtful software. Writing about AI, engineering, and security.',
  },
  {
    slug: 'blog',
    title: 'Blog',
    tag: 'Software Engineering + AI + Security',
    subtitle: 'Thoughts on software engineering, AI, security, and the trends shaping our industry.',
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    tag: 'justinrudisal.com',
    subtitle: 'How this site handles your data. Short version: it collects very little and tracks nothing.',
  },
  {
    slug: '404',
    title: 'Page Not Found',
    tag: 'justinrudisal.com',
    subtitle: '',
  },
  {
    slug: 'ai-assisted-engineering',
    title: 'AI-Assisted Engineering: A Practical Guide to Using AI Coding Tools Without Losing Your Edge',
    tag: 'AI + Software Engineering',
    subtitle: '',
  },
  {
    slug: 'nlp-identity-access-management',
    title: 'Applying NLP and AI Agents to Identity and Access Management',
    tag: 'AI + Security',
    subtitle: '',
  },
];

const templatePath = resolve(import.meta.dirname, '..', 'src', 'og-template.html');
const outputDir = resolve(import.meta.dirname, '..', 'public', 'og');

mkdirSync(outputDir, { recursive: true });

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });

for (const entry of pages) {
  await page.goto(pathToFileURL(templatePath).href, { waitUntil: 'networkidle0' });

  await page.evaluate(({ title, tag, subtitle }) => {
    document.getElementById('title').textContent = title;
    document.getElementById('tag').textContent = tag;
    const subtitleEl = document.getElementById('subtitle');
    if (subtitle) {
      subtitleEl.textContent = subtitle;
    } else {
      subtitleEl.style.display = 'none';
    }
  }, entry);

  const outputPath = resolve(outputDir, `${entry.slug}.png`);

  await page.screenshot({
    path: outputPath,
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  console.log(`OG image generated: ${outputPath}`);
}

await browser.close();
