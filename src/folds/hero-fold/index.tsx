import { useRef, useState } from "react";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/animations/scrollToSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import useAnimateButton from "@/animations/animateButton";

interface HeroFoldProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function HeroFold({ projectsRef, contactRef }: HeroFoldProps) {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();

  const spanRef1 = useRef(null);
  const spanRef2 = useRef(null);
  const spanRef3 = useRef(null);

  const introTextRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  const buttonsRef3 = useRef(null);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleResumeClick = () => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true);

    const resumeUrl = `/SamResume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SamResume.pdf";
    link.click();

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.5,
    });

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
        { y: 25, x: -25, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        buttonsRef2.current,
        { y: 25, x: -25, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        buttonsRef3.current,
        { y: 25, x: -25, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
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

  useAnimateButton(spanRef1, buttonsRef1);
  useAnimateButton(spanRef2, buttonsRef2);
  useAnimateButton(spanRef3, buttonsRef3);

  return (
    <div className="h-full min-h-screen px-4 py-4 flex items-center max-w-[1280px] mx-auto select-none">
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
            variant={"default"}
          >
            <span ref={spanRef1}>PROJECTS</span>
          </Button>
          <Button ref={buttonsRef2} onClick={() => scrollToSection(contactRef)}>
            <span ref={spanRef2}>CONTACT</span>
          </Button>
          <Button
            ref={buttonsRef3}
            onClick={handleResumeClick}
            disabled={isButtonDisabled}
          >
            <span ref={spanRef3}>
              <Icon icon="ph:scroll-light" className="text-[26px]" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
