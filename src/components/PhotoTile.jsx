export function PhotoTile({
  src,
  alt,
  ratio,
  radius = "1.25rem",
  style,
  caption,
  focus,
  zoom,
  captionRight = false,
}) {
  return (
    <div style={style}>
      <figure
        className="sms-tile group relative overflow-hidden"
        style={{
          borderRadius: radius,
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full ${ratio} object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${zoom ?? "group-hover:scale-[1.045]"}`}
          style={
            focus
              ? {
                  objectPosition: focus,
                }
              : undefined
          }
          loading="lazy"
        />
        <span aria-hidden className="sms-tile-sheen" />
        {caption && (
          <figcaption
            className={`absolute inset-x-0 bottom-0 px-4 pb-3.5 pt-10 text-white text-[0.98rem] font-semibold translate-y-2 opacity-0 transition-all duration-[240ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 ${captionRight ? "text-right" : ""}`}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,20,34,0.82), transparent)",
              }}
            />
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
