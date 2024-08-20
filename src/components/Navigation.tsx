import React, { useRef } from "react";
import { scrollToSection } from "@/animations/scrollToSection";
import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
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

  useAnimateButton(text, homeButton, "MEIPLE", "SAM", 0.5);
  useAnimateButton(text2, navButton, "VOY", "NAV", 0.5);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-30 select-none opacity-0 transform -translate-y-12"
    >
      <div className="flex justify-between items-center px-4 py-4 max-w-[1280px] min-w-[320px] mx-auto">
        <Button ref={homeButton} onClick={() => scrollToSection(heroRef)}>
          <h6 className="text-[#333333] font-black">
            <span ref={text}>SAM</span>.
          </h6>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              ref={navButton}
              className="h-10 px-4 py-2 border text-[#333333] border-[#333333] bg-[#0c0c0c] font-serif hover:bg-[#1a1a1a] flex items-center justify-center"
            >
              <h6>
                <span ref={text2} className="text-[#e7e7e7]">
                  NAV
                </span>
                .
              </h6>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => scrollToSection(aboutMeRef)}>
              <h6 className="font-light">About me</h6>
            </DropdownMenuItem>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem onClick={() => scrollToSection(projectsRef)}>
              <h6 className="font-light">Projects</h6>
            </DropdownMenuItem>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem onClick={() => scrollToSection(contactRef)}>
              <h6 className="font-light">Contact</h6>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
