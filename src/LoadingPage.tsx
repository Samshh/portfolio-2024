import { useGradientText } from "./animations/useGradientText";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function LoadingPage() {
  const spinIcon = useRef(null);
  const text = useGradientText();
  const textLeft = useRef(null);
  const textRight = useRef(null);
  const bottomRef = useRef(null);
  const messageRef = useRef(null);
  const iconTl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

  useGSAP(() => {
    iconTl.to(spinIcon.current, { rotate: 360, duration: 2 });
    gsap.from(textLeft.current, { y: -30, opacity: 0, duration: 1, delay: 0.25 });
    gsap.from(textRight.current, { y: -30, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(bottomRef.current, { y: 20, opacity: 0, duration: 1, delay: 0.75 });
    gsap.to(messageRef.current, { opacity: 1, duration: 1, delay: 5, ease: "power2.inOut" });
  });

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-[#0c0c0c] z-40 gap-[0.25rem] select-none">
      <div className="flex justify-center items-center">
        <div ref={textLeft}>
          <h4>
            <span ref={text}>folio</span>
          </h4>
        </div>
        <div ref={textRight}>
          <h4 className="font-light text-[#333333]">2024</h4>
        </div>
      </div>
      <div ref={bottomRef} className="flex justify-center items-center gap-[0.5rem]">
        <h4 className="font-normal text-[1rem]">made with</h4>
        <div ref={spinIcon}>
          <Icon icon="logos:react" className="text-[20px]" />
        </div>
      </div>
      <div ref={messageRef} className="fixed bottom-4 opacity-0">
        <p className="font-normal font-serif text-[1rem] text-[#333333]">Rendering in progress, please wait...</p>
      </div>
    </div>
  );
}