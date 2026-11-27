import { BookOpen, CalendarDays, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { PAGE_PHOTOS } from "../content/pages";
import { ClubsSections } from "./ActivitiesPage";
import { ClassesSection } from "./EducationPage";
import { RecentEvents, UpcomingEvents } from "./EventsPage";

// One page for everything that happens at the synagogue: upcoming events,
// classes with Rabbi Shira, clubs and groups, and recent events.
// The old addresses /events, /activities (/connect) and /education open this
// page at their part, so links on thesms.org keep working.
const PARTS = [
  { id: "upcoming", label: "Upcoming events", icon: CalendarDays },
  { id: "classes", label: "Classes with Rabbi Shira", icon: BookOpen },
  { id: "clubs", label: "Clubs and groups", icon: Users },
];

export function CommunityPage({ section }) {
  return (
    <PageLayout scrollTo={section}>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Events, classes and{" "}
            <span className="sms-swash sms-swash-bright">clubs.</span>
          </>
        }
        intro={
          <p>
            Everything happening at The Santa Monica Synagogue, in one place.
            Come to a celebration, join a class, or find your people in one of
            our clubs.
          </p>
        }
        image={PAGE_PHOTOS.courtyardCircle}
        imageAlt="Congregants gathered in a circle in the courtyard for a celebration"
      />

      {/* Jump to a part of the page */}
      <nav
        aria-label="On this page"
        className="bg-[var(--color-sand)] pt-2 pb-4"
      >
        <div className="container flex flex-wrap gap-3">
          {PARTS.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="sms-lift inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[1.02rem] font-semibold text-[var(--color-pacific)] shadow-[0_6px_20px_-14px_rgba(11,58,91,0.6)] hover:bg-[var(--color-cyan-pale)] transition-colors"
            >
              <Icon className="h-5 w-5 text-[var(--color-turquoise-deep)]" />
              {label}
            </a>
          ))}
        </div>
      </nav>

      <UpcomingEvents id="upcoming" showShabbat={false} />
      <ClassesSection id="classes" />

      <div id="clubs" className="scroll-mt-28 bg-[var(--color-sand)] pt-6">
        <div className="container sms-reveal mb-6">
          <p className="sms-eyebrow mb-3">Clubs and groups</p>
          <h2 className="sms-h2 text-[var(--color-pacific)]">
            Build community and{" "}
            <span className="sms-swash">friendships.</span>
          </h2>
        </div>
      </div>
      <ClubsSections />

      <RecentEvents id="recent" />
    </PageLayout>
  );
}
