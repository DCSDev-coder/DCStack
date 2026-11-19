import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Lock,
  Monitor,
  Thermometer,
  Wind,
  Zap,
} from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import dashboardPreview from '../../assets/images/Dashboard_Monitor/Dashboard.webp';
import systemHealthPreview from '../../assets/images/Dashboard_Monitor/System Health.webp';
import acMonitoringPreview from '../../assets/images/Dashboard_Monitor/AC Monitoring.webp';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import './SmartRackPages.css';
import '../C2Ordering/C2OrderingPage.css';

const CRUMB_LABEL = 'Smart Rack Monitoring';

const SCREENS = [
  { id: 'dashboard', src: dashboardPreview, alt: 'Smart Rack Monitoring Dashboard' },
  { id: 'health', src: systemHealthPreview, alt: 'Smart Rack System Health Overview' },
  { id: 'ac', src: acMonitoringPreview, alt: 'Smart Rack AC Monitoring View' },
];

const LEFT_FEATURES = [
  {
    Icon: Thermometer,
    title: 'Live Rack Telemetry',
    subtitle: 'Track temperature, humidity & sensor thresholds.',
    accent: 'green',
    screenIndex: 0,
    enterDelay: '80ms',
    floatDelay: '0s',
  },
  {
    Icon: Monitor,
    title: 'On-Site Console Display',
    subtitle: 'Clean touchscreen layout for fast walk-up checks.',
    accent: 'orange',
    screenIndex: 1,
    enterDelay: '180ms',
    floatDelay: '0.8s',
  },
  {
    Icon: Zap,
    title: 'Remote PDU Control',
    subtitle: 'Manage power outlets and rack loads securely.',
    accent: 'green',
    screenIndex: 0,
    enterDelay: '280ms',
    floatDelay: '1.6s',
  },
];

const RIGHT_FEATURES = [
  {
    Icon: Wind,
    title: 'AC & Cooling Health',
    subtitle: 'Monitor precision cooling status and fault alerts.',
    accent: 'orange',
    screenIndex: 2,
    enterDelay: '130ms',
    floatDelay: '0.4s',
  },
  {
    Icon: Lock,
    title: 'Role-Scoped Access',
    subtitle: 'Only approved personnel can use sensitive controls.',
    accent: 'green',
    screenIndex: 1,
    enterDelay: '230ms',
    floatDelay: '1.2s',
  },
  {
    Icon: Bell,
    title: 'Instant Mobile Alerts',
    subtitle: 'Real-time push alerts for alarms and door access.',
    accent: 'orange',
    screenIndex: 0,
    enterDelay: '330ms',
    floatDelay: '2s',
  },
];

