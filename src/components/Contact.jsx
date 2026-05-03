import React, { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Turnstile } from 'react-turnstile';
import AnimatedSection from './AnimatedSection';

const EMAILJS_SERVICE_ID = 'service_6l5l9tm';
const EMAILJS_TEMPLATE_ID = 'template_g4zvmpc';
const EMAILJS_PUBLIC_KEY = '7RUBZE36iBPLZRaXE';
const TURNSTILE_SITE_KEY = '0x4AAAAAADH3NnPh9jQYZ2I2';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const isRateLimited = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    const now = Date.now();
    const recent = stored.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    return recent.length >= RATE_LIMIT_MAX;
  } catch {
    return false;
  }
};

const recordSubmission = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    const now = Date.now();
    const recent = stored.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    recent.push(now);
    localStorage.setItem('contact_submissions', JSON.stringify(recent));
  } catch {
    // localStorage unavailable, continue without rate limiting
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [turnstileToken, setTurnstileToken] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const turnstileRef = useRef(null);

  const handleTurnstileVerify = useCallback((token) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length > 5000) newErrors.message = 'Message must be under 5,000 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.elements.website?.value) return;

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      const refs = { name: nameRef, email: emailRef, message: messageRef };
      refs[firstErrorField]?.current?.focus();
      return;
    }

    if (!turnstileToken) {
      setErrors({ form: 'Please wait for the security check to complete.' });
      return;
    }

    if (isRateLimited()) {
      setErrors({ form: 'You have sent several messages recently. Please try again later.' });
      return;
    }

    setStatus('sending');
    setErrors({});

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short',
          }),
        },
        EMAILJS_PUBLIC_KEY,
      );

      recordSubmission();
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch {
      setStatus('error');
      setErrors({ form: 'Something went wrong. Please try again or email me directly.' });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  const inputClasses = 'w-full px-4 py-3 rounded-lg bg-surface-dark border border-surface-light/20 text-text-primary placeholder-text-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent';
  const errorClasses = 'text-red-400 text-sm mt-1.5 flex items-center gap-1.5';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface-dark" aria-labelledby="contact-heading">
      <div className="max-w-2xl mx-auto px-6">
        <AnimatedSection>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 text-center"
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" aria-hidden="true" />
          <p className="text-text-secondary text-center mb-12 max-w-md mx-auto">
            Have a question or want to collaborate? Send me a message and I will get back to you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {status === 'sent' ? (
            <div className="text-center py-12" role="status">
              <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Message sent!</h3>
              <p className="text-text-secondary">
                Thanks for reaching out. I will get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-accent hover:text-text-primary transition-colors duration-200 text-sm font-medium focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              {/* Honeypot */}
              <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {errors.form && (
                <div className="mb-5 p-3 rounded-lg bg-red-400/10 border border-red-400/20" role="alert">
                  <p className="text-red-400 text-sm flex items-center gap-1.5">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.form}
                  </p>
                </div>
              )}

              <div className="mb-5">
                <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className={inputClasses}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={status === 'sending'}
                />
                {errors.name && (
                  <p id="name-error" className={errorClasses} role="alert">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  className={inputClasses}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  disabled={status === 'sending'}
                />
                {errors.email && (
                  <p id="email-error" className={errorClasses} role="alert">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  name="message"
                  placeholder="What would you like to talk about?"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={5000}
                  rows={5}
                  className={`${inputClasses} resize-y min-h-[120px]`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  disabled={status === 'sending'}
                />
                {errors.message && (
                  <p id="message-error" className={errorClasses} role="alert">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <Turnstile
                  ref={turnstileRef}
                  sitekey={TURNSTILE_SITE_KEY}
                  onVerify={handleTurnstileVerify}
                  onExpire={handleTurnstileExpire}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto bg-cta hover:bg-cta-hover px-8 py-3 rounded-lg text-surface-dark font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-cta/20 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
