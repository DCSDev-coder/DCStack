import { useEffect } from 'react';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import SmartRackPage from './pages/SmartRack/SmartRackPage.jsx';
import SmartRackPrivacyPage from './pages/SmartRack/SmartRackPrivacyPage.jsx';
import SmartRackSupportPage from './pages/SmartRack/SmartRackSupportPage.jsx';
import SupportDirectoryPage from './pages/Support/SupportDirectoryPage.jsx';
import C2PosPage from './pages/C2Pos/C2PosPage.jsx';
import C2OrderingPage from './pages/C2Ordering/C2OrderingPage.jsx';
import FintechPage from './pages/Fintech/FintechPage.jsx';
import About from './sections/About/About.jsx';
import CTA from './sections/CTA/CTA.jsx';
import Hero from './sections/Hero/Hero.jsx';
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
      '/smart-rack/support': 'Smart Rack Support | Technical Support Centre | DCStack',
      '/c2-pos': 'C2 Cafe Smart POS System | Retail & F&B Technology | DCStack',
      '/c2-ordering': 'C2 Cafe Mobile Ordering & Loyalty | Customer Mobile App | DCStack',
      '/fintech-payments': 'Fintech & Payment Gateway Integration | Billing Orchestration | DCStack',
      '/support': 'DCStack Support Centre | Full-Stack IT & Smart Infrastructure Support',
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

  if (path === '/support') {
    content = <SupportDirectoryPage />;
  } else if (path === '/smart-rack/privacy') {
    content = <SmartRackPrivacyPage />;
  } else if (path === '/smart-rack/support') {
    content = <SmartRackSupportPage />;
  } else if (path === '/smart-rack') {
    content = <SmartRackPage />;
  } else if (path === '/c2-pos') {
    content = <C2PosPage />;
  } else if (path === '/c2-ordering') {
    content = <C2OrderingPage />;
  } else if (path === '/fintech-payments') {
    content = <FintechPage />;
  } else {
    content = (
      <>
        <Hero />
        <About />
        <Projects />
        <WhatWeBuild />
        <Industries />
        <CTA />
      </>
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
