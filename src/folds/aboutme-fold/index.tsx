import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { Icon } from "@iconify/react";

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
    text2Element.innerHTML = words
      .map(
        (word) =>
          `<span style="display: inline-block; margin-right: 5px;">${word}</span>`
      )
      .join(" ");

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

    gsap.from(".skill-item", {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
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
    <div
      ref={trigger}
      className="h-auto flex flex-col md:grid md:grid-cols-2 md:h-screen items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none"
    >
      <div className="flex flex-col justify-center gap-[1rem]">
        <div>
          <h1
            className="text-[#333333] w-[265px]"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <span ref={text}></span>.
          </h1>
        </div>
        <div>
          <h5 ref={text2} className="font-light flex flex-wrap">
            A dedicated React developer with a deep appreciation for web design
            and UI/UX, passionate about crafting seamless user experiences. An
            enthusiastic anime aficionado who enjoys exploring different genres,
            and a passionate musician.
          </h5>
        </div>
        <div className="w-full h-[1px] bg-[#333333]"></div>
        <div className="flex flex-wrap justify-start items-center gap-[0.5rem]">
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[22px]" icon="akar-icons:react-fill" />
            <p className="text-[1rem]">React</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="cib:typescript" />
            <p className="text-[1rem]">TypeScript</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="cib:javascript" />
            <p className="text-[1rem]">JavaScript</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[24px]" icon="mdi:tailwind" />
            <p className="text-[1rem]">Tailwind</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[24px]" icon="cib:greensock" />
            <p className="text-[1rem]">GSAP</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon
              className="text-[24px] font-light"
              icon="tabler:brand-threejs"
            />
            <p className="text-[1rem]">Three.js</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[18px]" icon="simple-icons:shadcnui" />
            <p className="text-[1rem]">Shadcn/UI</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="simple-icons:radixui" />
            <p className="text-[1rem]">RadixUI</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="cib:sass" />
            <p className="text-[1rem]">Sass</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[23px]" icon="ion:logo-pwa" />
            <p className="text-[1rem]">PWA</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="devicon-plain:nodejs" />
            <p className="text-[1rem]">Node.js</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="simple-icons:vite" />
            <p className="text-[1rem]">Vite</p>
          </div>
          <div className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[24px]" icon="ri:nextjs-fill" />
            <p className="text-[1rem]">Next.js</p>
          </div>
          <div className="skill-item  bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="cib:git" />
            <p className="text-[1rem]">Git</p>
          </div>
          <div className="skill-item  bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[22px]" icon="solar:figma-bold-duotone" />
            <p className="text-[1rem]">Figma</p>
          </div>
          <div className="skill-item  bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[24px]" icon="simple-icons:blender" />
            <p className="text-[1rem]">Blender</p>
          </div>
          <div className="skill-item  bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
            <Icon className="text-[20px]" icon="simple-icons:inkscape" />
            <p className="text-[1rem]">Inkscape</p>
          </div>
        </div>
      </div>
    </div>
  );
}
