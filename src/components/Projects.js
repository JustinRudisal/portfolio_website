import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      link: 'https://github.com/yourname/project-one',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      link: 'https://github.com/yourname/project-two',
    },
  ];

  return (
    <section id="projects" className="p-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4 shadow">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;