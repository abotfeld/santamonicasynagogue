import { ArrowRight, MapPin } from "lucide-react";
import { CONTACT } from "../content/site";

export function MapCard({ tone = "footer", className = "" }) {
  const isFooter = tone === "footer";
  return (
    <figure
      className={`relative overflow-hidden rounded-[1.4rem] ${isFooter ? "border border-white/15" : "border border-[var(--color-turquoise)]/25 shadow-[0_24px_50px_-28px_rgba(11,58,91,0.4)]"} bg-[var(--color-cyan-pale)] ${className}`}
    >
      <svg
        viewBox="0 0 480 300"
        className="block w-full h-auto"
        role="img"
        aria-label="Illustrated map of Santa Monica showing The Santa Monica Synagogue marked at 1260 18th Street, just off Wilshire Boulevard, with the Pacific Ocean to the southwest."
      >
        <rect x="0" y="0" width="480" height="300" fill="#F4F1E9" />
        <path
          d="M0,214 C54,204 96,222 140,240 C182,257 214,276 240,300 L0,300 Z"
          fill="#BFE6EA"
        />
        <path
          d="M0,214 C54,204 96,222 140,240 C182,257 214,276 240,300"
          fill="none"
          stroke="#7FD4DC"
          strokeWidth="2.5"
        />
        <text
          x="52"
          y="272"
          fill="#3E8A93"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.4"
        >
          PACIFIC
        </text>
        <path
          d="M392,26 C424,20 452,32 468,54 L468,104 C440,112 410,102 392,80 Z"
          fill="#DCE9D2"
        />
        <g stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round">
          <path d="M96,-10 L4,190" />
          <path d="M150,-10 L58,190" />
          <path d="M204,-10 L112,196" />
          <path d="M258,-10 L166,214" />
          <path d="M312,-10 L220,238" />
          <path d="M366,-10 L274,262" />
          <path d="M420,-10 L328,286" />
        </g>
        <g stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round">
          <path d="M-10,58 L470,4" />
          <path d="M-10,124 L478,66" />
          <path d="M4,196 L480,132" />
          <path d="M60,262 L480,198" />
        </g>
        <path
          d="M-10,124 L478,66"
          stroke="#F6D8A8"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M-10,124 L478,66"
          stroke="#EFC584"
          strokeWidth="1.5"
          strokeDasharray="7 9"
        />
        <text
          x="286"
          y="86"
          fill="#9A7238"
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="1.1"
          transform="rotate(-6.8 286 86)"
        >
          WILSHIRE BLVD
        </text>
        <circle cx="228" cy="140" r="62" fill="#1FBFC4" fillOpacity="0.15" />
        <circle cx="228" cy="140" r="34" fill="#1FBFC4" fillOpacity="0.16" />
        <g>
          <path
            d="M228,141 C214,121 216,105 228,105 C240,105 242,121 228,141 Z"
            fill="#0B3A5B"
          />
          <circle cx="228" cy="119" r="5" fill="#FFFFFF" />
          <text
            x="228"
            y="161"
            textAnchor="middle"
            fill="#0B3A5B"
            fontSize="12.5"
            fontWeight="700"
          >
            The Santa Monica Synagogue
          </text>
          <text
            x="228"
            y="177"
            textAnchor="middle"
            fill="#5B7386"
            fontSize="11.5"
            fontWeight="600"
          >
            1260 18th Street
          </text>
        </g>
        <g transform="translate(438,246)">
          <circle r="17" fill="#FFFFFF" fillOpacity="0.85" />
          <path d="M0,-11 L4,2 L0,-1 L-4,2 Z" fill="#0B3A5B" />
          <text
            x="0"
            y="13"
            textAnchor="middle"
            fill="#0B3A5B"
            fontSize="9"
            fontWeight="700"
          >
            N
          </text>
        </g>
      </svg>
      <figcaption
        className={
          isFooter
            ? "bg-[var(--color-pacific-deep)]/92 px-5 py-4"
            : "bg-white/85 backdrop-blur-sm px-6 py-5 border-t border-[var(--color-turquoise)]/20"
        }
      >
        <p
          className={`flex items-center gap-2 font-semibold ${isFooter ? "text-white text-[1.05rem]" : "text-[var(--color-pacific)] text-[1.2rem]"}`}
        >
          <MapPin
            className={`shrink-0 ${isFooter ? "h-4.5 w-4.5 text-[var(--color-turquoise)]" : "h-5 w-5 text-[var(--color-turquoise-deep)]"}`}
          />
          Where we are
        </p>
        <p
          className={`mt-1.5 leading-snug ${isFooter ? "text-white/75 text-[0.98rem]" : "text-[var(--color-ink)]/75 text-[1.12rem] leading-[1.55]"}`}
        >
          {CONTACT.addressFull}. Around the corner from Fromin's Deli, with a
          large parking lot nearby and street parking on the block.
        </p>
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className={`group mt-2.5 inline-flex items-center gap-1.5 font-semibold hover:underline ${isFooter ? "text-[var(--color-cyan-light)] text-[0.98rem]" : "text-[var(--color-turquoise-deep)] text-[1.08rem]"}`}
        >
          Get directions
          <ArrowRight className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-1" />
        </a>
      </figcaption>
    </figure>
  );
}
