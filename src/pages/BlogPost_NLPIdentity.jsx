import React from 'react';
import { Link } from 'react-router-dom';
import ShareBar from '../components/ShareBar';
import NewsletterSignup from '../components/NewsletterSignup';

const BlogPost_NLPIdentity = () => {
  return (
    <article className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back nav */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200 text-sm mb-10 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-text-muted mb-4">
            <time dateTime="2026-04-15">April 15, 2026</time>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-surface-lighter" />
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-6">
            Applying NLP and AI Agents to Identity and Access Management
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Just finished a presentation for my graduate NLP course at Florida Atlantic University
            that I'm pretty excited about. It sits right at the intersection of the two things I
            spend most of my time on: AI and identity security.
          </p>
        </header>

        <hr className="border-surface-light/20 mb-10" />

        {/* --- BODY --- */}
        <div className="space-y-6 text-text-secondary leading-relaxed">

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">The talk</h2>

          <p>
            It's about 20 minutes. If you work in identity, security, or NLP, I think it's
            worth your time. If you'd rather read than watch, the summary is below.
          </p>

          {/* YouTube embed */}
          <div className="my-8 aspect-video rounded-xl overflow-hidden border border-surface-light/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dVZ4UK9W2tc"
              title="Applying NLP and AI Agents to Identity and Access Management"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">What I cover</h2>

          <p>
            Most IAM systems are still built around manual workflows and static rules.
            Access requests go through forms and approval chains. Policies live in documents that nobody reads
            until an audit. Anomaly detection, if it exists at all, is threshold-based and noisy. And when
            someone asks "what groups do I need access to for this project," the answer is usually "ask
            around" or "dig through a wiki."
          </p>
          <p>
            NLP and AI agents can change a lot of that. Not in some vague future-state way. The pieces
            exist right now.
          </p>
          <p>
            The presentation walks through four applications:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong className="text-text-primary">NER for access requests.</strong> Instead of
              filling out a form with dropdowns, you write "I need read access to the payments database for
              the Q3 audit" and the system extracts the resource, permission level, and justification
              automatically.
            </li>
            <li>
              <strong className="text-text-primary">BERT for policy extraction.</strong> Most
              organizations have access policies buried in PDFs and Confluence pages. A fine-tuned model
              can pull structured ABAC rules out of that unstructured text and flag conflicts between them.
            </li>
            <li>
              <strong className="text-text-primary">Anomaly detection in audit logs.</strong> Not just
              "this user logged in at 3am" but "this user's access pattern shifted in a way that doesn't
              match their role or their team's normal behavior." That's a different kind of signal than
              what threshold-based systems catch.
            </li>
            <li>
              <strong className="text-text-primary">RAG-powered identity assistants.</strong> Not a
              chatbot that says "please contact your administrator." An assistant that actually reads your
              policies, your group definitions, and your onboarding docs, then gives a real answer with
              citations you can verify.
            </li>
          </ul>
          <p>
            On the tooling side, I cover spaCy for entity recognition, LangChain for agent
            orchestration, Hugging Face for transformer models, vector databases for retrieval, and how
            it all fits together architecturally.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">The honest part</h2>

          <p>
            A lot of this is pie in the sky right now. This isn't how IAM works today at most companies.
            Access management is still heavily manual, heavily form-driven, and heavily dependent on
            tribal knowledge about who owns what and who approves what.
          </p>
          <p>
            But it's where I think the field needs to go. And honestly, that's a big part of why I'm
            doing a master's in AI while working full-time as an identity security engineer. I've been
            chipping away at the degree one class per semester so I don't lose my mind juggling work and
            life, but the slow pace has actually been a good thing. It gives me time to sit with these
            ideas and think about how they'd actually hold up in production, especially while everything
            in the AI world keeps changing on a weekly basis.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">Build smarter tools, not fewer people</h2>

          <p>
            I want to say something that matters to me, because I think it gets lost in the hype cycle.
          </p>
          <p>
            AI is genuinely good at solving hard engineering problems. Automating tedious work. Making
            systems smarter. I use these tools every day and I believe in what they can do when you stay
            engaged with the output. But I also think passive adoption at the organizational level erodes
            the people that make teams work.
          </p>
          <p>
            AI should shift how we work, not reduce who does the work. Handle the repetitive grind, yes.
            Sit at the table when we're thinking through architecture and design decisions, absolutely.
            But as another voice, not a replacement.
          </p>
          <p>
            There's a real conversation happening right now about where AI belongs. For me the answer
            is clear. Infrastructure. Security. The operational gaps that slow teams down. Build smarter
            tools, not fewer people. That's the kind of AI work I want to do, and this presentation is
            me starting to connect those dots publicly.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">Want to talk about it?</h2>

          <p>
            If you're already applying NLP or AI agents to identity, access management, or security
            operations, I genuinely want to hear about it. Reach out through the contact form on this
            site or find me on{' '}
            <a
              href="https://www.linkedin.com/in/justinrudisal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>.
          </p>

          <hr className="border-surface-light/20 my-14" />

          <ShareBar
            title="Applying NLP and AI Agents to Identity and Access Management"
            url="https://justinrudisal.com/blog/nlp-identity-access-management"
          />

          <div className="mt-10">
            <NewsletterSignup />
          </div>

        </div>
      </div>
    </article>
  );
};

export default BlogPost_NLPIdentity;
