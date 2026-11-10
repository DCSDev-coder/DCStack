import Container from '../../components/Container/Container.jsx';
import { Smartphone, Sparkles, Award, CreditCard } from 'lucide-react';
import mobileHomeImg from '../../assets/images/c2/mobile-home.png';
import mobileMenuImg from '../../assets/images/c2/mobile-menu.png';
import mobileRewardsImg from '../../assets/images/c2/mobile-rewards.png';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';

const capabilities = [
  [
    'Advance Mobile Pre-Orders',
    'Patrons can order and pay ahead before arriving at the cafe, cutting queue wait times during morning rush hours.',
    Smartphone,
  ],
  [
    'Live Drink Customization',
    'Full customization of coffee beans, sweetness percentages, milk alternatives (oat, dairy), and extra espresso shots.',
    Sparkles,
  ],
  [
    'Tiered Loyalty & Rewards',
    'Automated point collection, digital stamp cards, and membership tier upgrades for repeat customer retention.',
    Award,
  ],
  [
    'Instant Cashless Checkout',
    'Frictionless checkout powered by Malaysian online banking (FPX), DuitNow QR, and integrated e-wallet gateways.',
    CreditCard,
  ],
];

function C2OrderingPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <Container className="product-hero__inner">
          <div>
            <p className="page-eyebrow">DCStack Mobile Applications & Loyalty</p>
            <h1>C2 Cafe Mobile Ordering & Loyalty Platform</h1>
            <p className="product-hero__lead">
              A bespoke customer-facing mobile application designed for C2 Coffee & Candle.
              Empowers patrons to skip counter queues, customize their drinks, collect membership stamps,
              and checkout instantly.
            </p>
            <div className="product-hero__actions">
              <a
                className="page-button page-button--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                Inquire About Custom Apps
              </a>
              <a className="page-button page-button--secondary" href="/support">
                Visit Support Centre
              </a>
            </div>
          </div>

          <div className="product-hero__panel" aria-label="Preview of C2 Cafe Mobile Ordering App">
            <div className="product-hero__panel-copy">
              <span>Customer Mobile App</span>
              <strong>C2 Coffee Ordering & Loyalty</strong>
            </div>

            <div className="projects__screens" style={{ margin: '1rem 0', minHeight: '270px' }} aria-hidden="true">
              <figure className="projects__screen projects__screen--health">
                <img src={mobileMenuImg} alt="C2 Menu" draggable={false} />
              </figure>
              <figure className="projects__screen projects__screen--dashboard">
                <img src={mobileHomeImg} alt="C2 Home" draggable={false} />
              </figure>
              <figure className="projects__screen projects__screen--ac">
                <img src={mobileRewardsImg} alt="C2 Rewards" draggable={false} />
              </figure>
            </div>

            <p>Advance mobile pre-orders, drink modifiers, instant payment, and digital loyalty rewards.</p>
          </div>
        </Container>
      </section>

      <section className="product-capabilities">
        <Container>
          <div className="page-heading">
            <p className="page-eyebrow">Customer Experience</p>
            <h2>Built to elevate brand affinity and maximize repeat visits</h2>
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
            Built natively for iOS and Android, directly synchronized with C2 Cafe counter terminals.
          </p>
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
