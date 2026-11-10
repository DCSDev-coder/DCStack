import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Send,
  ArrowRight
} from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import './CTA.css';

const SERVICES = [
  'Smart Rack & IoT Monitoring',
  'C2 Cafe POS & Counter Systems',
  'Mobile Ordering & Loyalty Apps',
  'Payment & Billing Automation',
  'Custom Software Development',
  'General Inquiry',
];

const CTA = () => {
  const [formData, setFormData] = useState({
    service: SERVICES[0],
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
      `Hi DCStack team! I would like to inquire about: ${formData.service}.\n` +
      (formData.name ? `Name: ${formData.name}\n` : '') +
      (formData.company ? `Company: ${formData.company}\n` : '') +
      (formData.message ? `Details: ${formData.message}` : '')
    );
    return `https://wa.me/60126946907?text=${text}`;
  };

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <Container>
        <div className="contact-wrapper">
          {/* Left Column: Contact Information */}
          <div className="contact-info">
            <p className="contact-eyebrow">Get in touch</p>
            <h2 id="cta-title" className="contact-title">Let's Discuss Your Project</h2>
            <p className="contact-lead">
              Have questions about Smart Rack monitoring, C2 Cafe POS systems, or custom software?
              Our team in Malaysia is here to assist with technical specifications, demos, and quotes.
            </p>

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

              <a href="tel:+60126946907" className="contact-item">
                <div className="contact-item__icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-item__label">Phone / WhatsApp</span>
                  <strong>+60 12-694 6907</strong>
                </div>
              </a>

              <div className="contact-item contact-item--address">
                <div className="contact-item__icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-item__label">Office</span>
                  <strong>Eco Forest, 43500 Semenyih, Selangor, Malaysia</strong>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp-block">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-btn"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
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
