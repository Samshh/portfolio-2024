// import React, { useEffect, useState } from "react";
// import { useGradientText } from "./animations/useGradientText";
// import { Button } from "./components/ui/button";
// import { Icon } from "@iconify/react";

// const HardwareAccelerationCheck: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isSupported, setIsSupported] = useState<boolean | null>(null);
//   const text = useGradientText();

//   useEffect(() => {
//     const isWebGLAvailable = () => {
//       try {
//         const canvas = document.createElement("canvas");
//         return !!(
//           window.WebGLRenderingContext &&
//           (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
//         );
//       } catch {
//         return false;
//       }
//     };

//     const checkHardwareAcceleration = () => {
//       try {
//         const canvas = document.createElement("canvas");
//         const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
//         if (!gl) return false;

//         const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
//         return maxTextureSize > 4096;
//       } catch {
//         return false;
//       }
//     };

//     const supported = isWebGLAvailable() && checkHardwareAcceleration();
//     setIsSupported(supported);

//     if (supported && !sessionStorage.getItem('hasReloaded')) {
//       sessionStorage.setItem('hasReloaded', 'true');
//       setTimeout(() => {
//         window.location.reload();
//       }, 1000);
//     }
//   }, []);

//   if (isSupported === null) {
//     return <div className="h-screen"></div>;
//   }

//   if (!isSupported) {
//     return (
//       <div className="h-screen max-w-[1280px] mx-auto flex justify-start items-center p-5 z-50 select-none">
//         <div className="max-w-2xl flex flex-col justify-center items-start gap-[1rem]">
//           <h3 className="text-[#333333]">
//             <span ref={text}>Oops</span>!
//           </h3>
//           <div>
//             <h6 className="font-light">
//               It looks like you have hardware acceleration turned off, this website uses 3D Graphics and requires it turned on. Please enable it and reload the page.
//             </h6>
//           </div>
//           <div className="flex justify-start flex-wrap items-start gap-[1rem]">
//             <Button>
//               <a
//                 href="https://github.com/Samshh/"
//                 target="_blank"
//                 rel="noopener"
//                 title="GitHub"
//               >
//                 <div className="flex justify-center items-center gap-[.5rem]">
//                   <Icon className="text-[23px]" icon="mdi:github" />
//                   <h6 className="font-light">GitHub</h6>
//                 </div>
//               </a>
//             </Button>
//             <Button>
//               <a
//                 href="https://www.linkedin.com/in/samshh/"
//                 target="_blank"
//                 rel="noopener"
//                 title="LinkedIn"
//               >
//                 <div className="flex justify-center items-center gap-[.5rem]">
//                   <Icon className="text-[19px]" icon="bi:linkedin" />
//                   <h6 className="font-light">LinkedIn</h6>
//                 </div>
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default HardwareAccelerationCheck;