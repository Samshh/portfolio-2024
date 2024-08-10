import { useState, useEffect, useRef } from "react";
import AboutMeFold from "./folds/aboutme-fold";
import HeroFold from "./folds/hero-fold";
import ProjectsFold from "./folds/projects-fold";
import ContactFold from "./folds/contact-fold";
import LoadingPage from "./LoadingPage";
import { ReactLenis } from "lenis/react";
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
import useAnimateButton from "./animations/animateButton";

export default function App() {
  const [isGLTFLoaded, setIsGLTFLoaded] = useState(false);
  const text = useGradientText();
  const text2 = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loading = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const homeButton = useRef<HTMLButtonElement>(null);
  const navButton = useRef<HTMLDivElement>(null);
  useAnimateButton(text, homeButton, "MEIPLE", "SAM", 0.5);
  useAnimateButton(text2, navButton, "VOY", "NAV", 0.5);

  useGSAP(() => {
    if (isGLTFLoaded && loading.current) {
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
  }, [isGLTFLoaded]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    function createStarField() {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const sizes = [];

      for (let i = 0; i < 5000; i++) {
        vertices.push(
          THREE.MathUtils.randFloatSpread(1000), 
          THREE.MathUtils.randFloatSpread(1000), 
          THREE.MathUtils.randFloatSpread(1000) 
        );

        sizes.push(Math.random() * 2 + 0.5); 
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          pixelRatio: { value: window.devicePixelRatio },
        },
        vertexShader: `
          attribute float size;
          uniform float pixelRatio;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          void main() {
            vec2 center = gl_PointCoord - 0.5;
            float distance = length(center);
            if (distance > 0.5) discard;
            float alpha = smoothstep(0.5, 0.4, distance);
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);

      return stars;
    }

    createStarField();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, -5, 7.5);
    scene.add(directionalLight);

    function loadGLTFModel() {
      const loader = new GLTFLoader();
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
          setIsGLTFLoaded(true);
          console.log("3D Model loaded");
        },
        undefined,
        function (error) {
          console.error("Error loading GLTF:", error);
          setIsGLTFLoaded(true);
        }
      );
    }

    loadGLTFModel();

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
      const scrollFraction = window.scrollY / maxScroll / 2;
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
      document.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <main>
      <canvas
        ref={canvasRef}
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
          {isGLTFLoaded && (
            <>
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
            </>
          )}
        </div>
      </ReactLenis>
    </main>
  );
}
