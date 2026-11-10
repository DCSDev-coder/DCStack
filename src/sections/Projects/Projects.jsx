import { useState, useRef, useEffect, useCallback } from 'react';
import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { projects } from '../../data/projects.js';
import acMonitoringPreview from '../../assets/images/Dashboard_Monitor/AC Monitoring.png';
import dashboardPreview from '../../assets/images/Dashboard_Monitor/Dashboard.png';
import systemHealthPreview from '../../assets/images/Dashboard_Monitor/System Health.png';
import mobileHomeImg from '../../assets/images/c2/mobile-home.png';
import mobileMenuImg from '../../assets/images/c2/mobile-menu.png';
import mobileRewardsImg from '../../assets/images/c2/mobile-rewards.png';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import {
  CreditCard,
  Activity,
  ArrowRight,
  Clock
} from 'lucide-react';
import './Projects.css';

function SmartRackVisual() {
  return (
    <div className="projects__visual projects__visual--rack">
      <div className="projects__visual-heading">
        <span>IoT & Telemetry</span>
        <strong>Smart Rack Monitoring Interface</strong>
      </div>
      <div className="projects__screens" aria-label="Preview of the Smart Rack Monitoring interface">
        <figure className="projects__screen projects__screen--health">
          <img src={systemHealthPreview} alt="System health overview" draggable={false} />
        </figure>
        <figure className="projects__screen projects__screen--dashboard">
          <img src={dashboardPreview} alt="Main monitoring dashboard" draggable={false} />
        </figure>
        <figure className="projects__screen projects__screen--ac">
          <img src={acMonitoringPreview} alt="Air conditioning monitoring view" draggable={false} />
        </figure>
      </div>
      <p>Live environmental telemetry, PDU switches, and touchscreen consoles.</p>
    </div>
  );
}

function RetailPosVisual() {
  return (
    <div className="projects__visual projects__visual--pos">
      <div className="projects__visual-heading">
        <span>F&B & Retail POS</span>
        <strong>Cafe POS & Live Inventory</strong>
      </div>

      <div className="pos-kds-mockup">
        <div className="pos-kds-top">
          <div className="pos-kds-stream">
            <span className="pos-pulse-dot" />
            <strong>Live Order Stream: Connected</strong>
          </div>
          <span className="pos-counter-tag">Counter #02 Active</span>
        </div>

        <div className="pos-order-card">
          <div className="pos-order-header">
            <span>Order #1084 • Dine-In (Table 04)</span>
            <span className="pos-kitchen-badge">Stock Auto-Deducted</span>
          </div>
          <div className="pos-order-items">
            <div className="pos-order-item">
              <span>2x Artisanal Cold Brew</span>
              <strong>RM 24.00</strong>
            </div>
            <div className="pos-order-item">
              <span>1x Truffle Melt Sandwich</span>
              <strong>RM 18.50</strong>
            </div>
          </div>
          <div className="pos-order-total">
            <span>Paid via Billplz QR</span>
            <strong>RM 42.50</strong>
          </div>
        </div>

        <div className="pos-kds-metrics">
          <div className="pos-metric-box">
            <Clock size={13} />
            <span>Today's Vol: <strong>214 Orders</strong></span>
          </div>
          <div className="pos-metric-box">
            <Activity size={13} />
            <span>Inventory: <strong>Live Synced</strong></span>
          </div>
        </div>
      </div>

      <p>Real-time synchronization between counter sales, live order queues, and ingredient stock tracking.</p>
    </div>
  );
}

