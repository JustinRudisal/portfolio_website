import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-20 h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Hi, I'm{' '}
          <span style={{ color: '#FFD700' }}> {/* Gold color for emphasis */}
            <Typewriter
              words={['Justin Rudisal', 'a Senior Software Engineer', 'a Problem Solver', 'a Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-4 text-xl">Crafting elegant solutions one line of code at a time.</p>
        <Link
          to="/about"
          className="mt-6 inline-block bg-yellow-500 px-6 py-3 rounded-full text-white text-lg font-semibold hover:bg-yellow-600"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;