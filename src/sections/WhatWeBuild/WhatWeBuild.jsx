import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { Smartphone, AppWindow, PieChart, Activity, Settings } from 'lucide-react';
import './WhatWeBuild.css';

const services = [
  {
    Icon: Smartphone,
    title: 'Mobile Applications',
    body: 'Engaging and scalable mobile apps for iOS and Android.',
    color: '#16a34a',
  },
  {
    Icon: AppWindow,
    title: 'Website Systems',
    body: 'Robust and modern web systems tailored to your business.',
    color: '#1e3a8a',
  },
  {
    Icon: PieChart,
    title: 'Admin Dashboards',
    body: 'Insightful dashboards for data-driven decision making.',
    color: '#f97316',
  },
  {
    Icon: Activity,
    title: 'Monitoring Platforms',
    body: 'Real-time monitoring solutions for systems and infrastructure.',
    color: '#16a34a',
  },
  {
    Icon: Settings,
    title: 'Custom Digital Solutions',
    body: 'End-to-end custom solutions built for your unique challenges.',
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
          title="Digital Solutions That Deliver Value"
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
