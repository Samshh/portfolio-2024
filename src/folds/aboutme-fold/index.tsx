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
  const trigger = useRef(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text = useGradientText();
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = 2003;
  const birthMonth = 8;
  const birthDay = 4;

  let age = currentYear - birthYear;
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  useGSAP(() => {
    animateText(text, trigger, "Sur moi", "About", 2);

    const text2Element = text2.current;
    if (!text2Element) return;

    const words = text2Element.textContent?.split(" ") || [];
    text2Element.innerHTML = words
      .map(
        (word) =>
          `<span style="display: inline-block; margin-right: 6px;">${word}</span>`
      )
      .join(" ");

    gsap.fromTo(
      text2Element.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.02,
        duration: 1,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            document.title = "Sam Dacara | About";
          },
          onLeaveBack: () => {
            document.title = "Sam Dacara";
          },
        },
      }
    );

    gsap.from(".skill-item", {
      opacity: 0,
      y: 30,
      x: -50,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      ref={trigger}
      className="h-full min-h-screen flex flex-col md:grid md:grid-cols-2 items-center justify-center px-4 py-4 max-w-[1280px] mx-auto select-none"
    >
      <div className="flex flex-col justify-center gap-[0.75rem]">
        <h1
          className="text-[#333333]"
        >
          <span ref={text}></span>.
        </h1>
        <h5 ref={text2} className="font-light flex flex-wrap">
          I'm a {age}-year-old front-end developer from the Philippines
          specializing in seamless 2D & 3D web animations. Outside of
          code, I'm a passionate musician and anime enthusiast.
        </h5>
        <div className="w-full h-[1px] bg-[#333333]"></div>
        <div className="flex flex-wrap justify-start items-center gap-[0.5rem] mt-[0.5rem]">
          {[
            { icon: "akar-icons:react-fill", label: "React" },
            { icon: "cib:typescript", label: "TypeScript" },
            { icon: "cib:greensock", label: "GSAP" },
            { icon: "tabler:brand-threejs", label: "Three.js" },
            { icon: "solar:figma-bold-duotone", label: "Figma" },
            { icon: "simple-icons:blender", label: "Blender" },
            { icon: "simple-icons:inkscape", label: "Inkscape" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="skill-item bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]"
            >
              <Icon className="text-[20px]" icon={icon} />
              <p className="text-[1rem]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
