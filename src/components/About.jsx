import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-16 p-10 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-md">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-xl leading-relaxed mb-6 text-gray-700">
          Hi, I’m <span className="font-bold text-purple-600">Justin Rudisal</span>, a Senior Software Engineer with a passion for creating scalable, secure, and innovative solutions. 
          Throughout my career, I’ve tackled complex challenges, collaborated with cross-functional teams, and delivered impactful solutions that empower businesses and delight users.
        </p>

        {/* Experience */}
        <p className="text-xl leading-relaxed mb-6 text-gray-700">
          My journey spans industries and roles—from developing mission-critical financial systems at JPMorgan Chase to engineering secure and user-friendly Identity and Access Management (IAM) platforms at Disney. With expertise in Java, Python, React.js, AWS, and security protocols like OAuth2 and SAML, I excel at designing robust solutions for large-scale systems.
        </p>

        {/* Personal Growth */}
        <p className="text-xl leading-relaxed mb-6 text-gray-700">
          I’m also pursuing a Master’s in Artificial Intelligence, diving into areas like machine learning, predictive analytics, and anomaly detection. I thrive in environments that allow me to innovate, grow, and take on cutting-edge challenges.
        </p>

        {/* Skills List */}
        <ul className="mt-6 space-y-6">
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-purple-500">💡</span>
            <span className="text-lg text-gray-800">
              Experienced in building secure, scalable systems with a focus on user experience
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-blue-500">💻</span>
            <span className="text-lg text-gray-800">
              Proficient in Java, Python, JavaScript, React.js, and cloud technologies like AWS
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-green-500">🤖</span>
            <span className="text-lg text-gray-800">
              Passionate about applying AI and machine learning to real-world problems
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-500">🤝</span>
            <span className="text-lg text-gray-800">
              Skilled at collaborating across teams to bring innovative ideas to life
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-3xl text-pink-500">🚀</span>
            <span className="text-lg text-gray-800">
              Driven by a desire to grow, adapt, and take on new challenges
            </span>
          </li>
        </ul>

        {/* Closing */}
        <p className="text-lg leading-relaxed mt-10 text-gray-700 italic">
          Whether it’s designing tools that scale for millions of users or leveraging AI to transform industries, 
          I’m always eager to innovate and contribute to meaningful projects. Let’s connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;