# justinrudisal.com

Personal portfolio and blog for Justin Rudisal, Senior Software Engineer specializing in Identity and Access Management at Disney.

**Live site:** [justinrudisal.com](https://justinrudisal.com)

## What this is

A single-page portfolio site with a blog, built with React and deployed on Cloudflare Pages. It serves as my professional presence online: who I am, what I have built, what I think about, and how to reach me.

## Tech stack

- **React 19** with React Router for page navigation
- **Vite 8** for builds and dev server
- **Tailwind CSS 4** for styling
- **Framer Motion** for scroll animations (with `prefers-reduced-motion` support)
- **EmailJS** for contact form delivery (no backend required)
- **Cloudflare Turnstile** for bot protection on the contact form
- **Cloudflare Pages** for hosting, CDN, and SSL

## Project structure

```
src/
  components/     Reusable UI components (Navbar, Hero, Footer, etc.)
  pages/          Full-page views (HomePage, blog posts)
  App.jsx         Router and layout
  App.css         Theme tokens and global styles
public/
  _headers        Security headers for Cloudflare Pages
  resume.html     ATS-friendly resume (print to PDF)
```

## Security

This repo is intentionally public. There are no secrets, credentials, API keys, or tokens in the codebase that are not already designed to be client-side public keys.

- **EmailJS public key, service ID, and template ID** are client-side values by design. They are visible in the browser JS bundle on every page load regardless of whether the repo is public. Abuse is mitigated by Cloudflare Turnstile, a honeypot field, and client-side rate limiting.
- **Cloudflare Turnstile site key** is explicitly designed to be public and is present in the rendered HTML.
- **No backend secrets, no server credentials, no environment variables required.** The entire site is static.

## Accessibility

Built to WCAG 2.1 AA standards:

- All text/background color combinations meet minimum contrast ratios
- Skip-to-content link for keyboard navigation
- Semantic HTML with proper heading hierarchy and ARIA landmarks
- Form inputs with associated labels, error messages linked via `aria-describedby`
- All animations respect `prefers-reduced-motion`
- Mobile-responsive with accessible hamburger menu

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building

```bash
npm run build
```

Output goes to `dist/`. The `_headers` file and `resume.html` are copied from `public/` automatically.

## License

Source code is MIT licensed. Written content (blog posts, resume, biographical text) is copyright Justin Rudisal. See [LICENSE](LICENSE) for details.