function C2OrderingVisual() {
  return (
    <div className="projects__visual projects__visual--ordering">
      <div className="projects__visual-heading">
        <span>Customer Mobile App</span>
        <strong>C2 Coffee Ordering & Loyalty App</strong>
      </div>
      <div className="projects__screens" aria-label="Preview of C2 Coffee Mobile App">
        <figure className="projects__screen projects__screen--health">
          <img src={mobileMenuImg} alt="C2 Coffee Menu" draggable={false} />
        </figure>
        <figure className="projects__screen projects__screen--dashboard">
          <img src={mobileHomeImg} alt="C2 Coffee Home" draggable={false} />
        </figure>
        <figure className="projects__screen projects__screen--ac">
          <img src={mobileRewardsImg} alt="C2 Coffee Rewards" draggable={false} />
        </figure>
      </div>
      <p>Advance mobile pre-orders, drink modifiers, instant payment, and digital loyalty rewards.</p>
    </div>
  );
}

function FintechVisual() {
  return (
    <div className="projects__visual projects__visual--fintech">
      <div className="projects__visual-heading">
        <span>Payments & Billing</span>
        <strong>Payment Gateway Orchestration</strong>
      </div>
      <div className="fintech-mockup">
        <div className="fintech-top">
          <div className="fintech-gateway">
            <span className="fintech-pulse" />
            <strong>Billplz Gateway: Connected</strong>
          </div>
          <span className="fintech-latency">Latency: 94ms</span>
        </div>

        <div className="fintech-amount-card">
          <span>Today's Settled Volume</span>
          <h3>RM 38,450.00</h3>
          <div className="fintech-sub">
            <span className="fintech-tag">100% Reconciled</span>
            <span>128 transactions processed</span>
          </div>
        </div>

        <div className="fintech-stream">
          <div className="fintech-row">
            <CreditCard size={15} />
            <span>FPX Bank Transfer #8821</span>
            <strong>+RM 280.00</strong>
          </div>
          <div className="fintech-row">
            <Activity size={15} />
            <span>e-Invoice & Receipt Auto-Sent</span>
            <span className="fintech-badge">Instant</span>
          </div>
        </div>
      </div>
      <p>Automated checkout links, online banking integrations, and audit-ready bookkeeping sync.</p>
    </div>
  );
}

