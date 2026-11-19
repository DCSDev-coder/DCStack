import { useState, useRef, useEffect, useCallback } from 'react';
import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import {
  Cpu,
  Smartphone,
  Store,
  Gift,
  CreditCard,
  BarChart3
} from 'lucide-react';
import './WhatWeBuild.css';

const services = [
  {
    Icon: Cpu,
    title: 'Smart Infrastructure & IoT',
    body: 'Server rack telemetry, environmental sensors, PDU power controls, and on-site touchscreen consoles.',
    color: '#16a34a',
  },
  {
    Icon: Store,
    title: 'Cafe POS & Inventory Systems',
    body: 'Barista workflow coordination, real-time stock tracking, menu and price adjustments, and automated sales reports.',
    color: '#f97316',
  },
  {
    Icon: Smartphone,
    title: 'Custom Mobile Apps',
    body: 'High-performance iOS and Android applications built for customers, staff workflows, and on-the-go management.',
    color: '#1e3a8a',
  },
  {
    Icon: Gift,
    title: 'Customer Loyalty & Rewards',
    body: 'Digital member wallets, punch cards, discount vouchers, and automated reward tier engines.',
    color: '#0284c7',
  },
  {
    Icon: CreditCard,
    title: 'Payments & Billing Automation',
    body: 'Billplz, FPX and DuitNow QR integrations, automated e-invoices, and audit-ready bookkeeping reconciliation.',
    color: '#059669',
  },
  {
    Icon: BarChart3,
    title: 'Operations Dashboards',
    body: 'Real-time telemetry, role-based admin panels, and operational reporting tailored to your team’s procedures.',
    color: '#7c3aed',
  },
];

const STACK_OFFSETS = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: -14, y: 10, rotate: -2.2, scale: 0.99 },
  { x: 16, y: 18, rotate: 2.4, scale: 0.98 },
  { x: -26, y: 26, rotate: -4.2, scale: 0.97 },
  { x: 28, y: 34, rotate: 4.4, scale: 0.96 },
  { x: 0, y: 44, rotate: -1.2, scale: 0.95 },
];

function WhatWeBuild() {
  const [isSpread, setIsSpread] = useState(false);
  const [cardTransforms, setCardTransforms] = useState([]);
  const [gridHeights, setGridHeights] = useState({ stacked: null, spread: null });
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  const computeLayout = useCallback(() => {
    const gridEl = gridRef.current;
    const firstCard = cardRefs.current[0];
    if (!gridEl || !firstCard) return;

    const gridCenterX = gridEl.clientWidth / 2;
    const stackCenterY = firstCard.offsetTop + firstCard.offsetHeight / 2;

    const transforms = services.map((_, index) => {
      const cardEl = cardRefs.current[index];
      if (!cardEl) return 'translate3d(0, 0, 0)';

      const cardCenterX = cardEl.offsetLeft + cardEl.offsetWidth / 2;
      const cardCenterY = cardEl.offsetTop + cardEl.offsetHeight / 2;
      const deck = STACK_OFFSETS[index] || STACK_OFFSETS[STACK_OFFSETS.length - 1];

      const dx = gridCenterX - cardCenterX + deck.x;
      const dy = stackCenterY - cardCenterY + deck.y;

      return `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) rotate(${deck.rotate}deg) scale(${deck.scale})`;
    });

    const lastCard = cardRefs.current[services.length - 1];
    const spreadHeight = lastCard ? lastCard.offsetTop + lastCard.offsetHeight : gridEl.scrollHeight;
    const stackedHeight = firstCard.offsetHeight + 52;

    setCardTransforms(transforms);
    setGridHeights({ stacked: stackedHeight, spread: spreadHeight });
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      setIsSpread(true);
      return undefined;
    }

    computeLayout();

    const resizeObserver = new ResizeObserver(() => {
      computeLayout();
    });

    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [computeLayout]);

  useEffect(() => {
    if (isSpread) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return undefined;

    let rafId = 0;

    const checkScroll = () => {
      rafId = 0;
      const gridEl = gridRef.current;
      if (!gridEl) return;

      const rect = gridEl.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.34) {
        setIsSpread(true);
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSpread]);

  const handleStackKeyDown = (event) => {
    if (!isSpread && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setIsSpread(true);
    }
  };

  const activeHeight = isSpread ? gridHeights.spread : gridHeights.stacked;

  return (
    <section className="section build" id="build" aria-labelledby="build-title">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          id="build-title"
          title="Software & Hardware Systems Tailored to Real Operations"
        />

        <div
          ref={gridRef}
          className={`build__grid ${isSpread ? 'is-spread' : 'is-stacked'}`}
          style={activeHeight ? { height: `${activeHeight}px` } : undefined}
        >
          {services.map((service, index) => {
            const isTopCard = index === 0;
            const stackedTransform = cardTransforms[index];

            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`build-card ${isTopCard ? 'build-card--featured' : ''}`}
                style={{
                  zIndex: services.length - index,
                  transform: isSpread ? 'translate3d(0, 0, 0) rotate(0deg) scale(1)' : stackedTransform,
                  transitionDelay: isSpread ? `${index * 35}ms` : `${(services.length - 1 - index) * 20}ms`,
                }}
                onClick={!isSpread ? () => setIsSpread(true) : undefined}
                onKeyDown={!isSpread && isTopCard ? handleStackKeyDown : undefined}
                role={!isSpread && isTopCard ? 'button' : undefined}
                tabIndex={!isSpread && isTopCard ? 0 : undefined}
                aria-label={!isSpread && isTopCard ? 'Smart Infrastructure & IoT: click to spread all 6 capabilities' : undefined}
              >
                <div
                  className="build-card__icon-wrapper"
                  style={{ color: service.color, borderColor: service.color + '40', background: service.color + '10' }}
                >
                  <service.Icon strokeWidth={1.75} size={28} />
                </div>
                <h3 className="build-card__title">{service.title}</h3>
                <p className="build-card__body">{service.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhatWeBuild;
