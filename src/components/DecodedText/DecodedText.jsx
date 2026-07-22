import { useState, useEffect, useRef } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';

function DecodedText({ text }) {
  const [displayText, setDisplayText] = useState('');
  const frameRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    frameRef.current = 0;
    clearInterval(intervalRef.current);

    // Initial string of random glyphs
    const initText = text.split('').map(char =>
      char === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    ).join('');
    setDisplayText(initText);

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      let allSettled = true;

      const nextText = text.split('').map((char, index) => {
        if (char === ' ') return ' ';

        // Lock characters progressively based on frame count minus index
        if (frameRef.current - index > 0) {
          return char; // Character is settled
        }

        allSettled = false;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');

      setDisplayText(nextText);

      if (allSettled) {
        clearInterval(intervalRef.current);
        setDisplayText(text); // Ensure exactly final string
      }
    }, 80);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  return <>{displayText}</>;
}

export default DecodedText;
