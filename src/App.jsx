import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPost_AIAssistedEngineering = lazy(() => import('./pages/BlogPost_AIAssistedEngineering'));
const BlogPost_NLPIdentity = lazy(() => import('./pages/BlogPost_NLPIdentity'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface-dark">
    <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" role="status">
      <span className="sr-only">Loading page...</span>
    </div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/ai-assisted-engineering" element={<BlogPost_AIAssistedEngineering />} />
            <Route path="/blog/nlp-identity-access-management" element={<BlogPost_NLPIdentity />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
