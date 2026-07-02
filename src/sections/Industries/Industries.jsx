import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { Building2, Briefcase, Globe, Smartphone, Rocket } from 'lucide-react';
import './Industries.css';

const industries = [
  { Icon: Building2, label: 'Smart Infrastructure', color: '#16a34a' },
  { Icon: Briefcase, label: 'Business Operations', color: '#1e3a8a' },
  { Icon: Globe, label: 'Web Platforms', color: '#f97316' },
  { Icon: Smartphone, label: 'Mobile Services', color: '#16a34a' },
  { Icon: Rocket, label: 'Future Industry Solutions', color: '#1e3a8a' },
];

const IndustrySet = () => (
  <div className="industries__marquee-set">
    {industries.map((industry) => (
      <div className="industry-card" key={industry.label}>
        <industry.Icon className="industry-card__icon" color={industry.color} size={42} strokeWidth={1.5} />
        <span className="industry-card__label">{industry.label}</span>
      </div>
    ))}
  </div>
);

function Industries() {
  return (
    <section className="section industries" id="industries" aria-labelledby="industries-title">
      <Container>
        <SectionHeading
          eyebrow="Industries we support"
          id="industries-title"
          title="Solutions for Every Industry"
        />
      </Container>
      <div className="industries__marquee">
        <div className="industries__marquee-track">
          <IndustrySet />
          <IndustrySet />
          <IndustrySet />
          <IndustrySet />
        </div>
      </div>
    </section>
  );
}

export default Industries;
