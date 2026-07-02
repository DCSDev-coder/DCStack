import './IconGlyph.css';

const icons = {
  mobile: (
    <>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  website: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 7h.01M10 7h.01" />
    </>
  ),
  dashboard: (
    <>
      <path d="M21 12a9 9 0 1 1-9-9v9h9Z" />
      <path d="M13 3.05A9 9 0 0 1 20.95 11H13V3.05Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m7 11 2.3-2.3 2.9 4.6 2.1-3.2H17" />
    </>
  ),
  custom: (
    <>
      <path d="M8.5 8.5h-3A2.5 2.5 0 0 1 3 6V5.5A2.5 2.5 0 0 1 5.5 3H6a2.5 2.5 0 0 1 2.5 2.5v3Z" />
      <path d="M15.5 8.5v-3A2.5 2.5 0 0 1 18 3h.5A2.5 2.5 0 0 1 21 5.5V6a2.5 2.5 0 0 1-2.5 2.5h-3Z" />
      <path d="M8.5 15.5v3A2.5 2.5 0 0 1 6 21h-.5A2.5 2.5 0 0 1 3 18.5V18a2.5 2.5 0 0 1 2.5-2.5h3Z" />
      <path d="M15.5 15.5h3A2.5 2.5 0 0 1 21 18v.5a2.5 2.5 0 0 1-2.5 2.5H18a2.5 2.5 0 0 1-2.5-2.5v-3Z" />
      <path d="M8.5 12h7" />
      <path d="M12 8.5v7" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V9l6-4v16" />
      <path d="M10 21V3l10 6v12" />
      <path d="M7 13h.01M7 17h.01M14 11h.01M14 15h.01M17 13h.01M17 17h.01" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v1.5h4V12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.1 1.1-1.6 2.7-1.5 4.5 1.8.1 3.4-.4 4.5-1.5" />
      <path d="M9 15 5.5 11.5c2-4.5 5.7-7.7 11.5-8.5 1.4 5.8-1 10.3-5.5 13L8 12.5" />
      <path d="m14 6 4 4" />
      <circle cx="14.5" cy="8.5" r="1.5" />
    </>
  ),
};

function IconGlyph({ name, color = 'green' }) {
  return (
    <span aria-hidden="true" className={`icon-glyph icon-glyph--${color}`}>
      <svg viewBox="0 0 24 24" focusable="false">
        {icons[name] ?? icons.custom}
      </svg>
    </span>
  );
}

export default IconGlyph;
