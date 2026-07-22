import './SupportCircuit.css';

export default function SupportCircuit() {
  return (
    <svg className="support-circuit" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="supGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(140,198,63,0.35)" />
          <stop offset="100%" stopColor="rgba(244,107,37,0.15)" />
        </linearGradient>
        <linearGradient id="supGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(244,107,37,0.4)" />
          <stop offset="100%" stopColor="rgba(140,198,63,0.15)" />
        </linearGradient>
      </defs>

      {/* Network Constellation Lines */}
      <path id="sup-path-1" className="support-circuit__line" d="M -50,100 L 250,150 L 450,80 L 750,220 L 1050,120" stroke="url(#supGrad1)" strokeWidth="1.5" fill="none" />
      <path id="sup-path-2" className="support-circuit__line" d="M -50,450 L 300,380 L 550,520 L 820,350 L 1050,480" stroke="url(#supGrad2)" strokeWidth="1.5" fill="none" />
      <path id="sup-path-3" className="support-circuit__line" d="M 250,150 L 300,380" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <path id="sup-path-4" className="support-circuit__line" d="M 450,80 L 550,520" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
      <path id="sup-path-5" className="support-circuit__line" d="M 750,220 L 820,350" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" fill="none" />

      {/* Static Node Circles */}
      <circle cx="250" cy="150" r="4" fill="#8cc63f" opacity="0.8" />
      <circle cx="450" cy="80" r="5" fill="#f46b25" opacity="0.9" />
      <circle cx="750" cy="220" r="4" fill="#8cc63f" opacity="0.8" />
      <circle cx="300" cy="380" r="5" fill="#f46b25" opacity="0.9" />
      <circle cx="550" cy="520" r="4" fill="#8cc63f" opacity="0.8" />
      <circle cx="820" cy="350" r="5" fill="#8cc63f" opacity="0.9" />

      {/* Pulse Rings around Nodes */}
      <circle cx="450" cy="80" r="14" fill="none" stroke="#f46b25" strokeWidth="1.5" className="support-circuit__pulse" />
      <circle cx="820" cy="350" r="16" fill="none" stroke="#8cc63f" strokeWidth="1.5" className="support-circuit__pulse support-circuit__pulse--delay" />

      {/* Moving Dots along paths */}
      <circle className="support-circuit__dot" r="5" fill="#8cc63f">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#sup-path-1" />
        </animateMotion>
      </circle>

      <circle className="support-circuit__dot support-circuit__dot--orange" r="5" fill="#f46b25">
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#sup-path-2" />
        </animateMotion>
      </circle>

      <circle className="support-circuit__dot support-circuit__dot--white" r="4" fill="#ffffff">
        <animateMotion dur="4.5s" repeatCount="indefinite">
          <mpath href="#sup-path-3" />
        </animateMotion>
      </circle>

      <circle className="support-circuit__dot" r="4.5" fill="#8cc63f">
        <animateMotion dur="9s" repeatCount="indefinite">
          <mpath href="#sup-path-4" />
        </animateMotion>
      </circle>

      <circle className="support-circuit__dot support-circuit__dot--orange" r="4" fill="#f46b25">
        <animateMotion dur="6.5s" repeatCount="indefinite">
          <mpath href="#sup-path-5" />
        </animateMotion>
      </circle>
    </svg>
  );
}
