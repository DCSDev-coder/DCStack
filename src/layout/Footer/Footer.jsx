import Container from '../../components/Container/Container.jsx';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import './Footer.css';

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Solutions', href: '#build' },
      { label: 'Industries', href: '#industries' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Mobile Applications', href: '#build' },
      { label: 'Website Systems', href: '#build' },
      { label: 'Admin Dashboards', href: '#build' },
      { label: 'Monitoring Platforms', href: '#build' },
      { label: 'Custom Digital Solutions', href: '#build' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Smart Infrastructure', href: '#industries' },
      { label: 'Business Operations', href: '#industries' },
      { label: 'Web Platforms', href: '#industries' },
      { label: 'Mobile Services', href: '#industries' },
      { label: 'Future Industry Solutions', href: '#industries' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logo-wrapper">
            <BrandLogo />
          </div>
          <p>Technology development that powers modern businesses and drives the future forward.</p>
        </div>
        {footerGroups.map((group) => (
          <div className="site-footer__group" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="site-footer__group site-footer__connect">
          <h2>Connect</h2>
          <ul>
            <li>
              <a href="mailto:sales@dcstack.my">sales@dcstack.my</a>
            </li>
            <li>
              <a href="tel:+622112345678">+0378000511</a>
            </li>
            <li>Eco Forest, Semenyih, Selangor</li>
          </ul>
        </div>
      </Container>
      <div className="site-footer__bottom">
        <Container>
          <p>&copy; 2026 DCStack / Data Center Specialists. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
