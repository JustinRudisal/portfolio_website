const META = {
  '/blog/ai-assisted-engineering': {
    title: 'AI-Assisted Engineering: A Practical Guide to Using AI Coding Tools Without Losing Your Edge',
    description: 'AI coding assistants are the biggest productivity shift in a decade. The research on how to use them well, and what happens when you do not, is clearer than most teams realize.',
    type: 'article',
  },
  '/blog/nlp-identity-access-management': {
    title: 'Applying NLP and AI Agents to Identity and Access Management',
    description: 'A graduate presentation on using NER, BERT, RAG, and AI agents to rethink how identity and access management systems work. Plus an honest take on where AI belongs.',
    type: 'article',
  },
  '/': {
    title: 'Justin Rudisal - Senior Software Engineer',
    description: 'Portfolio and blog for Justin Rudisal, Senior Software Engineer specializing in Identity and Access Management at Disney.',
    type: 'website',
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

function isCrawler(userAgent) {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  return CRAWLER_AGENTS.some((agent) => lower.includes(agent));
}

function buildMetaPage(url, meta) {
  const fullUrl = url.toString();
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:url" content="${fullUrl}">
<meta property="og:type" content="${meta.type}">
<meta property="og:site_name" content="Justin Rudisal">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<link rel="canonical" href="${fullUrl}">
</head>
<body>
<p>Redirecting to <a href="${fullUrl}">${meta.title}</a></p>
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
      const meta = META[path];
      if (meta) {
        return buildMetaPage(url, meta);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
