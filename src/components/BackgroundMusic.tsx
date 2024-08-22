import { useState, useRef, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<ReactAudioPlayer>(null);

  useEffect(() => {
    if (audioRef.current?.audioEl.current) {
      setIsPlaying(!audioRef.current.audioEl.current.paused);
    }
  }, []);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
    if (audioRef.current?.audioEl.current) {
      if (isPlaying) {
        audioRef.current.audioEl.current.pause();
      } else {
        audioRef.current.audioEl.current.play();
      }
    }
  };

  return (
    <div>
      <Button onClick={handleTogglePlay}>
        {isPlaying ? (
          <Icon
            className="text-[25px]"
            icon="solar:music-note-2-bold-duotone"
          />
        ) : (
          <Icon
            className="text-[25px]"
            icon="solar:music-note-2-line-duotone"
          />
        )}
      </Button>
      <ReactAudioPlayer
        ref={audioRef}
        src="/music/bgmusic.mp3"
        autoPlay={false}
        loop
        controls={false}
        volume={1}
      />
    </div>
  );
}
