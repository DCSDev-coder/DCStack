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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // 120px offset for the sticky header
      
      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('#contact');
        return;
      }

      // Find the current section
      const sections = navItems.map(item => {
        const element = document.getElementById(item.href.substring(1));
        return {
          id: item.href,
          offset: element ? element.offsetTop : 0,
        };
      });

      // Sort by offset descending to find the closest one we've scrolled past
      const sortedSections = [...sections].sort((a, b) => b.offset - a.offset);
      const currentSection = sortedSections.find(section => scrollPosition >= section.offset);
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a aria-label="DCStack home" className="site-header__logo" href="#top">
          <BrandLogo />
        </a>
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
      </Container>
    </header>
  );
}

export default Header;
