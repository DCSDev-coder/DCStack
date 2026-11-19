import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container.jsx';
import { ArrowLeft, ArrowRight, Store, Layers, SlidersHorizontal, TrendingUp } from 'lucide-react';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';
import '../C2Ordering/C2OrderingPage.css';

const CRUMB_LABEL = 'Smart POS System';

const capabilities = [
  [
    'Barista Workflow Coordination',
    'High-speed touch counter interface designed to keep barista order queues organized and moving smoothly.',
    Store,
  ],
  [
    'Real-Time Stock Tracking',
    'Every beverage and item sold automatically updates ingredient and inventory counts before stock runs low.',
    Layers,
  ],
  [
    'Menu & Price Adjustments',
    'Easily update menu items, drink options, and pricing in real time from the management console.',
    SlidersHorizontal,
  ],
  [
    'Sales Monitoring & Reports',
    'Generate daily sales reports, monitor order volume, and review shift performance at a glance.',
    TrendingUp,
  ],
];

function C2PosPage() {
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
              DCSTACK Retail &amp; F&amp;B Technology &middot; Production
            </p>
            <h1>Smart POS &amp; Live Inventory System</h1>
            <p className="c2-page-header__lead">
              High-speed counter point-of-sale engineered for{' '}
              <strong>modern cafe and food service operations</strong>. Coordinates barista queue workflows,
              live ingredient and stock tracking, split billing, and daily sales reporting.
            </p>

            <div className="c2-page-header__actions">
              <a
                className="c2-page-header__btn c2-page-header__btn--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                <span>Inquire About POS Setup</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="c2-page-header__btn c2-page-header__btn--ghost" href="/projects">
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="product-capabilities">
        <Container>
          <div className="page-heading">
            <p className="page-eyebrow">Operational Highlights</p>
            <h2>Engineered to keep busy counters fast, accurate, and organized</h2>
          </div>
          <div className="product-capabilities__grid">
            {capabilities.map(([title, description, Icon], index) => (
              <article key={title}>
                <div className="product-capabilities__bg-icon">
                  <Icon size={160} strokeWidth={1} />
                </div>
                <div className="product-capabilities__content">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="pos-spec-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Hardware & Deployment</p>
              <h2 id="pos-spec-title">Hardware Compatibility</h2>
            </div>
            <p>Built to run on reliable, cost-effective retail hardware without vendor lock-in.</p>
          </div>
          <div className="product-downloads__grid">
            <article>
              <span aria-hidden="true">POS</span>
              <div>
                <h3>Touchscreen Terminals</h3>
                <p>Compatible with commercial touchscreen POS registers, iPads, and Android tablets.</p>
              </div>
              <strong>Ready to Deploy</strong>
            </article>
            <article>
              <span aria-hidden="true">SYNC</span>
              <div>
                <h3>Cloud Sales &amp; Menu Sync</h3>
                <p>Instant menu, price, and daily sales synchronization across counter tablets and manager reports.</p>
              </div>
              <strong>Real-Time Cloud</strong>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default C2PosPage;
