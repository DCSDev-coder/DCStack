import Container from '../../components/Container/Container.jsx';
import { CreditCard, Activity, ShieldCheck, Zap } from 'lucide-react';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';

const capabilities = [
  [
    'Multi-Rail Gateway Integration',
    'Direct API integration with Billplz, FPX online banking, DuitNow QR, and major Malaysian payment channels.',
    CreditCard,
  ],
  [
    'Sub-100ms Webhook Dispatch',
    'Instantaneous transaction confirmations and callback notifications that trigger immediate order fulfillment.',
    Zap,
  ],
  [
    'Automated Invoicing & Receipts',
    'Automatic generation and dispatch of tax-compliant digital invoices and receipts via email and messaging.',
    Activity,
  ],
  [
    'Audit-Ready Bank Reconciliation',
    'Automated ledger matching comparing settled bank deposits directly against individual sales transactions.',
    ShieldCheck,
  ],
];

function FintechPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <Container className="product-hero__inner">
          <div>
            <p className="page-eyebrow">DCStack Financial Operations & Billing</p>
            <h1>Fintech & Payment Gateway Orchestration</h1>
            <p className="product-hero__lead">
              Secure, high-reliability payment processing pipelines integrating Billplz, FPX online banking,
              and e-wallets. Designed for platforms that require instant payment verification, automated receipting,
              and frictionless daily reconciliation.
            </p>
            <div className="product-hero__actions">
              <a
                className="page-button page-button--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                Discuss Payment Integration
              </a>
              <a className="page-button page-button--secondary" href="/support">
                Visit Support Centre
              </a>
            </div>
          </div>

          <div className="product-hero__panel" aria-label="Preview of Payment Gateway Orchestration">
            <div className="product-hero__panel-copy">
              <span>Payments & Billing</span>
              <strong>Payment Gateway Orchestration</strong>
            </div>

            <div className="fintech-mockup" style={{ margin: '0.5rem 0' }}>
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
        </Container>
      </section>

      <section className="product-capabilities">
        <Container>
          <div className="page-heading">
            <p className="page-eyebrow">Financial Infrastructure</p>
            <h2>Engineered for zero-loss financial accuracy and enterprise reliability</h2>
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
            Compliant with Malaysian banking standards, encryption protocols, and verified financial webhooks.
          </p>
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="fintech-spec-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Integrations</p>
              <h2 id="fintech-spec-title">Supported Rails & Gateways</h2>
            </div>
            <p>Direct connectivity to Malaysia's most trusted payment networks.</p>
          </div>
          <div className="product-downloads__grid">
            <article>
              <span aria-hidden="true">FPX</span>
              <div>
                <h3>Billplz & FPX Online Banking</h3>
                <p>Direct multi-bank transfer rails across Maybank, CIMB, Public Bank, and all major institutions.</p>
              </div>
              <strong>Production Ready</strong>
            </article>
            <article>
              <span aria-hidden="true">QR</span>
              <div>
                <h3>DuitNow QR & E-Wallets</h3>
                <p>National QR standard supporting GrabPay, Touch 'n Go, Boost, and major banking apps.</p>
              </div>
              <strong>Production Ready</strong>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default FintechPage;
