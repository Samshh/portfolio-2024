import { useGradientText } from "@/animations/useGradientText";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/animations/scrollToSection";

interface HeroFoldProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function HeroFold({ projectsRef, contactRef }: HeroFoldProps) {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();

  return (
    <main className="h-screen px-4 py-4 flex items-center min-h-[600px] max-w-[1280px] min-w-[320px] mx-auto">
      <div className="flex flex-col justify-center h-full lg:w-1/2 gap-[1.5rem]">
        <div className="flex flex-col justify-center items-start gap-[1rem]">
          <h5 className="font-normal">I'm Sam Dacara.</h5>
          <h3>
            A <span ref={textRef1}>front-end</span> developer specializing in{" "}
            <span ref={textRef2}>React</span>.
          </h3>
        </div>
        <div className="flex justify-start items-center gap-[1rem]">
          <Button variant={"special"} onClick={() => scrollToSection(projectsRef)}>
            <h6 className="font-light">projects</h6>
          </Button>
          <Button onClick={() => scrollToSection(contactRef)}>
            <h6 className="font-light">contact</h6>
          </Button>
        </div>
      </div>
    </main>
  );
}