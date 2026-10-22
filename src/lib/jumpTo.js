// Jump to a scroll position with no animation. Some Safari versions reject
// behavior: "instant" with an error, which would blank the whole page, so
// fall back to the plain two-number form there.
export function jumpTo(top) {
  try {
    window.scrollTo({ top, behavior: "instant" });
  } catch {
    window.scrollTo(0, top);
  }
}
