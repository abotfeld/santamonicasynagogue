import { Link } from "wouter";
import { SHULCLOUD_PAGES } from "../content/site";
import { isEmbedded } from "../lib/embed";

// The address of this site on Netlify, used when a page has no ShulCloud twin.
const SITE_URL = "https://admirable-parfait-20b24a.netlify.app";

// When embedded in thesms.org, "/connect/softball" becomes
// "https://www.thesms.org/activities.html#softball" and opens in the full window.
export function shulcloudUrl(path) {
  const [page, section] = splitPath(path);
  const base = SHULCLOUD_PAGES[page] || `${SITE_URL}${page}`;
  return section ? `${base}#${section}` : base;
}

function splitPath(path) {
  const [beforeHash, hash] = path.split("#");
  if (hash) return [beforeHash || "/", hash];
  if (SHULCLOUD_PAGES[beforeHash]) return [beforeHash, null];
  const parts = beforeHash.split("/").filter(Boolean);
  if (parts.length === 2) return [`/${parts[0]}`, parts[1]];
  return [beforeHash, null];
}

// One link component for the whole site:
//  - "/about" style paths move between pages of this site
//    (or between thesms.org pages when the site is embedded there)
//  - "#section" jumps within the page
//  - full web addresses open in a new tab
//  - mailto:/tel: open the visitor's email or phone app
export function SmartLink({ href, children, ...props }) {
  if (href.startsWith("/")) {
    if (isEmbedded()) {
      return (
        <a href={shulcloudUrl(href)} target="_top" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
