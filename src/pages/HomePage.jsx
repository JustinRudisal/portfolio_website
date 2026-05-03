import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../components/Hero';
import WaveDivider from '../components/WaveDivider';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <WaveDivider fromColor="#0f172a" toColor="#1e293b" />
      <About />
      <WaveDivider fromColor="#1e293b" toColor="#0f172a" />
      <Blog />
      <WaveDivider fromColor="#0f172a" toColor="#1e293b" />
      <Projects />
      <WaveDivider fromColor="#1e293b" toColor="#0f172a" />
      <Contact />
    </>
  );
};

export default HomePage;
