import { useState } from "react";
import { Check, Send } from "lucide-react";
import { CONTACT_TOPICS } from "../content/pages";
import { CONTACT } from "../content/site";

const IS_PREVIEW = import.meta.env.MODE === "preview";

// Contact form. On the live Netlify site, submissions are collected by Netlify
// Forms (form name "contact"; a matching hidden copy of this form lives in
// index.html so Netlify can find it). See README for where messages arrive.
const field =
  "w-full rounded-[0.9rem] border border-[var(--color-pacific)]/18 bg-white px-4 py-3.5 text-[1.08rem] text-[var(--color-ink)] outline-none transition focus:border-[var(--color-turquoise)] focus:ring-3 focus:ring-[var(--color-turquoise)]/25";
const label =
  "block text-[1rem] font-semibold text-[var(--color-pacific)] mb-1.5";

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | preview
  const onSubmit = async (event) => {
    event.preventDefault();
    if (IS_PREVIEW) {
      setStatus("preview");
      return;
    }
    setStatus("sending");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="sms-glass-card rounded-[1.5rem] p-9 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-strong)] text-[var(--accent-on)]">
          <Check className="h-7 w-7" />
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold text-[var(--color-pacific)] mb-2">
          Thank you!
        </h2>
        <p className="text-[1.15rem] text-[var(--color-ink)]/78">
          Your message is on its way to the office. We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="sms-glass-card rounded-[1.5rem] p-7 md:p-9 space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>
      <fieldset>
        <legend className={label}>Name</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-[0.95rem] text-[var(--color-ink)]/70 mb-1"
            >
              First Name{" "}
              <span className="text-[var(--color-ink)]/50">(required)</span>
            </label>
            <input
              id="first-name"
              name="first-name"
              required
              autoComplete="given-name"
              className={field}
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-[0.95rem] text-[var(--color-ink)]/70 mb-1"
            >
              Last Name{" "}
              <span className="text-[var(--color-ink)]/50">(required)</span>
            </label>
            <input
              id="last-name"
              name="last-name"
              required
              autoComplete="family-name"
              className={field}
            />
          </div>
        </div>
      </fieldset>
      <div>
        <label htmlFor="email" className={label}>
          Email{" "}
          <span className="font-normal text-[var(--color-ink)]/50">
            (required)
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="subject" className={label}>
          Subject{" "}
          <span className="font-normal text-[var(--color-ink)]/50">
            (required)
          </span>
        </label>
        <input id="subject" name="subject" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message{" "}
          <span className="font-normal text-[var(--color-ink)]/50">
            (required)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
        />
      </div>
      <fieldset>
        <legend className={label}>Inquiring about</legend>
        <div className="flex flex-wrap gap-2.5">
          {CONTACT_TOPICS.map((topic) => (
            <label
              key={topic}
              className="flex items-center gap-2 rounded-full border border-[var(--color-turquoise)]/30 bg-white px-4 py-2.5 text-[1.04rem] text-[var(--color-pacific)] cursor-pointer has-[:checked]:bg-[var(--color-cyan-pale)] has-[:checked]:border-[var(--color-turquoise)]"
            >
              <input
                type="checkbox"
                name="inquiring-about"
                value={topic}
                className="accent-[var(--color-turquoise-deep)] h-4 w-4"
              />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={status === "sending"}
        className="sms-btn sms-btn-primary !px-8 !py-4 !text-[1.06rem] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit"}
        <Send className="h-4.5 w-4.5" />
      </button>
      {status === "error" && (
        <p role="alert" className="text-[1.04rem] text-[#9E2E22]">
          The message didn't go through. Please try again, or email{" "}
          {CONTACT.email}.
        </p>
      )}
      {status === "preview" && (
        <p role="status" className="text-[1.04rem] text-[var(--color-ocean)]">
          This is the preview, so nothing was sent. The form sends messages once
          the site is live on Netlify.
        </p>
      )}
    </form>
  );
}
