import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Proficient' },
      { name: 'Dart', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'Flutter', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'HTML5 & CSS3', level: 'Expert' },
    ],
  },
  {
    title: 'Databases & Cloud Tools',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 'Proficient' },
      { name: 'Firebase', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Postman', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced' },
    ],
  },
  {
    title: 'Hardware & Embedded Systems',
    icon: '🔌',
    skills: [
      { name: 'C / C++', level: 'Proficient' },
      { name: 'ATmega32', level: 'Advanced' },
      { name: 'Microchip Studio', level: 'Advanced' },
      { name: 'Proteus Simulation', level: 'Proficient' },
      { name: 'Sensors & Actuators', level: 'Advanced' },
      { name: 'UI/UX Design', level: 'Proficient' },
    ],
  },
  {
    title: 'Professional & Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Teamwork & Collaboration', level: 'Core' },
      { name: 'Problem Solving', level: 'Core' },
      { name: 'Communication', level: 'Core' },
      { name: 'Time Management', level: 'Core' },
      { name: 'Self-Learning & Adaptability', level: 'Core' },
    ],
  },
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
        <div className="skills__header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, modern frameworks, hardware tools, and development practices I utilize.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-card">
              <div className="skills-card__header">
                <span className="skills-card__icon">{cat.icon}</span>
                <h3 className="skills-card__title">{cat.title}</h3>
              </div>

              <div className="skills-card__tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__cta-wrap">
          <button 
            type="button" 
            onClick={() => scrollTo('projects')} 
            className="btn-primary"
          >
            Explore Projects Using These Technologies
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
