import { useRef } from "react";
import AboutMeFold from "./folds/aboutme-fold";
import HeroFold from "./folds/hero-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import LoadingPage from "./LoadingPage";
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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const text2 = useGradientText();
  const lenis = useLenis(({ scroll }) => {
      
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loading = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(loading.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "power2.out",
      delay: 2,
    });

    
    gsap.from(navRef.current, {
      duration: 1,
      y: -50,
      ease: "power2.out",
      delay: 2.25,
    });
  });

  return (
    <main>
      <ReactLenis root>
        <div
          ref={loading}
        >
          <LoadingPage />
        </div>
        <nav ref={navRef} className="sticky top-0 bg-black z-40 select-none">
          <div className="flex justify-between items-center px-4 py-4 z-50 max-w-[1280px] min-w-[320px] mx-auto">
            <button>
              <h6 onClick={() => scrollToSection(heroRef)}>
                <span ref={text2}>samshh</span>.
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
                <div className="flex flex-col flex-grow py-[2rem] gap-8 justify-center items-start">
                  <DrawerClose>
                    <h5
                      className="font-normal cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-4"
                      onClick={() => scrollToSection(aboutMeRef)}
                    >
                      About me
                    </h5>
                  </DrawerClose>
                  <DrawerClose>
                    <h5
                      className="font-normal cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-4"
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      Projects
                    </h5>
                  </DrawerClose>
                  <DrawerClose>
                    <h5
                      className="font-normal cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-4"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Contact
                    </h5>
                  </DrawerClose>
                  <DrawerClose>
                    <h5 className="font-normal cursor-pointer text-[#E50914] transition-transform duration-300 ease-in-out hover:translate-x-4">
                      back
                    </h5>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
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
