import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    const onMouseMove = (e: MouseEvent) => {
      setIsActive(true);
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      inactivityTimeoutRef.current = setTimeout(() => {
        if (!isHoveredRef.current) {
          setIsActive(false);
        }
      }, 500);

      gsap.to(bigBall, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.4,
      });
      gsap.to(smallBall, {
        x: e.clientX - 5,
        y: e.clientY - 7,
        duration: 0.1,
      });
    };

    const onMouseHover = () => {
      isHoveredRef.current = true;
      setIsActive(true);
      gsap.to([bigBall, smallBall], {
        scale: 4,
        duration: 0.3,
        stagger: 0.1,
      });
    };

    const onMouseHoverOut = () => {
      isHoveredRef.current = false;
      gsap.to([bigBall, smallBall], {
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    };

    const addEventListeners = () => {
      document.body.addEventListener("mousemove", onMouseMove);

      const hoverables = document.querySelectorAll(".hoverable");
      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseenter", onMouseHover);
        hoverable.addEventListener("mouseleave", onMouseHoverOut);
      });
    };

    const observer = new MutationObserver(() => {
      addEventListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    addEventListeners();

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    gsap.to([bigBall, smallBall], {
      opacity: isActive ? 1 : 0,
      duration: 0.5,
    });
  }, [isActive]);

  return (
    <div>
      <div
        ref={bigBallRef}
        className="fixed top-0 left-0 mix-blend-difference pointer-events-none w-[30px] h-[30px] bg-[#333333] opacity-50 rounded-full hidden sm:block -z-10"
      />
      <div
        ref={smallBallRef}
        className="fixed top-0 left-0 z-40 pointer-events-none mix-blend-difference w-[10px] h-[10px] bg-[#e7e7e7] rounded-full hidden sm:block"
      />
    </div>
  );
};

export default CustomCursor;