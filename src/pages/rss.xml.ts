import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

const modules = import.meta.glob('./blog/*.astro', { eager: true });

const posts = Object.values(modules)
  .filter((mod: any) => mod.meta?.published)
  .sort((a: any, b: any) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
  .map((mod: any) => mod.meta);

export function GET(context: APIContext) {
  return rss({
    title: 'Justin Rudisal',
    description: 'Thoughts on software engineering, AI, security, and the trends shaping our industry.',
    site: context.site!,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: posts.map((post: any) => ({
      title: post.title,
      pubDate: new Date(post.date + 'T00:00:00'),
      description: post.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
