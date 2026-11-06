import { ArrowUp } from "lucide-react";

// Small "Back to top" link placed after each homepage section (JoAnn's
// request), so people on phones can get back to the menu quickly.
// It points at #page-top; when the site is shown inside ShulCloud, the
// embed bridge turns this into a scroll of the outer page.
export function BackToTop() {
  return (
    <div className="bg-[var(--color-sand)] border-y border-[var(--color-pacific)]/8">
      <div className="container flex justify-center py-2.5">
        <a
          href="#page-top"
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[0.98rem] font-semibold text-[var(--color-pacific)] hover:bg-white hover:underline"
        >
          <ArrowUp className="h-4 w-4" />
          Back to top
        </a>
      </div>
    </div>
  );
}
