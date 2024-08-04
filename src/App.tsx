import { useEffect, useRef } from "react";
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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

export default function App() {
  const text = useGradientText();
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
      delay: 2.5,
    });

    gsap.from(navRef.current, {
      duration: 1,
      y: -50,
      ease: "power2.out",
      delay: 2.75,
    });
  });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.getElementById("bg") as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });

    renderer.setClearColor(0x000000, 0);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <main>
      <canvas
        id="bg"
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>
      <ReactLenis root>
        <div ref={loading}>
          <LoadingPage />
        </div>
        <nav
          ref={navRef}
          className="sticky top-0 z-40 select-none"
        >
          <div className="flex justify-between items-center px-4 py-4 z-50 max-w-[1280px] min-w-[320px] mx-auto">
            <Button>
              <h6
                className="text-[#333333]"
                onClick={() => scrollToSection(heroRef)}
              >
                <span ref={text}>samshh</span>.
              </h6>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>
                  <Icon
                    icon="gg:menu-right-alt"
                    className="text-3xl cursor-pointer text-[#e7e7e7]"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                  <div onClick={() => scrollToSection(aboutMeRef)}>
                    About me
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div onClick={() => scrollToSection(projectsRef)}>
                    Projects
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div onClick={() => scrollToSection(contactRef)}>Contact</div>
                </DropdownMenuItem>
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
