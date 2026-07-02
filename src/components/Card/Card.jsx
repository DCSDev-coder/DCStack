import './Card.css';
import IconGlyph from '../IconGlyph/IconGlyph.jsx';

function Card({ title, children, accent = 'green', icon }) {
  return (
    <article className={`card card--${accent}`}>
      {icon ? (
        <span className="card__icon">
          <IconGlyph color={accent} name={icon} />
        </span>
      ) : null}
      <span aria-hidden="true" className="card__accent" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Card;
