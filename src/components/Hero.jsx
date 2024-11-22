import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Justin</h1>
        <p className="mt-4 text-xl">A Senior Software Engineer crafting elegant solutions.</p>
        <a href="#about" className="mt-6 inline-block bg-yellow-500 px-6 py-3 rounded-full text-white text-lg font-semibold hover:bg-yellow-600">
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;