import { useEffect, useRef } from "react";
import AboutMeFold from "./folds/aboutme-fold";
import HeroFold from "./folds/hero-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import LoadingPage from "./LoadingPage";
import { ReactLenis } from "lenis/react";
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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function App() {
  const text = useGradientText();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loading = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(loading.current, {
      duration: 0.25,
      autoAlpha: 0,
      ease: "power2.out",
      delay: 3.5,
    });

    gsap.from(navRef.current, {
      duration: 1,
      y: -50,
      ease: "power2.out",
      delay: 3.75,
    });
  });

  useEffect(() => {
    const loader = new GLTFLoader();
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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, -5, 7.5);
    scene.add(directionalLight);

    loader.load(
      "assets/3d/scene.gltf",
      function (gltf) {
        gltf.scene.scale.set(18, 18, 18);
        gltf.scene.position.set(8, -35, 0);
        gltf.scene.rotation.set(0, (-20 * Math.PI) / 180, 0);

        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x333333,
              metalness: 0.5,
              roughness: 1,
            });
          }
        });

        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function handleMouseMove(event: MouseEvent) {
      targetMouseX = (event.clientX - windowHalfX) / 7000;
      targetMouseY = (event.clientY - windowHalfY) / 7000;
    }

    function animate() {
      requestAnimationFrame(animate);

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll / 2;
      camera.position.z = 30 - scrollFraction * 20;
      camera.position.y = 0 - scrollFraction * 5;
      camera.position.x = 0 + scrollFraction * 13;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.rotation.y = mouseX * 0.1;
      camera.rotation.x = -mouseY * 0.1;

      directionalLight.position.x = 13 * Math.sin(Date.now() * 0.0008);
      directionalLight.position.z = 5 * Math.sin(Date.now() * 0.0008);

      renderer.render(scene, camera);
    }

    document.addEventListener("mousemove", handleMouseMove);

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <main>
      <canvas
        id="bg"
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>
      <svg
        className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.25"
            numOctaves="3"
            stitchTiles="stitch"
          >
            <animate
              attributeName="seed"
              from="0"
              to="100"
              dur="8s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
      </svg>
      <ReactLenis root>
        <div ref={loading}>
          <LoadingPage />
        </div>
        <div className="overflow-x-clip">
          <nav ref={navRef} className="sticky top-0 z-30 select-none">
            <div className="flex justify-between items-center px-4 py-4 max-w-[1280px] min-w-[320px] mx-auto">
              <Button onClick={() => scrollToSection(heroRef)}>
                <h6 className="text-[#333333] font-black">
                  <span ref={text}>SAM</span>.
                </h6>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button>
                    <Icon
                      icon="material-symbols-light:menu"
                      className="text-3xl cursor-pointer text-[#e7e7e7]"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => scrollToSection(aboutMeRef)}>
                    <h6 className="font-light">About me</h6>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator></DropdownMenuSeparator>
                  <DropdownMenuItem
                    onClick={() => scrollToSection(projectsRef)}
                  >
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
        </div>
      </ReactLenis>
    </main>
  );
}
