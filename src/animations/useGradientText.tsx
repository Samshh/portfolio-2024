import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGradientText(colors = ['#79e7ff', '#238cc8', '#47c5e1'], duration = 2) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.set(textRef.current, {
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      });

      gsap.to(textRef.current, {
        backgroundPosition: '100% 0',
        duration: duration,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      });
    }
  }, [colors, duration]);

  return textRef;
}