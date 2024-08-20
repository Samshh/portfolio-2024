export default function SVGGrainEffect() {
  return (
    <svg
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.30"
          numOctaves="3"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
    </svg>
  );
}
