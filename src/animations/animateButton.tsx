import { useEffect } from "react";
import { gsap } from "gsap";

export default function useAnimateButton(
  textRef: React.RefObject<HTMLElement>,
  triggerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    const triggerElement = triggerRef.current;
    const textElement = textRef.current;

    if (!triggerElement || !textElement) return;
    if (window.innerWidth < 768) return;

    const onMouseEnter = () => {
      gsap.to(textElement, {
        opacity: 0.5,
        duration: 0.25,
      });
    };

    const onMouseLeave = () => {
      gsap.to(textElement, {
        opacity: 1,
        duration: 0.25,
      });
    };

    triggerElement.addEventListener("mouseenter", onMouseEnter);
    triggerElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      triggerElement.removeEventListener("mouseenter", onMouseEnter);
      triggerElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [textRef, triggerRef]);
}
