import { useGradientText } from "@/animations/useGradientText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFold() {
  const text = useGradientText();
  const start = useRef(null);
  const end = useRef(null);
  const pin = useRef(null);

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      return;
    }

    ScrollTrigger.create({
      trigger: start.current,
      endTrigger: end.current,
      start: "center center",
      end: "center center",
      pin: pin.current,
      markers: false,
      toggleActions: "play none none none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <main className="md:grid md:grid-cols-2 h-auto min-h-[720px] flex flex-col md:flex-row items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem]">
      <div ref={pin} className="w-full h-auto flex flex-col gap-[1rem]">
        <h3>
          <span ref={text}>Projects</span>.
        </h3>
        <h6 className="font-light">Some of my selected works</h6>
      </div>
      <div className="w-full flex flex-col gap-[1rem]">
        <div ref={start} className="flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="src/assets/IMG_3622.JPG" alt="" />
          </div>
          <p className="text-[15px]">Blockchain & Website Development</p>
          <h4>ChainMed</h4>
        </div>
        <div className="flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="src/assets/IMG_3622.JPG" alt="" />
          </div>
          <p className="text-[15px]">Website Development</p>
          <h4>OCP Mapúa MCM</h4>
        </div>
        <div className="flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="src/assets/IMG_3622.JPG" alt="" />
          </div>
          <p className="text-[15px]">JavaScript Library Development</p>
          <h4>sAminate</h4>
        </div>
        <div className="flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="src/assets/IMG_3622.JPG" alt="" />
          </div>
          <p className="text-[15px]">Discord Bot Development</p>
          <h4>TicketLy</h4>
        </div>
        <div ref={end} className="flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="src/assets/IMG_3622.JPG" alt="" />
          </div>
          <p className="text-[15px]">Website Development</p>
          <h4>Old Portfolio</h4>
        </div>
      </div>
    </main>
  );
}
