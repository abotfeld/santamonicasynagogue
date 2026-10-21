export function ScrollMark({ className = "", stroke = "#1FBFC4" }) {
  const isLight = stroke === "#7FE0E8" || stroke === "currentColor";
  const rodColor = isLight ? "#7FE0E8" : "#29B6F0";
  const waterTop = isLight ? "#A5EEF2" : "#22D3EE";
  const waterMid = isLight ? "#1FBFC4" : "#1E7FD4";
  const waterDeep = isLight ? "#12628F" : "#1B3FC8";
  const waveColor = isLight ? "#FFFFFF" : "#7FE0E8";
  const mono = stroke === "currentColor";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="sms-scroll-clip">
          <rect x="20.5" y="14" width="23" height="30" rx="1.2" />
        </clipPath>
      </defs>
      <g clipPath="url(#sms-scroll-clip)">
        <rect
          x="20.5"
          y="14"
          width="23"
          height="30"
          fill={mono ? "currentColor" : waterTop}
        />
        <path
          d="M20.5 25 C25 21.6 29.5 21.6 34 25 C38.5 28.4 41 28.4 43.5 26.4 L43.5 44 L20.5 44 Z"
          fill={mono ? "currentColor" : waterMid}
          opacity={mono ? 0.55 : 1}
        />
        <path
          d="M20.5 33.5 C25 30.4 29.5 30.6 34 33.4 C38.5 36.2 41 36 43.5 34.2 L43.5 44 L20.5 44 Z"
          fill={mono ? "currentColor" : waterDeep}
          opacity={mono ? 0.75 : 1}
        />
      </g>
      {[17.4, 43.6].map((x) => (
        <g key={x} fill={mono ? "currentColor" : rodColor}>
          <rect x={x} y="13" width="3.6" height="32" rx="1.8" />
          <rect x={x - 2.6} y="10.4" width="8.8" height="3.4" rx="1.7" />
          <rect x={x - 2.6} y="44.2" width="8.8" height="3.4" rx="1.7" />
          <rect x={x + 0.6} y="7.4" width="2.4" height="3.4" rx="1.2" />
          <rect x={x + 0.6} y="47.2" width="2.4" height="3.4" rx="1.2" />
        </g>
      ))}
      <path
        d="M13 53.6 C19 50.4 25.5 50.6 32 53.2 C38.5 55.8 45 55.6 51 52.4"
        stroke={mono ? "currentColor" : waveColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 58.4 C23 56.2 27.5 56.3 32 58 C36.5 59.7 41 59.6 46 57.4"
        stroke={mono ? "currentColor" : waveColor}
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
