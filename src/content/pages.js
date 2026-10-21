// ---------------------------------------------------------------------------
// CONTENT FOR THE INNER PAGES (About, Worship, Rabbi Shira, Activities,
// Education, Events, Join, Contact).
// Wording below was carried over word for word from the old Squarespace site
// (thesantamonicasynagogue.org) in October 2026. Longer paragraphs live in the
// page files in src/pages/.
// ---------------------------------------------------------------------------
import clubsData from "./data/clubs.json";
import eventsData from "./data/events.json";
import videosData from "./data/videos.json";
import { ALL_TESTIMONIALS, CLASSES, CONTACT, PHOTOS, asset } from "./site";

// Pulls the video id out of any YouTube link (watch, youtu.be, shorts, embed).
export function youtubeId(link) {
  const match = String(link).match(
    /(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{6,})/,
  );
  return match ? match[1] : String(link).trim();
}

// The "Sign Up For The Mailing List!" button: opens a pre-written email.
export const MAILING_LIST_HREF =
  "mailto:office@thesms.org?subject=Re%3A%20Mailing%20List!&body=Hello%20Santa%20Monica%20Synagogue%2C%20%0A%0AMy%20name%20is%20(please%20put%20your%20name%20here)%2C%20and%20I'd%20LOVE%20for%20you%20to%20put%20me%20on%20your%20mailing%20list%20so%20I%20can%20keep%20up%20with%20all%20your%20AMAZING%20goings%20on!%0A%0AThank%20you%20so%20much!";

export const OUTSIDE_LINKS = {
  memorialScrollsTrust: "https://memorialscrollstrust.org/",
  torahDetails:
    "https://drive.google.com/file/d/1O06mMC_DzcJvWJIC_voU4K_VGaPREIXh/view",
  nytTorahStory:
    "https://www.nytimes.com/2024/02/05/arts/torah-scrolls-survived-the-nazis.html",
  sermonsPlaylists: CONTACT.youtubeChannel,
};

// Worship page: Holiday Celebrations videos (YouTube).
export const CELEBRATIONS = videosData.holidayCelebrations.map((v) => ({
  title: v.title,
  youtube: youtubeId(v.youtube),
  body: v.description,
}));

// Worship page: High Holy Days sermons and music (YouTube).
const toCard = (v) => ({
  when: v.occasion,
  title: v.title,
  youtube: youtubeId(v.youtube),
});
export const HHD_SERMONS = videosData.highHolyDaysSermons.map(toCard);
export const HHD_MUSIC = videosData.highHolyDaysMusic.map(toCard);

// Activities page. `id` is the section's anchor and matches the old address
// (e.g. /connect/softball). `photo` is optional.
export const ACTIVITIES = [
  {
    id: "softball",
    title: "The Hebrew Nationals Softball Team",
    icon: "trophy",
    photo: PHOTOS.softballTeam,
  },
  {
    id: "bookclub-6phhy",
    title: "Book-Of-The-Every-Other-Month Club",
    icon: "book",
  },
  { id: "moviemavens", title: "Movie Mavens", icon: "film" },
  {
    id: "wineclub",
    title: "L'Chaim Wine Club",
    icon: "wine",
    photo: PHOTOS.sangriaGroup,
  },
  { id: "progressive-dinner", title: "Progressive Dinner", icon: "utensils" },
  { id: "gamenight", title: "Game Night", icon: "dice" },
  { id: "lecture-series", title: "Speaker Series", icon: "mic" },
  { id: "tikkun-olam", title: "Tikkun Olam", icon: "heart" },
];

// Movie Mavens: "Here's what we've watched during the last year or two".
export const MOVIES = clubsData.movies.map((m) => ({
  title: m.title,
  href: m.link || undefined,
}));

// Activities page: softball season and the book club's current pick.
export const SOFTBALL_PAGE = clubsData.softball;
export const BOOK_CLUB = clubsData.bookClub;

// Education page: Adult Education classes (same list as the homepage).
export const ADULT_CLASSES = CLASSES;

// Events (edited in the dashboard). Sorted newest first. Upcoming vs. past
// is decided by each event's date; past events hide their sign-up button.
const dateParts = (iso) => {
  const [y, m, d] = String(iso).slice(0, 10).split("-").map(Number);
  return new Date(y, m - 1, d);
};
const paragraphs = (text, splitOn) =>
  String(text || "")
    .split(splitOn)
    .map((part) => part.trim())
    .filter(Boolean);
export const EVENT_LISTINGS = eventsData.events
  .filter((e) => e.title && e.date)
  .map((e) => {
    const day = dateParts(e.date);
    return {
      title: e.title,
      isoDate: String(e.date).slice(0, 10),
      date: day.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      month: day.toLocaleDateString("en-US", { month: "short" }),
      day: String(day.getDate()),
      time: e.time,
      place: e.place,
      paragraphs: paragraphs(e.description, /\n\s*\n/),
      listTitle: e.listTitle,
      list: (e.list || []).filter(Boolean),
      closing: paragraphs(e.closing, /\n/),
      cta:
        e.buttonLabel && e.buttonLink
          ? { label: e.buttonLabel, href: e.buttonLink }
          : null,
      photo: e.photo ? asset(e.photo) : null,
    };
  })
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

// Join page testimonials (all of them).
export const JOIN_TESTIMONIALS = ALL_TESTIMONIALS;

// Contact form: the "Inquiring about" choices.
export const CONTACT_TOPICS = [
  "Services",
  "Membership",
  "High Holy Days",
  "Education",
];

// Extra photos used only on inner pages. The "0I0A" photographer's shots and
// the Susice photos come from the old Squarespace site.
export const PAGE_PHOTOS = {
  rabbiBima: asset("photos/sms-rabbi-bima.jpg"),
  rabbiTallit: asset("photos/sms-rabbi-tallit.jpg"),
  rabbiHugBook: asset("photos/sms-rabbi-hug-book.jpg"),
  rabbiTorah: asset("photos/sms-rabbi-torah.jpg"),
  rabbiStorytime: asset("photos/sms-rabbi-storytime.jpg"),
  rabbiBook: asset("photos/sms-rabbi-book.jpg"),
  sanctuaryHug: asset("photos/sms-sanctuary-hug.jpg"),
  courtyardCircle: asset("photos/sms-courtyard-circle.jpg"),
  friendsEmbrace: asset("photos/sms-friends-embrace.jpg"),
  parkingMap: asset("photos/sms-parking-map.jpg"),
  judaicaCup: asset("photos/sms-judaica-cup.jpg"),
  torahMantle: asset("photos/sms-torah-mantle.jpg"),
  glassMezuzot: asset("photos/sms-glass-mezuzot.jpg"),
  glassStar: asset("photos/sms-glass-star.jpg"),
  shalomCloth: asset("photos/sms-shalom-cloth.jpg"),
  tallit: asset("photos/sms-tallit.jpg"),
  susiceTorah: asset("photos/sms-susice-torah.jpg"),
  susiceHana: asset("photos/sms-susice-hana.jpg"),
  susicePlaque: asset("photos/sms-susice-plaque.jpg"),
  hotDogs24: asset("photos/sms-hot-dogs-24.jpg"),
  softballPews: asset("photos/sms-softball-pews.jpg"),
  sangria: asset("photos/sms-sangria.jpg"),
  sangriaGroup: asset("photos/sms-sangria-group.jpg"),
  bima: asset("photos/sms-bima.jpg"),
  interfaithBeach: asset("photos/sms-interfaith-beach.jpg"),
  twoWomen: asset("photos/sms-two-women.jpg"),
  sbWalk: asset("photos/sms-sb-walk.jpg"),
};
