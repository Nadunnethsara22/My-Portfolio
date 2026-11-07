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
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* CTA */}
        <div className="skills-cta-simple">
          <div>
            <h3>Interested in seeing my work?</h3>
            <p>Explore real-world projects built with these technologies.</p>
          </div>
          <button 
            type="button" 
            onClick={() => scrollTo('projects')} 
            className="btn-primary"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
