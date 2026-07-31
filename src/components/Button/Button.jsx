import { navigateToSection } from '../../utils/sectionNavigation.js';
import './Button.css';

function Button({ children, href, variant = 'primary' }) {
  const className = `button button--${variant}`;

  if (href) {
    const isSectionLink = href.startsWith('#') || href.startsWith('/#');
    const sectionId = isSectionLink ? href.replace(/^\/?#/, '') : null;

    return (
      <a
        className={className}
        href={isSectionLink ? '/' : href}
        onClick={isSectionLink ? (event) => navigateToSection(event, sectionId) : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

export default Button;
