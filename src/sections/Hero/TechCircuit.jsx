import './TechCircuit.css';

export default function TechCircuit() {
  return (
    <svg className="tech-circuit" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circuitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(140,198,63,0.15)" />
          <stop offset="100%" stopColor="rgba(11,31,58,0.25)" />
        </linearGradient>
        <linearGradient id="circuitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(244,107,37,0.2)" />
          <stop offset="100%" stopColor="rgba(11,31,58,0.15)" />
        </linearGradient>
      </defs>

      {/* Path 1: Top Left wrapping around */}
      <path id="circuit-path-1" className="tech-circuit__path" d="M -100 200 H 200 V 400 H 400 V 500" stroke="url(#circuitGrad1)" />
      
      {/* Path 2: Bottom Right wrapping around */}
      <path id="circuit-path-2" className="tech-circuit__path" d="M 1100 800 H 800 V 600 H 600 V 500" stroke="url(#circuitGrad2)" />

      {/* Path 3: Bottom Left to Top Right */}
      <path id="circuit-path-3" className="tech-circuit__path" d="M -100 700 H 300 V 850 H 600 V 250 H 1100" stroke="url(#circuitGrad1)" />

      {/* Path 4: Top Right to Bottom Left */}
      <path id="circuit-path-4" className="tech-circuit__path" d="M 1100 300 H 700 V 150 H 350 V 750 H -100" stroke="url(#circuitGrad2)" />
      
      {/* Path 5: Center accent */}
      <path id="circuit-path-5" className="tech-circuit__path" d="M 200 600 H 400 V 800 H 700" stroke="url(#circuitGrad1)" />

      {/* Animated Dots */}
      <circle className="tech-circuit__dot" r="4" fill="#8cc63f">
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#circuit-path-1" />
        </animateMotion>
      </circle>
      
      <circle className="tech-circuit__dot tech-circuit__dot--glow-orange" r="4" fill="#f46b25">
        <animateMotion dur="7s" repeatCount="indefinite">
          <mpath href="#circuit-path-2" />
        </animateMotion>
      </circle>
      
      <circle className="tech-circuit__dot tech-circuit__dot--glow-blue" r="5" fill="#0b1f3a">
        <animateMotion dur="12s" repeatCount="indefinite">
          <mpath href="#circuit-path-3" />
        </animateMotion>
      </circle>
      
      <circle className="tech-circuit__dot" r="3" fill="#8cc63f">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href="#circuit-path-4" />
        </animateMotion>
      </circle>
      
      <circle className="tech-circuit__dot tech-circuit__dot--glow-orange" r="4" fill="#f46b25">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#circuit-path-5" />
        </animateMotion>
      </circle>
    </svg>
  );
}
