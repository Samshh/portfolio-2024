import { useGradientText } from "@/animations/useGradientText";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMeFold() {
  const trigger = useRef<HTMLElement>(null);
  const text = useGradientText();
  const textRef = useRef<HTMLHeadingElement>(null);
  const startHere = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // const paths = document.querySelectorAll<SVGPathElement>(".logo path");
    const words = textRef.current
      ? textRef.current.querySelectorAll("span")
      : [];

    gsap.fromTo(
      words,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.10,
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      ScrollTrigger.create({
        trigger: startHere.current,
        start: "20% center",
        end: "80% center",
        pin: pin.current,
        markers: false,
        toggleActions: "play none none none",
      });
    }

    // paths.forEach((path) => {
    //   const length = path.getTotalLength();
    //   gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    //   gsap.to(path, {
    //     scrollTrigger: {
    //       trigger: trigger.current,
    //       start: "top center",
    //       end: "center center",
    //       scrub: false,
    //       markers: false,
    //       toggleActions: "play none none reverse",
    //     },
    //     strokeDashoffset: 0,
    //     duration: 4,
    //     delay: 0.25,
    //     ease: "power1.inOut",
    //   });
    // });
  }, []);

  const text2 =
    "A dedicated React developer with a deep appreciation for various coding languages, an enthusiastic anime aficionado who enjoys exploring different genres, and a passionate musician.";

  return (
    <main
      ref={trigger}
      className="h-full flex flex-col md:h-screen md:items-start md:grid md:grid-cols-2  items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none gap-[3rem]"
    >
      <div ref={pin} className="flex flex-col gap-[1rem]">
        <div>
          <h3 className="text-[#333333]">
            <span ref={text}>About me</span>.
          </h3>
        </div>
        <div className="bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg">
          <h6 className="font-light flex flex-wrap" ref={textRef}>
            {text2.split(" ").map((word, index) => (
              <span
                key={index}
                style={{ display: "inline-block", marginRight: "12px" }}
              >
                {word}
              </span>
            ))}
          </h6>
        </div>
      </div>
      <div ref={startHere} className="flex flex-col items-center justify-center bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg">
        <img className="rounded-lg" src="/assets/SamGoogle.png" alt="me" />
      </div>
    </main>
  );
}
