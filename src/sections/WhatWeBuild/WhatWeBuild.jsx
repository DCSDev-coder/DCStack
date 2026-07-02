import Card from '../../components/Card/Card.jsx';
import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import './WhatWeBuild.css';

const services = [
  {
    icon: 'mobile',
    title: 'Mobile Applications',
    body: 'Engaging and scalable mobile apps for iOS and Android.',
    accent: 'green',
  },
  {
    icon: 'website',
    title: 'Website Systems',
    body: 'Robust and modern web systems tailored to your business.',
    accent: 'navy',
  },
  {
    icon: 'dashboard',
    title: 'Admin Dashboards',
    body: 'Insightful dashboards for data-driven decision making.',
    accent: 'orange',
  },
  {
    icon: 'monitor',
    title: 'Monitoring Platforms',
    body: 'Real-time monitoring solutions for systems and infrastructure.',
    accent: 'green',
  },
  {
    icon: 'custom',
    title: 'Custom Digital Solutions',
    body: 'End-to-end custom solutions built for your unique challenges.',
    accent: 'navy',
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
            <Card accent={service.accent} icon={service.icon} key={service.title} title={service.title}>
              {service.body}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhatWeBuild;
