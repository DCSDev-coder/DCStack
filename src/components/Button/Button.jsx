import './Button.css';

function Button({ children, href, variant = 'primary' }) {
  const className = `button button--${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

export default Button;
