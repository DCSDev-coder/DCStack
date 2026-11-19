import { useState } from 'react';
import { ArrowRight, Cpu, Store, Smartphone, FileText, Activity, Clock } from 'lucide-react';
import Container from '../../components/Container/Container.jsx';
import { projects } from '../../data/projects.js';
import dashboardImg from '../../assets/images/Dashboard_Monitor/Dashboard.webp';
import systemHealthImg from '../../assets/images/Dashboard_Monitor/System Health.webp';
import acMonitoringImg from '../../assets/images/Dashboard_Monitor/AC Monitoring.webp';
import mobileHomeImg from '../../assets/images/c2/home.jpeg';
import mobileMenuImg from '../../assets/images/c2/menu.jpeg';
import mobileRewardsImg from '../../assets/images/c2/rewards.jpeg';
import '../../sections/Projects/Projects.css';
import './ProjectsPage.css';

const PROJECT_META = {
  'smart-rack': { Icon: Cpu, accent: '#16a34a', shortLabel: 'Smart Rack' },
  'c2-pos-system': { Icon: Store, accent: '#f97316', shortLabel: 'Smart POS' },
  'c2-ordering-app': { Icon: Smartphone, accent: '#0284c7', shortLabel: 'Online Ordering' },
  'fintech-payments': { Icon: FileText, accent: '#7c3aed', shortLabel: 'Document Platform' },
};

function ProjectSneakPeek({ slug }) {
  if (slug === 'smart-rack') {
    return (
      <div className="projects-page__sneak projects-page__sneak--rack">
        <div className="projects-page__sneak-screens">
          <img
            src={systemHealthImg}
            alt="Smart Rack system health preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--left"
            draggable={false}
          />
          <img
            src={dashboardImg}
            alt="Smart Rack dashboard preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--center"
            draggable={false}
          />
          <img
            src={acMonitoringImg}
            alt="Smart Rack AC monitoring preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--right"
            draggable={false}
          />
        </div>
      </div>
    );
  }

  if (slug === 'c2-pos-system') {
    return (
      <div className="projects-page__sneak projects-page__sneak--pos">
        <div className="pos-kds-mockup projects-page__pos-mockup">
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
                <span>1x Espresso</span>
                <strong>RM 5.90</strong>
              </div>
              <div className="pos-order-item">
                <span>1x Vanilla Latte</span>
                <strong>RM 12.90</strong>
              </div>
            </div>
            <div className="pos-order-total">
              <span>Paid via Billplz QR</span>
              <strong>RM 18.80</strong>
            </div>
          </div>

          <div className="pos-kds-metrics">
            <div className="pos-metric-box">
              <Clock size={13} />
              <span>Today&apos;s Vol: <strong>214 Orders</strong></span>
            </div>
            <div className="pos-metric-box">
              <Activity size={13} />
              <span>Inventory: <strong>Live Synced</strong></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'c2-ordering-app') {
    return (
      <div className="projects-page__sneak projects-page__sneak--ordering">
        <div className="projects-page__sneak-screens">
          <img
            src={mobileMenuImg}
            alt="Online ordering menu preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--left"
            draggable={false}
          />
          <img
            src={mobileHomeImg}
            alt="Online ordering home preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--center"
            draggable={false}
          />
          <img
            src={mobileRewardsImg}
            alt="Online ordering rewards preview"
            className="projects-page__sneak-phone projects-page__sneak-phone--right"
            draggable={false}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page__sneak projects-page__sneak--docs">
      <div className="projects-page__doc-mockup">
        <div className="projects-page__doc-top">
          <div className="projects-page__doc-status">
            <span className="projects-page__doc-dot" />
            <strong>Document Vault: Synced</strong>
          </div>
          <span>99.9% Uptime</span>
        </div>

        <div className="projects-page__doc-metric">
          <small>Active Digital Records</small>
          <strong>14,820 Files</strong>
          <div>
            <span className="projects-page__doc-tag">100% Indexed</span>
            <span>48 workflows automated</span>
          </div>
        </div>

        <div className="projects-page__doc-rows">
          <div className="projects-page__doc-row">
            <FileText size={15} />
            <span>Vendor Contract #2041</span>
            <strong>Approved</strong>
          </div>
          <div className="projects-page__doc-row">
            <Activity size={15} />
            <span>e-Signature &amp; Audit Trail</span>
            <span className="projects-page__doc-badge">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ACTIVE_PROJECT_KEY = 'dcstack-active-project-index';

function getInitialProjectIndex() {
  const saved = window.sessionStorage.getItem(ACTIVE_PROJECT_KEY);
  const parsed = saved !== null ? Number.parseInt(saved, 10) : 0;
  if (Number.isNaN(parsed) || parsed < 0 || parsed >= projects.length) {
    return 0;
  }
  return parsed;
}

function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(getInitialProjectIndex);
  const activeProject = projects[activeIndex];
  const activeMeta = PROJECT_META[activeProject.slug] || { Icon: Cpu, accent: '#16a34a' };

  const handleSelectProject = (index) => {
    setActiveIndex(index);
    window.sessionStorage.setItem(ACTIVE_PROJECT_KEY, String(index));
  };

  return (
    <div className="projects-page">
      <section className="projects-page__hero">
        <Container>
          <p className="page-eyebrow">Proven Solutions &amp; Products</p>
          <h1>All DCStack Projects</h1>
          <p className="projects-page__lead">
            Explore our production systems across smart IoT infrastructure, store POS, mobile ordering,
            and paperless document workflows. Select any project below to preview its interface and open full details.
          </p>
        </Container>
      </section>

      <section className="projects-page__stage" aria-label="Project directory">
        <Container className="projects-page__stage-inner">
          {/* Top Pill Switcher */}
          <div className="projects-page__dock" role="tablist" aria-label="Select a project">
            {projects.map((project, index) => {
              const meta = PROJECT_META[project.slug] || { Icon: Cpu, accent: '#16a34a', shortLabel: project.name };
              const { Icon, accent, shortLabel } = meta;
              const isActive = activeIndex === index;

              return (
                <button
                  key={project.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`projects-page__dock-btn ${isActive ? 'is-active' : ''}`}
                  style={{ '--tab-accent': accent }}
                  onClick={() => handleSelectProject(index)}
                >
                  <Icon size={16} strokeWidth={2} />
                  <span>0{index + 1}. {shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Showcase Card with Product Sneak-Peek */}
          <div
            key={activeProject.slug}
            className="projects-page__showcase"
            style={{ '--card-accent': activeMeta.accent }}
            role="tabpanel"
          >
            <div className="projects-page__showcase-info">
              <h2>{activeProject.name}</h2>
              <p>{activeProject.summary}</p>

              <ul className="projects-page__points">
                {activeProject.highlights.map((item, idx) => (
                  <li
                    key={item}
                    className="projects-page__point"
                    style={{ '--tag-index': idx }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="projects-page__actions">
                <a href={activeProject.detailHref} className="projects-page__cta-btn">
                  <span>View Project Details</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <ProjectSneakPeek slug={activeProject.slug} />
          </div>

          <div className="projects-page__support-bar">
            <div className="projects-page__support-copy">
              <span>Need technical assistance?</span>
              <strong>Reach out directly to our engineering team for setup help and product support.</strong>
            </div>

            <a href="/contact" className="projects-page__support-btn">
              <span>Contact Support</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ProjectsPage;
