import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function VideoCard({
  src,
  poster,
  label,
  autoPlay = false,
  className = "",
  glow = true,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    if (
      !autoPlay ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [autoPlay]);
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    }
  };
  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
      if (video.paused) {
        video.play();
        setPlaying(true);
      }
    }
  };
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-5 rounded-[2.6rem] opacity-55 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, var(--color-turquoise), transparent 70%)",
          }}
        />
      )}
      <div className="relative rounded-[1.9rem] overflow-hidden border border-[var(--color-turquoise)]/45 bg-black shadow-[0_38px_76px_-30px_rgba(6,32,52,0.62)]">
        <div className="relative aspect-[9/16]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={poster || src.replace(/\.mp4$/, "-poster.jpg")}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
            onClick={togglePlay}
          />
          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,20,34,0.55), rgba(4,20,34,0.12))",
                }}
              />
              <span className="relative flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-white/24 backdrop-blur text-white transition-all duration-200 group-hover:bg-white/36 group-hover:scale-105 active:scale-95">
                <Play className="h-7 w-7 ml-0.5" />
              </span>
            </button>
          )}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, rgba(4,20,34,0.8), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3.5">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/18 backdrop-blur text-white hover:bg-white/32 transition-colors active:scale-95"
            >
              {playing ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Turn sound on" : "Mute sound"}
              className="flex items-center gap-2 rounded-full bg-white/18 backdrop-blur px-4 h-11 text-white text-[0.98rem] font-semibold hover:bg-white/32 transition-colors active:scale-95"
            >
              {muted ? (
                <VolumeX className="h-4.5 w-4.5" />
              ) : (
                <Volume2 className="h-4.5 w-4.5" />
              )}
              {muted ? "Sound off" : "Sound on"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
