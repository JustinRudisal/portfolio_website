import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const posts = [
  {
    title: 'AI-Assisted Engineering: A Practical Guide',
    date: '2026-05-02',
    excerpt: 'AI coding assistants are the biggest productivity shift in a decade. The research on how to use them well, and what happens when you do not, is clearer than most teams realize.',
    readTime: '25 min read',
    slug: '/blog/ai-assisted-engineering',
  },
  {
    title: 'Applying NLP and AI Agents to Identity and Access Management',
    date: '2026-04-15',
    excerpt: 'A graduate presentation on using NER, BERT, RAG, and AI agents to rethink how identity and access management systems work. Plus an honest take on where AI belongs.',
    readTime: '8 min read',
    slug: '/blog/nlp-identity-access-management',
  },
  {
    title: 'More on the way',
    date: null,
    excerpt: 'I write about software engineering, AI, identity security, and whatever else I find worth sharing. Stay tuned.',
    readTime: '',
    slug: null,
  },
];

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogCard = ({ post, index }) => {
  const isPublished = post.slug !== null;

  const content = (
    <article className={`group rounded-xl bg-surface-dark border border-surface-light/10 ${isPublished ? 'hover:border-accent/20' : 'opacity-60'} p-6 h-full flex flex-col transition-colors duration-200`}>
      <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
        {post.date ? (
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        ) : (
          <span>Coming soon</span>
        )}
        {post.readTime && (
          <>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-surface-lighter" />
            <span>{post.readTime}</span>
          </>
        )}
      </div>

      <h3 className={`text-lg font-semibold text-text-primary ${isPublished ? 'group-hover:text-accent' : ''} transition-colors duration-200 mb-3`}>
        {post.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
        {post.excerpt}
      </p>

      {isPublished && (
        <span
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary group-hover:text-accent transition-colors duration-200"
          aria-label={`Read more about ${post.title}`}
        >
          Read more
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      )}
    </article>
  );

  if (isPublished) {
    return (
      <AnimatedSection key={post.title} delay={index * 0.1}>
        <Link to={post.slug} className="block h-full focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-xl">
          {content}
        </Link>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection key={post.title} delay={index * 0.1}>
      {content}
    </AnimatedSection>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-surface-dark" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 text-center"
          >
            Blog
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" aria-hidden="true" />
          <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Thoughts on software engineering, AI, security, and the trends shaping our industry.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
