# The Santa Monica Synagogue website

Rebuilt on Oct 21, 2026 from the live Netlify deploy (admirable-parfait-20b24a)
into this editable project. It produces the same pages, pixel for pixel.

## Where things are

| To change…                                         | Edit this                         |
| -------------------------------------------------- | --------------------------------- |
| Address, phone, email, form links, events, classes, member quotes, videos, clubs | `src/content/data/*.json` (also editable in the Pages CMS dashboard) |
| FAQ answers, menu, homepage cards, photo list | `src/content/site.js` |
| A section's headings and paragraphs                | `src/sections/<Section>.jsx`      |
| Order of sections on the homepage                  | `src/pages/Home.jsx`              |
| Top bar, footer, map, video player                 | `src/components/`                 |
| Colors, fonts, buttons, card styles                | `src/index.css`                   |
| Photos and videos                                  | `public/photos/`, `public/media/` |

Homepage sections, top to bottom (`src/pages/Home.jsx`):
HeroCollage → ShabbatBand → Doors → Faq → SpecialVideo → About → Rabbi →
LearningAndCommunity → Testimonials → Events → HighHolyDays → Tashlich →
Softball → WineClub → HolocaustTorah → Generations → Donate, then Footer.

Inner pages (added Oct 2026, wording carried over from the old Squarespace site
thesantamonicasynagogue.org). Addresses match the thesms.org page names; the
older names in brackets still work because the first ShulCloud embed codes use them:

| Address                          | File                        |
| -------------------------------- | --------------------------- |
| /about-us (old: /about)          | src/pages/AboutPage.jsx      |
| /worship (+ /worship/shabbat-services, /holiday-celebrations, /high-holy-days) | src/pages/WorshipPage.jsx |
| /our-holocaust-torah (also /worship/ourtorah) | src/pages/HolocaustTorahPage.jsx |
| /rabbi-shira (old: /coaching)    | src/pages/RabbiPage.jsx      |
| /activities (old: /connect; + /activities/softball etc.) | src/pages/ActivitiesPage.jsx |
| /education                       | src/pages/EducationPage.jsx  |
| /events                          | src/pages/EventsPage.jsx     |
| /join (old: /membership)         | src/pages/JoinPage.jsx       |
| /contact                         | src/pages/ContactPage.jsx    |

Lists for these pages (events, classes, movies, sermons, testimonials, photos)
are in `src/content/pages.js`. To add an event, copy one in `EVENT_LISTINGS`
and change it; past events move to "Recent events" on their own.

Calendar points to the ShulCloud calendar (thesms.org/cal.php).

Other pages: `/concept-a` (older video-first concept), `/review` (internal
review notes).

## Contact page

The Contact page carries the same wording and links as the old
thesms.org/contact-us page (Ron's email, office phone, Join Now and New Member
Intake buttons, testimonials, address and parking). It has no form of its own.
`src/components/ContactForm.jsx` (a Netlify form) is kept but unused.

## Photos

Only real photos of the congregation. The photographer's shots and Susice
photos came from thesantamonicasynagogue.org; no stock or AI images.

## Commands

```
npm install              # once
npm run dev              # live local preview while editing
npm run build            # makes dist/ — this is what goes to Netlify
./scripts/prepare-preview.sh   # makes preview-dist/ for the private preview link
```

## How the site reaches thesms.org (ShulCloud)

All pages live on Netlify. Each thesms.org page shows one of them through a
code in the `shulcloud/` folder (file name = ShulCloud page). In ShulCloud:
open the page → Start Editing → add a code element → paste → save. It is
pasted once; later changes publish through GitHub/Netlify by themselves.
Calendar, donations, login and forms stay native ShulCloud pages.

Each code:
- hides ShulCloud's own header, menu, sidebars, page title and footer on that
  page only (CSS inside the code), and widens the content to full width;
- loads the page with `?embed=1&nav=1`, so the site shows its own menu bar
  and Member Login link, and every link opens the matching thesms.org page.

Regenerate all codes after changing the template:
`python3 scripts/make-shulcloud-codes.py` (it keeps each file's page path).
To add a page code, create `shulcloud/<shulcloud-page>.html` containing
`<iframe src="https://admirable-parfait-20b24a.netlify.app/<path>?embed=1">`
and run the script.

Which thesms.org page each menu item opens is `SHULCLOUD_PAGES` in
`src/content/site.js` (About Us → about-us.html, Worship → worship1.html,
Holocaust Torah → our-holocaust-torah-new.html, Rabbi Shira → rabbi-shira.html,
Activities → activities.html, Education → education5.html, Events →
events.html, Join → join.html, Contact → contact-us).

## Editing dashboard (for the office)

Day-to-day content lives in `src/content/data/*.json` and is edited through
Pages CMS (https://app.pagescms.org), configured by `.pages.yml`:
Events, Adult Education classes, Member testimonials, Sermons & celebration
videos, Clubs (softball, book club, movies), Contact details & form links,
plus photo uploads (saved to public/photos).

Saving in the dashboard commits to GitHub; Netlify rebuilds and publishes in
about a minute. If a save ever breaks the build, Netlify keeps the last good
version live.

## Publishing to Netlify

Once the Netlify project is linked to the GitHub repository, every change
pushed to GitHub (including dashboard saves) publishes automatically.
Without GitHub: run `npm run build` and drag the `dist` folder onto the
Netlify project's Deploys page.

## Rules for changes

- Real photos of the congregation only (from thesms.org or
  thesantamonicasynagogue.org). No stock or AI images.
- Keep the ShulCloud form links (Join Now, New Member Intake, Donate, High
  Holy Days, calendar, login) exactly as they are in settings.json.
- Keep existing wording word for word unless asked to change it.
- The GitHub repository is public so Netlify builds commits from anyone;
  never commit passwords or keys.
