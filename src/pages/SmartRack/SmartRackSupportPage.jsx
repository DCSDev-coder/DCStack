import Container from '../../components/Container/Container.jsx';
import './SmartRackPages.css';

const supportItems = [
  ['Sign-in or account access', 'Contact your DCS administrator to check that your account, site, and permissions are active.'],
  ['Notifications', 'Confirm that notifications are allowed in your device settings and that you are signed in to the correct account.'],
  ['Door access', 'Door controls need permission and an extra security check. If access fails, tell us the site, door name, time, and message shown.'],
  ['Monitoring data', 'If equipment appears offline, tell us the site, equipment name, time, and include a screenshot if possible.'],
];

function SmartRackSupportPage() {
  return (
    <div className="support-page">
      <section className="support-page__hero">
        <Container>
          <p className="page-eyebrow">DCS Smart Rack Monitoring</p>
          <h1>Smart Rack support</h1>
          <p>Get help with sign-in, monitoring data, notifications, controls, and door access.</p>
          <a className="page-button page-button--primary" href="mailto:dcstack26@gmail.com?subject=DCS%20Smart%20Rack%20Support">
            Email support
          </a>
        </Container>
      </section>

      <section className="support-page__content">
        <Container>
          <a className="support-page__back" href="/support">All project support</a>
          <div className="support-page__grid">
            {supportItems.map(([title, description]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="support-contact">
            <div>
              <p className="page-eyebrow">Contact</p>
              <h2>Data Center Specialists (M) Sdn Bhd</h2>
              <p>Support is available to approved users and client contacts.</p>
            </div>
            <address>
              <a href="mailto:dcstack26@gmail.com">dcstack26@gmail.com</a>
              <a href="tel:+601111476110">+60 11-1147 6110</a>
              <span>Malaysia</span>
            </address>
          </div>

          <p className="support-page__privacy">
            Learn how app information is handled in the <a href="/smart-rack/privacy">DCS Smart Rack Monitoring Privacy Policy</a>.
          </p>
        </Container>
      </section>
    </div>
  );
}

export default SmartRackSupportPage;
