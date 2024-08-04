import { useRef } from "react";
import AboutMeFold from "./folds/aboutme-fold";
import HeroFold from "./folds/hero-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import LoadingPage from "./LoadingPage";
import { ReactLenis, useLenis } from "lenis/react";
import { Icon } from "@iconify/react";
import { scrollToSection } from "@/animations/scrollToSection";
import { useGradientText } from "@/animations/useGradientText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"


export default function App() {
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
              <h6 className="text-[#333333]" onClick={() => scrollToSection(heroRef)}>
                <span ref={text2}>samshh</span>.
              </h6>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon
                  icon="gg:menu-right-alt"
                  className="text-3xl cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuItem><div onClick={() => scrollToSection(aboutMeRef)}>About me</div></DropdownMenuItem>
              <DropdownMenuItem><div onClick={() => scrollToSection(projectsRef)}>Projects</div></DropdownMenuItem>
              <DropdownMenuItem><div onClick={() => scrollToSection(contactRef)}>Contact</div></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
