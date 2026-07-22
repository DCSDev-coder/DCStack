import './SmartRackCircuit.css';

export default function SmartRackCircuit() {
  return (
    <svg className="smart-rack-circuit" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srGradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(140,198,63,0.05)" />
          <stop offset="50%" stopColor="rgba(140,198,63,0.35)" />
          <stop offset="100%" stopColor="rgba(140,198,63,0.05)" />
        </linearGradient>
        <linearGradient id="srGradOrange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(244,107,37,0.4)" />
          <stop offset="100%" stopColor="rgba(140,198,63,0.1)" />
        </linearGradient>
      </defs>

      {/* Rack Matrix Vertical Bus Lines */}
      <line x1="200" y1="0" x2="200" y2="600" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="450" y1="0" x2="450" y2="600" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="750" y1="0" x2="750" y2="600" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="1000" y1="0" x2="1000" y2="600" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />

      {/* Main Data Flow Bus Lines */}
      <path id="sr-path-1" className="sr-circuit__line" d="M -50,180 H 450 V 380 H 750 V 220 H 1250" stroke="url(#srGradGreen)" strokeWidth="2" fill="none" />
      <path id="sr-path-2" className="sr-circuit__line" d="M 1250,440 H 750 V 120 H 200 V 480 H -50" stroke="url(#srGradOrange)" strokeWidth="1.5" fill="none" />
      <path id="sr-path-3" className="sr-circuit__line" d="M 450,120 V 480" stroke="rgba(140,198,63,0.25)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path id="sr-path-4" className="sr-circuit__line" d="M 750,180 V 520" stroke="rgba(244,107,37,0.25)" strokeWidth="1.5" fill="none" />

      {/* Server Node Status Indicators */}
      <g className="sr-node" transform="translate(450, 180)">
        <circle r="6" fill="#8cc63f" />
        <circle r="16" fill="none" stroke="#8cc63f" strokeWidth="1.5" className="sr-pulse" />
      </g>

      <g className="sr-node" transform="translate(750, 380)">
        <circle r="6" fill="#f46b25" />
        <circle r="18" fill="none" stroke="#f46b25" strokeWidth="1.5" className="sr-pulse sr-pulse--delay" />
      </g>

      <g className="sr-node" transform="translate(200, 120)">
        <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#8cc63f" opacity="0.8" />
      </g>

      <g className="sr-node" transform="translate(1000, 220)">
        <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#f46b25" opacity="0.8" />
      </g>

      {/* Active Telemetry Dots Traveling along Bus */}
      <circle className="sr-dot sr-dot--green" r="6" fill="#8cc63f">
        <animateMotion dur="7s" repeatCount="indefinite">
          <mpath href="#sr-path-1" />
        </animateMotion>
      </circle>

      <circle className="sr-dot sr-dot--orange" r="5" fill="#f46b25">
        <animateMotion dur="9s" repeatCount="indefinite">
          <mpath href="#sr-path-2" />
        </animateMotion>
      </circle>

      <circle className="sr-dot sr-dot--white" r="4" fill="#ffffff">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#sr-path-3" />
        </animateMotion>
      </circle>

      <circle className="sr-dot sr-dot--green" r="4.5" fill="#8cc63f">
        <animateMotion dur="5.5s" repeatCount="indefinite">
          <mpath href="#sr-path-4" />
        </animateMotion>
      </circle>
    </svg>
  );
}
