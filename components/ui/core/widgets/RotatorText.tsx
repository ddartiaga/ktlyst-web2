'use client';

import { useEffect, useState } from 'react';

export default function RotatorText({texts}:{texts: string[]}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`rotator-text ${fade ? 'rotator-fade-in' : 'rotator-fade-out'}`}>
      {texts[index]}
    </span>
  );
}
