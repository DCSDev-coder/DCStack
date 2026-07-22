import { Rocket } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-icon">
            <Rocket size={28} strokeWidth={2} />
          </div>
          <div className="cta-text">
            <h3 id="cta-title">We are building more projects.</h3>
            <p>Have an idea? Let's build it together.</p>
          </div>
          <a href="mailto:dcstack26@gmail.com" className="cta-button">
            Contact Us
            <span className="cta-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
