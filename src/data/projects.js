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
    name: 'Smart POS System',
    category: 'F&B & Retail Technology',
    status: 'Production',
    badge: 'Counter POS & Inventory',
    summary:
      'High-speed counter point-of-sale built for modern cafe operations. Coordinates barista workflows, real-time stock tracking, menu and price adjustments, and sales reporting.',
    detailHref: '/c2-pos',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Coordinate barista workflows',
      'Real-time stock tracking',
      'Generate & monitor sales reports',
      'Adjust menu & prices anytime',
    ],
    ctaLabel: 'View Project Details',
  },
  {
    slug: 'c2-ordering-app',
    name: 'Online Ordering & Loyalty',
    category: 'Mobile Applications & Loyalty',
    status: 'Production',
    badge: 'iOS & Android App',
    summary:
      'Customer-facing online ordering application that lets patrons skip the queue with advance pre-orders, customize items, collect loyalty stamps, and send digital gift cards to friends.',
    detailHref: '/c2-ordering',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Advance pre-orders for pick up & dine-in',
      'Menu customization (options, add-ons, notes)',
      'Member points, tiered perks & reward vouchers',
      'Digital gift cards to share with friends',
    ],
    ctaLabel: 'View Project Details',
  },
  {
    slug: 'fintech-payments',
    name: 'Digitalized Platform for Documents',
    category: 'Document Automation & Workflow',
    status: 'Enterprise Solution',
    badge: 'Paperless & Cloud',
    summary:
      'Centralized paperless platform for managing, approving, and archiving business documents. Replaces manual filing with automated routing, e-signatures, version control, and instant search.',
    detailHref: '/fintech-payments',
    supportHref: '/support',
    privacyHref: '/support',
    highlights: [
      'Centralized cloud document repository',
      'Multi-step approval & e-signature workflows',
      'Instant keyword search',
      'Role-based access & audit trail history',
    ],
    ctaLabel: 'View Project Details',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
