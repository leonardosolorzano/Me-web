import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, localizePath, resolveLocale } from "@/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  return {
    title: dict.about.metaTitle,
    description: dict.profile.bio[0],
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="animate-fade-up mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {"// "}
              {dict.about.eyebrow}
            </div>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {dict.about.title}
              <br />
              <span className="text-gradient">{dict.about.titleAccent}</span>
            </h1>
          </div>
          <div className="card-glow hidden rounded-lg border border-line bg-surface/60 p-5 font-mono text-xs text-muted sm:block">
            <p>
              name: {JSON.stringify(dict.profile.name)}
            </p>
            <p>
              {dict.about.role}: {JSON.stringify(dict.profile.role)}
            </p>
            <p>
              {dict.about.base}: {JSON.stringify(dict.profile.location)}
            </p>
          </div>
        </div>

        <section className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {dict.profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={localizePath("/contact", locale)}
                className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-[0_12px_32px_-12px_var(--glow)] transition hover:brightness-110"
              >
                {dict.about.talk}
              </Link>
              <Link
                href={localizePath("/blog", locale)}
                className="rounded-lg border border-line bg-surface/60 px-6 py-3 font-semibold backdrop-blur transition hover:border-accent/60"
              >
                {dict.about.readBlog}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card-glow rounded-lg border border-line bg-surface/60 p-6 backdrop-blur">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="h-2 w-2 rounded-full bg-accent/50" />
                <span className="h-2 w-2 rounded-full bg-accent/30" />
                <span className="ml-2">{dict.about.skillsFile}</span>
              </div>
              <div className="mt-5 space-y-4">
                {dict.profile.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {"// "}
            {dict.about.careerEyebrow}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.about.careerTitle}
          </h2>
          <div className="mt-10 space-y-0">
            {dict.profile.timeline.map((entry, i) => (
              <div key={entry.title} className="relative pl-8 pb-10 last:pb-0">
                <div className="absolute left-0 top-1 h-full w-px bg-line last:hidden">
                  <span className="absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full border border-accent bg-background" />
                </div>
                <div className="absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full border border-accent bg-background shadow-[0_0_12px_var(--glow)]" />
                <div className="font-mono text-xs uppercase tracking-widest text-accent">
                  {entry.period}
                </div>
                <h3 className="mt-1.5 font-display text-xl font-semibold">
                  {entry.title}
                </h3>
                <div className="text-sm font-medium text-muted">
                  {entry.place}
                  {i < dict.profile.timeline.length - 1 ? " →" : ""}
                </div>
                <p className="mt-2 max-w-2xl text-muted">{entry.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}