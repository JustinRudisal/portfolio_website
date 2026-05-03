import React, { useState } from 'react';

const ShareBar = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled share
      }
    }
  };

  const linkClass = 'inline-flex items-center justify-center w-10 h-10 rounded-lg border border-surface-light/20 text-text-secondary hover:text-accent hover:border-accent/30 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-text-muted text-sm mr-1">Share this post:</span>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Share on LinkedIn"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      <a
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Share on X"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a
        href={`https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Share on Bluesky"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.601 3.493 6.191 3.16-4.084.582-7.727 1.998-3.044 6.58 5.205 4.27 7.078-1.27 8.229-4.39.135-.365.205-.555.21-.405.006-.15.076.04.21.405 1.151 3.12 3.024 8.66 8.23 4.39 4.682-4.582 1.04-5.998-3.045-6.58 2.59.333 5.406-.533 6.191-3.16.246-.828.624-5.79.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
        </svg>
      </a>

      <a
        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Share on Reddit"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm6.066 13.071c.083.397.127.806.127 1.225 0 2.886-3.365 5.226-7.516 5.226-4.15 0-7.515-2.34-7.515-5.226 0-.42.044-.829.127-1.225a1.603 1.603 0 01-.662-1.292c0-.886.718-1.603 1.603-1.603.449 0 .854.186 1.144.486 1.254-.857 2.9-1.38 4.7-1.42l.932-4.108a.384.384 0 01.466-.283l2.93.653c.2-.397.609-.67 1.084-.67a1.2 1.2 0 110 2.4 1.2 1.2 0 01-1.175-.967l-2.598-.578-.832 3.67c1.749.057 3.345.58 4.564 1.418.29-.3.694-.487 1.143-.487.886 0 1.604.717 1.604 1.603 0 .517-.244.975-.625 1.268zM8.087 13.396a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zm7.198 2.727c-.086.086-1.022.962-3.285.962-2.263 0-3.199-.876-3.285-.962a.27.27 0 01.381-.381c.023.023.996.843 2.904.843s2.881-.82 2.904-.843a.27.27 0 01.381.381zm-.373-1.527a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
        </svg>
      </a>

      <a
        href={`https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Share on Hacker News"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M0 0v24h24V0H0zm11.09 13.71V18H9.4v-4.29L5.79 6h1.9l2.87 5.81L13.44 6h1.9l-3.6 7.71z" />
        </svg>
      </a>

      <button
        onClick={handleCopyLink}
        className={linkClass}
        aria-label={copied ? 'Link copied' : 'Copy link to clipboard'}
      >
        {copied ? (
          <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.04a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.374" />
          </svg>
        )}
      </button>

      {typeof navigator !== 'undefined' && navigator.share && (
        <button
          onClick={handleNativeShare}
          className={linkClass}
          aria-label="Share via system share menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ShareBar;
