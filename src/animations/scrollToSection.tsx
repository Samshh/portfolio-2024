import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(ref: React.RefObject<HTMLDivElement>) {
  if (ref.current) {
    gsap.to(window, {
      duration: 2,
      delay: 0.5,
      scrollTo: {
        y: ref.current,
        offsetY: 70,
      },
      ease: "expo.inOut",
    });
  }
};