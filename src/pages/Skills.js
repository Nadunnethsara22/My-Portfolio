import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'Java', 'Dart', 'PHP', 'JavaScript', 'React.js', 'Flutter', 'Tailwind CSS', 'HTML5 & CSS3']
  },
  {
    title: 'Databases & Cloud Tools',
    skills: ['MySQL', 'Firebase', 'Docker', 'Git', 'GitHub', 'Postman', 'REST APIs']
  },
  {
    title: 'Hardware & Embedded Systems',
    skills: ['C / C++', 'ATmega32', 'Microchip Studio', 'Proteus Simulation', 'Sensors & Relays', 'UI/UX Design']
  },
  {
    title: 'Professional & Soft Skills',
    skills: ['Teamwork & Collaboration', 'Problem Solving', 'Communication', 'Time Management', 'Self-Learning']
  }
];

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, modern frameworks, hardware tools, and development practices I utilize.
          </p>
        </div>

        {/* SKILLS CARDS */}
        <div className="skills-simple-grid">
          {skillGroups.map(group => (
            <div className="skill-simple-card" key={group.title}>
              <h3 className="skill-simple-card__title">{group.title}</h3>
              <div className="skill-simple-card__pills">
                {group.skills.map(skill => (
                  <span className="skill-simple-pill" key={skill}>
                    <span className="skill-simple-pill__dot" aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
