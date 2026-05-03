import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark"
    >
      {/* Asanoha geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%2322d3ee' stroke-width='0.5'%3E%3Cpath d='M40 0L0 40L40 80L80 40Z'/%3E%3Cpath d='M40 0L40 80'/%3E%3Cpath d='M0 40L80 40'/%3E%3Cpath d='M40 0L0 40'/%3E%3Cpath d='M40 0L80 40'/%3E%3Cpath d='M0 40L40 80'/%3E%3Cpath d='M80 40L40 80'/%3E%3Cpath d='M20 20L60 20L60 60L20 60Z'/%3E%3Cpath d='M40 0L20 20'/%3E%3Cpath d='M40 0L60 20'/%3E%3Cpath d='M80 40L60 20'/%3E%3Cpath d='M80 40L60 60'/%3E%3Cpath d='M40 80L60 60'/%3E%3Cpath d='M40 80L20 60'/%3E%3Cpath d='M0 40L20 60'/%3E%3Cpath d='M0 40L20 20'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-[fadeInUp_0.8s_ease-out]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4 leading-tight">
          Hi, I'm{' '}
          <span className="text-accent font-mono">
            <Typewriter
              words={[
                ' Justin Rudisal',
                ' a Senior Software Engineer',
                ' an Identity Security Engineer',
                ' a Builder of AI-Powered Tools',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary mt-6 max-w-2xl mx-auto">
          Building scalable, secure, and thoughtful software.
          Turning complex problems into elegant solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="inline-block bg-cta hover:bg-cta-hover px-8 py-3 rounded-lg text-surface-dark font-semibold text-base transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-cta/20 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            tabIndex={0}
            role="link"
          >
            Learn More About Me
          </ScrollLink>

          <ScrollLink
            to="blog"
            smooth={true}
            duration={800}
            offset={-80}
            className="inline-block border border-accent hover:bg-accent/10 px-8 py-3 rounded-lg text-accent hover:text-text-primary font-medium text-base transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            tabIndex={0}
            role="link"
          >
            Read My Blog
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={800}
            offset={-80}
            className="inline-block border border-surface-lighter hover:border-accent px-8 py-3 rounded-lg text-text-secondary hover:text-accent font-medium text-base transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            tabIndex={0}
            role="link"
          >
            View My Work
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
