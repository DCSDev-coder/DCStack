import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container.jsx';
import { ArrowLeft, ArrowRight, FileText, Activity, ShieldCheck, Search } from 'lucide-react';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import '../SmartRack/SmartRackPages.css';
import '../../sections/Projects/Projects.css';
import '../C2Ordering/C2OrderingPage.css';

const CRUMB_LABEL = 'Digitalized Platform for Documents';

const capabilities = [
  [
    'Centralized Cloud Vault',
    'Organize contracts, invoices, SOPs, and compliance records in a structured, version-controlled repository.',
    FileText,
  ],
  [
    'Instant Keyword Search',
    'Tag and organize uploaded PDFs and files so teams can find any document by keyword in seconds.',
    Search,
  ],
  [
    'Automated Approval Routing',
    'Multi-step review chains, digital e-signatures, and instant status notifications for faster sign-offs.',
    Activity,
  ],
  [
    'Role-Based Access & Audit Trail',
    'Granular folder permissions with timestamped logs tracking every view, edit, download, and approval.',
    ShieldCheck,
  ],
];

function FintechPage() {
  const [typedLength, setTypedLength] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setTypedLength(CRUMB_LABEL.length);
      setIsTypingDone(true);
      return undefined;
    }

    setTypedLength(0);
    setIsTypingDone(false);

    const intervalId = window.setInterval(() => {
      setTypedLength((prev) => {
        if (prev + 1 >= CRUMB_LABEL.length) {
          window.clearInterval(intervalId);
          setIsTypingDone(true);
          return CRUMB_LABEL.length;
        }
        return prev + 1;
      });
    }, 26);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="product-page">
      <section className="c2-page-header">
        <Container>
          <nav className="c2-page-header__crumb" aria-label="Breadcrumb">
            <a href="/projects" className="c2-page-header__back">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Back to Projects</span>
            </a>
            <span className="c2-page-header__sep" aria-hidden="true">/</span>
            <span className="c2-page-header__current" aria-label={CRUMB_LABEL}>
              {CRUMB_LABEL.slice(0, typedLength)}
              <span className={`c2-page-header__cursor${isTypingDone ? ' is-done' : ''}`} aria-hidden="true" />
            </span>
          </nav>

          <div className="c2-page-header__inner">
            <p className="c2-page-header__eyebrow">
              DCSTACK Document Automation &amp; Workflow &middot; Enterprise Solution
            </p>
            <h1>Digitalized Platform for Documents</h1>
            <p className="c2-page-header__lead">
              A centralized paperless platform for{' '}
              <strong>managing, approving, and archiving business documents</strong>. Replaces manual filing
              cabinets and email chains with automated routing, e-signatures, version control, and instant search.
            </p>

            <div className="c2-page-header__actions">
              <a
                className="c2-page-header__btn c2-page-header__btn--primary"
                href="/"
                onClick={(event) => navigateToSection(event, 'contact')}
              >
                <span>Discuss Document Digitalization</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="c2-page-header__btn c2-page-header__btn--ghost" href="/projects">
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="product-capabilities">
        <Container>
          <div className="page-heading">
            <p className="page-eyebrow">Paperless Operations</p>
            <h2>Built to eliminate manual paperwork and speed up team approvals</h2>
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
        </Container>
      </section>

      <section className="product-downloads" aria-labelledby="doc-spec-title">
        <Container>
          <div className="product-downloads__heading">
            <div>
              <p className="page-eyebrow">Core Modules</p>
              <h2 id="doc-spec-title">Supported Formats &amp; Workflows</h2>
            </div>
            <p>Seamless handling for everyday business paperwork and compliance records.</p>
          </div>
          <div className="product-downloads__grid">
            <article>
              <span aria-hidden="true">FIND</span>
              <div>
                <h3>Instant Keyword Search</h3>
                <p>Fast tagging, folder filtering, and keyword search across uploaded documents and records.</p>
              </div>
              <strong>Production Ready</strong>
            </article>
            <article>
              <span aria-hidden="true">SIGN</span>
              <div>
                <h3>Digital Sign-Offs &amp; Retention</h3>
                <p>Built-in e-signature approvals, expiry reminders, and encrypted long-term cloud backup.</p>
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
