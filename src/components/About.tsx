import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-secondary mr-2">01.</span>
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-textSecondary">
            <p className="mb-4">
              Hello! My name is {<b>Gaurav Singh</b>} and I enjoy creating things that live on the internet. 
              My interest in web development started back in [2022] when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at [companies/projects]. 
              My main focus these days is building accessible, inclusive products and digital 
              experiences for a variety of clients.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Bootstrap
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> vite
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Version Control Git, Github
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> C++
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="relative w-full h-80 bg-secondary/20 rounded">
              <img
                src="your-image-url.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded mix-blend-multiply filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 