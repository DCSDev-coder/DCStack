import { useEffect, useState } from 'react';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import Container from '../../components/Container/Container.jsx';
import { navigateToSection } from '../../utils/sectionNavigation.js';
import './Header.css';

const navItems = [
  { label: 'Home', sectionId: 'top' },
  { label: 'About', sectionId: 'about' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Capabilities', sectionId: 'build' },
  { label: 'Contact', sectionId: 'contact' },
];

function Header() {
  const isLandingPage = window.location.pathname === '/';
  const [activeSection, setActiveSection] = useState(isLandingPage ? 'top' : 'projects');
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 12);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      animationFrame = undefined;
      setIsScrolled(window.scrollY > 12);

      if (!isLandingPage) return;

      const viewportMarker = Math.min(180, window.innerHeight * 0.28);
      const nearPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      let currentSection = 'top';

      for (const item of navItems) {
        const section = document.getElementById(item.sectionId);
        if (section && section.getBoundingClientRect().top <= viewportMarker) {
          currentSection = item.sectionId;
        }
      }

      if (nearPageBottom) currentSection = 'contact';
      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [isLandingPage]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.site-header')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  const handleNavClick = (event, sectionId) => {
    navigateToSection(event, sectionId);
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Container className="site-header__inner">
        <a aria-label="DCStack home" className="site-header__logo" href="/" onClick={(event) => handleNavClick(event, 'top')}>
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="site-header__nav">
          {navItems.map((item) => (
            <a
              aria-current={activeSection === item.sectionId ? 'location' : undefined}
              className={activeSection === item.sectionId ? 'is-active' : undefined}
              href="/"
              key={item.sectionId}
              onClick={(event) => handleNavClick(event, item.sectionId)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className={`site-header__burger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div className={`site-header__drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              aria-current={activeSection === item.sectionId ? 'location' : undefined}
              className={activeSection === item.sectionId ? 'is-active' : undefined}
              href="/"
              key={item.sectionId}
              onClick={(event) => handleNavClick(event, item.sectionId)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
