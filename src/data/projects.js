export const projects = [
  {
    slug: 'smart-rack',
    name: 'Smart Rack Monitoring',
    category: 'IoT & Smart Infrastructure',
    status: 'Live Deployment',
    badge: 'Hardware & IoT',
    summary:
      'Mission-critical environmental and power telemetry for server racks and data centres. Features live touchscreen console displays, PDU switch controls, AC monitoring, and synchronized mobile alerts.',
    detailHref: '/smart-rack',
    supportHref: '/smart-rack/support',
    privacyHref: '/smart-rack/privacy',
    highlights: [
      'Live rack temperature & humidity',
      'On-site touchscreen console display',
      'Remote PDU & AC power control',
      'Mobile supervision for iOS & Android',
    ],
    ctaLabel: 'View Project Details',
  },
  {
    slug: 'c2-pos-system',
    name: 'C2 Cafe Smart POS System',
    category: 'F&B & Retail Technology',
    status: 'Production',
    badge: 'Counter POS & Inventory',
    summary:
      'High-speed counter point-of-sale built for modern cafe operations. Coordinates barista queue workflows, real-time ingredient and stock tracking, split billing, and shift sales reports.',
    detailHref: '/c2-pos',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Rapid touch counter ordering for baristas',
      'Real-time ingredient & stock tracking',
      'Multi-station receipt & cup sticker printing',
      'Real-time shift sales & inventory tracking',
    ],
    ctaLabel: 'View Project Details',
  },
  {
    slug: 'c2-ordering-app',
    name: 'C2 Cafe Mobile Ordering & Loyalty',
    category: 'Mobile Applications & Loyalty',
    status: 'Production',
    badge: 'iOS & Android App',
    summary:
      'Customer-facing mobile ordering application that lets patrons skip the queue with advance pre-orders, customize drink modifiers, collect loyalty stamps, and pay seamlessly via mobile checkout.',
    detailHref: '/c2-ordering',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Advance pre-orders for pick up & dine-in',
      'Drink customization (beans, syrups, milk choices)',
      'Member points, tiered perks & reward vouchers',
      'Seamless in-app cashless checkout (Billplz / FPX)',
    ],
    ctaLabel: 'View Project Details',
  },
  {
    slug: 'fintech-payments',
    name: 'Fintech & Payment Gateway Integration',
    category: 'Finance Operations & Billing',
    status: 'Enterprise Solution',
    badge: 'Payment & API',
    summary:
      'Secure payment processing pipelines and billing orchestration integrating Billplz, online banking (FPX), and e-wallets. Features automated invoice generation, payment link dispatch, and real-time reconciliation.',
    detailHref: '/fintech-payments',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Billplz, FPX & DuitNow QR integration',
      'Instant digital receipts & payment links',
      'Zero-delay transaction webhook sync',
      'Audit-ready daily sales reconciliation',
    ],
    ctaLabel: 'View Project Details',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
