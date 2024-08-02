import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-10 h-10 bg-transparent border-2 border-blue-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
