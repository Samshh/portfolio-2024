import React, { useRef, useState } from "react";
import { scrollToSection } from "@/animations/scrollToSection";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import useAnimateButton from "@/animations/animateButton";
import BackgroundMusic from "@/components/BackgroundMusic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface NavigationProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLDivElement>;
  menuOpen: boolean;
  hasStarted: boolean;
  onMenuToggle: () => void;
}

export default function Navigation({
  heroRef,
  aboutMeRef,
  projectsRef,
  contactRef,
  navRef,
  menuOpen,
  hasStarted,
  onMenuToggle,
}: NavigationProps) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = useGradientText();
  const text2 = useRef<HTMLSpanElement>(null);
  const homeButton = useRef<HTMLButtonElement>(null);
  const navButton = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const hideOnToggle = useRef<HTMLDivElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const aboutMeRefH3 = useRef<HTMLHeadingElement>(null);
  const projectsRefH3 = useRef<HTMLHeadingElement>(null);
  const contactRefH3 = useRef<HTMLHeadingElement>(null);
  const closeRefH3 = useRef<HTMLHeadingElement>(null);

  const aboutMeRefDiv = useRef<HTMLDivElement>(null);
  const projectsRefDiv = useRef<HTMLDivElement>(null);
  const contactRefDiv = useRef<HTMLDivElement>(null);
  const closeRefDiv = useRef<HTMLDivElement>(null);

  useAnimateButton(text, homeButton, "MEI", "SAM", 0.5);
  useAnimateButton(text2, navButton, "VOY", "NAV", 0.5);
  useAnimateButton(aboutMeRefH3, aboutMeRefDiv, "Sur Moi", "About", 0.5);
  useAnimateButton(projectsRefH3, projectsRefDiv, "Travaux", "Projects", 0.5);
  useAnimateButton(contactRefH3, contactRefDiv, "Connecter", "Contact", 0.5);
  useAnimateButton(closeRefH3, closeRefDiv, "Fermer", "Close", 0.5);

  const handleMenuToggle = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    setButtonDisabled(true);
    onMenuToggle();

    debounceTimeout.current = setTimeout(() => {
      setIsAnimating(false);
      setButtonDisabled(false);
    }, 500);
  };

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(hideOnToggle.current, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: "power1.in",
      });
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.out",
        display: "flex",
      });
      if (menuItemsRef.current) {
        gsap.fromTo(
          menuItemsRef.current.children,
          { x: -100, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power1.out",
            stagger: 0.05,
            delay: 0.5,
          }
        );
      }
    } else {
      gsap.to(hideOnToggle.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: "power1.out",
      });
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power1.in",
        display: "none",
      });
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="z-30 sticky top-0 select-none opacity-0 transform -translate-y-12"
    >
      <div
        ref={hideOnToggle}
        className="flex justify-between items-center px-4 py-4 max-w-[1280px] min-w-[320px] mx-auto"
      >
        <Button
          ref={homeButton}
          onClick={() => scrollToSection(heroRef)}
          disabled={buttonDisabled}
        >
          <h6 className="text-[#333333]">
            <span ref={text}>SAM</span>.
          </h6>
        </Button>
        <div className="flex items-center justify-center gap-[1rem]">
          <BackgroundMusic hasStarted={hasStarted} />
          <div
            ref={navButton}
            onClick={handleMenuToggle}
            className={`hoverable h-10 px-4 py-2 border text-[#333333] border-[#333333] bg-[#0c0c0c] font-serif flex items-center justify-center cursor-pointer ${
              buttonDisabled ? "cursor-not-allowed" : ""
            }`}
          >
            <h6>
              <span ref={text2} className="text-[#e7e7e7]">
                NAV
              </span>
              .
            </h6>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className="fixed inset-0 z-30 items-center justify-center h-screen w-screen opacity-0 p-[1rem]"
      >
        <div
          ref={menuItemsRef}
          className="flex flex-col items-start justify-center gap-[1rem] max-w-[1280px] mx-auto w-full"
        >
          <div ref={aboutMeRefDiv} className="w-[203px]">
            <h3
              onClick={() => {
                scrollToSection(aboutMeRef);
                handleMenuToggle();
              }}
              className="select-none text-[#333333] hoverable"
            >
              <span ref={aboutMeRefH3} className="text-[#e7e7e7]">
                About
              </span>
              .
            </h3>
          </div>
          <div ref={projectsRefDiv} className="w-[188px]">
            <h3
              onClick={() => {
                scrollToSection(projectsRef);
                handleMenuToggle();
              }}
              className="select-none text-[#333333] hoverable"
            >
              <span ref={projectsRefH3} className="text-[#e7e7e7]">
                Projects
              </span>
              .
            </h3>
          </div>
          <div ref={contactRefDiv} className="w-[188px]">
            <h3
              onClick={() => {
                scrollToSection(contactRef);
                handleMenuToggle();
              }}
              className="select-none text-[#333333] hoverable"
            >
              <span ref={contactRefH3} className="text-[#e7e7e7]">
                Contact
              </span>
              .
            </h3>
          </div>
          <div ref={closeRefDiv} className="w-[188px]">
            <h3
              onClick={handleMenuToggle}
              className="select-none text-[#E50914] hoverable"
            >
              <span ref={closeRefH3} className="text-[#e7e7e7]">
                Close
              </span>
              .
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
