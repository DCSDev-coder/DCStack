import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Bell, Clock, CreditCard, Gift, SlidersHorizontal } from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import mobileHomeImg from '../../assets/images/c2/home.jpeg';
import mobileMenuImg from '../../assets/images/c2/menu.jpeg';
import mobileRewardsImg from '../../assets/images/c2/rewards.jpeg';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';
import './C2OrderingPage.css';

const SCREENS = [
  { id: 'home', src: mobileHomeImg, alt: 'C2 Coffee App Home Screen' },
  { id: 'menu', src: mobileMenuImg, alt: 'C2 Coffee App Menu & Customization' },
  { id: 'rewards', src: mobileRewardsImg, alt: 'C2 Coffee App Loyalty & Rewards' },
];

const LEFT_EXPERIENCE = [
  {
    Icon: Clock,
    title: 'Skip the Counter Queue',
    subtitle: 'Order ahead and pick up fresh on arrival.',
    accent: 'green',
    screenIndex: 0,
    enterDelay: '80ms',
    floatDelay: '0s',
  },
  {
    Icon: SlidersHorizontal,
    title: 'Drink Customization',
    subtitle: 'Choose beans, milk, ice & sweetness levels.',
    accent: 'orange',
    screenIndex: 1,
    enterDelay: '180ms',
    floatDelay: '0.8s',
  },
  {
    Icon: CreditCard,
    title: 'Instant Cashless Pay',
    subtitle: 'One-tap checkout with saved preferences.',
    accent: 'green',
    screenIndex: 1,
    enterDelay: '280ms',
    floatDelay: '1.6s',
  },
];

const RIGHT_EXPERIENCE = [
  {
    Icon: Award,
    title: 'Loyalty & Stamp Tiers',
    subtitle: 'Collect stamps & unlock member perks.',
    accent: 'orange',
    screenIndex: 2,
    enterDelay: '130ms',
    floatDelay: '0.4s',
  },
  {
    Icon: Gift,
    title: 'Digital Gift Cards',
    subtitle: 'Send coffee vouchers to friends in-app.',
    accent: 'green',
    screenIndex: 2,
    enterDelay: '230ms',
    floatDelay: '1.2s',
  },
  {
    Icon: Bell,
    title: 'Live Order Updates',
    subtitle: 'Real-time prep & pickup notifications.',
    accent: 'orange',
    screenIndex: 0,
    enterDelay: '330ms',
    floatDelay: '2s',
  },
];

const CRUMB_LABEL = 'Online Ordering & Loyalty';

function C2OrderingPage() {
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
              DCSTACK Mobile Applications &amp; Loyalty &middot; Client Showcase
            </p>
            <h1>C2 Coffee App: Mobile Ordering &amp; Loyalty</h1>
            <p className="c2-page-header__lead">
              A bespoke customer-facing mobile application for <strong>C2 Coffee &amp; Candle</strong>, built for
              queue-free pre-orders, visual drink customization, and instant Bean Stamp rewards.
            </p>

            <div className="c2-page-header__actions">
              <a
                className="c2-page-header__btn c2-page-header__btn--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                <span>Inquire About Custom Apps</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="c2-page-header__btn c2-page-header__btn--ghost" href="/projects">
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={orbitRef}
        className={`c2-orbit${isOrbitVisible ? ' is-visible' : ''}`}
        aria-labelledby="c2-experience-title"
      >
        <Container>
          <div className="c2-orbit__header">
            <p className="c2-orbit__eyebrow">Customer Experience</p>
            <h2 id="c2-experience-title">Built to elevate brand affinity and maximize repeat visits</h2>
            <p>
              Every touchpoint inside the C2 Coffee app is crafted around speed, personalization, and rewarding
              loyalty.
            </p>
          </div>

          <div className="c2-orbit__stage">
            <div className="c2-orbit__ring" aria-hidden="true" />

            <div className="c2-orbit__col c2-orbit__col--left">
              {LEFT_EXPERIENCE.map(renderCard)}
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
              {RIGHT_EXPERIENCE.map(renderCard)}
            </div>
          </div>
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="app-downloads-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Mobile App Availability</p>
              <h2 id="app-downloads-title">Available on iOS & Android</h2>
            </div>
            <p>Designed for customer convenience across mobile operating systems.</p>
          </div>
          <div className="product-downloads__grid">
            <article>
              <span aria-hidden="true">iOS</span>
              <div>
                <h3>Apple App Store</h3>
                <p>Native iOS app for iPhone with Apple Pay and notification support.</p>
              </div>
              <strong>Active Production</strong>
            </article>
            <article>
              <span aria-hidden="true">APK</span>
              <div>
                <h3>Google Play Store</h3>
                <p>Optimized Android app with instant push notifications and fast checkout.</p>
              </div>
              <strong>Active Production</strong>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default C2OrderingPage;
