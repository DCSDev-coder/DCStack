import { useEffect } from 'react';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import SmartRackPage from './pages/SmartRack/SmartRackPage.jsx';
import SmartRackPrivacyPage from './pages/SmartRack/SmartRackPrivacyPage.jsx';
import SmartRackSupportPage from './pages/SmartRack/SmartRackSupportPage.jsx';
import SupportDirectoryPage from './pages/Support/SupportDirectoryPage.jsx';
import About from './sections/About/About.jsx';
import CTA from './sections/CTA/CTA.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Industries from './sections/Industries/Industries.jsx';
import Projects from './sections/Projects/Projects.jsx';
import WhatWeBuild from './sections/WhatWeBuild/WhatWeBuild.jsx';

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    const titles = {
      '/smart-rack': 'DCS Smart Rack Monitoring | DCStack',
      '/smart-rack/privacy': 'Privacy Policy | DCS Smart Rack Monitoring',
      '/smart-rack/support': 'Support | DCS Smart Rack Monitoring',
      '/support': 'Support Centre | DCStack',
    };

    document.title = titles[path] ?? 'DCStack | Corporate Digital Solutions';
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
