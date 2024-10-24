import { useRef } from "react";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/animations/scrollToSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useAnimateButton from "@/animations/animateButton";
import { Icon } from "@iconify/react";

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
  const buttonsRef3 = useRef(null);

  const text2 = useRef<HTMLSpanElement>(null);
  const text3 = useRef<HTMLSpanElement>(null);

  useAnimateButton(text2, buttonsRef1, "TRAVAUX", "PROJECTS", 0.5);
  useAnimateButton(text3, buttonsRef2, "CONNECTER", "CONTACT", 0.5);

  const handleResumeClick = () => {
    const resumeUrl = `/SamResume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SamResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.inOut" }, delay: 0.5 });

    tl.fromTo(
      introTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef1.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef2.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef3.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        textRef1.current,
        { text: "devant" },
        { text: "front-end", duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        textRef2.current,
        { text: "Réagir" },
        { text: "React", duration: 0.8 },
        "-=0.5"
      );
  });

  return (
    <div className="h-screen px-4 py-4 flex items-center min-h-[720px] max-w-[1280px] mx-auto select-none">
      <div className="flex flex-col justify-center h-full md:w-1/2 gap-[1.5rem]">
        <div className="flex flex-col justify-center items-start">
          <em>
            <h4 className="font-thin text-[#535353]" ref={introTextRef}>
              Sam Dacara
            </h4>
          </em>
          <h1 ref={headlineRef}>
            A <span className="w-[213px]" ref={textRef1}></span> developer
            specializing in <span className="w-[121px]" ref={textRef2}></span>
            <span className="text-[#333333]">.</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-[1rem]">
          <Button
            ref={buttonsRef1}
            onClick={() => scrollToSection(projectsRef)}
          >
            <h6 className="font-light">
              <span ref={text2}>PROJECTS</span>
            </h6>
          </Button>
          <Button ref={buttonsRef2} onClick={() => scrollToSection(contactRef)}>
            <h6 className="font-light">
              <span ref={text3}>CONTACT</span>
            </h6>
          </Button>
          <Button
            ref={buttonsRef3}
            className="text-[26px]"
            onClick={handleResumeClick}
          >
            <Icon icon="ph:scroll-light" />
          </Button>
        </div>
      </div>
    </div>
  );
}
