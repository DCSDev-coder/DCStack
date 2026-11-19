import { useEffect, useRef } from 'react';
import Hero from '../Hero/Hero.jsx';
import About from '../About/About.jsx';
import './HeroAboutStage.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function HeroAboutStage() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return undefined;

    const heroEl = stageEl.querySelector('.hero');
    const aboutEl = stageEl.querySelector('.about');
    const aboutInnerEl = stageEl.querySelector('.about__inner');
    if (!heroEl || !aboutEl || !aboutInnerEl) return undefined;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;

    const resetStyles = () => {
      aboutInnerEl.style.opacity = '';
      aboutInnerEl.style.transform = '';
    };

    const update = () => {
      rafId = 0;

      if (reducedMotionQuery.matches || window.innerWidth <= 860) {
        resetStyles();
        return;
      }

      const heroRect = heroEl.getBoundingClientRect();
      const aboutHeight = aboutEl.offsetHeight || 1;
      const uncoveredPx = window.innerHeight - heroRect.bottom;
      const progress = clamp(uncoveredPx / aboutHeight, 0, 1);

      const opacity = 0.25 + 0.75 * progress;
      const translateY = (1 - progress) * 28;
      const scale = 0.97 + 0.03 * progress;

      aboutInnerEl.style.opacity = opacity.toFixed(3);
      aboutInnerEl.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    reducedMotionQuery.addEventListener('change', scheduleUpdate);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotionQuery.removeEventListener('change', scheduleUpdate);
      resetStyles();
    };
  }, []);

  return (
    <div className="hero-about-stage" ref={stageRef}>
      <Hero />
      <About />
    </div>
  );
}

export default HeroAboutStage;
