import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function AboutMeFold() {
  const trigger = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text = useGradientText();

  useGSAP(() => {
    animateText(text, trigger, "Sur moi", "About me", 2);

    const text2Element = text2.current;
    if (!text2Element) return;

    const words = text2Element.textContent?.split(" ") || [];
    text2Element.innerHTML = words.map((word) => `<span style="display: inline-block; margin-right: 5px;">${word}</span>`).join(" ");

    gsap.fromTo(
      text2Element.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center", 
          end: "bottom center", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  });

  const handleMouseEnter1 = () => {
    if (text.current) {
      gsap.to(text.current, { text: "Sur moi", duration: 0.5 });
    }
  };

  const handleMouseLeave1 = () => {
    if (text.current) {
      gsap.to(text.current, { text: "About me", duration: 0.5 });
    }
  };

  return (
    <main
      ref={trigger}
      className="h-auto flex flex-col md:grid md:grid-cols-2 md:h-screen items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none gap-[1rem]"
    >
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h1 className="text-[#333333] w-[265px]" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <span ref={text}></span>.
          </h1>
        </div>
        <div>
          <h5 ref={text2} className="font-light flex flex-wrap">
            A dedicated React developer with a deep appreciation for various coding languages, an enthusiastic anime aficionado who enjoys exploring different genres, and a passionate musician.
          </h5>
        </div>
      </div>
    </main>
  );
}
