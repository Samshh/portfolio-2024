export default function SVGGrainEffect() {
  return (
    <svg
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.7"
          numOctaves="6"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 20 -10"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
    </svg>
  );
}
