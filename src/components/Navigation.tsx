import React, { useRef, useState } from "react";
import { scrollToSection } from "@/animations/scrollToSection";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import BackgroundMusic from "@/components/BackgroundMusic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useAnimateButton from "@/animations/animateButton";

interface NavigationProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
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
  experienceRef,
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
  const navButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const hideOnToggle = useRef<HTMLDivElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const aboutMeRefDiv = useRef<HTMLDivElement>(null);
  const experienceRefDiv = useRef<HTMLDivElement>(null);
  const projectsRefDiv = useRef<HTMLDivElement>(null);
  const contactRefDiv = useRef<HTMLDivElement>(null);
  const closeRefDiv = useRef<HTMLDivElement>(null);

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
          { x: -75, y: 25, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.5,
          }
        );
      }
    } else {
      if (menuItemsRef.current) {
        gsap.to(menuItemsRef.current.children, {
          x: -75,
          y: 25,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.05,
        });
      }

      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power1.in",
        display: "none",
      });

      gsap.to(hideOnToggle.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 1,
        ease: "power1.out",
      });
    }
  }, [menuOpen]);

  useAnimateButton(text2, navButton);

  return (
    <nav
      ref={navRef}
      className="z-30 sticky top-0 select-none opacity-0 transform -translate-y-12"
    >
      <div
        ref={hideOnToggle}
        className="flex justify-between items-center px-4 pt-4 max-w-[1280px] min-w-[320px] mx-auto"
      >
        <Button
          ref={homeButton}
          onClick={() => scrollToSection(heroRef)}
          disabled={buttonDisabled}
          variant={"special"}
        >
          <span ref={text}>SAM</span>
        </Button>
        <div className="flex items-center justify-center gap-[1rem]">
          <BackgroundMusic hasStarted={hasStarted} />

          <Button
            ref={navButton}
            onClick={handleMenuToggle}
            disabled={buttonDisabled}
            variant={"special"}
          >
            <span ref={text2}>NAV</span>
          </Button>
        </div>
      </div>
      <div
        ref={menuRef}
        className="fixed inset-0 z-30 items-center justify-center h-full min-h-screen w-full opacity-0 p-[1rem]               "
      >
        <div
          ref={menuItemsRef}
          className="flex flex-col items-start justify-center gap-[1rem] max-w-[1280px] mx-auto w-full"
        >
          <div ref={aboutMeRefDiv}>
            <h3
              onClick={() => {
                scrollToSection(aboutMeRef);
                handleMenuToggle();
              }}
              className="select-none text-[#e7e7e7] hoverable hover:text-opacity-50 transition-all"
            >
              About
              <span className="text-[#333333]">.</span>
            </h3>
          </div>
          <div ref={experienceRefDiv}>
            <h3
              onClick={() => {
                scrollToSection(experienceRef);
                handleMenuToggle();
              }}
              className="select-none text-[#e7e7e7] hoverable hover:text-opacity-50 transition-all"
            >
              Experience
              <span className="text-[#333333]">.</span>
            </h3>
          </div>
          <div ref={projectsRefDiv}>
            <h3
              onClick={() => {
                scrollToSection(projectsRef);
                handleMenuToggle();
              }}
              className="select-none text-[#e7e7e7] hoverable hover:text-opacity-50 transition-all"
            >
              Projects
              <span className="text-[#333333]">.</span>
            </h3>
          </div>
          <div ref={contactRefDiv}>
            <h3
              onClick={() => {
                scrollToSection(contactRef);
                handleMenuToggle();
              }}
              className="select-none text-[#e7e7e7] hoverable hover:text-opacity-50 transition-all"
            >
              Contact
              <span className="text-[#333333]">.</span>
            </h3>
          </div>
          <div ref={closeRefDiv}>
            <h3
              onClick={handleMenuToggle}
              className="select-none text-[#e7e7e7] hoverable hover:text-opacity-50 transition-all"
            >
              Close
              <span className="text-[#E50914]">.</span>
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
