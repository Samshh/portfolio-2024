import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
      },
      defaults: { ease: "expo.inOut" },
    });

    tl.fromTo(
      [
        accordionRef1.current,
        accordionRef2.current,
        accordionRef3.current,
        accordionRef4.current,
        accordionRef5.current,
      ],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  });

  const handleMouseEnter1 = () => {
    gsap.to(text.current, { text: "Travaux", duration: 0.5 });
  };

  const handleMouseLeave1 = () => {
    gsap.to(text.current, { text: "Projects", duration: 0.5 });
  };

  return (
    <div
      ref={trigger}
      className="h-auto min-h-[720px] flex flex-col items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem] select-none"
    >
      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <h1>
          <span
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            ref={text}
          ></span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem ref={accordionRef1} value="item-1">
            <AccordionTrigger>
              <h4 className="font-normal">
                ChainMed<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Website/Blockchain</h6>
                  <a
                    href="https://github.com/Samshh/Hackathon-Project---The-Launchpad"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="hoverable flex items-center justify-end">
                      <h6 className="font-light">View</h6>
                      <Icon
                        className="text-3xl"
                        icon="guidance:up-right-arrow"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-start items-start">
                  <h6 className="font-light">
                    ChainMed was our entry for the PBWx Davao hackathon. Using
                    the React framework and web3 technologies, we built a secure
                    application for automating healthcare. It showcases our
                    ability to create user-friendly and tamper-proof solutions
                    in the medical sector.
                  </h6>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon
                      className="text-[22px]"
                      icon="akar-icons:react-fill"
                    />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[24px]" icon="mdi:tailwind" />
                    <p className="text-[1rem]">Tailwind</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem ref={accordionRef2} value="item-2">
            <AccordionTrigger>
              <h4 className="font-normal">
                GDSC<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Website</h6>
                  <a
                    href="https://github.com/gdsc-mmcm"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="hoverable flex items-center justify-end">
                      <h6 className="font-light">View</h6>
                      <Icon
                        className="text-3xl"
                        icon="guidance:up-right-arrow"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-start items-start">
                  <h6 className="font-light">
                    GDSC Landing Page is a website that showcases the different
                    projects and events of GDSC Mapúa MCM. Reaching out to
                    students and developers, it serves as a hub for learning and
                    collaboration.
                  </h6>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon
                      className="text-[22px]"
                      icon="akar-icons:react-fill"
                    />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[24px]" icon="mdi:tailwind" />
                    <p className="text-[1rem]">Tailwind</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[24px]" icon="cib:greensock" />
                    <p className="text-[1rem]">GSAP</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem ref={accordionRef3} value="item-3">
            <AccordionTrigger>
              <h4 className="font-normal">
                OCP Mapúa MCM<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Website</h6>
                  <a
                    href="https://mmcm-ocp.com/"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="hoverable flex items-center justify-end">
                      <h6 className="font-light">View</h6>
                      <Icon
                        className="text-3xl"
                        icon="guidance:up-right-arrow"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-start items-start">
                  <h6 className="font-light">
                    OCP Mapúa MCM is a website that helps students at Mapúa
                    Malayan Colleges Mindanao to find the best companies for
                    their internship.
                  </h6>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon
                      className="text-[22px]"
                      icon="akar-icons:react-fill"
                    />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[20px]" icon="cib:sass" />
                    <p className="text-[1rem]">Sass</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem ref={accordionRef4} value="item-4">
            <AccordionTrigger>
              <h4 className="font-normal">
                sAminate<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Website/Library</h6>
                  <a
                    href="https://www.npmjs.com/package/saminate"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="hoverable flex items-center justify-end">
                      <h6 className="font-light">View</h6>
                      <Icon
                        className="text-3xl"
                        icon="guidance:up-right-arrow"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-start items-start">
                  <h6 className="font-light">
                    A JavaScript library that helps developers to animate their
                    websites, this includes a website demo to showcase those
                    animations.
                  </h6>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[23px]" icon="mdi:vuejs" />
                    <p className="text-[1rem]">Vue</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[24px]" icon="cib:greensock" />
                    <p className="text-[1rem]">GSAP</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem ref={accordionRef5} value="item-5">
            <AccordionTrigger>
              <div className="flex items-center">
                <h4 className="font-normal">
                  TicketLy<span className="text-[#333333]">.</span>
                </h4>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Discord Bot</h6>
                  <a
                    href="https://github.com/Samshh/DiscordBot"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="hoverable flex items-center justify-end">
                      <h6 className="font-light">View</h6>
                      <Icon
                        className="text-3xl"
                        icon="guidance:up-right-arrow"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-start items-start">
                  <h6 className="font-light">
                    TicketLy is a Discord bot that helps server owners to manage
                    their server by creating tickets for their members, this
                    promotes a more organized and efficient way of handling
                    server-related issues.
                  </h6>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[18px]" icon="cib:python" />
                    <p className="text-[1rem]">Python</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[23px]" icon="ic:baseline-discord" />
                    <p className="text-[1rem]">Discord</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
