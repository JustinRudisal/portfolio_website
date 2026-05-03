import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');
    try {
      const res = await fetch('https://buttondown.com/api/emails/embed-subscribe/rudisal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email: email.trim() }),
      });
      if (res.ok || res.redirected) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-accent/20 rounded-xl p-6 bg-surface-dark/50 text-center">
        <svg className="w-10 h-10 text-success mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-text-primary font-medium">You're subscribed!</p>
        <p className="text-text-secondary text-sm mt-1">Check your email to confirm.</p>
      </div>
    );
  }

  return (
    <div className="border border-surface-light/20 rounded-xl p-6 bg-surface-dark/50">
      <h3 className="text-text-primary font-semibold mb-1">Get notified of new posts</h3>
      <p className="text-text-secondary text-sm mb-4">
        No spam. Just a short email when I publish something new.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-2.5 rounded-lg bg-surface-dark border border-surface-light/20 text-text-primary placeholder-text-muted text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-6 py-2.5 rounded-lg bg-cta hover:bg-cta-hover text-surface-dark font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cta/20 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">Something went wrong. Try again or subscribe directly at buttondown.com/rudisal.</p>
      )}
    </div>
  );
};

export default NewsletterSignup;
