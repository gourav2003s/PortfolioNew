import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application that helps users track their daily tasks and manage their time effectively. Built with React, TypeScript, and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: '#',
      demo: '#',
      image: 'project1.jpg'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with a modern UI and seamless checkout experience. Integrated with Stripe for payments and Firebase for backend services.',
      technologies: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: 'https://www.google.com ',
      image: 'https://cdn.pixabay.com/photo/2024/06/30/10/28/sky-8862862_1280.png'
    },
    {
      title: 'Project Three',
      description: 'A real-time chat application with features like message encryption, file sharing, and user presence indicators.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: 'project3.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-secondary mr-2">02.</span>
          Some Things I've Built
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative grid md:grid-cols-12 items-center gap-4"
            >
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative h-[300px] group">
                  <div className="absolute inset-0 bg-secondary/20 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg mix-blend-multiply filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              </div>
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className={`text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-secondary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-tertiary p-6 rounded-lg mb-4">
                    <p className="text-textSecondary">{project.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 justify-end mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="text-textSecondary text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary hover:text-secondary"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary hover:text-secondary"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 