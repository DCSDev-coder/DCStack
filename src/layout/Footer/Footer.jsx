import Container from '../../components/Container/Container.jsx';
import BrandLogo from '../../components/BrandLogo/BrandLogo.jsx';
import './Footer.css';

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Capabilities', href: '/#build' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'DCS Smart Rack Monitoring', href: '/smart-rack' },
      { label: 'Project Support', href: '/support' },
      { label: 'Smart Rack Support', href: '/smart-rack/support' },
      { label: 'Smart Rack Privacy', href: '/smart-rack/privacy' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Smart Infrastructure', href: '/#industries' },
      { label: 'Business Administration', href: '/#industries' },
      { label: 'Retail & POS', href: '/#industries' },
      { label: 'Finance Operations', href: '/#industries' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logo-wrapper">
            <BrandLogo tone="dark" withSubtitle={true} />
          </div>
          <p>Practical software that helps modern businesses work better.</p>
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
              <a href="mailto:dcstack26@gmail.com">dcstack26@gmail.com</a>
            </li>
            <li>
              <a href="tel:+601111476110">+60 11-1147 6110</a>
            </li>
            <li>Malaysia</li>
            <li>
              <a href="/support">Support Centre</a>
            </li>
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
