import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3/SASS', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'RESTful APIs', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Jest', level: 75 },
        { name: 'Webpack', level: 70 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-secondary mr-2">03.</span>
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-tertiary rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-textPrimary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-textSecondary">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-primary rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 