function getProjectVisual(slug) {
  switch (slug) {
    case 'smart-rack':
      return <SmartRackVisual />;
    case 'c2-pos-system':
      return <RetailPosVisual />;
    case 'c2-ordering-app':
      return <C2OrderingVisual />;
    case 'fintech-payments':
      return <FintechVisual />;
    default:
      return <SmartRackVisual />;
  }
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const sliderRef = useRef(null);

  // Mouse drag physics state refs
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    hasMoved: false,
    rafId: null,
  });

  const cancelMomentum = () => {
    if (dragRef.current.rafId) {
      cancelAnimationFrame(dragRef.current.rafId);
      dragRef.current.rafId = null;
    }
  };

  const handleLinkClick = (event, href) => {
    // If user dragged, prevent clicking the link
    if (dragRef.current.hasMoved) {
      event.preventDefault();
      return;
    }

    if (href.startsWith('#')) {
      event.preventDefault();
      navigateToSection(event, href.slice(1));
    }
  };

  const scrollToIndex = useCallback((index) => {
    if (!sliderRef.current) return;
    cancelMomentum();
    const cards = sliderRef.current.children;
    if (cards[index]) {
      sliderRef.current.style.scrollBehavior = 'smooth';
      sliderRef.current.style.scrollSnapType = 'x mandatory';
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  }, []);

  const snapToNearestCard = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.style.scrollBehavior = 'smooth';
    slider.style.scrollSnapType = 'x mandatory';

    const cards = Array.from(slider.children);
    const sliderScroll = slider.scrollLeft;

    let closestIdx = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - sliderScroll);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
    cards[closestIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, []);

  // 1:1 Ultra-smooth Drag-to-Scroll Handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0 || !sliderRef.current) return;
    cancelMomentum();

    const d = dragRef.current;
    d.isDown = true;
    d.hasMoved = false;
    d.startX = e.pageX;
    d.scrollLeft = sliderRef.current.scrollLeft;
    d.lastX = e.pageX;
    d.lastTime = performance.now();
    d.velocity = 0;

    sliderRef.current.style.scrollBehavior = 'auto';
    sliderRef.current.style.scrollSnapType = 'none';
    setIsGrabbing(true);
  };

  const handleMouseMove = (e) => {
    const d = dragRef.current;
    if (!d.isDown || !sliderRef.current) return;

    const dx = e.pageX - d.startX;
    if (Math.abs(dx) > 4) {
      d.hasMoved = true;
    }

    sliderRef.current.scrollLeft = d.scrollLeft - dx;

    const now = performance.now();
    const dt = now - d.lastTime;
    if (dt > 8) {
      d.velocity = (e.pageX - d.lastX) / dt;
      d.lastX = e.pageX;
      d.lastTime = now;
    }
  };

  const handleMouseUp = () => {
    const d = dragRef.current;
    if (!d.isDown) return;
    d.isDown = false;
    setIsGrabbing(false);

    const slider = sliderRef.current;
    if (!slider) return;

    if (Math.abs(d.velocity) > 0.15) {
      let speed = d.velocity * 16;
      const friction = 0.94;

      const momentumStep = () => {
        speed *= friction;
        slider.scrollLeft -= speed;

        if (Math.abs(speed) > 0.6) {
          d.rafId = requestAnimationFrame(momentumStep);
        } else {
          snapToNearestCard();
        }
      };
      d.rafId = requestAnimationFrame(momentumStep);
    } else {
      snapToNearestCard();
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (dragRef.current.isDown) {
        handleMouseUp();
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      cancelMomentum();
    };
  }, [snapToNearestCard]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sliderScroll = slider.scrollLeft;
        const cards = Array.from(slider.children);
        let closestIdx = 0;
        let minDiff = Infinity;
        cards.forEach((card, idx) => {
          const diff = Math.abs(card.offsetLeft - sliderScroll);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        setActiveIndex(closestIdx);
      }, 50);
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <Container>
        <div className="projects__header">
          <SectionHeading
            eyebrow="Proven Solutions & Products"
            id="projects-title"
            title="Engineered for Reliability and Scale"
          />
        </div>

        {/* Dynamic Drag-to-Scroll Showcase */}
        <div
          className={`projects__slider ${isGrabbing ? 'is-grabbing' : ''}`}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          tabIndex={0}
          aria-label="Projects drag-and-scroll showcase"
        >
          {projects.map((project, idx) => {
            const visual = getProjectVisual(project.slug);
            return (
              <article
                className={`projects__card ${activeIndex === idx ? 'is-active' : ''} ${!visual ? 'projects__card--no-visual' : ''}`}
                key={project.slug}
              >
                <div className="projects__content">
                  <div className="projects__meta">
                    <span className="projects__meta-category">{project.category}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="projects__actions">
                    <a
                      className="projects__primary-link"
                      href={project.detailHref}
                      onClick={(e) => handleLinkClick(e, project.detailHref)}
                    >
                      View Project Details
                      <ArrowRight size={16} />
                    </a>
                    {project.supportHref && project.supportHref !== '#contact' && (
                      <a
                        href={project.supportHref}
                        onClick={(e) => handleLinkClick(e, project.supportHref)}
                      >
                        Support & Docs
                      </a>
                    )}
                  </div>
                </div>
                {visual}
              </article>
            );
          })}
        </div>

        {/* Clean Progress Dots */}
        <div className="projects__dots" aria-hidden="true">
          {projects.map((project, idx) => (
            <button
              type="button"
              key={project.slug}
              className={`projects__dot ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to ${project.name}`}
            />
          ))}
        </div>

        <div className="projects__support-strip">
          <div>
            <span>Already using a DCStack product?</span>
            <strong>Access technical guides, downloads, and customer support.</strong>
          </div>
          <a href="/support">Visit Support Centre</a>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
