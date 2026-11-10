import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import {
  Cpu,
  Smartphone,
  Store,
  Gift,
  CreditCard,
  BarChart3
} from 'lucide-react';
import './WhatWeBuild.css';

const services = [
  {
    Icon: Cpu,
    title: 'Smart Infrastructure & IoT',
    body: 'Server rack telemetry, environmental sensors, PDU power controls, and on-site touchscreen consoles.',
    color: '#16a34a',
  },
  {
    Icon: Store,
    title: 'Cafe POS & Inventory Systems',
    body: 'High-speed barista counter terminals, real-time ingredient and stock tracking, mobile table ordering, and ticket printers.',
    color: '#f97316',
  },
  {
    Icon: Smartphone,
    title: 'Custom Mobile Apps',
    body: 'High-performance iOS and Android applications built for customers, staff workflows, and on-the-go management.',
    color: '#1e3a8a',
  },
  {
    Icon: Gift,
    title: 'Customer Loyalty & Rewards',
    body: 'Digital member wallets, punch cards, discount vouchers, and automated reward tier engines.',
    color: '#0284c7',
  },
  {
    Icon: CreditCard,
    title: 'Payments & Billing Automation',
    body: 'Billplz, FPX and DuitNow QR integrations, automated e-invoices, and audit-ready bookkeeping reconciliation.',
    color: '#059669',
  },
  {
    Icon: BarChart3,
    title: 'Operations Dashboards',
    body: 'Real-time telemetry, role-based admin panels, and operational reporting tailored to your team’s procedures.',
    color: '#7c3aed',
  },
];

function WhatWeBuild() {
  return (
    <section className="section build" id="build" aria-labelledby="build-title">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          id="build-title"
          title="Software & Hardware Systems Tailored to Real Operations"
        />
        <div className="build__grid">
          {services.map((service) => (
            <div className="build-card" key={service.title}>
              <div
                className="build-card__icon-wrapper"
                style={{ color: service.color, borderColor: service.color + '40', background: service.color + '10' }}
              >
                <service.Icon strokeWidth={1.75} size={28} />
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
