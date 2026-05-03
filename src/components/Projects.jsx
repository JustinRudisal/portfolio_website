import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'This Website',
    description: 'The site you are looking at. A React portfolio and blog with a dark theme, scroll animations, an accessible contact form with Cloudflare Turnstile and EmailJS integration, and security headers enforced at the CDN level. Built to WCAG 2.1 AA standards. Source code is public.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Cloudflare Pages'],
    link: 'https://github.com/JustinRudisal/portfolio_website',
  },
  {
    title: 'IAM Anomaly Detection',
    description: 'A machine learning pipeline that applies Naive Bayes classification to detect anomalous access patterns in Identity and Access Management systems. Includes synthetic SSO event generation, hyperparameter tuning, k-fold cross-validation, and a dual-mode train/predict workflow.',
    tags: ['Python', 'Naive Bayes', 'scikit-learn', 'IAM', 'Security'],
    link: 'https://github.com/JustinRudisal/Naive-Bayes-Classification-for-Identity-and-Access-Management-Anomaly-Detection',
  },
  {
    title: 'N-Queens Genetic Algorithm',
    description: 'A genetic algorithm solver for the N-Queens combinatorial optimization problem. Efficiently finds solutions for large board sizes (N=32+) in seconds using population-based evolution, fitness caching, and escape mechanisms to avoid local optima.',
    tags: ['Python', 'Genetic Algorithm', 'Optimization', 'AI'],
    link: 'https://github.com/JustinRudisal/N-Queens',
  },
  {
    title: 'TransmitterHide',
    description: 'A quality-of-life mod for the game Timberborn that lets players hide automation transmitters from signal selection dropdowns. Features persistent hidden state across saves and direct map-click selection for hidden transmitters.',
    tags: ['C#', 'Unity', 'Game Modding', 'UI/UX'],
    link: 'https://github.com/JustinRudisal/TransmitterHide',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.article
        className="group relative rounded-xl bg-surface-dark border border-surface-light/10 p-6 h-full flex flex-col transition-colors duration-300 hover:border-accent/30"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-300" aria-hidden="true" />
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]" aria-hidden="true" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4" aria-label={`Technologies used: ${project.tags.join(', ')}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </motion.article>
    </AnimatedSection>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-surface" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 text-center"
          >
            Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" aria-hidden="true" />
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            The majority of my engineering work lives behind enterprise walls.
            These projects represent the public-facing slice of what I build,
            spanning AI, security, and the occasional game mod.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
