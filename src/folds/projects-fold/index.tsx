import { useGradientText } from "@/animations/useGradientText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";

export default function ProjectsFold() {
  const text = useGradientText();

  return (
    <main className="h-auto min-h-[720px] flex flex-col items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem] select-none">
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
                ChainMed Connect<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <p className="text-[#F4B400] font-normal">in development</p>
                  <p>
                    ChainMed was our entry for the PBWx Davao hackathon. Using
                    the React framework and web3 technologies, we built a secure
                    application for automating healthcare. It showcases our
                    ability to create user-friendly and tamper-proof solutions
                    in the medical sector.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h4 className="font-normal">
                GDSC Mapúa MCM<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <p className="text-[#F4B400] font-normal">in development</p>
                  <p>
                    GDSC Landing Page is a website that showcases the different
                    projects and events of GDSC Mapúa MCM. Reaching out to
                    students and developers, it serves as a hub for learning and
                    collaboration.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
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
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem] justify-start items-center">
                    <p className="text-[#238cc8] font-normal">maintained</p>
                    <span>-</span>
                    <a
                      href="https://mmcm-ocp.com/"
                      target="_blank"
                      rel="noopener"
                      title="ocp-website"
                    >
                      <div className="flex items-center justify-center">
                        <p>link</p>
                        <Icon
                          className="text-3xl"
                          icon="material-symbols-light:link"
                        />
                      </div>
                    </a>
                  </div>
                  <p>
                    OCP Mapúa MCM is a website that helps students at Mapúa
                    Malayan Colleges Mindanao to find the best companies for
                    their internship.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
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
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem] justify-start items-center">
                    <p className="text-[#238cc8] font-normal">maintained</p>
                    <span>-</span>
                    <a
                      href="https://www.npmjs.com/package/saminate"
                      target="_blank"
                      rel="noopener"
                      title="saminate-docs"
                    >
                      <div className="flex items-center justify-center">
                        <p>link</p>
                        <Icon
                          className="text-3xl"
                          icon="material-symbols-light:link"
                        />
                      </div>
                    </a>
                  </div>
                  <p>
                    A JavaScript library that helps developers to animate their
                    websites, this includes a website demo to showcase those
                    animations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h4 className="font-normal">
                TicketLy<span className="text-[#333333]">.</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem] justify-start items-center">
                    <p className="text-[#e50914] font-normal">deprecated</p>
                    <span>-</span>
                    <a
                      href="https://www.npmjs.com/package/saminate"
                      target="_blank"
                      rel="noopener"
                      title="ticketly-docs"
                    >
                      <div className="flex items-center justify-center">
                        <p>link</p>
                        <Icon
                          className="text-3xl"
                          icon="material-symbols-light:link"
                        />
                      </div>
                    </a>
                  </div>
                  <p>
                    TicketLy is a Discord bot that helps server owners to manage
                    their server by creating tickets for their members, this
                    promotes a more organized and efficient way of handling
                    server-related issues.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-start items-center">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
