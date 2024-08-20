import { useRef } from "react";
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

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loading = useRef<HTMLDivElement>(null);

  const { isGLTFLoaded, isStarFieldLoaded, Canvas } = ThreeRenderer();

  useGSAP(() => {
    if (isGLTFLoaded && isStarFieldLoaded && loading.current) {
      gsap.to(loading.current, {
        duration: 0.25,
        autoAlpha: 0,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(navRef.current, {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
          });
        },
      });
    }
  }, [isGLTFLoaded, isStarFieldLoaded]);

  return (
    <main>
      {Canvas()}
      <SVGGrainEffect />
      <ReactLenis root>
        <div ref={loading}>
          <LoadingPage />
        </div>
        <div className="overflow-x-clip">
          <Navigation
            heroRef={heroRef}
            aboutMeRef={aboutMeRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            navRef={navRef}
          />
          {isGLTFLoaded && isStarFieldLoaded && (
            <>
              <section ref={heroRef}>
                <HeroFold projectsRef={projectsRef} contactRef={contactRef} />
              </section>
              <section ref={aboutMeRef}>
                <AboutMeFold />
              </section>
              <section ref={projectsRef}>
                <ProjectsFold />
              </section>
              <section ref={contactRef}>
                <ContactFold />
              </section>
            </>
          )}
        </div>
      </ReactLenis>
    </main>
  );
}
