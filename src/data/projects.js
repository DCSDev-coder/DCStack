export const projects = [
  {
    slug: 'smart-rack',
    name: 'Smart Rack Monitoring',
    category: 'Smart infrastructure',
    status: 'Soft launch',
    summary:
      'A clear monitoring system for smart rack displays and supported mobile devices.',
    detailHref: '/smart-rack',
    supportHref: '/smart-rack/support',
    privacyHref: '/smart-rack/privacy',
    highlights: ['Clear rack display', 'Live system status', 'Secure user access', 'Mobile access'],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
