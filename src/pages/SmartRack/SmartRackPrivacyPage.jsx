import Container from '../../components/Container/Container.jsx';
import './SmartRackPages.css';

function SmartRackPrivacyPage() {
  return (
    <div className="document-page">
      <Container className="document-page__layout">
        <aside className="document-page__summary">
          <a className="support-page__back" href="/smart-rack/support" style={{ marginBottom: '2rem' }}>Back to support</a>
          <p className="page-eyebrow">DCS Smart Rack Monitoring</p>
          <h1>Privacy Policy</h1>
          <p>Effective 22 July 2026</p>
          <a href="mailto:support@dcstack.my">Privacy contact</a>
        </aside>

        <article className="document-page__content">
          <p className="document-page__intro">
            Data Center Specialists (M) Sdn Bhd provides DCS Smart Rack
            Monitoring for authorized personnel and approved client users. This policy explains the information
            handled when you use the application and its connected services.
          </p>

          <section>
            <h2>Information we handle</h2>
            <p>Depending on your account, permissions, device, and connected deployment, we may handle:</p>
            <ul>
              <li>Account information, such as your username, display name, assigned site, role, and permissions.</li>
              <li>Authentication information used to verify access. Passwords and PINs are protected and are not displayed in readable form.</li>
              <li>Device notification identifiers used to deliver operational and security notifications.</li>
              <li>Operational activity, including permitted door access events, alarm activity, and actions performed through the app.</li>
              <li>Technical information needed to operate and secure the service, such as request times, app version, device platform, and error logs.</li>
            </ul>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>We use this information to:</p>
            <ul>
              <li>authenticate users and apply site, role, and equipment permissions;</li>
              <li>provide monitoring, alarms, notifications, controls, and door access features;</li>
              <li>maintain security and an operational audit history;</li>
              <li>diagnose faults, support users, and improve service reliability; and</li>
              <li>meet legal, contractual, and security obligations.</li>
            </ul>
          </section>

          <section>
            <h2>Biometric authentication</h2>
            <p>
              If you enable Face ID, Touch ID, or another supported biometric method, verification is performed by
              your device operating system. DCS Smart Rack Monitoring does not receive or store your biometric
              template.
            </p>
          </section>

          <section>
            <h2>Sharing and sale of information</h2>
            <p>
              We do not sell personal information. Information may be available to authorized DCS administrators,
              your organization, approved service providers that support app operation, or authorities where
              required by law. Access is limited according to operational need and applicable agreements.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              Information is retained only for as long as needed for account administration, security, operational
              history, support, contractual requirements, and legal obligations. We use administrative, technical,
              and organizational safeguards designed to protect information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You can manage notification permission and biometric access in your device settings. For account
              access, correction, deletion, or privacy questions, contact your organization administrator or DCS.
              Some operational records may need to be retained for security, contractual, or legal reasons.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>The application is intended for authorized business users and is not directed to children.</p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy when the application, connected services, or legal requirements change. The
              effective date above identifies the latest published version.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              Data Center Specialists (M) Sdn Bhd<br />
              No. 42-2 Jalan Eco Forest 6/1C Eco Forest 43500<br />
              Semenyih Selangor Malaysia<br />
              <a href="mailto:support@dcstack.my">support@dcstack.my</a><br />
              <a href="tel:+60378000511">(+60) 37800 0511</a>
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}

export default SmartRackPrivacyPage;
