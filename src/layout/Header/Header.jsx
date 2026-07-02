import { useEffect, useState } from 'react';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import Container from '../../components/Container/Container.jsx';
import './Header.css';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#build' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [activeSection, setActiveSection] = useState('#top');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('#contact');
        return;
      }

      const sections = navItems.map(item => {
        const element = document.getElementById(item.href.substring(1));
        return { id: item.href, offset: element ? element.offsetTop : 0 };
      });

      const sortedSections = [...sections].sort((a, b) => b.offset - a.offset);
      const currentSection = sortedSections.find(section => scrollPosition >= section.offset);

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.site-header')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a aria-label="DCStack home" className="site-header__logo" href="#top">
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="site-header__nav">
          {navItems.map((item) => (
            <a
              className={activeSection === item.href ? 'is-active' : undefined}
              href={item.href}
              key={item.href}
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
              className={activeSection === item.href ? 'is-active' : undefined}
              href={item.href}
              key={item.href}
              onClick={handleNavClick}
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

