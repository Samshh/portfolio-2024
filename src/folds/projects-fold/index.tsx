import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { Accordion } from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectAccordion from "./components/ProjectAccordion";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFold() {
  const trigger = useRef(null);
  const text = useGradientText();
  const accordionRef1 = useRef(null);
  const accordionRef2 = useRef(null);
  const accordionRef3 = useRef(null);
  const accordionRef4 = useRef(null);
  const accordionRef5 = useRef(null);

  useGSAP(() => {
    animateText(text, trigger, "Travaux", "Projects", 2);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Projects";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | Experience";
        },
      },
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      [
        accordionRef1.current,
        accordionRef2.current,
        accordionRef3.current,
        accordionRef4.current,
        accordionRef5.current,
      ],
      { opacity: 0, y: 50, x: -50 },
      { opacity: 1, y: 0, x: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
    );
  });

  return (
    <div
      ref={trigger}
      className="h-full min-h-screen flex flex-col items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem] select-none"
    >
      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <h1>
          <span
            ref={text}
          ></span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <ProjectAccordion
            ref={accordionRef1}
            value="item-1"
            title="MMCM OPED"
            role="Lead Front-end Developer & Designer"
            link="https://mmcm-ocp.com/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "cib:sass", label: "Sass" },
            ]}
          >
            A website that helps students at Mapúa Malayan Colleges Mindanao to
            find the best companies for their internship.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef2}
            value="item-2"
            title="MMCM CCIS"
            role="Lead Front-end Developer & Designer"
            link="https://mmcm-ccis.vercel.app/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
            ]}
          >
            A Landing page for the College of Computer and Information Science
            in Mapúa Malayan Colleges Mindanao.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef3}
            value="item-3"
            title="ChainMed"
            role="Front-end Developer & Designer"
            link="https://github.com/Samshh/Hackathon-Project---The-Launchpad"
            linkLabel="Repository"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
            ]}
          >
            ChainMed was our entry for the PBWx Davao hackathon (2nd Place).
            Using React and Web3 technologies, we built a secure application for
            automating healthcare.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef4}
            value="item-4"
            title="sAminate"
            role="Front-end Developer"
            link="https://www.npmjs.com/package/saminate"
            linkLabel="Npm"
            techStack={[
              { icon: "mdi:vuejs", label: "Vue" },
              { icon: "cib:greensock", label: "GSAP" },
            ]}
          >
            A JavaScript library that helps developers to animate their
            websites, this includes a website demo to showcase those animations.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef5}
            value="item-5"
            title="TicketLy"
            role="Software Developer"
            link="https://github.com/Samshh/DiscordBot"
            linkLabel="Repository"
            techStack={[
              { icon: "cib:python", label: "Python" },
              { icon: "ic:baseline-discord", label: "Discord" },
            ]}
          >
            TicketLy is a Discord bot that helps server owners to manage their
            server by creating tickets for their members, this promotes a more
            organized and efficient way of handling server-related issues.
          </ProjectAccordion>
        </Accordion>
      </div>
    </div>
  );
}
