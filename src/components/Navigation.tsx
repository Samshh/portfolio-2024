import React, { useRef } from "react";
import { scrollToSection } from "@/animations/scrollToSection";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import useAnimateButton from "@/animations/animateButton";

interface NavigationProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLDivElement>;
}

export default function Navigation({
  heroRef,
  aboutMeRef,
  projectsRef,
  contactRef,
  navRef,
}: NavigationProps) {
  const text = useGradientText();
  const text2 = useRef<HTMLSpanElement>(null);
  const homeButton = useRef<HTMLButtonElement>(null);
  const navButton = useRef<HTMLDivElement>(null);

  useAnimateButton(text, homeButton, "MEI", "SAM", 0.5);
  useAnimateButton(text2, navButton, "VOY", "NAV", 0.5);

  return (
    <nav
      ref={navRef}
      className="z-30 sticky top-0 select-none opacity-0 transform -translate-y-12"
    >
      <div className="flex justify-between items-center px-4 py-4 max-w-[1280px] min-w-[320px] mx-auto">
        <Button ref={homeButton} onClick={() => scrollToSection(heroRef)}>
          <h6 className="text-[#333333] font-black">
            <span ref={text}>SAM</span>.
          </h6>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <div
              ref={navButton}
              className="hoverable h-10 px-4 py-2 border text-[#333333] border-[#333333] bg-[#0c0c0c] font-serif flex items-center justify-center"
            >
              <h6>
                <span ref={text2} className="text-[#e7e7e7]">
                  NAV
                </span>
                .
              </h6>
            </div>
          </SheetTrigger>
          <SheetContent side={"top"}>
            <div className="flex flex-col gap-[0.5rem] select-none"></div>
            <SheetClose>
              <h3 onClick={() => scrollToSection(aboutMeRef)}>
                About Me<span className="text-[#333333]">.</span>
              </h3>
            </SheetClose>
            <SheetClose>
              <h3 onClick={() => scrollToSection(projectsRef)}>
                Projects<span className="text-[#333333]">.</span>
              </h3>
            </SheetClose>
            <SheetClose>
              <h3 onClick={() => scrollToSection(contactRef)}>
                Contact<span className="text-[#333333]">.</span>
              </h3>
            </SheetClose>
            <SheetClose>
              <h3>
                Close<span className="text-[#E50914]">.</span>
              </h3>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
