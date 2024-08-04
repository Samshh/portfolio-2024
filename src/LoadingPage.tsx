import { useGradientText } from "./animations/useGradientText";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function LoadingPage() {
  const spinIcon = useRef(null);
  const text = useGradientText();
  const iconTl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

  useGSAP(() => {
    iconTl.to(spinIcon.current, { rotate: 360, duration: 2 });
  });

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black z-50 gap-[0.25rem] select-none">
      <h3 className="text-white">
        <span ref={text}>folio</span> <span className="font-thin text-[#333333]">2024</span>
      </h3>
      <div className="flex justify-center items-center gap-[0.5rem]">
        <p className="text-[15px] font-thin">powered by</p>
        <div ref={spinIcon}>
          <Icon icon="logos:react" className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}
