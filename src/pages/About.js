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
              Software Engineer and Mobile Application Developer pursuing an HND in Information Technology at ITUM, University of Moratuwa. I specialize in building responsive web platforms with React and modern mobile applications using Flutter and Firebase.
            </p>
            <p style={{ marginTop: 12 }}>
              Focused on writing clean, scalable code and crafting seamless digital experiences that solve real-world problems.
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
