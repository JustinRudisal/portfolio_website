import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-20 p-10 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm a passionate software engineer with a knack for solving challenging problems and building scalable, user-friendly applications. 
        </p>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            <span className="text-lg">Experienced in JavaScript, Python, and React.js</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            <span className="text-lg">Skilled in developing full-stack web applications</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            <span className="text-lg">Always learning and exploring new technologies</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;