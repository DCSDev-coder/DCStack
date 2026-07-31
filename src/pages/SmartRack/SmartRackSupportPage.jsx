import Container from '../../components/Container/Container.jsx';
import SmartRackCircuit from './SmartRackCircuit.jsx';
import './SmartRackPages.css';

import { UserCircle, Bell, Lock, Activity } from 'lucide-react';

const supportItems = [
  ['Sign-in or account access', 'Contact your administrator to check that your account, site, and permissions are active.', UserCircle],
  ['Notifications', 'Confirm that notifications are allowed in your device settings and that you are signed in to the correct account.', Bell],
  ['Door access', 'Door controls need permission and an extra security check. If access fails, tell us the site, door name, time, and message shown.', Lock],
  ['Monitoring data', 'If equipment appears offline, tell us the site, equipment name, time, and include a screenshot if possible.', Activity],
];

function SmartRackSupportPage() {
  return (
    <div className="support-page">
      <section className="support-page__hero">
        <div className="support-page__hero-circuit">
          <SmartRackCircuit />
        </div>
        <Container>
          <p className="page-eyebrow">Smart Rack Monitoring</p>
          <h1>Smart Rack support</h1>
          <p>Get help with sign-in, monitoring data, notifications, controls, and door access.</p>
          <a className="page-button page-button--primary" href="mailto:support@dcstack.my?subject=Smart%20Rack%20Support">
            Email support
          </a>
        </Container>
      </section>

      <section className="support-page__content">
        <Container>
          <a className="support-page__back" href="/support">All project support</a>
          <div className="support-page__grid">
            {supportItems.map(([title, description, Icon]) => (
              <article key={title}>
                <div className="support-page__bg-icon">
                  <Icon size={160} strokeWidth={1} />
                </div>
                <div className="support-page__content-inner">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="support-contact">
            <div>
              <p className="page-eyebrow">Contact</p>
              <h2>DCStack</h2>
              <p>Support is available to approved users and client contacts.</p>
            </div>
            <address>
              <a href="mailto:support@dcstack.my">support@dcstack.my</a>
              <a href="tel:+60378000511">(+60) 37800 0511</a>
              <span>No. 42-2 Jalan Eco Forest 6/1C Eco Forest 43500<br />Semenyih Selangor Malaysia</span>
            </address>
          </div>

          <p className="support-page__privacy">
            Learn how app information is handled in the <a href="/smart-rack/privacy">Smart Rack Monitoring Privacy Policy</a>.
          </p>
        </Container>
      </section>
    </div>
  );
}

export default SmartRackSupportPage;
