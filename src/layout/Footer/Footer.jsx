import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import './Footer.css';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'All Projects', href: '/projects' },
      { label: 'Capabilities', href: '/#build' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Smart Rack Monitoring', href: '/smart-rack' },
      { label: 'Smart POS System', href: '/c2-pos' },
      { label: 'Online Ordering & Loyalty', href: '/c2-ordering' },
      { label: 'Digital Document Platform', href: '/fintech-payments' },
    ],
  },
  {
    title: 'Sectors',
    links: [
      { label: 'Smart Infrastructure', href: '/#industries' },
      { label: 'Enterprise Operations', href: '/#industries' },
      { label: 'Retail & F&B', href: '/#industries' },
      { label: 'Digital Services', href: '/#industries' },
      { label: 'Financial Workflows', href: '/#industries' },
    ],
  },
];

const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Selangor, Malaysia'
)}`;

const WHATSAPP_URL = `https://wa.me/60126946907?text=${encodeURIComponent(
  'Hi DCStack team! I would like to start a project with you.'
)}`;

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return undefined;

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
      { threshold: 0.12 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const renderLink = (link) => {
    const isSectionLink = link.href.startsWith('/#');
    const sectionId = isSectionLink ? link.href.slice(2) : null;

    return (
      <a
        href={isSectionLink ? '/' : link.href}
        onClick={isSectionLink ? (event) => navigateToSection(event, sectionId) : undefined}
      >
        {link.label}
      </a>
    );
  };

  return (
    <footer ref={footerRef} className={`site-footer ${isVisible ? 'is-visible' : ''}`}>
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <a
            href="/"
            aria-label="DCStack home"
            className="site-footer__logo-wrapper"
            onClick={(event) => navigateToSection(event, 'top')}
          >
            <BrandLogo tone="dark" withSubtitle={true} />
          </a>
          <p>
            Full-stack software and smart infrastructure engineered for clarity, reliability, and scale.
          </p>
        </div>

        {footerGroups.map((group, index) => (
          <div
            className="site-footer__group"
            key={group.title}
            style={{ '--col-index': index + 1 }}
          >
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="site-footer__group site-footer__connect" style={{ '--col-index': 4 }}>
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <a href="mailto:sales@dcstack.my" className="site-footer__contact-link">
                <Mail size={15} aria-hidden="true" />
                <span>sales@dcstack.my</span>
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="site-footer__contact-link">
                <Phone size={15} aria-hidden="true" />
                <span>+60 12-694 6907</span>
              </a>
            </li>
            <li>
              <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer" className="site-footer__contact-link">
                <MapPin size={15} aria-hidden="true" />
                <span>Selangor, Malaysia</span>
              </a>
            </li>
            <li>
              <a href="/smart-rack/privacy" className="site-footer__contact-link">
                <ShieldCheck size={15} aria-hidden="true" />
                <span>Smart Rack Privacy</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="site-footer__bottom">
        <Container className="site-footer__bottom-inner">
          <p>&copy; 2026 DCStack. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
