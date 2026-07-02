import bottom from '../../assets/logo/curve-bottom.svg';
import middle from '../../assets/logo/curve-middle.svg';
import top from '../../assets/logo/curve-top.svg';
import TechCircuit from './TechCircuit.jsx';

function HeroStack() {
  return (
    <div className="hero-stack" aria-label="DCStack layered technology mark">
      <TechCircuit />
      <img src={top} alt="" className="hero-stack__layer hero-stack__layer--top" />
      <img src={middle} alt="" className="hero-stack__layer hero-stack__layer--middle" />
      <img src={bottom} alt="" className="hero-stack__layer hero-stack__layer--bottom" />
      <span className="hero-stack__glow" aria-hidden="true" />
    </div>
  );
}

export default HeroStack;