function SmartRackPage() {
  const orbitRef = useRef(null);
  const [isOrbitVisible, setIsOrbitVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setTypedLength(CRUMB_LABEL.length);
      setIsTypingDone(true);
      return undefined;
    }

    setTypedLength(0);
    setIsTypingDone(false);

    const intervalId = window.setInterval(() => {
      setTypedLength((prev) => {
        if (prev + 1 >= CRUMB_LABEL.length) {
          window.clearInterval(intervalId);
          setIsTypingDone(true);
          return CRUMB_LABEL.length;
        }
        return prev + 1;
      });
    }, 26);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const node = orbitRef.current;
    if (!node) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsOrbitVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOrbitVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % SCREENS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const renderCard = (item) => {
    const { Icon, title, subtitle, accent, screenIndex, enterDelay, floatDelay } = item;
    return (
      <button
        key={title}
        type="button"
        className={`c2-orbit__card c2-orbit__card--${accent}${activeScreen === screenIndex ? ' is-active' : ''}`}
        style={{ '--enter-delay': enterDelay, '--float-delay': floatDelay }}
        onClick={() => setActiveScreen(screenIndex)}
      >
        <span className="c2-orbit__icon" aria-hidden="true">
          <Icon size={17} strokeWidth={2.2} />
        </span>
        <span className="c2-orbit__card-copy">
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </span>
      </button>
    );
  };

  return (
    <div className="product-page">
      <section className="c2-page-header">
        <Container>
          <nav className="c2-page-header__crumb" aria-label="Breadcrumb">
            <a href="/projects" className="c2-page-header__back">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Back to Projects</span>
            </a>
            <span className="c2-page-header__sep" aria-hidden="true">/</span>
            <span className="c2-page-header__current" aria-label={CRUMB_LABEL}>
              {CRUMB_LABEL.slice(0, typedLength)}
              <span className={`c2-page-header__cursor${isTypingDone ? ' is-done' : ''}`} aria-hidden="true" />
            </span>
          </nav>

          <div className="c2-page-header__inner">
            <p className="c2-page-header__eyebrow">
              DCSTACK Smart Infrastructure &middot; Live Deployment
            </p>
            <h1>Smart Rack Monitoring: On-Site and On the Go</h1>
            <p className="c2-page-header__lead">
              Environmental and power telemetry for server racks and data centres, built for{' '}
              <strong>approved engineering teams</strong> across the touchscreen console and mobile app.
            </p>

            <div className="c2-page-header__actions">
              <a
                className="c2-page-header__btn c2-page-header__btn--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                <span>Contact DCStack</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="c2-page-header__btn c2-page-header__btn--ghost" href="/smart-rack/privacy">
                <span>Privacy Policy</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={orbitRef}
        className={`c2-orbit${isOrbitVisible ? ' is-visible' : ''}`}
        aria-labelledby="rack-experience-title"
      >
        <Container>
          <div className="c2-orbit__header">
            <p className="c2-orbit__eyebrow">Where You Can Use It</p>
            <h2 id="rack-experience-title">A clear view on the rack display and your phone</h2>
            <p>
              Real-time infrastructure visibility and secure remote controls, synchronized across every deployment.
            </p>
          </div>

          <div className="c2-orbit__stage">
            <div className="c2-orbit__ring" aria-hidden="true" />

            <div className="c2-orbit__col c2-orbit__col--left">
              {LEFT_FEATURES.map(renderCard)}
            </div>

            <div className="c2-orbit__phone-wrap">
              <div className="c2-orbit__phone-glow" aria-hidden="true" />
              <div className="c2-orbit__phone">
                <div className="c2-orbit__screen">
                  <div className="c2-orbit__notch" aria-hidden="true" />
                  {SCREENS.map((screen, index) => (
                    <img
                      key={screen.id}
                      src={screen.src}
                      alt={screen.alt}
                      className={activeScreen === index ? 'is-active' : undefined}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="c2-orbit__col c2-orbit__col--right">
              {RIGHT_FEATURES.map(renderCard)}
            </div>
          </div>
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="product-downloads-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Mobile App</p>
              <h2 id="product-downloads-title">Get Smart Rack Monitoring</h2>
            </div>
            <p>Available now on iPhone via the Apple App Store, with Android support in preparation.</p>
          </div>
          <div className="product-downloads__grid">
            <article className="product-download-card is-live">
              <span aria-hidden="true" className="product-download-icon product-download-icon--apple">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.32c.67-.81 1.12-1.94 1-3.07-.96.04-2.13.64-2.82 1.45-.61.7-.115 1.85-.99 2.96 1.07.08 2.15-.53 2.81-1.34z" />
                </svg>
              </span>
              <div>
                <h3>DCS Smart Rack Monitoring</h3>
                <p>Monitor rack temperature, humidity, PDU switches, and alerts on iPhone.</p>
              </div>
              <a
                href="https://apps.apple.com/my/app/dcs-smart-rack-monitoring/id6788949085"
                target="_blank"
                rel="noreferrer"
                className="product-download-btn"
              >
                <span>App Store</span>
                <ArrowUpRight size={15} />
              </a>
            </article>
            <article className="product-download-card">
              <span aria-hidden="true" className="product-download-icon product-download-icon--play">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#4285F4" d="M3.61 1.814L13.793 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.334V3.148c0-.517.224-.998.61-1.334z" />
                  <path fill="#34A853" d="M17.204 8.59L13.793 12 3.61 1.814c.386-.334.93-.43 1.437-.15L17.204 8.59z" />
                  <path fill="#FBBC05" d="M20.36 10.39c1.12.638 1.12 2.582 0 3.22l-3.156 1.8-3.411-3.41 3.411-3.41 3.156 1.8z" />
                  <path fill="#EA4335" d="M17.204 15.41L5.047 22.336c-.507.28-1.051.184-1.437-.15L13.793 12l3.411 3.41z" />
                </svg>
              </span>
              <div>
                <h3>Download for Android</h3>
                <p>The official Google Play &amp; APK release is currently being prepared.</p>
              </div>
              <strong>Coming soon</strong>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SmartRackPage;
