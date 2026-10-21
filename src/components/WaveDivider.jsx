export function WaveDivider({
  color,
  position = "bottom",
  className = "",
  height = 90,
  flip = false,
}) {
  return (
    <div
      className={`relative w-full leading-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block w-full"
        style={{
          height: height,
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        <path
          d={
            position === "bottom"
              ? "M0,64 C180,4 420,4 640,44 C880,88 1120,116 1440,52 L1440,140 L0,140 Z"
              : "M0,0 L1440,0 L1440,88 C1120,20 880,50 640,96 C420,138 180,138 0,76 Z"
          }
          fill={color}
        />
      </svg>
    </div>
  );
}
