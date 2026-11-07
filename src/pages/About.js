import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <span className="section-tag">About Me</span>
        </div>

        {/* BIO & ASPIRATION */}
        <div className="about-bio__grid">
          <div className="about-bio__text">
            <h2 className="section-title about-bio__name">Nadun Nethsara</h2>
            <p>
              I am an enthusiastic Software Engineer and Mobile Application Developer currently pursuing my Higher National Diploma in Information Technology at ITUM, University of Moratuwa. Driven by a passion for building software that solves meaningful problems, I develop responsive web platforms, cross-platform mobile apps, and embedded microcontroller systems with an emphasis on clean architecture and fluid user experiences.
            </p>
            <p style={{ marginTop: 14 }}>
              From architecting smart healthcare wearables with Flutter and real-time cloud databases to engineering digital marketplace solutions with React and Firebase, I thrive on turning complex requirements into elegant, reliable digital products. I am constantly expanding my technical horizons, writing maintainable code, and eager to contribute to innovative, high-impact engineering teams.
            </p>

            <div className="about-bio__info" role="list" aria-label="Personal information">
              {[
                { label: 'Location', value: 'Thanamalwila / Monaragala, Sri Lanka' },
                { label: 'Email', value: 'nethsaranadun802@gmail.com' },
                { label: 'Phone', value: '+94 76 388 6139' },
                { label: 'Status', value: 'Open to Software Engineering & Mobile Dev Internships' },
              ].map(item => (
                <div className="about-bio__info-item" key={item.label} role="listitem">
                  <span className="about-bio__info-label">{item.label}</span>
                  <span className="about-bio__info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career aspiration */}
          <aside className="about-aspiration" aria-label="Career aspiration">
            <div className="aspiration-card">
              <div className="aspiration-card__icon" aria-hidden="true">🎯</div>
              <h3>Career Aspiration</h3>
              <p>
                To join a forward-thinking tech company as a <strong>Software Engineer Intern</strong> or <strong>Mobile Application Developer</strong> where I can actively contribute to innovative software ecosystems, learn modern enterprise practices, and build scalable, user-centered digital products.
              </p>
              <div className="aspiration-card__tags">
                <span className="aspiration-card__tag">Software Engineering</span>
                <span className="aspiration-card__tag">Mobile Development</span>
              </div>
            </div>    
          </aside>
        </div>
      </div>
    </div>
  );
}
