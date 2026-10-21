"""Regenerates the ShulCloud page codes in shulcloud/*.html.
Run: python3 scripts/make-shulcloud-codes.py
Each code hides ShulCloud's own header, menu, sidebars and footer on the page
it is pasted into (and only that page), then shows the new site full width
with its own menu bar."""
import json, pathlib, re, sys

SITE = "https://admirable-parfait-20b24a.netlify.app"
ROOT = pathlib.Path(__file__).resolve().parent.parent / "shulcloud"

TEMPLATE = r'''<div id="sms-embed-root">
<style type="text/css">
  /* Hide ShulCloud's header, menu, sidebars, page title and footer on this page only. */
  #header, #topnav, #quick_links_search_wrapper, #sidebar_left,
  .sidebar_left_top_wrapper, #sidebar_right, #content > .search_area,
  #content > .right_box2, .breadcrumbpaginationh1section, #footer {
    display: none !important;
  }
  #content, #maincontent_sidebar_wrapper, #maincontent, #maincontent .pad-helper {
    width: 100% !important; max-width: none !important;
    margin: 0 !important; padding: 0 !important; float: none !important;
    border: 0 !important; box-shadow: none !important; min-height: 0 !important;
  }
  #sms-embed-root {
    position: static; width: 100%; max-width: none;
    margin: 0; padding: 0; overflow: hidden;
  }
  #sms-embed-root iframe {
    display: block; width: 100%; border: 0; margin: 0;
    height: 3200px; transition: height 120ms ease-out;
  }
  #sms-embed-root > iframe { max-width: none !important; }
</style>
<iframe id="sms-embed-frame" src="__SRC__" title="The Santa Monica Synagogue" scrolling="no" loading="eager" allow="autoplay; fullscreen" referrerpolicy="no-referrer-when-downgrade"></iframe>
<script>
  (function () {
    if (window.__smsEmbedInit) return;
    window.__smsEmbedInit = true;
    var frame = document.getElementById("sms-embed-frame");
    if (!frame) return;
    // Pass a #section in this page's address on to the embedded page.
    if (window.location.hash) {
      frame.src = frame.src.split("#")[0] + window.location.hash;
    }
    var MIN = 1200, MAX = 60000;
    function setHeight(h) {
      h = Math.round(h);
      if (!isFinite(h) || h < MIN || h > MAX) return;
      frame.style.height = h + "px";
    }
    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "sms:height") setHeight(d.height);
      if (d.type === "sms:scrollTo") {
        var top = frame.getBoundingClientRect().top +
          (window.pageYOffset || document.documentElement.scrollTop) +
          (Number(d.offset) || 0);
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
    function fallback() {
      if (frame.style.height && parseInt(frame.style.height, 10) > MIN) return;
      setHeight(window.innerWidth < 720 ? 9000 : 5200);
    }
    window.setTimeout(fallback, 2500);
    window.addEventListener("resize", function () { window.setTimeout(fallback, 300); });
  })();
</script>
</div>
'''

def make(path_and_hash):
    path, _, frag = path_and_hash.partition("#")
    src = f"{SITE}{path}?embed=1&nav=1" + (f"#{frag}" if frag else "")
    return TEMPLATE.replace("__SRC__", src)

# Existing files: keep each one's page path (and #section), rewrite the code.
for f in sorted(ROOT.glob("*.html")):
    m = re.search(r'src="' + re.escape(SITE) + r'([^"?#]*)\?[^"#]*(#[^"]*)?"', f.read_text())
    if not m:
        sys.exit(f"no src in {f}")
    f.write_text(make(m.group(1) + (m.group(2) or "")))
    print(f.name, "->", m.group(1) + (m.group(2) or ""))
# Homepage code too.
(ROOT / "home.html").write_text(make("/"))
print("home.html -> /")
