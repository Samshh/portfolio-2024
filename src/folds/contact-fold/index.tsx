import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);
export default function ContactFold() {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();
  const textRef3 = useGradientText();
  const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  const contactTrigger = useRef(null);
  const headlineRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactTrigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.fromTo(
      contactTrigger.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.4"
      )
      .fromTo(textRef1.current, { opacity: 0 }, { opacity: 1 }, "-=0.4")
      .fromTo(textRef2.current, { opacity: 0 }, { opacity: 1 }, "-=0.4")
      .fromTo(textRef3.current, { opacity: 0 }, { opacity: 1 }, "-=0.4");
  });

  return (
    <main
      ref={contactTrigger}
      className="h-screen px-4 py-4 max-w-[1280px] min-h-[400px] mx-auto flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center select-none"
    >
      <div className="flex flex-col justify-start items-start gap-[1.5rem] lg:w-1/2">
        <div ref={headlineRef}>
          <h1>
            Let's<span ref={textRef1}> connect </span>and
            <span ref={textRef2}> create </span> something amazing
            <span ref={textRef3}> together</span>
            <span className="text-[#333333]">.</span>
          </h1>
        </div>
        <div className="flex justify-start flex-wrap items-start gap-[1rem]">
          <a
            href="https://github.com/Samshh/"
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            <Button ref={buttonsRef1}>
              <div className="flex justify-center items-center gap-[.5rem]">
                <Icon className="text-[23px]" icon="mdi:github" />
                <h6 className="font-light">GitHub</h6>
              </div>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/samshh/"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <Button ref={buttonsRef2}>
              <div className="flex justify-center items-center gap-[.5rem]">
                <Icon className="text-[19px]" icon="bi:linkedin" />
                <h6 className="font-light">LinkedIn</h6>
              </div>
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
