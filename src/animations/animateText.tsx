import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function animateText(
  textRef: React.RefObject<HTMLElement>,
  triggerRef: React.RefObject<HTMLElement>,
  textBefore: string,
  textAfter: string,
  duration: number
) {
  gsap.fromTo(
    textRef.current,
    {
      text: textBefore,
    },
    {
      duration: duration,
      text: textAfter,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    }
  );
}
