import { useEffect, useState } from 'react';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import Container from '../../components/Container/Container.jsx';
import './Header.css';

const navItems = [
  { label: 'Home', href: '/#top', sectionId: 'top' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Capabilities', href: '/#build', sectionId: 'build' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];

function Header() {
  const isLandingPage = window.location.pathname === '/';
  const [activeHref, setActiveHref] = useState(isLandingPage ? '/#top' : '/#projects');
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
      let currentHref = '/#top';

      for (const item of navItems) {
        const section = document.getElementById(item.sectionId);
        if (section && section.getBoundingClientRect().top <= viewportMarker) {
          currentHref = item.href;
        }
      }

      if (nearPageBottom) currentHref = '/#contact';
      setActiveHref(currentHref);
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

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Container className="site-header__inner">
        <a aria-label="DCStack home" className="site-header__logo" href="/#top">
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="site-header__nav">
          {navItems.map((item) => (
            <a
              aria-current={activeHref === item.href ? 'location' : undefined}
              className={activeHref === item.href ? 'is-active' : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setActiveHref(item.href)}
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
              aria-current={activeHref === item.href ? 'location' : undefined}
              className={activeHref === item.href ? 'is-active' : undefined}
              href={item.href}
              key={item.href}
              onClick={() => handleNavClick(item.href)}
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
