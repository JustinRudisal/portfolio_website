import React from 'react';

const Disclosure = ({ title, children }) => {
  return (
    <details className="group border border-surface-light/10 rounded-lg my-4 overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-surface-dark/50 hover:bg-surface-dark transition-colors duration-200 text-text-primary font-medium select-none list-none">
        <span>{title}</span>
        <svg
          className="w-5 h-5 text-text-muted transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 py-4 border-t border-surface-light/10">
        {children}
      </div>
    </details>
  );
};

export default Disclosure;
