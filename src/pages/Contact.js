import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }
    const mailtoLink = `mailto:nethsaranadun802@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      title: 'Email',
      value: 'nethsaranadun802@gmail.com',
      href: 'mailto:nethsaranadun802@gmail.com',
      sub: 'Direct Inbox',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      value: '+94 76 388 6139',
      href: 'tel:+94763886139',
      sub: 'Call / WhatsApp',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'Thanamalwila / Moratuwa, Sri Lanka',
      href: null,
      sub: 'Open to Remote / On-Site',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: 'GitHub',
      value: 'github.com/Nadunnethsara22',
      href: 'https://github.com/Nadunnethsara22',
      sub: 'Repositories & Code',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      title: 'LinkedIn',
      value: 'nadun-nethsara',
      href: 'https://www.linkedin.com/in/nadun-nethsara-85629b360',
      sub: 'Professional Network',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact__header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I am actively looking for software engineering internships and collaborative opportunities. Feel free to reach out directly.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Details */}
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Channels</h3>
            <div className="contact__cards-list">
              {contactCards.map((c, i) => (
                <div key={i} className="contact-card">
                  <span className="contact-card__icon">{c.icon}</span>
                  <div className="contact-card__details">
                    <span className="contact-card__title">{c.title}</span>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card__value contact-card__link">
                        {c.value}
                      </a>
                    ) : (
                      <span className="contact-card__value">{c.value}</span>
                    )}
                    <span className="contact-card__sub">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__field">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Hi Nadun, I came across your portfolio..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status && <div className="contact__status">{status}</div>}

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
