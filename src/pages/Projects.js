import React from 'react';
import './Projects.css';

const PUBLIC = process.env.PUBLIC_URL || '';

const projects = [
  {
    id: 1,
    title: 'Smart Medical Hand Band – SentinelCare',
    category: 'IoT & Mobile',
    badge: 'Final Year Group Project',
    desc: 'A smart IoT-based wearable healthcare system designed for elderly people living alone, featuring automated physiological vital monitoring and real-time emergency alert dispatch.',
    highlights: [
      'Developed a low-cost IoT wearable device for continuous health monitoring for seniors.',
      'Integrated SpO₂, heart rate, body temperature, accelerometer, and pressure fall sensors.',
      'Engineered a caregiver mobile application using Flutter and a real-time web dashboard.',
      'Implemented automated emergency alerts, medicine reminders, and cloud data synchronization.'
    ],
    tech: ['Flutter', 'Firebase', 'IoT Sensors', 'BLE', 'Web Dashboard', 'Cloud Firestore'],
    github: 'https://github.com/NisalAluthge/SentinelCare.git',
    image: `${PUBLIC}/image/sentinelcare.png`,
    color: '#a855f7',
  },
  {
    id: 2,
    title: 'University Student Event Management System',
    category: 'Full-Stack Web (PHP & MySQL)',
    badge: 'Individual Project',
    desc: 'A robust web-based event coordination platform engineered with PHP and MySQL, designed for university communities to discover, manage, and register for campus activities.',
    highlights: [
      'Developed a dynamic event management web application using native PHP backend and MySQL relational database.',
      'Implemented full CRUD features for event creation, attendee registration, schedule management, and participant records.',
      'Structured secure database schema with input validation, session handling, and relational query optimization.',
      'Designed responsive, accessible frontend layouts using HTML5, CSS3, and JavaScript for seamless cross-device browsing.'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Web'],
    github: 'https://github.com/Nadunnethsara22/Event-Management-System.git',
    image: `${PUBLIC}/image/event-management.png`,
    color: '#c084fc',
  },
  {
    id: 3,
    title: 'ATmega32 Smart Home Automation System',
    category: 'Embedded Microcontroller Systems',
    badge: 'Microcontroller Project',
    desc: 'An automated home monitoring and appliance control system engineered with the ATmega32 microcontroller and Microchip Studio, programmed in C++ with multi-sensor feedback loops.',
    highlights: [
      'Developed an automated microcontroller home control system programmed in C++ using Microchip Studio.',
      'Integrated real-time temperature, gas/smoke leakage (MQ-2), ambient light (LDR), and humidity monitoring.',
      'Constructed automated actuation circuits governing cooling fans, intelligent relays, alarms, and buzzer sirens.',
      'Designed and validated complete hardware circuit simulations and firmware execution in Proteus.'
    ],
    tech: ['C++', 'ATmega32', 'Microchip Studio', 'Proteus Simulation', 'Relays & Sensors'],
    github: 'https://github.com/Nadunnethsara22',
    image: `${PUBLIC}/image/smart-home.png`,
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'AgriConnect LK – Digital Agricultural Marketplace',
    category: 'Full-Stack Web (React & Firebase)',
    badge: 'Agricultural Platform',
    desc: 'A direct farmer-to-consumer and wholesale agro-trading platform engineered with React.js and Firebase, connecting regional growers across Nuwara Eliya, Dambulla, Anuradhapura, and Jaffna directly with commercial buyers.',
    highlights: [
      'Developed a full-stack digital agricultural marketplace using React.js and Google Firebase cloud infrastructure.',
      'Integrated Firebase Authentication, Cloud Firestore real-time database, and Firebase Storage for crop listings.',
      'Implemented district-wise crop filtering across all 25 districts with transparent market price benchmarks.',
      'Built dual onboarding portals for farmers to sell harvests and wholesale buyers to procure produce with zero broker markups.'
    ],
    tech: ['React.js', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Nadunnethsara22/agriconnect.git',
    image: `${PUBLIC}/image/agriconnect.jpg`,
    color: '#10b981',
  },
];

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects That Showcase My Skills</h2>
          <p className="section-subtitle">
            A collection of production-ready projects featuring mobile applications, embedded microcontroller systems, and full-stack web platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
              aria-label={`Project: ${project.title}`}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card__image" aria-label={`${project.title} screenshot`}>
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="project-card__src-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div className="project-card__overlay">
                  <a
                    href={project.github}
                    className="btn-outline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View Code
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__category">{project.category}</span>
                  {project.badge && <span className="project-card__badge">{project.badge}</span>}
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>

                {project.highlights && (
                  <ul className="project-card__bullets">
                    {project.highlights.map((bullet, i) => (
                      <li key={i} className="project-card__bullet">
                        <span className="project-card__bullet-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-card__tech" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={project.github}
                    className="project-card__link project-card__link--accent"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    View on GitHub
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
