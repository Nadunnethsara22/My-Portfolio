import React from 'react';
import './Certificates.css';

const certificatesData = [
  {
    period: "2025 – PRESENT",
    degree: "Higher National Diploma in Information Technology",
    institution: "Institute of Technology, University of Moratuwa (ITUM)",
  },
  {
    period: "CERTIFICATION",
    degree: "Certificate Course in Python for Beginners",
    institution: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
  },
  {
    period: "CERTIFICATION",
    degree: "Certificate Course in Basics of UI/UX",
    institution: "Simplilearn SkillUp",
  }
];

export default function Certificates() {
  return (
    <div className="certificates-section">
      <div className="container">
        <div className="certificates-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-subtitle">
            Academic qualifications and certified coursework.
          </p>
        </div>

        <div className="education-timeline">
          {certificatesData.map((ed, i) => (
            <article className="education-item" key={i} aria-label={ed.degree}>
              <div className="education-item__dot" aria-hidden="true" />
              <div className="education-item__content">
                <div className="education-item__period">{ed.period}</div>
                <h3>{ed.degree}</h3>
                <p className="education-item__institution">{ed.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
