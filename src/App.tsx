import { useRef, useState } from "react";
import HeroFold from "./folds/hero-fold";
import AboutMeFold from "./folds/aboutme-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingPage from "@/components/LoadingPage";
import Navigation from "@/components/Navigation";
import SVGGrainEffect from "@/components/SVGGrainEffect";
import ThreeRenderer from "@/components/ThreeRenderer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loading = useRef<HTMLDivElement>(null);

  const threeRenderer = ThreeRenderer();
  const {
    isGLTFLoaded,
    isStarFieldLoaded,
    Canvas,
    progress,
    starFieldMaterialRef,
  } = threeRenderer;

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  useGSAP(() => {
    if (hasStarted) {
      gsap.to(loading.current, {
        duration: 0.75,
        delay: 0.25,
        autoAlpha: 0,
        ease: "power2.out",
        onComplete: () => {
          if (navRef.current) {
            gsap.to(navRef.current, {
              duration: 1,
              autoAlpha: 1,
              y: 0,
              ease: "power2.out",
            });
          }
        },
      });
    }
  }, [hasStarted]);

  useGSAP(() => {
    const elements = [
      heroRef.current,
      aboutMeRef.current,
      projectsRef.current,
      contactRef.current,
    ];
    if (elements.every((el) => el !== null)) {
      gsap.to(elements, {
        opacity: menuOpen ? 0 : 1,
        duration: 0.5,
        delay: menuOpen ? 0 : 0.5,
        ease: menuOpen ? "power2.in" : "power2.out",
      });
    }

    if (starFieldMaterialRef.current) {
      gsap.to(starFieldMaterialRef.current.uniforms.opacity, {
        value: menuOpen ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <main>
      {Canvas()}
      <CustomCursor hasStarted={hasStarted} />
      <SVGGrainEffect />
      <ReactLenis root>
        <div ref={loading}>
          <LoadingPage
            progress={progress}
            isGlTFLoaded={isGLTFLoaded}
            isStarFieldLoaded={isStarFieldLoaded}
            onStart={handleStart}
          />
        </div>
        <div className="overflow-x-clip">
          <Navigation
            heroRef={heroRef}
            aboutMeRef={aboutMeRef}
            projectsRef={projectsRef}
            contactRef={footerRef}
            navRef={navRef}
            menuOpen={menuOpen}
            onMenuToggle={handleMenuToggle}
            hasStarted={hasStarted}
          />
          {hasStarted && (
            <>
              <section ref={heroRef}>
                <HeroFold projectsRef={projectsRef} contactRef={footerRef} />
              </section>
              <section ref={aboutMeRef}>
                <AboutMeFold />
              </section>
              <section ref={projectsRef}>
                <ProjectsFold />
              </section>
              <section ref={contactRef}>
                <ContactFold footerRef={footerRef} />
              </section>
            </>
          )}
        </div>
      </ReactLenis>
    </main>
  );
}
