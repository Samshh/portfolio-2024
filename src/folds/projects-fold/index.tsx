import { useGradientText } from "@/animations/useGradientText";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateOpacity } from "@/animations/animateOpacity";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFold() {
  const text = useGradientText();
  const maintained = useGradientText();
  const maintained2 = useGradientText();
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
      "My first website :) a stepping stone to where I am now.",
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
    <main className="md:grid md:grid-cols-2 h-auto min-h-[720px] flex flex-col md:flex-row items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[3rem] select-none">
      <div ref={pin} className="w-full h-auto flex flex-col gap-[1rem]">
        <h3>
          <span ref={text}>Projects</span>(6)
          <span className="text-[#333333]">.</span>
        </h3>
        <h6 className="font-light bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg">{description}</h6>
      </div>
      <div className="w-full flex flex-col gap-[1rem]">
        <div
          ref={start}
          className="project1 flex flex-col items-start gap-[0.5rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group"
        >
          <a
            href="https://github.com/Samshh/Hackathon-Project---The-Launchpad"
            target="_blank"
            title="sAminate Docs"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/chainmed.png"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>
          <p className="text-[15px]">
            Blockchain & Website Development -{" "}
            <span className="text-[#F4B400]">in development</span>
          </p>
          <h4>ChainMed</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[18px]" icon="logos:react" />
              <p className="font-thin text-[15px]">React</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[22px]" icon="devicon:tailwindcss" />
              <p className="font-thin text-[15px]">Tailwind</p>
            </div>
          </div>
        </div>
        <div className="project2 flex flex-col items-start gap-[0.5rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group">
          <a
            href="https://github.com/gdsc-mmcm"
            target="_blank"
            title="GDSC MMCM GitHub"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/gdscproj.webp"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>
          <p className="text-[15px]">
            Website Development -{" "}
            <span className="text-[#F4B400]">in development</span>
          </p>
          <h4>GDSC MMCM</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[18px]" icon="logos:react" />
              <p className="font-thin text-[15px]">React</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[22px]" icon="devicon:tailwindcss" />
              <p className="font-thin text-[15px]">Tailwind</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[20px]" icon="logos:greensock-icon" />
              <p className="font-thin text-[15px]">GSAP</p>
            </div>
          </div>
        </div>
        <div className="project3 flex flex-col items-start gap-[0.5rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group">
          <a
            href="https://mmcm-ocp.com/"
            target="_blank"
            title="OCP Website"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/ocpproj.webp"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>
          <p className="text-[15px]">
            Website Development - <span ref={maintained}>maintained</span>
          </p>
          <h4>OCP Mapúa MCM</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[18px]" icon="logos:react" />
              <p className="font-thin text-[15px]">React</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[20px]" icon="logos:sass" />
              <p className="font-thin text-[15px]">Sass</p>
            </div>
          </div>
        </div>
        <div className="project4 flex flex-col items-start gap-[0.25rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group">
          <a
            href="https://www.npmjs.com/package/saminate"
            target="_blank"
            title="sAminate Docs"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/sAproj.webp"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>
          <p className="text-[15px]">
            Library & Website Development -{" "}
            <span ref={maintained2}>maintained</span>
          </p>
          <h4>sAminate</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[17px]" icon="logos:vue" />
              <p className="font-thin text-[15px]">Vue</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[20px]" icon="logos:greensock-icon" />
              <p className="font-thin text-[15px]">GSAP</p>
            </div>
          </div>
        </div>
        <div className="project5 flex flex-col items-start gap-[0.5rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group">
          <a
            href="https://github.com/Samshh/DiscordBot"
            target="_blank"
            title="TicketLy Repo"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/discproj.webp"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>

          <p className="text-[15px]">
            Discord Bot Development -{" "}
            <span className="text-[#e50914]">deprecated</span>
          </p>
          <h4>TicketLy</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[20px]" icon="logos:python" />
              <p className="font-thin text-[15px]">Python</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[18px]" icon="logos:discord-icon" />
              <p className="font-thin text-[15px]">Discord</p>
            </div>
          </div>
        </div>
        <div
          ref={end}
          className="project6 flex flex-col items-start gap-[0.5rem] bg-[#0c0c0c] border border-[#333333] p-[15px] rounded-lg relative group"
        >
          <a
            href="https://samshh.netlify.app/"
            target="_blank"
            title="Old Portfolio"
            rel="noopener"
          >
            <div className="relative cursor-pointer">
              <img
                className="rounded-md opacity-100 group-hover:opacity-30 transition-opacity duration-300"
                src="/assets/portfolioold.png"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button>
                  <Icon className="text-2xl" icon="tabler:external-link" />
                </Button>
              </span>
            </div>
          </a>
          <p className="text-[15px]">
            Website Development -{" "}
            <span className="text-[#e50914]">deprecated</span>
          </p>
          <h4>Old Portfolio</h4>
          <div className="flex flex-wrap gap-[1rem] justify-start items-start">
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[17px]" icon="logos:vue" />
              <p className="font-thin text-[15px]">Vue</p>
            </div>
            <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] rounded-full flex justify-center items-center gap-[0.5rem]">
              <Icon className="text-[20px]" icon="logos:greensock-icon" />
              <p className="font-thin text-[15px]">GSAP</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
