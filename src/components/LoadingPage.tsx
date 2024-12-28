import { useGradientText } from "../animations/useGradientText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface LoadingPageProps {
  isGlTFLoaded: boolean;
  isStarFieldLoaded: boolean;
  progress: number;
  onStart: () => void;
}

export default function LoadingPage({
  isGlTFLoaded,
  isStarFieldLoaded,
  progress,
  onStart,
}: LoadingPageProps) {
  const text = useGradientText();
  const textLeft = useRef(null);
  const textRight = useRef(null);
  const bottomRef = useRef(null);
  const progressRef = useRef(null);
  const messageRef = useRef(null);
  const startButtonRef = useRef(null);
  const loadingContentRef = useRef(null);
  const startGradient = useGradientText();

  useGSAP(() => {
    gsap.from(textLeft.current, {
      y: -30,
      opacity: 0,
      duration: 0.75,
      delay: 0.25,
    });
    gsap.from(textRight.current, {
      y: -30,
      opacity: 0,
      duration: 0.75,
      delay: 0.5,
    });
    gsap.from(bottomRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.75,
      delay: 0.75,
    });
    gsap.to(progressRef.current, {
      opacity: 1,
      duration: 0.75,
      delay: 0.5,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    document.title = "Sam Dacara | Loading";
    const tl = gsap.timeline();

    if (isGlTFLoaded && isStarFieldLoaded) {
      tl.to(loadingContentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
      })
        .set(loadingContentRef.current, { display: "none" })
        .set(startButtonRef.current, { display: "flex" })
        .to(startButtonRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "expo.inOut",
          onStart: () => {
            document.title = "Sam Dacara | Start";
          },
        })
        .to(progressRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "expo.inOut",
        });
    } else {
      gsap.set(loadingContentRef.current, { display: "flex" });
      gsap.to(loadingContentRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "expo.inOut",
      });
      gsap.to(startButtonRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(startButtonRef.current, { display: "none" });
        },
      });
      gsap.to((progressRef.current, messageRef.current), {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "expo.inOut",
      });
    }
  }, [isGlTFLoaded, isStarFieldLoaded]);

  const handleStartClick = () => {
    document.title = "Sam Dacara";
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
      onComplete: onStart,
    });

    tl.to(startButtonRef.current, { opacity: 0 }).to(
      messageRef.current,
      { opacity: 0 },
      "<"
    );
  };

  return (
    <div className="h-full min-h-screen fixed inset-0 flex flex-col justify-center items-center bg-[#0c0c0c] z-40 gap-[0.25rem] select-none">
      <div
        ref={startButtonRef}
        className="hidden opacity-0 p-[1rem] flex-col items-center justify-center gap-[0.5rem]"
      >
        <em className="text-center text-[#535353] flex flex-col gap-[0.5rem]">
          <p className="text-[0.7rem]">(To the Stars and the Abyss)</p>
          <h4 className="font-thin font-special astra">Ad astra Abyssosque</h4>
        </em>
        <Button className="px-[2rem]" onClick={handleStartClick}>
          <h6 ref={startGradient}>START</h6>
        </Button>
      </div>
      <div
        ref={loadingContentRef}
        className="flex items-center justify-center flex-col gap-[0.5rem]"
      >
        <div className="flex justify-center items-center">
          <div ref={textLeft}>
            <h4>
              <span ref={text}>folio</span>
            </h4>
          </div>
          <div ref={textRight}>
            <h4 className="font-light text-[#535353]">2024</h4>
          </div>
        </div>
        <div
          ref={bottomRef}
          className="flex flex-col justify-center items-center gap-[0.5rem]"
        >
          <h4 className="font-normal text-[1rem] text-[#535353]">
            Made with React
          </h4>
        </div>
      </div>
      <div className="fixed bottom-4 text-center px-[1rem]">
        <div ref={progressRef} className="opacity-0">
          <p className="font-normal font-serif text-[1rem] md:text-[1.25rem] text-[#535353]">
            {progress}%
          </p>
        </div>
        <div ref={messageRef} className="opacity-0">
          <p className="font-normal font-serif text-[0.6rem] md:text-[0.8rem] text-[#535353]">
            *Use graphics acceleration for better performance*
          </p>
        </div>
      </div>
    </div>
  );
}
