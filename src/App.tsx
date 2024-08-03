import { useRef } from "react";
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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const text = useGradientText();
  const text2 = useGradientText();
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });

  console.log(lenis);
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
      delay: 2
    });

    gsap.from(navRef.current, {
      duration: 1,
      y: -50,
      ease: "power2.out",
      delay: 2
    });

  });

  return (
    <main>
      <ReactLenis root>
        <div ref={loading} className="fixed inset-0 flex flex-col justify-center items-center bg-black z-50 gap-[0.25rem]">
          <h3 className="text-white">
            <span ref={text}>folio</span>{" "}
            <span className="font-thin">2024</span>
          </h3>
          <div className="flex justify-center items-center gap-[0.5rem]">
            <p className="text-[15px] font-thin">powered by</p>
            <Icon icon="logos:react" className="text-[20px]" />
          </div>
        </div>
        <nav ref={navRef} className="sticky top-0 bg-black z-40">
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
