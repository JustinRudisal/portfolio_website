import React from 'react';
import AnimatedSection from './AnimatedSection';

const timeline = [
  {
    year: '2016',
    title: 'Software Engineering Intern',
    company: 'Fiserv',
    description: 'Internal tooling and application development for financial services',
  },
  {
    year: '2018',
    title: 'Software Engineering Intern',
    company: 'Disney',
    description: 'Internal applications for parks operations and engineering teams',
  },
  {
    year: '2020',
    title: 'Associate Software Engineer',
    company: 'JPMorgan Chase',
    description: 'Financial messaging infrastructure supporting millions in daily transactions',
  },
  {
    year: '2021',
    title: 'Software Engineer',
    company: 'JPMorgan Chase',
    description: 'Led automation testing initiatives and supported mission-critical systems',
  },
  {
    year: '2022',
    title: 'Software Engineer',
    company: 'Disney',
    description: 'Enterprise Identity and Access Management for tens of thousands of users',
  },
  {
    year: '2024',
    title: 'Senior Software Engineer',
    company: 'Disney',
    description: 'Designing and building IAM platform architecture, AI-powered developer tools, and identity security systems',
    current: true,
  },
];

const skills = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Identity & Access Management',
    description: 'Okta, OAuth2, SAML, SCIM, SSO, MFA, and enterprise identity lifecycle management',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Full Stack Engineering',
    description: 'Java, Spring Boot, Python, JavaScript, TypeScript, Angular, React, and Node.js',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud & Infrastructure',
    description: 'AWS Lambda, DynamoDB, API Gateway, ECS, Step Functions, and CI/CD pipelines',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'Building AI-powered developer tools, pursuing an M.S. in Artificial Intelligence',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Security Engineering',
    description: 'Enterprise authentication systems, zero-trust architecture, and security incident response',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Leadership & Mentorship',
    description: 'Cross-team architecture proposals, technical strategy, and onboarding new engineers',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 text-center"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" aria-hidden="true" />
        </AnimatedSection>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto mb-20">
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm <span className="text-text-primary font-semibold">Justin Rudisal</span>, a
              Senior Software Engineer at <span className="text-text-primary font-medium">Disney</span> specializing
              in Identity and Access Management. Over the past 10+ years I have built enterprise-scale
              systems across financial services and entertainment, from securing mission-critical
              transaction infrastructure at <span className="text-text-primary font-medium">JPMorgan Chase</span> to
              engineering IAM platforms that serve tens of thousands of users at Disney.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I hold a B.S. in Computer Science from the University of Central Florida and am
              currently pursuing an M.S. in Artificial Intelligence at Florida Atlantic University.
              My graduate work focuses on bridging AI and identity security through machine learning,
              anomaly detection, and predictive analytics.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Outside of work, I love exploring new places and cultures with my wife,
              share a deep appreciation for anime and cosplay, and answer to three very opinionated cats.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Career Journey
          </h3>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto mb-20">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-surface-lighter/30 sm:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="Career timeline">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimatedSection key={`${item.company}-${item.year}`} delay={index * 0.08}>
                  <li className="relative flex items-start sm:items-center">
                    {/* Dot */}
                    <div
                      className={`absolute left-4 sm:left-1/2 w-3 h-3 rounded-full border-2 -translate-x-1/2 z-10 ${
                        item.current
                          ? 'bg-accent border-accent shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                          : 'bg-surface border-surface-lighter'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0 ${
                      isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:ml-auto'
                    }`}>
                      <span className="text-accent font-mono text-sm">{item.year}</span>
                      <h4 className="text-text-primary font-semibold mt-1">
                        {item.title}
                        {item.current && (
                          <span className="ml-2 text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            current
                          </span>
                        )}
                      </h4>
                      <p className="text-accent-dim text-sm font-medium">{item.company}</p>
                      <p className="text-text-secondary text-sm mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                </AnimatedSection>
              );
            })}
          </ol>
        </div>

        {/* Skills */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-text-primary mb-10 text-center">
            What I Bring
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 0.06}>
              <div className="flex gap-4 p-5 rounded-lg bg-surface-dark/50 border border-surface-light/10 hover:border-accent/20 transition-colors duration-200 h-full">
                <span className="text-accent flex-shrink-0 mt-0.5">
                  {skill.icon}
                </span>
                <div>
                  <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wide mb-1">
                    {skill.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
