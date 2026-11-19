import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Fingerprint,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
} from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import './SmartRackPrivacyPage.css';

const SECTIONS = [
  { id: 'information-we-process', num: '01', title: 'Information we process' },
  { id: 'how-we-use', num: '02', title: 'How we use information' },
  { id: 'biometric-auth', num: '03', title: 'Biometric authentication' },
  { id: 'disclosure-and-sale', num: '04', title: 'Disclosure and sale of information' },
  { id: 'retention-and-security', num: '05', title: 'Data retention and security' },
  { id: 'rights-and-choices', num: '06', title: 'Your rights and choices' },
  { id: 'childrens-privacy', num: '07', title: "Children's privacy" },
  { id: 'policy-updates', num: '08', title: 'Updates to this policy' },
  { id: 'contact-information', num: '09', title: 'Contact information' },
];

const HIGHLIGHTS = [
  {
    Icon: Fingerprint,
    title: 'On-device biometrics',
    copy: 'Face ID and Touch ID authentication are processed locally by your device OS. DCStack never receives or stores biometric templates.',
  },
  {
    Icon: Lock,
    title: 'No sale of data',
    copy: 'Personal and operational information is never sold, rented, or shared for third-party advertising or marketing.',
  },
  {
    Icon: Shield,
    title: 'Role-based access',
    copy: 'Data visibility and system controls are strictly governed by site, role, and equipment permissions with full audit logging.',
  },
];

