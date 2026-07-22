import Container from '../../components/Container/Container.jsx';
import dashboardPreview from '../../assets/images/Dashboard_Monitor/Dashboard.png';
import systemHealthPreview from '../../assets/images/Dashboard_Monitor/System Health.png';
import './SmartRackPages.css';

const capabilities = [
  ['One clear view', 'See important rack information in one place on the smart rack display or mobile app.'],
  ['Modern display', 'The on-site display uses a cleaner layout that is easier to read and use.'],
  ['Secure controls', 'Only approved users can use sensitive controls.'],
  ['Monitor anywhere', 'Check rack activity from the on-site display or a supported mobile device.'],
];

function SmartRackPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <Container className="product-hero__inner">
          <div>
            <p className="page-eyebrow">DCS Smart Infrastructure</p>
            <h1>Clear smart rack monitoring, on-site and on the go.</h1>
            <p className="product-hero__lead">
              DCS Smart Rack Monitoring gives approved teams a clear view of rack activity through the mobile app
              and the smart rack display. The updated interface is easier to read, navigate, and use during daily work.
            </p>
            <div className="product-hero__actions">
              <a className="page-button page-button--primary" href="/smart-rack/support">Get support</a>
              <a className="page-button page-button--secondary" href="/#contact">Contact DCStack</a>
            </div>
          </div>
          <div className="product-hero__panel" aria-label="Preview of the DCS Smart Rack Monitoring interface">
            <div className="product-hero__panel-copy">
              <span>Interface preview</span>
              <strong>Clear information on every screen</strong>
            </div>
            <div className="product-hero__screens" aria-hidden="true">
              <figure className="product-hero__screen product-hero__screen--dashboard">
                <img src={dashboardPreview} alt="" />
              </figure>
              <figure className="product-hero__screen product-hero__screen--health">
                <img src={systemHealthPreview} alt="" />
              </figure>
            </div>
            <p>Sample views are shown. The layout may differ by device and rack setup.</p>
          </div>
        </Container>
      </section>

      <section className="product-capabilities">
        <Container>
          <div className="page-heading">
            <p className="page-eyebrow">Where you can use it</p>
            <h2>A clear view on the rack display and your phone</h2>
          </div>
          <div className="product-capabilities__grid">
            {capabilities.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="product-availability">
            This product is in soft launch. The images show a general preview and do not include private setup details.
          </p>
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="product-downloads-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Downloads</p>
              <h2 id="product-downloads-title">Downloads are coming soon</h2>
            </div>
            <p>We will add the official download links when the production release is ready.</p>
          </div>
          <div className="product-downloads__grid">
            <article>
              <span aria-hidden="true">iOS</span>
              <div>
                <h3>Download for iPhone</h3>
                <p>The iPhone release is being prepared.</p>
              </div>
              <strong>Coming soon</strong>
            </article>
            <article>
              <span aria-hidden="true">APK</span>
              <div>
                <h3>Download for Android</h3>
                <p>The official Android link will be added here.</p>
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
