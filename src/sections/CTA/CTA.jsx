import { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Send
} from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import './CTA.css';

const SERVICES = [
  'Smart Rack & IoT Monitoring',
  'Smart POS & Counter Systems',
  'Mobile Ordering & Loyalty Apps',
  'Payment & Billing Automation',
  'Custom Software Development',
  'General Inquiry',
];

const OFFICE_ADDRESS =
  'Data Center Specialists (M) Sdn. Bhd., No. 42-2, Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor';

const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const OFFICE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const CTA = ({ showMap = false }) => {
  const [formData, setFormData] = useState({
    service: SERVICES[0],
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`[Inquiry] ${formData.service} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone}\n` +
      `Company: ${formData.company}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:sales@dcstack.my?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi DCStack team! I would like to start a project with you.\n` +
      (formData.name ? `Name: ${formData.name}\n` : '') +
      (formData.company ? `Company: ${formData.company}\n` : '') +
      (formData.message ? `Details: ${formData.message}` : '')
    );
    return `https://wa.me/60126946907?text=${text}`;
  };

  return (
    <section
      ref={sectionRef}
      className={`cta ${isVisible ? 'is-visible' : ''}`}
      id="contact"
      aria-labelledby="cta-title"
    >
      <div className="contact-hero">
        <Container>
          <p className="page-eyebrow">Get in touch</p>
          <h1 id="cta-title">Let&apos;s Discuss Your Project</h1>
          <p className="contact-hero__lead">
            Have questions about Smart Rack monitoring, Smart POS systems, or custom software?
            Our team in Malaysia is here to assist with technical specifications, demos, and quotes.
          </p>
        </Container>
      </div>

      <Container className="contact-stage">
        <div className="contact-wrapper">
          {/* Left Column: Contact Information + Map */}
          <div className="contact-info">
            <div className="contact-details">
              <a href="mailto:sales@dcstack.my" className="contact-item">
                <div className="contact-item__icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-item__label">Email</span>
                  <strong>sales@dcstack.my</strong>
                </div>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item__icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-item__label">Phone Number</span>
                  <strong>+60 12-694 6907</strong>
                </div>
              </a>

              <a
                href={OFFICE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item__icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-item__label">Office</span>
                  <strong>Eco Forest, 43500 Semenyih, Selangor, Malaysia</strong>
                </div>
              </a>
            </div>

            {showMap && (
              <div className="contact-map-card">
                <iframe
                  title="DCStack Office Location"
                  src={OFFICE_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <CheckCircle2 size={44} />
                </div>
                <h3>Message Ready to Send!</h3>
                <p>
                  Thank you, <strong>{formData.name || 'there'}</strong>. We have opened your email client to dispatch
                  your message directly to <code>sales@dcstack.my</code>.
                </p>
                <div className="contact-success__actions">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-btn contact-btn--whatsapp"
                  >
                    <MessageSquare size={16} />
                    Also Message via WhatsApp
                  </a>
                  <button
                    type="button"
                    className="contact-btn contact-btn--ghost"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-service">I'm interested in</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+60 12 345 6789"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-company">Company / Organization</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Requirements or Questions</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-actions">
                  <button type="submit" className="contact-submit-btn">
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
