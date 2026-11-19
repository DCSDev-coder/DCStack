const PENDING_SECTION_KEY = 'dcstack-pending-section';

function normalizeSectionId(sectionId) {
  if (!sectionId) return 'top';
  return sectionId.replace(/^\/?#?/, '') || 'top';
}

export function scrollToSection(sectionId, behavior = 'smooth') {
  const targetId = normalizeSectionId(sectionId);

  if (targetId === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const headerInner = document.querySelector('.site-header__inner');
  const headerHeight = headerInner ? headerInner.getBoundingClientRect().height + 1 : 97;

  if (targetId === 'about') {
    const hero = document.querySelector('.hero-about-stage .hero');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hero && window.innerWidth > 860 && !prefersReducedMotion) {
      const top = Math.max(0, hero.offsetTop + hero.offsetHeight - headerHeight);
      window.scrollTo({ top, behavior });
      return;
    }
  }

  const target = document.getElementById(targetId);
  if (target) {
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight);
    window.scrollTo({ top, behavior });
  }
}

export function navigateToSection(event, sectionId) {
  const targetId = normalizeSectionId(sectionId);
  event?.preventDefault();

  if (targetId === 'contact') {
    window.location.assign('/contact');
    return;
  }

  if (window.location.pathname === '/') {
    window.history.replaceState(null, '', '/');
    scrollToSection(targetId);
    return;
  }

  window.sessionStorage.setItem(PENDING_SECTION_KEY, targetId);
  window.location.assign('/');
}

export function consumePendingSection() {
  const hashTarget = normalizeSectionId(window.location.hash);
  const storedTarget = window.sessionStorage.getItem(PENDING_SECTION_KEY);

  if (storedTarget) {
    window.sessionStorage.removeItem(PENDING_SECTION_KEY);
    return normalizeSectionId(storedTarget);
  }

  if (window.location.hash) {
    window.history.replaceState(null, '', '/');
    return hashTarget;
  }

  return null;
}
