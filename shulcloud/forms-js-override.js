/* The Santa Monica Synagogue: new design around ShulCloud forms.
   Lives in ShulCloud → Settings → Advanced: JS Override, right after the
   calendar script. It only acts on the form pages listed in FORMS below
   (add a form's web address there to give it the new design).
   Like the calendar, it hides ShulCloud's old logo, menu, sidebars and footer,
   puts the new site's menu bar on top and the new footer at the bottom, and
   restyles the form as a card in the site's colors and fonts.
   Source: github.com/abotfeld/santamonicasynagogue shulcloud/forms-js-override.js */
(function () {
  var FORMS = ["2026-hanukkah-celebration"];

  var m = window.location.pathname.match(/^\/form\/([^\/?#]+?)(\.html)?\/?$/i);
  if (!m || FORMS.indexOf(m[1].toLowerCase()) === -1) return;
  if (window.__smsFormDesign) return;
  window.__smsFormDesign = true;

  var SITE = "https://admirable-parfait-20b24a.netlify.app";
  var NAVY = "#0B3A5B", TEAL = "#1FBFC4", CREAM = "#F7F3EC", LINE = "#E3DACB";

  var css =
    "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');" +
    "#header,#topnav,#quick_links_search_wrapper,#sidebar_left,.sidebar_left_top_wrapper,#sidebar_right,.breadcrumbpaginationh1section,#footer{display:none!important}" +
    "body,#content,#maincontent,.pad-helper,.content_container,.featured_article{background:" + CREAM + "!important}" +
    "#content{width:auto!important;max-width:none!important;float:none!important}" +
    "#maincontent{width:auto!important;max-width:760px!important;float:none!important;margin:0 auto!important;padding:0 16px!important;box-sizing:border-box}" +
    ".sms-form-frame{display:block;width:100%;border:0;margin:0;padding:0;position:relative;z-index:5}" +
    "#sms-form-header{height:122px}#sms-form-footer{height:520px;margin-top:56px}" +
    "#maincontent,#maincontent *:not(i){font-family:Inter,system-ui,sans-serif;box-sizing:border-box}" +
    "#maincontent h2.content_title{font-family:Fraunces,Georgia,serif!important;color:" + NAVY + "!important;font-weight:600!important;font-size:clamp(1.9rem,5vw,2.6rem)!important;line-height:1.15!important;text-align:center;margin:40px 0 28px!important}" +
    "#maincontent form.pfbc-form{background:#fff;border:1px solid " + LINE + ";border-radius:20px;padding:32px 36px;box-shadow:0 10px 30px rgba(11,58,91,.07)}" +
    "#maincontent form.pfbc-form fieldset{border:0;margin:0;padding:0;min-width:0}" +
    "#maincontent .control-group{display:block!important;float:none!important;width:auto!important;margin:0 0 18px!important;padding:0!important}" +
    "#maincontent .control-group.field_width_600{border-bottom:1px solid " + LINE + ";padding-bottom:12px!important;margin-bottom:24px!important}" +
    "#maincontent .control-group.field_width_600 p{color:#2b3a47;font-size:1.02rem;line-height:1.6;margin:0 0 14px}" +
    "#maincontent .control-group.field_width_600 strong{color:" + NAVY + "}" +
    "#maincontent .control-label{display:block!important;float:none!important;width:auto!important;text-align:left!important;padding:0!important;margin:0 0 6px!important;color:" + NAVY + ";font-weight:600;font-size:.95rem}" +
    "#maincontent .control-label .required{color:#C2410C}" +
    "#maincontent .controls{margin:0!important;float:none!important}" +
    "#maincontent .controls input[type=text],#maincontent .controls input[type=email],#maincontent .controls input[type=tel],#maincontent .controls select,#maincontent .controls textarea{width:100%!important;max-width:100%!important;height:auto!important;padding:11px 14px!important;border:1.5px solid " + LINE + "!important;border-radius:12px!important;background:#fff!important;color:#1d2a35!important;font-size:1rem!important;box-shadow:none!important}" +
    "#maincontent .controls textarea{min-height:96px}" +
    "#maincontent .controls input:focus,#maincontent .controls select:focus,#maincontent .controls textarea:focus{outline:0!important;border-color:" + TEAL + "!important;box-shadow:0 0 0 3px rgba(31,191,196,.2)!important}" +
    "#maincontent .controls input.money_total{background:#E6F7F8!important;border-color:#BCE9EB!important;color:" + NAVY + "!important;font-weight:600;font-size:1.15rem!important}" +
    "#maincontent .e-message{background:#FBF8F2!important;border:1px solid " + LINE + "!important;border-radius:12px!important;color:#4a5866!important;padding:12px 16px!important;margin:8px 0 20px!important;font-size:.9rem}" +
    "#maincontent .e-message .e-msg-icon{display:none}" +
    "#maincontent .form-actions{background:transparent!important;border:0!important;padding:0!important;margin:8px 0 0!important;text-align:center}" +
    "#maincontent .form-actions .btn,#maincontent input[type=submit]{background:" + NAVY + "!important;background-image:none!important;color:#fff!important;border:0!important;border-radius:999px!important;padding:14px 44px!important;font-size:1.05rem!important;font-weight:600!important;text-shadow:none!important;box-shadow:none!important;cursor:pointer}" +
    "#maincontent .form-actions .btn:hover,#maincontent input[type=submit]:hover{background:" + TEAL + "!important}" +
    "#maincontent a{color:#12628F}" +
    "@media (max-width:600px){#maincontent form.pfbc-form{padding:22px 18px;border-radius:16px}#maincontent h2.content_title{margin:28px 0 20px!important}}" +
    "@media print{.sms-form-frame{display:none!important}}";

  function frame(id, path) {
    var f = document.createElement("iframe");
    f.id = id;
    f.className = "sms-form-frame";
    f.title = "The Santa Monica Synagogue";
    f.scrolling = "no";
    f.src = SITE + path;
    return f;
  }

  function start() {
    var style = document.createElement("style");
    style.id = "sms-form-design";
    style.textContent = css;
    document.head.appendChild(style);

    var content = document.getElementById("content");
    if (!content || !content.parentNode) return;
    content.parentNode.insertBefore(frame("sms-form-header", "/embed/header?embed=1&nav=1"), content);
    content.parentNode.insertBefore(frame("sms-form-footer", "/embed/footer?embed=1"), content.nextSibling);
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== SITE) return;
    var d = e.data;
    if (!d || d.type !== "sms:part") return;
    var el = document.getElementById("sms-form-" + d.part);
    var h = Math.round(Number(d.height));
    if (el && h > 40 && h < 3000) el.style.height = h + "px";
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
