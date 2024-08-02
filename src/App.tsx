import React, { useRef } from "react";
import AboutMeFold from "./folds/aboutme-fold";
import HeroFold from "./folds/hero-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import { ReactLenis, useLenis } from "lenis/react";
import { Icon } from "@iconify/react";
import { scrollToSection } from "@/animations/scrollToSection";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useGradientText } from "@/animations/useGradientText";

export default function App() {
  const text = useGradientText();
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <ReactLenis root>
        <nav className="sticky top-0 bg-black flex justify-between items-center px-4 py-4 z-50 max-w-[1280px] min-w-[320px] mx-auto">
          <button>
            <h6
              onClick={() => scrollToSection(heroRef)}
            >
              <span ref={text}>samshh</span>.
            </h6>
          </button>
          <Drawer>
            <DrawerTrigger>
              <Icon
                icon="gg:menu-right-alt"
                className="text-3xl cursor-pointer"
              />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col flex-grow py-[2rem] gap-8 justify-center items-center md:items-start">
                <DrawerClose>
                  <h5
                    className="font-normal cursor-pointer"
                    onClick={() => scrollToSection(aboutMeRef)}
                  >
                    About me
                  </h5>
                </DrawerClose>
                <DrawerClose>
                  <h5
                    className="font-normal cursor-pointer"
                    onClick={() => scrollToSection(projectsRef)}
                  >
                    Projects
                  </h5>
                </DrawerClose>
                <DrawerClose>
                  <h5
                    className="font-normal cursor-pointer"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    Contact
                  </h5>
                </DrawerClose>
                <DrawerClose>
                  <h5 className="font-normal cursor-pointer text-[#E50914]">
                    back
                  </h5>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
        <div ref={heroRef}>
          <HeroFold projectsRef={projectsRef} contactRef={contactRef} />
        </div>
        <div ref={aboutMeRef}>
          <AboutMeFold />
        </div>
        <div ref={projectsRef}>
          <ProjectsFold />
        </div>
        <div ref={contactRef}>
          <ContactFold />
        </div>
      </ReactLenis>
    </main>
  );
}
