import { useGradientText } from "@/animations/useGradientText";
import { Component } from "./chart";

export default function AboutMeFold() {
  const text = useGradientText();

  return (
    <main className="h-auto flex flex-col md:grid md:grid-cols-2 md:h-screen items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none gap-[1rem]">
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h2 className="text-[#333333]">
            <span ref={text}>About me</span>.
          </h2>
        </div>
        <div className="border border-[#333333] p-[15px] rounded-lg">
          <h6 className="font-light flex flex-wrap">
            A dedicated React developer with a deep appreciation for various
            coding languages, an enthusiastic anime aficionado who enjoys
            exploring different genres, and a passionate musician.
          </h6>
        </div>
        <Component />
      </div>
    </main>
  );
}
