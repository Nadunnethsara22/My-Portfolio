import React from 'react';
import './Footer.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <button 
            type="button" 
            onClick={() => scrollTo('home')} 
            className="footer__logo"
          >
            Nadun<span className="footer__logo-dot">.</span>
          </button>
          <p className="footer__tagline">
            Software Engineer & Mobile Application Developer. Dedicated to crafting scalable web systems, intuitive mobile apps, and IoT integrations.
          </p>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__col-title">Navigation</h4>
          <ul className="footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="footer__link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social-group">
          <h4 className="footer__col-title">Connect</h4>
          <div className="footer__social-links">
            <a href="https://github.com/Nadunnethsara22" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nadun-nethsara-85629b360" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:nethsaranadun802@gmail.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Nadun Nethsara. Built with React & modern CSS.</p>
          <button 
            type="button" 
            onClick={() => scrollTo('home')} 
            className="footer__back-to-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
