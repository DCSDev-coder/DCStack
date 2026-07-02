import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import About from './sections/About/About.jsx';
import CTA from './sections/CTA/CTA.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Industries from './sections/Industries/Industries.jsx';
import WhatWeBuild from './sections/WhatWeBuild/WhatWeBuild.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeBuild />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
