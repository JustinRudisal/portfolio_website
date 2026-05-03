import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../components/Hero';

const WaveDivider = lazy(() => import('../components/WaveDivider'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Blog = lazy(() => import('../components/Blog'));
const Contact = lazy(() => import('../components/Contact'));

const preloadSections = () => {
  import('../components/WaveDivider');
  import('../components/About');
  import('../components/Projects');
  import('../components/Blog');
  import('../components/Contact');
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    preloadSections();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 300);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <WaveDivider fromColor="#0f172a" toColor="#1e293b" />
        <About />
        <WaveDivider fromColor="#1e293b" toColor="#0f172a" />
        <Blog />
        <WaveDivider fromColor="#0f172a" toColor="#1e293b" />
        <Projects />
        <WaveDivider fromColor="#1e293b" toColor="#0f172a" />
        <Contact />
      </Suspense>
    </>
  );
};

export default HomePage;
