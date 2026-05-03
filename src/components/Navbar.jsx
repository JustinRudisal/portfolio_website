import React, { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'blog', label: 'Blog' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((section) => {
    setMobileOpen(false);
    if (isHome) {
      scroller.scrollTo(section, { smooth: true, duration: 800, offset: -80 });
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  }, [isHome, navigate]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-darkest/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold text-text-primary cursor-pointer hover:text-accent transition-colors duration-200 bg-transparent border-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
            aria-label="Go to top of page"
          >
            <span className="font-mono text-accent">{'>'}</span> Justin Rudisal
          </button>

          <ul className="hidden md:flex items-center space-x-8" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                {isHome ? (
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    spy={true}
                    activeClass="!text-accent"
                    className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                    tabIndex={0}
                    role="link"
                  >
                    {label}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavClick(to)}
                    className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 text-sm font-medium tracking-wide uppercase bg-transparent border-none"
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
            <li>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-text-primary p-2 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-surface-darkest/98 backdrop-blur-md border-t border-surface-light/20"
            role="menu"
          >
            <ul className="flex flex-col items-center py-4 space-y-4" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to} role="none">
                  <button
                    onClick={() => handleNavClick(to)}
                    className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 text-base font-medium tracking-wide uppercase bg-transparent border-none"
                    role="menuitem"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li role="none">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 text-base font-medium tracking-wide uppercase"
                  role="menuitem"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
