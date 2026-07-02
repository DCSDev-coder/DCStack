import { Rocket } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-icon">
            <Rocket size={28} strokeWidth={2} />
          </div>
          <div className="cta-text">
            <h3>More projects are currently in development.</h3>
            <p>Let's build the next digital solution together.</p>
          </div>
          <a href="#contact" className="cta-button">
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
