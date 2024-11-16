import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function ExperienceFold() {
  const text = useGradientText();
  const trigger = useRef(null);

  useGSAP(() => {
    animateText(text, trigger, "Parcours", "Experience", 2);

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Experience";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | About";
        },
      },
      defaults: { ease: "power2.out" },
    });
  });

  const handleMouseEnter1 = () => {
    gsap.to(text.current, { text: "Parcours", duration: 0.5 });
  };

  const handleMouseLeave1 = () => {
    gsap.to(text.current, { text: "Experience", duration: 0.5 });
  };

  return (
    <div
      ref={trigger}
      className="h-screen px-4 py-4 flex items-center min-h-[720px] max-w-[1280px] mx-auto select-none"
    >
      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <h1>
          <span
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            ref={text}
          ></span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
    </div>
  );
}
