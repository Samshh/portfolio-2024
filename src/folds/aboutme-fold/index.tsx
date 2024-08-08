import { useGradientText } from "@/animations/useGradientText";

export default function AboutMeFold() {
  const text = useGradientText();

  return (
    <main className="h-auto flex flex-col md:grid md:grid-cols-2 md:h-screen items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none gap-[1rem]">
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h1 className="text-[#333333]">
            <span ref={text}>About me</span>.
          </h1>
        </div>
        <div>
          <h5 className="font-light flex flex-wrap">
            A dedicated React developer with a deep appreciation for various
            coding languages, an enthusiastic anime aficionado who enjoys
            exploring different genres, and a passionate musician.
          </h5>
        </div>
       </div>
    </main>
  );
}
