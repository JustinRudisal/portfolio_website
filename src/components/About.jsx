import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-32 p-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-md">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-xl leading-relaxed mb-6">
          Hi, I’m <span className="font-bold text-yellow-400">Justin Rudisal</span>, a Senior Software Engineer with a passion for creating scalable, secure, and innovative solutions. 
          Throughout my career, I’ve tackled complex challenges, collaborated with cross-functional teams, and delivered impactful solutions that empower businesses and delight users.
        </p>

        {/* Experience */}
        <p className="text-xl leading-relaxed mb-6">
          My journey spans industries and roles—from developing mission-critical financial systems at JPMorgan Chase to engineering secure and user-friendly Identity and Access Management (IAM) platforms at Disney. With expertise in Java, Python, React.js, AWS, and security protocols like OAuth2 and SAML, I excel at designing robust solutions for large-scale systems.
        </p>

        {/* Personal Growth */}
        <p className="text-xl leading-relaxed mb-6">
          I’m also pursuing a Master’s in Artificial Intelligence, diving into areas like machine learning, predictive analytics, and anomaly detection. I thrive in environments that allow me to innovate, grow, and take on cutting-edge challenges.
        </p>

        {/* Skills List */}
        <ul className="mt-6 space-y-6">
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-400">💡</span>
            <span className="text-lg">
              Experienced in building secure, scalable systems with a focus on user experience
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-400">💻</span>
            <span className="text-lg">
              Proficient in Java, Python, JavaScript, React.js, and cloud technologies like AWS
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-400">🤖</span>
            <span className="text-lg">
              Passionate about applying AI and machine learning to real-world problems
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-400">🤝</span>
            <span className="text-lg">
              Skilled at collaborating across teams to bring innovative ideas to life
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-400">🚀</span>
            <span className="text-lg">
              Driven by a desire to grow, adapt, and take on new challenges
            </span>
          </li>
        </ul>

        {/* Closing */}
        <p className="text-lg leading-relaxed mt-10 italic">
          Whether it’s designing tools that scale for millions of users or leveraging AI to transform industries, 
          I’m always eager to innovate and contribute to meaningful projects. Let’s connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;