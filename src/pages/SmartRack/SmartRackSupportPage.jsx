import Container from '../../components/Container/Container.jsx';
import { getProject } from '../../data/projects.js';
import './SmartRackPages.css';

const supportSections = [
  {
    title: 'Setup & sign in',
    items: [
      ['Account access', 'Accounts are provided by your organization administrator. Contact your administrator if you need an account created or updated.'],
      ['Signing in', 'Open the app, enter your username and password, then enter your assigned PIN or security code when prompted.'],
      ['Biometrics', 'If your device supports Face ID or fingerprint access, you can enable it during sign in for faster future access.'],
    ],
  },
  {
    title: 'Common questions',
    items: [
      ['Forgotten PIN', 'If you forget your PIN, tap "Forgot PIN" on the sign-in screen to verify by email or contact your administrator.'],
      ['Alert notifications', 'Allow notifications when prompted to receive critical alerts. You can change this in your device Settings at any time.'],
      ['Device compatibility', 'Smart Rack Monitoring supports iPhone (iOS 16+) and Android devices (Android 11+).'],
    ],
  },
];

function SmartRackSupportPage() {
  const project = getProject('smart-rack');

  return (
    <div className="support-page">
      <section className="support-page__hero">
        <Container>
          <a className="support-page__back" href="/smart-rack">Back to Smart Rack</a>
          <p className="page-eyebrow">DCStack Technical Support</p>
          <h1>Smart Rack Monitoring Support</h1>
          <p>
            Find setup guidance, answers to common questions, and contact options for approved users and client teams.
          </p>
        </Container>
      </section>

      <section className="support-page__content">
        <Container>
          <div className="support-page__grid">
            {supportSections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <dl>
                  {section.items.map(([question, answer]) => (
                    <div key={question}>
                      <dt>{question}</dt>
                      <dd>{answer}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="support-page__contact">
            <div>
              <p className="page-eyebrow">Contact</p>
              <h2>DCStack</h2>
              <p>Support is available to approved users and client contacts.</p>
            </div>
            <address>
              <a href="mailto:support@dcstack.my">support@dcstack.my</a>
              <a href="tel:+60126946907">+60 12-694 6907</a>
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
