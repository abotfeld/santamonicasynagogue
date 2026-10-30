/* The Santa Monica Synagogue: new design around the ShulCloud calendar.
   Lives in ShulCloud → Settings → Advanced: JS Override (runs on every page,
   but only acts on the calendar page: /calendar and /cal.php).
   It hides ShulCloud's old logo, menu, sidebars and footer, puts the new
   site's menu bar above the calendar and the new footer below it, and
   restyles the calendar in the site's colors and fonts.
   Menu bar and footer come from the website pages /embed/header and
   /embed/footer, so menu changes on the website show up here on their own. */
(function () {
  if (!/^\/(calendar|cal\.php)/i.test(window.location.pathname)) return;
  if (window.__smsCalendarDesign) return;
  window.__smsCalendarDesign = true;

  var SITE = "https://admirable-parfait-20b24a.netlify.app";

  var css =
    "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');" +
    "#header,#topnav,#quick_links_search_wrapper,#sidebar_left,.sidebar_left_top_wrapper,#sidebar_right,.breadcrumbpaginationh1section,#footer{display:none!important}" +
    "body,#content,#maincontent{background:#F7F3EC!important}" +
    ".sms-cal-frame{display:block;width:100%;border:0;margin:0;padding:0;position:relative;z-index:5}" +
    "#sms-cal-header{height:122px}#sms-cal-footer{height:520px;margin-top:48px}" +
    "#maincontent,#maincontent *:not(i){font-family:Inter,system-ui,sans-serif}" +
    "#maincontent h1,#maincontent .pad-helper>h2{font-family:Fraunces,Georgia,serif!important;color:#0B3A5B!important;font-weight:600!important;font-size:2.6rem!important;margin:36px 0 24px!important}" +
    "#maincontent .calendar_header_date,#maincontent .month_header{font-family:Fraunces,Georgia,serif!important;color:#0B3A5B!important;background:transparent!important;font-size:1.5rem!important;text-transform:none!important}" +
    "#maincontent table.calendar_main th{background:transparent!important}" +
    "#maincontent table.calendar_main thead th{background:#0B3A5B!important;color:#fff!important;font-weight:600!important;letter-spacing:.08em;font-size:.95rem!important;padding:10px 0!important}" +
    "#maincontent table.calendar_main thead th:first-child,#maincontent table.calendar_main thead th:last-child{background:#1FBFC4!important}" +
    "#maincontent table.calendar_main td{background:#fff!important;border:1px solid #ECE5D8!important;vertical-align:top}" +
    "#maincontent table.calendar_main td.unmonth{background:#F1ECE2!important}" +
    "#maincontent table.calendar_main td.today{background:#E6F7F8!important;box-shadow:inset 0 0 0 2px #1FBFC4}" +
    "#maincontent .dayhead{background:transparent!important;border:0!important;box-shadow:none!important}" +
    "#maincontent .dayhead .day{color:#0B3A5B!important;font-weight:600!important;font-size:1.05rem}" +
    "#maincontent .dayhead .jewishDay{color:#7a8a99!important;font-size:.8rem!important}" +
    "#maincontent .sedra{color:#12628F!important;font-weight:600}" +
    "#maincontent a{color:#12628F}" +
    "#maincontent a.prev_link,#maincontent a.next_link{background:#fff!important;color:#0B3A5B!important;border:1.5px solid #0B3A5B!important;border-radius:999px!important;padding:8px 20px!important;font-size:.95rem!important;font-weight:600!important;text-transform:none!important}" +
    "#maincontent a.prev_link:hover,#maincontent a.next_link:hover{background:#0B3A5B!important;color:#fff!important}" +
    "#maincontent input[type=submit]{background:#0B3A5B!important;color:#fff!important;border:0!important;border-radius:999px!important;padding:10px 24px!important;font-weight:600!important;text-transform:none!important}" +
    "@media print{.sms-cal-frame{display:none!important}}";

  function frame(id, path) {
    var f = document.createElement("iframe");
    f.id = id;
    f.className = "sms-cal-frame";
    f.title = "The Santa Monica Synagogue";
    f.scrolling = "no";
    f.src = SITE + path;
    return f;
  }

  function start() {
    var style = document.createElement("style");
    style.id = "sms-cal-design";
    style.textContent = css;
    document.head.appendChild(style);

    var content = document.getElementById("content");
    if (!content || !content.parentNode) return;
    content.parentNode.insertBefore(
      frame("sms-cal-header", "/embed/header?embed=1&nav=1"),
      content
    );
    content.parentNode.insertBefore(
      frame("sms-cal-footer", "/embed/footer?embed=1"),
      content.nextSibling
    );
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== SITE) return;
    var d = e.data;
    if (!d || d.type !== "sms:part") return;
    var el = document.getElementById("sms-cal-" + d.part);
    var h = Math.round(Number(d.height));
    if (el && h > 40 && h < 3000) el.style.height = h + "px";
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
