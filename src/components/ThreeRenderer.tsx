import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function ThreeRenderer() {
  const [isGLTFLoaded, setIsGLTFLoaded] = useState(false);
  const [isStarFieldLoaded, setIsStarFieldLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starFieldMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

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
      const vertices: number[] = [];
      const sizes: number[] = [];

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
          opacity: { value: 1 },
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
          uniform float opacity;
          void main() {
            vec2 center = gl_PointCoord - 0.5;
            float distance = length(center);
            if (distance > 0.5) discard;
            float alpha = smoothstep(0.5, 0.4, distance) * opacity;
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      starFieldMaterialRef.current = material;

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
      setIsStarFieldLoaded(true);
      console.log("Star field loaded");
      return stars;
    }

    const starField = createStarField();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, -5, 7.5);
    scene.add(directionalLight);

    function loadGLTFModel() {
      const loader = new GLTFLoader();
      loader.load(
        "3d/scene.gltf",
        function (gltf) {
          gltf.scene.scale.set(18, 18, 18);
          gltf.scene.position.set(8, -35, 0);
          gltf.scene.rotation.set(0, (-20 * Math.PI) / 180, 0);

          gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
                color: 0x434343,
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
      mouseY += (targetMouseY - mouseY) * 0.15;

      starField.rotation.y = mouseX * 1;
      starField.rotation.x = -mouseY * 0.5;

      const starSizes = starField.geometry.attributes.size.array;
      for (let i = 0; i < starSizes.length; i++) {
        starSizes[i] = 1 + 0.5 * Math.sin(Date.now() * 0.001 + i);
      }
      starField.geometry.attributes.size.needsUpdate = true;

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

  const Canvas = () => (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );

  return { isGLTFLoaded, isStarFieldLoaded, Canvas, starFieldMaterialRef };
}

