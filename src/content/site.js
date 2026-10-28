// ---------------------------------------------------------------------------
// SITE CONTENT
// Things the office updates (contact details, form links, events, classes,
// testimonials, videos, clubs) live in src/content/data/*.json and are edited
// through the dashboard (Pages CMS, see .pages.yml). This file turns those
// into what the pages use, and holds the rest of the shared site content.
// Longer paragraphs and headings live in the matching file in src/sections/
// or src/pages/ (for example sections/Rabbi.jsx).
// ---------------------------------------------------------------------------
import classesData from "./data/classes.json";
import clubsData from "./data/clubs.json";
import eventsData from "./data/events.json";
import settings from "./data/settings.json";
import testimonialsData from "./data/testimonials.json";

// Builds the address of a file in the public/ folder (photos, videos).
export const asset = (path) =>
  import.meta.env.BASE_URL + String(path).replace(/^\/+/, "");

// Address, phone, email, Facebook.
const fullAddress = `${settings.address.street}, ${settings.address.cityStateZip}`;
export const CONTACT = {
  street: settings.address.street,
  cityStateZip: settings.address.cityStateZip,
  addressFull: fullAddress,
  addressShort: settings.address.short,
  mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress).replace(/%20/g, "+")}`,
  phone: settings.phone,
  phoneHref: `tel:+1${settings.phone.replace(/\D/g, "").slice(-10)}`,
  email: settings.email,
  membershipEmail: settings.membershipEmail,
  membershipContact: settings.membershipContact,
  facebook: settings.facebook,
  youtubeChannel: settings.youtubeChannel,
};

// Buttons that go to forms on thesms.org (ShulCloud).
export const LINKS = {
  donate: settings.links.donate,
  join: settings.links.joinNow,
  intake: settings.links.contactForm,
  hhd: settings.links.highHolyDays,
  hhdLabel: settings.links.highHolyDaysLabel,
  login: settings.links.memberLogin,
  newMemberIntake: settings.links.newMemberIntake,
  calendar: settings.links.calendar,
};

// Menu bar and footer "Explore" links. Paths starting with "/" are pages on
// this site; full web addresses open in a new tab.
export const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Worship", href: "/worship" },
  { label: "Holocaust Torah", href: "/our-holocaust-torah" },
  { label: "Rabbi Shira", href: "/rabbi-shira" },
  { label: "Activities", href: "/activities" },
  { label: "Education", href: "/education" },
  { label: "Calendar", href: LINKS.calendar },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];
// When the site is shown inside thesms.org (ShulCloud), links between pages
// must open the matching ShulCloud page instead. Left: page on this site.
// Right: the thesms.org page that holds it. Change the right side if a
// ShulCloud page gets a different address.
export const SHULCLOUD_PAGES = {
  "/": "https://www.thesms.org/",
  "/about-us": "https://www.thesms.org/about-us.html",
  "/worship": "https://www.thesms.org/worship1.html",
  "/our-holocaust-torah": "https://www.thesms.org/our-holocaust-torah-new.html",
  "/rabbi-shira": "https://www.thesms.org/rabbi-shira.html",
  "/activities": "https://www.thesms.org/activities.html",
  "/education": "https://www.thesms.org/education5.html",
  "/events": "https://www.thesms.org/events.html",
  "/join": "https://www.thesms.org/join.html",
  // Contact uses ShulCloud's own contact form on thesms.org.
  "/contact": "https://www.thesms.org/contact-us",
  // Older names for the same pages (the first ShulCloud embed codes use them).
  "/about": "https://www.thesms.org/about-us.html",
  "/coaching": "https://www.thesms.org/rabbi-shira.html",
  "/connect": "https://www.thesms.org/activities.html",
  "/membership": "https://www.thesms.org/join.html",
};

// Every-question-you-were-going-to-ask cards.
export const FAQS = [
  {
    key: "parking",
    question: "Where do I park?",
    title: "Parking is easy",
    body: "We are located near a large parking lot and also have street parking available.",
  },
  {
    key: "dress",
    question: "What should I wear?",
    title: "Come exactly as you are",
    body: "There is no dress code. Wear what is comfortable for you.",
  },
  {
    key: "access",
    question: "Can I get in without stairs?",
    title: "Step-free and fully accessible",
    body: "Yes. There are no stairs to deal with, and we are fully wheelchair-accessible.",
  },
  {
    key: "interfaith",
    question: "Can I bring someone who is not Jewish?",
    title: "Interfaith families belong here",
    body: "Friends, spouses, and partners are welcome fully. Rabbi Shira serves as Vice President of the Santa Monica Area Interfaith Council.",
  },
];

// However-you-arrive door cards.
export const DOORS = [
  {
    key: "worship",
    title: "Worship",
    hebrew: "תְּפִלָּה",
    blurb:
      "Friday night Shabbat at 6 PM — music, meaning, and weekly community. Make us part of your routine.",
    cta: "Service times",
    href: "#worship",
  },
  {
    key: "learning",
    title: "Learning",
    hebrew: "תּוֹרָה",
    blurb: "Hebrew, liturgy, and Torah with Rabbi Shira.",
    cta: "See the schedule",
    href: "#learning",
  },
  {
    key: "community",
    title: "Community",
    hebrew: "קְהִלָּה",
    blurb: "Softball, wine club, movie mavens, and more.",
    cta: "Find your group",
    href: "#community",
  },
  {
    key: "give",
    title: "Give",
    hebrew: "צְדָקָה",
    blurb:
      "45 years of West Los Angeles Reform Jewish community exists because of those who chose to sustain our peoplehood.",
    cta: "Make a gift",
    href: LINKS.donate,
  },
];

// In-a-big-world lines in the About section.
export const CONTRASTS = [
  {
    a: "In a big world,",
    b: "we are intimate.",
  },
  {
    a: "In a fast world,",
    b: "we are steady.",
  },
  {
    a: "In a lonely world,",
    b: "we are a community.",
  },
  {
    a: "In an anonymous world,",
    b: "we know one another by name.",
  },
];

// You're-invited cards on the homepage: weekly Shabbat, then year-round
// highlights (upcoming dated events take their place automatically).
const TONES = ["ocean", "coral", "turquoise"];
export const EVENTS = [
  {
    month: "Every",
    day: settings.shabbat.day.slice(0, 3),
    title: "Shabbat Services",
    time: settings.shabbat.time,
    place: settings.shabbat.place,
    blurb: settings.shabbat.description,
    tone: "turquoise",
  },
  ...eventsData.yearRound.map((item, index) => ({
    month: item.badgeTop,
    day: item.badgeBottom,
    title: item.title,
    time: item.time,
    place: item.place,
    blurb: item.description,
    tone: TONES[index % TONES.length],
  })),
];

// Also-on-the-calendar items under Learning.
export const MORE_EVENTS = [
  {
    title: "Game Night",
    when: "Superbowl weekend",
    blurb:
      "The Saturday before the Super Bowl is a fun-filled evening of Scrabble, board games, poker, and, of course, food! Bring your games, bring your food, and let the FUN begin!",
  },
  {
    title: "Purim Shpiel",
    when: "Purim with Dinner and Megillah",
    blurb:
      "Megillah reading plus original Purim lyrics to songs you already know, written by Rabbi Shira. We engage in responsible partying at The SMS.",
  },
];

// Adult Learning class schedule.
export const CLASSES = classesData.classes;

// Community group chips.
export const GROUPS = [
  "Hebrew Nationals Softball",
  "Book-of-the-Every-Other-Month Club",
  "Movie Mavens",
  "L'Chaim Wine Club",
  "Progressive Dinner",
  "Game Night",
  "Tikkun Olam",
];

// Member quotes. All appear on the Join page; the ones marked "show on
// homepage" also appear in "Why our members love it here".
export const ALL_TESTIMONIALS = testimonialsData.testimonials.map((t) => ({
  quote: t.quote,
  who: t.name,
  onHomepage: t.onHomepage,
}));
export const TESTIMONIALS = ALL_TESTIMONIALS.filter((t) => t.onHomepage);

// Photo files (in public/photos).
export const PHOTOS = {
  torahScrolls: asset("photos/sms-torah-scrolls.jpg"),
  torah: asset("photos/sms-torah-open.jpg"),
  beachGathering: asset("photos/sms-beach-gathering.jpg"),
  beachGroup: asset("photos/sms-beach-group.jpg"),
  beach: asset("photos/sms-beach-family.jpg"),
  softballTeam: asset("photos/sms-softball-team.jpg"),
  sbLineup: asset("photos/sms-sb-lineup.jpg"),
  sbBatter: asset("photos/sms-sb-batter.jpg"),
  sbTrophyTall: asset("photos/sms-sb-trophy-tall.jpg"),
  sbHero: asset("photos/sms-sb-hero.jpg"),
  sbAloft: asset("photos/sms-sb-aloft.jpg"),
  sbDugout: asset("photos/sms-sb-dugout.jpg"),
  menorahTable: asset("photos/sms-menorah-table.jpg"),
  purim: asset("photos/sms-purim.jpg"),
  giftshop: asset("photos/sms-giftshop-couple.jpg"),
  socialHall: asset("photos/sms-social-hall.jpg"),
  onegTray: asset("photos/sms-oneg-tray.jpg"),
  workshop: asset("photos/sms-seder-tables.jpg"),
  pomegranate: asset("photos/sms-pomegranate.jpg"),
  sangriaGroup: asset("photos/sms-patio-table.jpg"),
  rabbiShira: asset("photos/sms-rabbi-shira.jpg"),
  rabbiDesk: asset("photos/sms-rabbi-desk.jpg"),
  generations: asset("photos/sms-generations.jpg"),
};

// Video files (in public/media).
export const VIDEOS = {
  special: {
    src: asset("media/sms-video-special.mp4"),
    label: "What makes The Santa Monica Synagogue special?",
  },
  reviews: {
    src: asset("media/sms-video-reviews.mp4"),
    label: "Members read their own reviews of the synagogue",
  },
  hhd: {
    src: asset("media/sms-video-hhd.mp4"),
    label: "Need a place to go for Rosh Hashanah and Yom Kippur?",
  },
  membership: {
    src: asset("media/sms-video-membership.mp4"),
    label: "Ron introduces membership at The Santa Monica Synagogue",
  },
};

// Hebrew Nationals softball section (homepage).
export const SOFTBALL = {
  season: clubsData.softball.homepageSeason,
  story: clubsData.softball.homepageStory,
  story2: clubsData.softball.homepageStory2,
  facts: clubsData.softball.facts,
  contactName: settings.membershipContact,
};

// L'Chaim Wine Club section.
export const WINE_CLUB = {
  club: "L'Chaim Wine Club",
  blurb:
    "During our tastings we explore the wonderful world of wine. We've tasted wines from Italy, France, New Zealand and South Africa, and of course, California!",
  clubBlurb:
    "The club is not just for wine experts; it's for any congregant who enjoys wine, likes to eat the fine food that the attendees make and bring, and likes to meet other members in a relaxed social setting. Don't miss our annual Sangria Fest!",
};
