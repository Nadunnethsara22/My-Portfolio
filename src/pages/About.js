import React from 'react';
import './About.css';

export default function About() {
  const details = [
    { label: 'Role', value: 'Software Engineer & Mobile Developer' },
    { label: 'Education', value: 'IT Undergraduate, University of Moratuwa (ITUM)' },
    { label: 'Location', value: 'Thanamalwila / Moratuwa, Sri Lanka' },
    { label: 'Email', value: 'nethsaranadun802@gmail.com', isLink: true, href: 'mailto:nethsaranadun802@gmail.com' },
    { label: 'Phone', value: '+94 76 388 6139', isLink: true, href: 'tel:+94763886139' },
    { label: 'Availability', value: 'Open for Internships & Full-Time Roles' },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <div className="about__header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Driven by Innovation & Engineering</h2>
        </div>

        <div className="about__grid">
          <div className="about__bio-card">
            <h3 className="about__bio-title">Hello, I'm Nadun Nethsara</h3>
            <p className="about__bio-text">
              I am an Information Technology undergraduate at the <strong>Institute of Technology, University of Moratuwa (ITUM)</strong>, passionate about building robust, modern, and user-centric web applications, mobile platforms, and IoT systems.
            </p>
            <p className="about__bio-text">
              A quick learner with strong problem-solving and communication capabilities, I take pride in writing clean, modular code and working collaboratively in agile development teams. My hands-on projects range from IoT-enabled healthcare wearables built with Flutter and Firebase to smart home automation systems using C and ATmega32 microcontrollers.
            </p>

            <div className="about__details-grid">
              {details.map((item, idx) => (
                <div key={idx} className="about__detail-item">
                  <span className="about__detail-label">{item.label}</span>
                  {item.isLink ? (
                    <a href={item.href} className="about__detail-value about__detail-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="about__detail-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="about__cards-col">
            <div className="about__focus-card">
              <div className="about__focus-icon">💻</div>
              <h4>Full-Stack & Web</h4>
              <p>Designing modern, responsive web user interfaces with React.js, Tailwind CSS, HTML5, and CSS3, backed by REST APIs.</p>
            </div>

            <div className="about__focus-card">
              <div className="about__focus-icon">📱</div>
              <h4>Mobile Development</h4>
              <p>Building cross-platform mobile applications using Flutter and Firebase with real-time sync, auth, and state management.</p>
            </div>

            <div className="about__focus-card">
              <div className="about__focus-icon">⚡</div>
              <h4>IoT & Embedded Systems</h4>
              <p>Integrating microcontrollers (ATmega32), multi-sensor arrays, and Proteus simulation for real-time monitoring and automation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
