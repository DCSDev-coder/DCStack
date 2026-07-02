import Container from '../../components/Container/Container.jsx';
import IconGlyph from '../../components/IconGlyph/IconGlyph.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import './Industries.css';

const industries = [
  { icon: 'building', label: 'Smart Infrastructure', color: 'green' },
  { icon: 'briefcase', label: 'Business Operations', color: 'navy' },
  { icon: 'globe', label: 'Web Platforms', color: 'orange' },
  { icon: 'mobile', label: 'Mobile Services', color: 'green' },
  { icon: 'rocket', label: 'Future Industry Solutions', color: 'navy' },
];

function Industries() {
  return (
    <section className="section industries" id="industries" aria-labelledby="industries-title">
      <Container>
        <SectionHeading
          eyebrow="Industries we support"
          id="industries-title"
          title="Solutions for Every Industry"
        />
        <ul className="industries__list" aria-label="Industries DCStack serves">
          {industries.map((industry) => (
            <li key={industry.label}>
              <IconGlyph color={industry.color} name={industry.icon} />
              <span>{industry.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Industries;
