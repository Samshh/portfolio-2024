import { useGradientText } from "@/animations/useGradientText";

export default function ContactFold() {
  const text = useGradientText();

  return (
    <main className="h-screen px-4 py-4 max-w-[1280px] min-w-[320px] mx-auto flex flex-col justify-center items-start select-none">
      <h3><span ref={text}>Contact</span>.</h3>
      <h6 className="font-light">coming soon</h6>
    </main>
  );
}