function SmartRackPrivacyPage() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTocClick = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const headerHeight = (document.querySelector('.site-header__inner')?.getBoundingClientRect().height ?? 96) + 16;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight);
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <Container>
          <a className="privacy-hero__back" href="/smart-rack">
            <ArrowLeft size={15} />
            <span>Back to Smart Rack</span>
          </a>

          <div>
            <span className="privacy-hero__badge">
              <ShieldCheck size={14} />
              Smart Rack Monitoring
            </span>
          </div>

          <div className="privacy-hero__header">
            <h1>Privacy Policy</h1>
            <p className="privacy-hero__lead">
              DCStack provides Smart Rack Monitoring for authorized personnel and approved enterprise users. This Privacy
              Policy describes how we collect, use, protect, and retain information when you access the application and
              its connected services.
            </p>
          </div>

          <div className="privacy-hero__meta">
            <span className="privacy-meta-pill">
              <Calendar size={14} />
              Effective 22 July 2026
            </span>
            <span className="privacy-meta-pill">
              <Shield size={14} />
              Authorized Enterprise Use
            </span>
            <a className="privacy-meta-pill" href="mailto:support@dcstack.my" style={{ textDecoration: 'none' }}>
              <Mail size={14} />
              support@dcstack.my
            </a>
          </div>

          <div className="privacy-highlights">
            {HIGHLIGHTS.map(({ Icon, title, copy }) => (
              <div className="privacy-highlight-card" key={title}>
                <span className="privacy-highlight-card__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="privacy-body">
        <Container className="privacy-layout">
          <aside className="privacy-sidebar">
            <div className="privacy-toc">
              <p className="privacy-toc__title">On this page</p>
              <nav aria-label="Privacy policy sections">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`privacy-toc__link${activeId === section.id ? ' is-active' : ''}`}
                    onClick={(event) => handleTocClick(event, section.id)}
                  >
                    <span className="privacy-toc__num">{section.num}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="privacy-sidebar-card">
              <h2>Privacy inquiries</h2>
              <p>Contact our team regarding account access, data requests, or compliance matters.</p>
              <a className="privacy-sidebar-card__btn" href="mailto:support@dcstack.my">
                <Mail size={14} />
                <span>Contact Privacy Team</span>
              </a>
            </div>
          </aside>

          <article className="privacy-content">
            <section className="privacy-section" id="information-we-process">
              <div className="privacy-section__head">
                <span className="privacy-section__num">01</span>
                <h2>Information we process</h2>
              </div>
              <p>
                Depending on your account configuration, permissions, device, and connected deployment, we may process
                the following categories of information:
              </p>
              <ul className="privacy-list">
                <li>
                  <CheckCircle2 size={16} />
                  <span>
                    Account and profile information, including your username, display name, assigned site, role, and
                    access permissions.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>
                    Authentication credentials used to verify identity and authorize access. Passwords and PINs are
                    cryptographically protected and are never stored or displayed in plaintext.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>
                    Device notification tokens used solely to deliver critical operational alerts and security
                    notifications.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>
                    Operational and audit activity, including authorized door access events, alarm acknowledgments, and
                    control actions performed within the application.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>
                    Technical and diagnostic telemetry required to maintain service reliability and security, such as
                    request timestamps, application version, device platform, and error logs.
                  </span>
                </li>
              </ul>
            </section>

            <section className="privacy-section" id="how-we-use">
              <div className="privacy-section__head">
                <span className="privacy-section__num">02</span>
                <h2>How we use information</h2>
              </div>
              <p>We process this information strictly for legitimate operational and security purposes, including to:</p>
              <ul className="privacy-list">
                <li>
                  <CheckCircle2 size={16} />
                  <span>Authenticate users and enforce site-, role-, and equipment-level access controls;</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Deliver real-time monitoring, alarm notifications, remote controls, and authorized door access;</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Maintain system security, integrity, and a verifiable operational audit trail;</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Diagnose technical issues, provide user support, and improve service reliability; and</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Comply with applicable legal, contractual, and regulatory obligations.</span>
                </li>
              </ul>
            </section>

            <section className="privacy-section" id="biometric-auth">
              <div className="privacy-section__head">
                <span className="privacy-section__num">03</span>
                <h2>Biometric authentication</h2>
              </div>
              <p>
                If you enable Face ID, Touch ID, or another supported biometric method, identity verification is
                performed locally by your device operating system. Smart Rack Monitoring does not access, transmit, or
                store your biometric data or templates.
              </p>
            </section>

            <section className="privacy-section" id="disclosure-and-sale">
              <div className="privacy-section__head">
                <span className="privacy-section__num">04</span>
                <h2>Disclosure and sale of information</h2>
              </div>
              <p>
                DCStack does not sell personal information. Information may be disclosed only to authorized
                administrators, your organization, vetted service providers supporting application infrastructure, or
                competent authorities where required by law. All access is restricted on a need-to-know basis and
                governed by applicable agreements.
              </p>
            </section>

            <section className="privacy-section" id="retention-and-security">
              <div className="privacy-section__head">
                <span className="privacy-section__num">05</span>
                <h2>Data retention and security</h2>
              </div>
              <p>
                We retain information only for as long as necessary to fulfill account administration, security
                monitoring, operational auditability, customer support, contractual commitments, and legal obligations.
                We implement appropriate administrative, technical, and organizational safeguards to protect data against
                unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="privacy-section" id="rights-and-choices">
              <div className="privacy-section__head">
                <span className="privacy-section__num">06</span>
                <h2>Your rights and choices</h2>
              </div>
              <p>
                You may manage push notification permissions and biometric authentication preferences directly within your
                device settings. For requests regarding account access, correction, deletion, or privacy compliance,
                please contact your organization administrator or DCStack. Certain operational and audit records may be
                retained where required for security, contractual, or legal compliance.
              </p>
            </section>

            <section className="privacy-section" id="childrens-privacy">
              <div className="privacy-section__head">
                <span className="privacy-section__num">07</span>
                <h2>Children&apos;s privacy</h2>
              </div>
              <p>
                Smart Rack Monitoring is designed exclusively for authorized business and enterprise personnel and is
                not directed to or intended for use by children.
              </p>
            </section>

            <section className="privacy-section" id="policy-updates">
              <div className="privacy-section__head">
                <span className="privacy-section__num">08</span>
                <h2>Updates to this policy</h2>
              </div>
              <p>
                We may revise this Privacy Policy periodically to reflect updates to the application, connected services,
                or applicable legal requirements. The effective date at the top of this page indicates the most recent
                published revision.
              </p>
            </section>

            <section className="privacy-section" id="contact-information">
              <div className="privacy-section__head">
                <span className="privacy-section__num">09</span>
                <h2>Contact information</h2>
              </div>
              <p>
                If you have any questions regarding this Privacy Policy or our data handling practices, please contact
                DCStack:
              </p>

              <div className="privacy-contact-card">
                <div className="privacy-contact-item">
                  <span className="privacy-contact-item__icon" aria-hidden="true">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <span>Location</span>
                    <strong>
                      DCStack
                      <br />
                      Selangor, Malaysia
                    </strong>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.9rem' }}>
                  <div className="privacy-contact-item">
                    <span className="privacy-contact-item__icon" aria-hidden="true">
                      <Mail size={16} />
                    </span>
                    <div>
                      <span>Email</span>
                      <a href="mailto:support@dcstack.my">support@dcstack.my</a>
                    </div>
                  </div>

                  <div className="privacy-contact-item">
                    <span className="privacy-contact-item__icon" aria-hidden="true">
                      <Phone size={16} />
                    </span>
                    <div>
                      <span>Phone</span>
                      <a href="tel:+60126946907">+60 12-694 6907</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default SmartRackPrivacyPage;
