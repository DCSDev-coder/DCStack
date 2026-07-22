export const projects = [
  {
    slug: 'smart-rack',
    name: 'DCS Smart Rack Monitoring',
    category: 'Smart infrastructure',
    status: 'Soft launch',
    summary:
      'A mobile app that puts key smart rack information in one clear view.',
    detailHref: '/smart-rack',
    supportHref: '/smart-rack/support',
    privacyHref: '/smart-rack/privacy',
    highlights: ['One clear dashboard', 'Live system status', 'Secure user access', 'Mobile access'],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
