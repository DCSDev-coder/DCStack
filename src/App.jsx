import { useEffect } from 'react';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import SmartRackPage from './pages/SmartRack/SmartRackPage.jsx';
import SmartRackPrivacyPage from './pages/SmartRack/SmartRackPrivacyPage.jsx';
import C2PosPage from './pages/C2Pos/C2PosPage.jsx';
import C2OrderingPage from './pages/C2Ordering/C2OrderingPage.jsx';
import FintechPage from './pages/Fintech/FintechPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import ProjectsPage from './pages/Projects/ProjectsPage.jsx';
import HeroAboutStage from './sections/HeroAboutStage/HeroAboutStage.jsx';
import Industries from './sections/Industries/Industries.jsx';
import Projects from './sections/Projects/Projects.jsx';
import WhatWeBuild from './sections/WhatWeBuild/WhatWeBuild.jsx';
import { consumePendingSection, scrollToSection } from './utils/sectionNavigation.js';

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    const titles = {
      '/smart-rack': 'Smart Rack Monitoring | IoT Infrastructure Solution | DCStack',
      '/smart-rack/privacy': 'Privacy Policy | Smart Rack Monitoring',
      '/c2-pos': 'Smart POS System | Retail & F&B Technology | DCStack',
      '/c2-ordering': 'Online Ordering & Loyalty | Mobile App | DCStack',
      '/fintech-payments': 'Digitalized Platform for Documents | DCStack',
      '/projects': 'All Projects | DCStack',
      '/contact': 'Contact DCStack | Start Your Project',
    };

    document.title = titles[path] ?? 'DCStack | Full-Stack Custom Software & Smart Infrastructure Solutions';
  }, [path]);

  useEffect(() => {
    if (path !== '/') return;

    const pendingSection = consumePendingSection();
    if (!pendingSection) return;

    window.requestAnimationFrame(() => {
      scrollToSection(pendingSection);
    });
  }, [path]);

  let content;

  if (path === '/smart-rack/privacy' || path === '/support') {
    content = <SmartRackPrivacyPage />;
  } else if (path === '/smart-rack') {
    content = <SmartRackPage />;
  } else if (path === '/c2-pos') {
    content = <C2PosPage />;
  } else if (path === '/c2-ordering') {
    content = <C2OrderingPage />;
  } else if (path === '/fintech-payments') {
    content = <FintechPage />;
  } else if (path === '/projects') {
    content = <ProjectsPage />;
  } else if (path === '/contact') {
    content = <ContactPage />;
  } else if (path === '/') {
    content = (
      <>
        <HeroAboutStage />
        <Projects />
        <WhatWeBuild />
        <Industries />
      </>
    );
  } else {
    content = (
      <section className="section" style={{ paddingBlock: 'clamp(5rem, 12vw, 8rem)', textAlign: 'center' }}>
        <div className="container">
          <p className="page-eyebrow">404 &middot; Page Not Found</p>
          <h1 style={{ color: 'var(--color-navy)', fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '0.5rem 0 1rem' }}>
            We couldn&apos;t find that page
          </h1>
          <p style={{ color: 'var(--color-text-muted)', margin: '0 auto 2rem', maxWidth: '480px' }}>
            The link may be outdated or moved. Explore our projects or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button button--primary" href="/">Back to Home</a>
            <a className="button button--secondary" href="/projects">View Projects</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  );
}

export default App;
