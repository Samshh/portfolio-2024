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

export default function ProjectsFold() {
  const trigger = useRef(null);
  const text = useGradientText();
  useGSAP(() => {
    animateText(text, trigger, "Travaux", "Projects", 2);
  });

  return (
    <main
      ref={trigger}
      className="h-auto min-h-[720px] flex flex-col items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem] select-none"
    >
      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <h1>
          <span ref={text}>Projects</span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
                    <div className="flex items-center justify-end">
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
                    <Icon className="text-[18px]" icon="logos:react" />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[22px]" icon="devicon:tailwindcss" />
                    <p className="text-[1rem]">Tailwind</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
                    <div className="flex items-center justify-end">
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
                    <Icon className="text-[18px]" icon="logos:react" />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[22px]" icon="devicon:tailwindcss" />
                    <p className="text-[1rem]">Tailwind</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[20px]" icon="logos:greensock-icon" />
                    <p className="text-[1rem]">GSAP</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
                    <div className="flex items-center justify-end">
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
                    <Icon className="text-[18px]" icon="logos:react" />
                    <p className="text-[1rem]">React</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[20px]" icon="logos:sass" />
                    <p className="text-[1rem]">Sass</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h4 className="font-normal">
                sAminate<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h6 className="font-light">Library</h6>
                  <a
                    href="https://www.npmjs.com/package/saminate"
                    target="_blank"
                    rel="noopener"
                    title="ticketly-docs"
                  >
                    <div className="flex items-center justify-end">
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
                    <Icon className="text-[17px]" icon="logos:vue" />
                    <p className="text-[1rem]">Vue</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[20px]" icon="logos:greensock-icon" />
                    <p className="text-[1rem]">GSAP</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
                    <div className="flex items-center justify-end">
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
                    <Icon className="text-[20px]" icon="logos:python" />
                    <p className="text-[1rem]">Python</p>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem]  flex justify-center items-center gap-[0.5rem]">
                    <Icon className="text-[18px]" icon="logos:discord-icon" />
                    <p className="text-[1rem]">Discord</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
