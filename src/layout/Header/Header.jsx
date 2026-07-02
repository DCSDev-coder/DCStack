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
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a aria-label="DCStack home" className="site-header__logo" href="#top">
          <BrandLogo />
        </a>
        <nav aria-label="Primary navigation" className="site-header__nav">
          {navItems.map((item) => (
            <a className={item.href === '#top' ? 'is-active' : undefined} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
