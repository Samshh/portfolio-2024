import { useEffect } from "react";

export default function ResumePage() {

  useEffect(() => {
    document.title = "Sam Dacara | Resume";
  }, []);
  return (
    <div className="h-screen w-full">
      <iframe
        src="/Resume.pdf"
        className="h-full w-full border-none"
        title="Resume"
      />
    </div>
  );
}
