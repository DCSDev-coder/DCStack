import './SectionHeading.css';

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section-heading section-heading--center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
