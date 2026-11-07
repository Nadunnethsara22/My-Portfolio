import React from 'react';
import './Projects.css';

const PUBLIC = process.env.PUBLIC_URL || '';

const projects = [
  {
    id: 1,
    title: 'Smart Medical Hand Band – SentinelCare',
    category: 'IoT & Mobile',
    badge: 'Final Year Group Project',
    desc: 'A low-cost IoT-based wearable system designed for elderly individuals living alone, featuring automated physiological monitoring and instant emergency response.',
    highlights: [
      'Developed a low-cost IoT-based wearable system for elderly people living alone.',
      'Implemented health monitoring using heart rate, SpO₂, and body temperature sensors.',
      'Integrated fall detection using accelerometer, gyroscope, and pressure sensors.',
      'Developed a Flutter mobile application for caregivers and a web dashboard for report viewing.'
    ],
    tech: ['Flutter', 'Firebase', 'IoT Sensors', 'BLE', 'Web Dashboard'],
    github: 'https://github.com/NisalAluthge/SentinelCare.git',
    image: `${PUBLIC}/image/sentinelcare.png`,
    color: '#2563eb',
  },
  {
    id: 2,
    title: 'University Student Event Management System',
    category: 'Web App & UI/UX',
    badge: 'Group Project',
    desc: 'A web-based platform tailored for university communities to discover, organize, publish, and register for student activities and campus events.',
    highlights: [
      'Designed and developed a web-based platform for managing and discovering university events.',
      'Created user-friendly interfaces for event browsing, registration, and event information management.',
      'Applied UI/UX principles to improve usability and accessibility.'
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'UI/UX Design'],
    github: 'https://github.com/Nadunnethsara22/Student_Event_Management_System',
    image: `${PUBLIC}/image/event-management.png`,
    color: '#38bdf8',
  },
  {
    id: 3,
    title: 'ATmega32 Smart Home Automation System',
    category: 'Embedded & IoT',
    badge: 'Hardware & Systems Project',
    desc: 'An automated home monitoring and appliance control solution built around the ATmega32 microcontroller and multi-sensor environmental feedback loops.',
    highlights: [
      'Developed a microcontroller-based smart home automation system using multiple sensors.',
      'Implemented temperature, gas leakage, light, and humidity monitoring features.',
      'Designed automated control mechanisms for devices such as fans, LEDs, and buzzers.'
    ],
    tech: ['C', 'ATmega32', 'Proteus Simulation', 'Microchip Studio', 'Sensors & Relays'],
    github: 'https://github.com/Nadunnethsara22',
    image: `${PUBLIC}/image/smart-home.svg`,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    category: 'Frontend Engineering',
    badge: 'Individual Project',
    desc: 'A modern, high-performance responsive personal portfolio designed to showcase engineering projects, certifications, and technical proficiencies.',
    highlights: [
      'Designed and developed a responsive personal portfolio website to showcase my projects, skills, and contact details.',
      'Built reusable React components and implemented smooth section-based navigation.',
      'Used HTML and CSS to create a clean, mobile-friendly layout, applying UI/UX principles for better usability.'
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'GitHub Pages', 'UI/UX Design'],
    github: 'https://github.com/Nadunnethsara22',
    image: `${PUBLIC}/image/portfolio-preview.svg`,
    color: '#6366f1',
  },
];

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="container">
        <div className="projects__header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-subtitle">
            A showcase of production-ready mobile applications, web platforms, and embedded IoT systems I have engineered.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__img-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-card__img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${PUBLIC}/image/portfolio-preview.svg`;
                  }}
                />
                <span className="project-card__badge" style={{ borderColor: project.color, color: project.color }}>
                  {project.badge}
                </span>
              </div>

              <div className="project-card__body">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>

                <div className="project-card__highlights">
                  <h4 className="project-card__highlights-title">Key Contributions:</h4>
                  <ul>
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-outline project-card__btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
