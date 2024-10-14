import { useGradientText } from "../animations/useGradientText";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface LoadingPageProps {
  isGlTFLoaded: boolean;
  isStarFieldLoaded: boolean;
  onStart: () => void;
}

export default function LoadingPage({
  isGlTFLoaded,
  isStarFieldLoaded,
  onStart,
}: LoadingPageProps) {
  const spinIcon = useRef(null);
  const text = useGradientText();
  const textLeft = useRef(null);
  const textRight = useRef(null);
  const bottomRef = useRef(null);
  const messageRef = useRef(null);
  const startButtonRef = useRef(null);
  const loadingContentRef = useRef(null);
  const iconTl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
  const startGradient = useGradientText();

  useGSAP(() => {
    iconTl.to(spinIcon.current, { rotate: 360, duration: 2 });
    gsap.from(textLeft.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.25,
    });
    gsap.from(textRight.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(bottomRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.75,
    });
    gsap.to(messageRef.current, {
      opacity: 1,
      duration: 1,
      delay: 5,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    if (isGlTFLoaded && isStarFieldLoaded) {
      gsap.to(loadingContentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(loadingContentRef.current, { display: "none" });
          gsap.set(startButtonRef.current, { display: "flex" });
          gsap.to(startButtonRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "expo.inOut",
          });
        },
      });
    } else {
      gsap.set(loadingContentRef.current, {
        display: "flex",
      });
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
    }
  }, [isGlTFLoaded, isStarFieldLoaded]);

  const handleStartClick = () => {
    gsap.to(startButtonRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onStart,
    });
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-[#0c0c0c] z-40 gap-[0.25rem] select-none">
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
          className="flex justify-center items-center gap-[0.5rem]"
        >
          <h4 className="font-normal text-[1rem] text-[#535353]">made with</h4>
          <div ref={spinIcon}>
            <Icon icon="akar-icons:react-fill" className="text-[22px]" />
          </div>
        </div>
      </div>
      <div ref={messageRef} className="fixed bottom-4 opacity-0">
        {!isGlTFLoaded || !isStarFieldLoaded && (
          <p className="font-normal font-serif text-[1rem] text-[#535353]">
            Rendering in progress, please wait...
          </p>
        )}
      </div>
    </div>
  );
}