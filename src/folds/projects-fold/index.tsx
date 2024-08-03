import { useGradientText } from "@/animations/useGradientText";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateOpacity } from "@/animations/animateOpacity";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFold() {
  const text = useGradientText();
  const start = useRef(null);
  const end = useRef(null);
  const pin = useRef(null);
  const [description, setDescription] = useState(
    "A curated selection of my projects, each reflecting my skills, creativity, and dedication."
  );

  function changeDescription(
    trigger: string,
    description: string,
    previousDescription: string
  ) {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      onEnter: () => setDescription(description),
      onLeaveBack: () => setDescription(previousDescription),
    });
  }

  useGSAP(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      return;
    }

    ScrollTrigger.create({
      trigger: start.current,
      endTrigger: end.current,
      start: "center center",
      end: "bottom center",
      pin: pin.current,
      markers: false,
      toggleActions: "play none none none",
    });

    changeDescription(
      ".project1",
      "ChainMed was our entry for the PBWx Davao hackathon. Using the React framework and web3 technologies, we built a secure application for automating healthcare. It showcases our ability to create user-friendly and tamper-proof solutions in the medical sector.",
      "A curated selection of my projects, each reflecting my skills, creativity, and dedication."
    );

    changeDescription(
      ".project2",
      "GDSC Landing Page is a website that showcases the different projects and events of GDSC Mapúa MCM. Reaching out to students and developers, it serves as a hub for learning and collaboration.",
      "ChainMed was our entry for the PBWx Davao hackathon. Using the React framework and web3 technologies, we built a secure application for automating healthcare. It showcases our ability to create user-friendly and tamper-proof solutions in the medical sector."
    );

    changeDescription(
      ".project3",
      "OCP Mapúa MCM is a website that helps students at Mapúa Malayan Colleges Mindanao to find the best companies for their internship.",
      "GDSC Landing Page is a website that showcases the different projects and events of GDSC Mapúa MCM. Reaching out to students and developers, it serves as a hub for learning and collaboration."
    );

    changeDescription(
      ".project4",
      "A JavaScript library that helps developers to animate their websites, this includes a website demo to showcase those animations.",
      "OCP Mapúa MCM is a website that helps students at Mapúa Malayan Colleges Mindanao to find the best companies for their internship."
    );

    changeDescription(
      ".project5",
      "TicketLy is a Discord bot that helps server owners to manage their server by creating tickets for their members, this promotes a more organized and efficient way of handling server-related issues.",
      "A JavaScript library that helps developers to animate their websites, this includes a website demo to showcase those animations."
    );

    changeDescription(
      ".project6",
      "My first website :)",
      "TicketLy is a Discord bot that helps server owners to manage their server by creating tickets for their members, this promotes a more organized and efficient way of handling server-related issues."
    );

    animateOpacity(".project1");
    animateOpacity(".project2");
    animateOpacity(".project3");
    animateOpacity(".project4");
    animateOpacity(".project5");
    animateOpacity(".project6");
  });

  return (
    <main className="md:grid md:grid-cols-2 h-auto min-h-[720px] flex flex-col md:flex-row items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[3rem]">
      <div ref={pin} className="w-full h-auto flex flex-col gap-[1rem]">
        <h3>
          <span ref={text}>Projects</span>.
        </h3>
        <h6 className="font-light">{description}</h6>
      </div>
      <div className="w-full flex flex-col gap-[1rem]">
        <div
          ref={start}
          className="project1 flex flex-col items-start gap-[0.5rem]"
        >
          <div>
            <img className="rounded-md" src="/assets/chainmed.png" alt="" />
          </div>
          <p className="text-[15px]">Blockchain & Website Development</p>
          <h4>ChainMed</h4>
        </div>
        <div className="project2 flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="/assets/gdscproj.webp" alt="" />
          </div>
          <p className="text-[15px]">Website Development</p>
          <h4>GDSC Landing Page</h4>
        </div>
        <div className="project3 flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="/assets/ocpproj.webp" alt="" />
          </div>
          <p className="text-[15px]">Website Development</p>
          <h4>OCP Mapúa MCM</h4>
        </div>
        <div className="project4 flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="/assets/sAproj.webp" alt="" />
          </div>
          <p className="text-[15px]">Library & Website Development</p>
          <h4>sAminate</h4>
        </div>
        <div className="project5 flex flex-col items-start gap-[0.5rem]">
          <div>
            <img className="rounded-md" src="/assets/discproj.webp" alt="" />
          </div>
          <p className="text-[15px]">Discord Bot Development</p>
          <h4>TicketLy</h4>
        </div>
        <div
          ref={end}
          className="project6 flex flex-col items-start gap-[0.5rem]"
        >
          <div>
            <img
              className="rounded-md"
              src="src/assets/portfolioold.png"
              alt=""
            />
          </div>
          <p className="text-[15px]">Website Development</p>
          <h4>Old Portfolio</h4>
        </div>
      </div>
    </main>
  );
}
