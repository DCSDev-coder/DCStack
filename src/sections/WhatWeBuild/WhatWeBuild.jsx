import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { Smartphone, AppWindow, PieChart, Activity, Settings } from 'lucide-react';
import './WhatWeBuild.css';

const services = [
  {
    Icon: Smartphone,
    title: 'Business Applications',
    body: 'Mobile and desktop tools built for daily work.',
    color: '#16a34a',
  },
  {
    Icon: AppWindow,
    title: 'Ordering Systems',
    body: 'Simple and reliable ordering systems for teams and customers.',
    color: '#1e3a8a',
  },
  {
    Icon: PieChart,
    title: 'POS & Sales Systems',
    body: 'Sales and transaction tools that help teams track business activity.',
    color: '#f97316',
  },
  {
    Icon: Activity,
    title: 'Operations Platforms',
    body: 'Monitoring and admin systems that keep daily work organized.',
    color: '#16a34a',
  },
  {
    Icon: Settings,
    title: 'Finance Workflows',
    body: 'Internal tools for finance tasks, reports, and approvals.',
    color: '#1e3a8a',
  },
];

function WhatWeBuild() {
  return (
    <section className="section build" id="build" aria-labelledby="build-title">
      <Container>
        <SectionHeading
          eyebrow="What we build"
          id="build-title"
          title="Software That Fits the Way Your Business Works"
        />
        <div className="build__grid">
          {services.map((service) => (
            <div className="build-card" key={service.title}>
              <div 
                className="build-card__icon-wrapper" 
                style={{ color: service.color, borderColor: service.color + '40' }}
              >
                <service.Icon strokeWidth={1.5} size={28} />
              </div>
              <h3 className="build-card__title">{service.title}</h3>
              <p className="build-card__body">{service.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhatWeBuild;
