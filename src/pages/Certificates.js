import React from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Higher National Diploma in Information Technology',
    issuer: 'Institute of Technology, University of Moratuwa (ITUM)',
    year: '2025 – Present',
    badge: 'Undergraduate Program',
    color: '#2563eb',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'Certificate Course in Python for Beginners',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
    year: 'Certified',
    badge: 'Programming Foundations',
    color: '#38bdf8',
    icon: '🐍',
  },
  {
    id: 3,
    title: 'Certificate Course in Basics of UI/UX',
    issuer: 'Simplilearn SkillUp',
    year: 'Certified',
    badge: 'UI/UX & User Experience',
    color: '#6366f1',
    icon: '🎨',
  },
];

export default function Certificates() {
  return (
    <div className="certificates-section">
      <div className="container">
        <div className="certificates__header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic qualifications and professional certifications verified through recognized universities and learning platforms.
          </p>
        </div>

        <div className="certificates__timeline">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-item">
              <div className="cert-item__marker" style={{ borderColor: cert.color }}>
                <span className="cert-item__icon">{cert.icon}</span>
              </div>
              <div className="cert-item__card">
                <div className="cert-item__top">
                  <span className="cert-item__badge" style={{ color: cert.color, borderColor: cert.color }}>
                    {cert.badge}
                  </span>
                  <span className="cert-item__year">{cert.year}</span>
                </div>
                <h3 className="cert-item__title">{cert.title}</h3>
                <p className="cert-item__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
