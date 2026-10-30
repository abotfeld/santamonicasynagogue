import { Route, Router as WouterRouter, Switch } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AboutPage } from "./pages/AboutPage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { ConceptA } from "./pages/ConceptA";
import { ContactPage } from "./pages/ContactPage";
import { EducationPage } from "./pages/EducationPage";
import { EmbedFooter, EmbedHeader } from "./pages/EmbedParts";
import { EventsPage } from "./pages/EventsPage";
import { HolocaustTorahPage } from "./pages/HolocaustTorahPage";
import { Home } from "./pages/Home";
import { JoinPage } from "./pages/JoinPage";
import { NotFound } from "./pages/NotFound";
import { RabbiPage } from "./pages/RabbiPage";
import { ReviewNotes } from "./pages/ReviewNotes";
import { WorshipPage } from "./pages/WorshipPage";

// Page addresses match the thesms.org page names (about-us, rabbi-shira,
// activities, join...). The older names (/about, /coaching, /connect,
// /membership) still work, because the first ShulCloud embed codes use them.
// "/" is the public homepage (Concept B, the approved design).
// "/concept-a" and "/review" are leftovers from the client review period.
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/worship" component={WorshipPage} />
      <Route path="/our-holocaust-torah" component={HolocaustTorahPage} />
      <Route path="/worship/ourtorah" component={HolocaustTorahPage} />
      <Route path="/worship/:section">
        {(params) => <WorshipPage section={params.section} />}
      </Route>
      <Route path="/coaching" component={RabbiPage} />
      <Route path="/rabbi-shira" component={RabbiPage} />
      <Route path="/connect" component={ActivitiesPage} />
      <Route path="/activities" component={ActivitiesPage} />
      <Route path="/activities/:section">
        {(params) => <ActivitiesPage section={params.section} />}
      </Route>
      <Route path="/connect/:section">
        {(params) => <ActivitiesPage section={params.section} />}
      </Route>
      <Route path="/education" component={EducationPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/events/:event" component={EventsPage} />
      <Route path="/membership" component={JoinPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/concept-b" component={Home} />
      <Route path="/concept-a" component={ConceptA} />
      <Route path="/review" component={ReviewNotes} />
      {/* Menu bar and footer alone, shown around the ShulCloud calendar. */}
      <Route path="/embed/header" component={EmbedHeader} />
      <Route path="/embed/footer" component={EmbedFooter} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// The preview link can't use real page addresses, so in preview builds the
// pages switch in memory instead (start page can be set with ?page=/about).
const previewLocation =
  import.meta.env.MODE === "preview"
    ? memoryLocation({
        path: new URLSearchParams(window.location.search).get("page") || "/",
      })
    : null;

export function App() {
  return (
    <ErrorBoundary>
      {previewLocation ? (
        <WouterRouter hook={previewLocation.hook}>
          <Router />
        </WouterRouter>
      ) : (
        <Router />
      )}
    </ErrorBoundary>
  );
}
