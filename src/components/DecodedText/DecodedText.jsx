import { useState, useEffect, useRef } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';

function DecodedText({ text, speed = 80 }) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setDisplayText(text);
      return undefined;
    }

    frameRef.current = 0;
    clearInterval(intervalRef.current);

    const initText = text
      .split('')
      .map((char) => (char === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
      .join('');
    setDisplayText(initText);

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      let allSettled = true;

      const nextText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (frameRef.current - index > 0) {
            return char;
          }
          allSettled = false;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (allSettled) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return <>{displayText}</>;
}

export default DecodedText;
