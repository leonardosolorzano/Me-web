"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

type FormStrings = Dictionary["form"];

export default function ContactForm({
  email,
  strings,
}: {
  email: string;
  strings: FormStrings;
}) {
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${strings.subjectPrefix} — ${name || strings.subjectFallback}`,
    );
    const body = encodeURIComponent(`${message}\n\n— ${name} (${emailValue})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-lg border border-line bg-background/60 px-4 py-3 text-foreground placeholder:text-muted/60 outline-none backdrop-blur transition focus:border-accent/70 focus:ring-2 focus:ring-accent/20";

  return (
    <form
      onSubmit={submit}
      className="card-glow rounded-lg border border-line bg-surface/60 p-6 backdrop-blur sm:p-8"
    >
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-accent/50" />
        <span className="h-2 w-2 rounded-full bg-accent/30" />
        <span className="ml-2">{strings.fileName}</span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{strings.name}</span>
          <input
            className={inputClasses}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={strings.namePlaceholder}
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            {strings.email}
          </span>
          <input
            type="email"
            className={inputClasses}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder={strings.emailPlaceholder}
            required
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium">
          {strings.message}
        </span>
        <textarea
          className={`${inputClasses} min-h-40 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={strings.messagePlaceholder}
          required
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-white shadow-[0_12px_32px_-12px_var(--glow)] transition hover:brightness-110"
      >
        {strings.submit}
      </button>

      {sent && (
        <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
          {strings.success}
        </p>
      )}
    </form>
  );
}