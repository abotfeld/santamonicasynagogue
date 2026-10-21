import { useState } from "react";
import { Play } from "lucide-react";

const IS_PREVIEW = import.meta.env.MODE === "preview";

// A YouTube video shown as a thumbnail card. Thumbnails are saved in
// public/media/youtube/<video id>.jpg; new videos added in the dashboard
// fall back to YouTube's own thumbnail. Clicking plays it in place on the
// live site. (The private preview can't play YouTube inside the page, so there
// the card opens the video on YouTube instead.)
export function YouTubeCard({ id, title, subtitle, tone = "light" }) {
  const [playing, setPlaying] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const dark = tone === "dark";
  const start = (event) => {
    if (IS_PREVIEW) return; // let the link open YouTube
    event.preventDefault();
    setPlaying(true);
  };
  return (
    <figure
      className={`sms-reveal ${dark ? "sms-seaglass-dark" : "sms-glass-card"} rounded-[1.35rem] overflow-hidden flex flex-col`}
    >
      <div className="relative aspect-video bg-[var(--color-pacific-deep)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            onClick={start}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}media/youtube/${id}.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[520ms] group-hover:scale-[1.04]"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = "1";
                  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                } else {
                  img.style.display = "none";
                }
              }}
            />
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,20,34,0.6), rgba(4,20,34,0.12))",
              }}
            />
            <span className="relative flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-white/24 backdrop-blur text-white transition-all duration-200 group-hover:bg-white/36 group-hover:scale-105">
              <Play className="h-7 w-7 ml-0.5" />
            </span>
          </a>
        )}
      </div>
      <figcaption className="relative z-10 px-6 py-5">
        {subtitle && (
          <p
            className={`text-[0.82rem] font-semibold uppercase tracking-[0.14em] mb-1.5 ${dark ? "text-[var(--color-cyan-light)]" : "text-[var(--color-turquoise-deep)]"}`}
          >
            {subtitle}
          </p>
        )}
        <p
          className={`font-[family-name:var(--font-display)] text-[1.3rem] font-semibold leading-snug ${dark ? "text-white" : "text-[var(--color-pacific)]"}`}
        >
          {title}
        </p>
      </figcaption>
    </figure>
  );
}
