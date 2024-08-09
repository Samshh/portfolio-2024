import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function useAnimateButton(
  textRef: React.RefObject<HTMLElement>,
  triggerRef: React.RefObject<HTMLElement>,
  textOnEnter: string,
  textOnLeave: string,
  duration: number
) {
  useEffect(() => {
    const triggerElement = triggerRef.current;
    const textElement = textRef.current;

    if (!triggerElement || !textElement) return;
    if (window.innerWidth < 768) return;

    const onMouseEnter = () => {
      gsap.to(textElement, {
        duration: duration,
        text: textOnEnter,
        ease: "expo.inOut",
      });
    };

    const onMouseLeave = () => {
      gsap.to(textElement, {
        duration: duration,
        text: textOnLeave,
        ease: "expo.inOut",
      });
    };

    triggerElement.addEventListener("mouseenter", onMouseEnter);
    triggerElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      triggerElement.removeEventListener("mouseenter", onMouseEnter);
      triggerElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [textRef, triggerRef, textOnEnter, textOnLeave, duration]);
}