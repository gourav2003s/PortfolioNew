import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="py-16">
        <p className="text-secondary mb-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Gaurav Singh
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-textSecondary mb-6">
          I build things for the web.
        </h2>
        <p className="text-textSecondary max-w-xl mb-8">
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 rounded transition-colors"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero; 