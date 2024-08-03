import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateOpacity(trigger: string) {
  gsap.fromTo(
    trigger,
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        scrub: false,
        markers: false,
        toggleActions: "play reverse play reverse"
      },
    }
  );
}