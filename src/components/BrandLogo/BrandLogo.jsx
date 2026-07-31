import bottom from '../../assets/logo/curve-bottom.svg';
import middle from '../../assets/logo/curve-middle.svg';
import top from '../../assets/logo/curve-top.svg';
import DecodedText from '../DecodedText/DecodedText.jsx';
import './BrandLogo.css';

function BrandLogo({ tone = 'dark', withSubtitle = false }) {
  return (
    <span className={`brand-logo brand-logo--${tone}`} aria-label="DCStack">
      <span className="brand-logo__mark" aria-hidden="true">
        <img src={top} alt="" className="brand-logo__layer brand-logo__layer--top" />
        <img src={middle} alt="" className="brand-logo__layer brand-logo__layer--middle" />
        <img src={bottom} alt="" className="brand-logo__layer brand-logo__layer--bottom" />
      </span>
      <span className="brand-logo__text">
        <strong><DecodedText text="DCSTACK" /></strong>
        {(withSubtitle || tone === 'light') ? <small>Software Division</small> : null}
      </span>
    </span>
  );
}

export default BrandLogo;
