const PAGES = {
  '/': {
    title: 'Justin Rudisal - Senior Software Engineer',
    description: 'Portfolio and blog for Justin Rudisal, Senior Software Engineer specializing in Identity and Access Management at Disney. Building scalable, secure, and thoughtful software.',
    type: 'website',
    jsonLdType: 'ProfilePage',
    published: '2026-05-01T00:00:00-04:00',
    modified: '2026-05-03T00:00:00-04:00',
    content: 'Justin Rudisal is a Senior Software Engineer at Disney specializing in Identity and Access Management. With 10+ years of experience across financial services and entertainment, he builds enterprise-scale IAM platforms, AI-powered developer tools, and identity security systems. Currently pursuing an M.S. in Artificial Intelligence at Florida Atlantic University.',
  },
  '/blog/ai-assisted-engineering': {
    title: 'AI-Assisted Engineering: A Practical Guide to Using AI Coding Tools Without Losing Your Edge',
    description: 'AI coding assistants are the biggest productivity shift in a decade. The research on how to use them well, and what happens when you do not, is clearer than most teams realize.',
    type: 'article',
    jsonLdType: 'BlogPosting',
    published: '2026-05-02T00:00:00-04:00',
    modified: '2026-05-03T00:00:00-04:00',
    content: 'AI coding assistants are the biggest productivity shift in software engineering since Stack Overflow. This is a framework built from years of working in production codebases and from the growing body of research on how AI tools actually affect code quality and developer skills. It covers the research (Perry et al. at Stanford, GitClear 2025, DORA 2024-2025, Anthropic skills study, METR 2025), a practical experience-calibrated configuration system with comprehension gates and risk-proportional scrutiny, anti-complacency behaviors drawn from aviation CRM and clinical decision support, and a ready-to-use configuration file for Claude Code, Cursor, and Copilot.',
  },
  '/blog/nlp-identity-access-management': {
    title: 'Applying NLP and AI Agents to Identity and Access Management',
    description: 'A graduate presentation on using NER, BERT, RAG, and AI agents to rethink how identity and access management systems work. Plus an honest take on where AI belongs.',
    type: 'article',
    jsonLdType: 'BlogPosting',
    published: '2026-04-15T00:00:00-04:00',
    modified: '2026-04-15T00:00:00-04:00',
    content: 'A presentation for a graduate NLP course at Florida Atlantic University exploring the intersection of NLP, AI agents, and Identity and Access Management. Covers four applications: Named Entity Recognition for parsing access requests in plain English, BERT for extracting ABAC rules from policy documents, NLP-based anomaly detection in audit logs, and RAG-powered assistants for identity questions. Includes a 20-minute video presentation and discussion of the tooling stack (spaCy, LangChain, Hugging Face, vector databases).',
  },
};

const CRAWLER_AGENTS = [
  'linkedinbot',
  'twitterbot',
  'facebookexternalhit',
  'facebot',
  'redditbot',
  'discordbot',
  'slackbot',
  'telegrambot',
  'whatsapp',
  'googlebot',
  'bingbot',
  'yandexbot',
  'baiduspider',
  'duckduckbot',
  'applebot',
  'bluesky',
  'atproto',
];

const AUTHOR = {
  name: 'Justin Rudisal',
  url: 'https://justinrudisal.com',
  linkedin: 'https://www.linkedin.com/in/justinrudisal/',
  github: 'https://github.com/JustinRudisal',
};

function isCrawler(userAgent) {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  return CRAWLER_AGENTS.some((agent) => lower.includes(agent));
}

function buildJsonLd(fullUrl, page) {
  if (page.jsonLdType === 'ProfilePage') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      dateCreated: page.published,
      dateModified: page.modified,
      mainEntity: {
        '@type': 'Person',
        name: AUTHOR.name,
        description: 'Senior Software Engineer specializing in Identity and Access Management',
        image: 'https://justinrudisal.com/logo512.png',
        url: AUTHOR.url,
        sameAs: [AUTHOR.linkedin, AUTHOR.github],
      },
    });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.title,
    description: page.description,
    datePublished: page.published,
    dateModified: page.modified,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url,
      sameAs: [AUTHOR.linkedin, AUTHOR.github],
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    image: 'https://justinrudisal.com/logo512.png',
    url: fullUrl,
  });
}

function buildCrawlerPage(url, page) {
  const fullUrl = url.toString();
  const isArticle = page.type === 'article';

  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<meta name="author" content="${AUTHOR.name}">
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<link rel="canonical" href="${fullUrl}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${fullUrl}">
<meta property="og:type" content="${page.type}">
<meta property="og:site_name" content="Justin Rudisal">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://justinrudisal.com/logo512.png">
${isArticle ? `<meta property="article:published_time" content="${page.published}">
<meta property="article:modified_time" content="${page.modified}">
<meta property="article:author" content="${AUTHOR.url}">` : ''}
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="https://justinrudisal.com/logo512.png">
<script type="application/ld+json">${buildJsonLd(fullUrl, page)}</script>
</head>
<body>
<h1>${page.title}</h1>
${isArticle ? `<p>By ${AUTHOR.name} | Published ${page.published.split('T')[0]}</p>` : ''}
<p>${page.content}</p>
<p><a href="${fullUrl}">Read the full article at justinrudisal.com</a></p>
</body>
</html>`,
    {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';

    if (isCrawler(userAgent)) {
      const path = url.pathname.replace(/\/$/, '') || '/';
      const page = PAGES[path];
      if (page) {
        return buildCrawlerPage(url, page);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
