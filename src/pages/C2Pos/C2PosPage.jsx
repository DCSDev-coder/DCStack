import Container from '../../components/Container/Container.jsx';
import { Store, Layers, Printer, TrendingUp, Clock, Activity } from 'lucide-react';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';

const capabilities = [
  [
    'Rapid Touch Ordering',
    'High-speed touch counter interface designed for rush-hour flow with custom drink modifiers, add-ons, and table selections.',
    Store,
  ],
  [
    'Real-Time Stock Deduction',
    'Every beverage and pastry sold automatically deducts ingredients and alerts managers before stock depletes.',
    Layers,
  ],
  [
    'Multi-Station Printing',
    'Dispatches cup stickers to the espresso bar and paper food chits to the kitchen over ESC/POS thermal printers.',
    Printer,
  ],
  [
    'Shift Audits & Sales Reports',
    'Automatic end-of-day register reconciliation, cashier cash balancing, and real-time sales reporting by shift.',
    TrendingUp,
  ],
];

function C2PosPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <Container className="product-hero__inner">
          <div>
            <p className="page-eyebrow">DCStack Retail & F&B Technology</p>
            <h1>C2 Cafe Smart POS & Live Inventory System</h1>
            <p className="product-hero__lead">
              High-speed counter point-of-sale engineered for modern cafe and food service operations.
              Coordinates barista queue workflows, live ingredient and stock tracking, split billing,
              and daily sales reporting.
            </p>
            <div className="product-hero__actions">
              <a
                className="page-button page-button--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                Inquire About POS Setup
              </a>
              <a className="page-button page-button--secondary" href="/support">
                Visit Support Centre
              </a>
            </div>
          </div>

          <div className="product-hero__panel" aria-label="Preview of C2 Cafe Smart POS System">
            <div className="product-hero__panel-copy">
              <span>F&B & Retail POS</span>
              <strong>Cafe POS & Live Inventory</strong>
            </div>

            <div className="pos-kds-mockup" style={{ margin: '0.5rem 0' }}>
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
          <p className="product-availability">
            Currently deployed in production across active C2 Coffee & Candle retail locations in Malaysia.
          </p>
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
              <span aria-hidden="true">PRINT</span>
              <div>
                <h3>Thermal Ticket Printers</h3>
                <p>Standard ESC/POS thermal receipt printers and 80mm adhesive cup-sticker dispensers.</p>
              </div>
              <strong>Bluetooth & LAN</strong>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default C2PosPage;
