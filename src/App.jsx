import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BlogPost_AIAssistedEngineering from './pages/BlogPost_AIAssistedEngineering';
import BlogPost_NLPIdentity from './pages/BlogPost_NLPIdentity';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/ai-assisted-engineering" element={<BlogPost_AIAssistedEngineering />} />
          <Route path="/blog/nlp-identity-access-management" element={<BlogPost_NLPIdentity />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
