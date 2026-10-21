# The Santa Monica Synagogue website

Rebuilt on Oct 21, 2026 from the live Netlify deploy (admirable-parfait-20b24a)
into this editable project. It produces the same pages, pixel for pixel.

## Where things are

| To change…                                         | Edit this                         |
| -------------------------------------------------- | --------------------------------- |
| Address, phone, email, form links, events, classes, member quotes, FAQ answers, softball and wine club text | `src/content/site.js` |
| A section's headings and paragraphs                | `src/sections/<Section>.jsx`      |
| Order of sections on the homepage                  | `src/pages/Home.jsx`              |
| Top bar, footer, map, video player                 | `src/components/`                 |
| Colors, fonts, buttons, card styles                | `src/index.css`                   |
| Photos and videos                                  | `public/photos/`, `public/media/` |

Homepage sections, top to bottom (`src/pages/Home.jsx`):
HeroCollage → ShabbatBand → HighHolyDays → Tashlich → Softball → WineClub →
Faq → SpecialVideo → About → Rabbi → Events → LearningAndCommunity →
Testimonials → HolocaustTorah → Doors → Donate, then Footer and StickyJoinBar.

Inner pages (added Oct 2026, wording carried over from the old Squarespace site
thesantamonicasynagogue.org). Addresses match the old site so links keep working:

| Address                          | File                        |
| -------------------------------- | --------------------------- |
| /about                           | src/pages/AboutPage.jsx      |
| /worship (+ /worship/shabbat-services, /holiday-celebrations, /high-holy-days) | src/pages/WorshipPage.jsx |
| /our-holocaust-torah (also /worship/ourtorah) | src/pages/HolocaustTorahPage.jsx |
| /coaching (also /rabbi-shira)    | src/pages/RabbiPage.jsx      |
| /connect (also /activities, + /connect/softball etc.) | src/pages/ActivitiesPage.jsx |
| /education                       | src/pages/EducationPage.jsx  |
| /events                          | src/pages/EventsPage.jsx     |
| /membership (also /join)         | src/pages/JoinPage.jsx       |
| /contact                         | src/pages/ContactPage.jsx    |

Lists for these pages (events, classes, movies, sermons, testimonials, photos)
are in `src/content/pages.js`. To add an event, copy one in `EVENT_LISTINGS`
and change it; past events move to "Recent events" on their own.

Calendar points to the ShulCloud calendar (thesms.org/cal.php).

Other pages: `/concept-a` (older video-first concept), `/review` (internal
review notes).

## Contact form

The Contact page form uses Netlify Forms. After the first upload, in Netlify go
to Project configuration → Forms, make sure form detection is on, and under
Form notifications add an email notification to office@thesms.org. Messages
also appear under Forms → "contact".

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

All pages live on Netlify. Each thesms.org page shows one of them through the
embed code in the `shulcloud/` folder (file name = ShulCloud page). Paste it
once in the page's HTML/Source view; later changes only need a Netlify upload.
Calendar, donations, login and forms stay native ShulCloud pages.

When a page is shown inside thesms.org it hides its own menu bar (ShulCloud's
menu is above it) and its links open the matching thesms.org page. That list is
`SHULCLOUD_PAGES` in `src/content/site.js`.

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
