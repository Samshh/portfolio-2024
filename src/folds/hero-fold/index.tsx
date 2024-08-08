import { useRef } from "react";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/animations/scrollToSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroFoldProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function HeroFold({ projectsRef, contactRef }: HeroFoldProps) {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();

  const introTextRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 3 });

    tl.fromTo(
      introTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef1.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef2.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        textRef1.current,
        { text: "l'extrémité" },
        { text: "front-end", duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        textRef2.current,
        { text: "Réagir" },
        { text: "React", duration: 0.8 },
        "-=0.4"
      );
  });

  return (
    <main className="h-screen px-4 py-4 flex items-center min-h-[720px] max-w-[1280px] mx-auto select-none">
      <div className="flex flex-col justify-center h-full lg:w-1/2 gap-[1.5rem]">
        <div className="flex flex-col justify-center items-start">
          <h4 className="font-thin" ref={introTextRef}>
            Sam Dacara
          </h4>
          <h1 ref={headlineRef}>
            A <span ref={textRef1}></span> developer specializing in{" "}
            <span ref={textRef2}></span><span className="text-[#333333]">.</span>
          </h1>
        </div>
        <div className="flex justify-start items-center gap-[1rem]">
          <Button
            ref={buttonsRef1}
            onClick={() => scrollToSection(projectsRef)}
          >
            <h6 className="font-light">PROJECTS</h6>
          </Button>
          <Button ref={buttonsRef2} onClick={() => scrollToSection(contactRef)}>
            <h6 className="font-light">CONTACT</h6>
          </Button>
        </div>
      </div>
    </main>
  );
}
