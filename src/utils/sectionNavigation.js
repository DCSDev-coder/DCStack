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

  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior, block: 'start' });
  }
}

export function navigateToSection(event, sectionId) {
  const targetId = normalizeSectionId(sectionId);
  event?.preventDefault();

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
