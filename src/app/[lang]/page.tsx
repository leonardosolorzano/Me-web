import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";
import { getDictionary, getPosts, localizePath, resolveLocale } from "@/i18n";

const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Django",
  "MySQL",
  "Figma",
  "FastAPI",
  "GraphQL",
  "Git",
];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  const [latestPost] = getPosts(dict);

  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 pt-24 pb-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--glow)]" />
            {dict.home.badge} · {new Date().getFullYear()}
          </div>

          <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {dict.home.greeting}
            <br />
            <span className="text-gradient">{dict.profile.firstName}</span>
          </h1>

          <div className="animate-fade-up mt-5 font-mono text-lg text-muted [animation-delay:120ms] sm:text-2xl">
            <span className="text-accent">&gt;</span>{" "}
            <Typewriter phrases={dict.profile.typewriter} />
          </div>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted [animation-delay:200ms]">
            {dict.profile.shortIntro}
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:280ms]">
            <Link
              href={localizePath("/#proyectos", locale)}
              className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-[0_12px_32px_-12px_var(--glow)] transition hover:brightness-110"
            >
              {dict.home.viewProjects}
            </Link>
            <Link
              href={localizePath("/contact", locale)}
              className="rounded-lg border border-line bg-surface/60 px-7 py-3 font-semibold text-foreground backdrop-blur transition hover:border-accent/60"
            >
              {dict.home.contactMe}
            </Link>
          </div>

          <div className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted [animation-delay:360ms]">
            {dict.profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-5 w-5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>
      </section>

      <section className="marquee-mask overflow-hidden border-y border-line bg-surface/40 py-4 backdrop-blur">
        <div className="animate-marquee flex w-max items-center gap-8 px-4">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-8 font-mono text-sm uppercase tracking-[0.2em] text-muted"
            >
              {tech}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      <section id="proyectos" className="px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeading
            number={dict.home.projectsNumber}
            title={dict.home.projectsTitle}
            subtitle={dict.home.projectsSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {dict.profile.projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={{ ...project, href: localizePath(project.href, locale) }}
                index={i + 1}
                exploreLabel={dict.projectCard.explore}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 px-6 py-16 backdrop-blur">
        <div className="mx-auto grid w-full max-w-5xl gap-8 sm:grid-cols-3">
          {dict.profile.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeading
            number={dict.home.blogNumber}
            title={dict.home.blogTitle}
            subtitle={dict.home.blogSubtitle}
          />
          {latestPost && (
            <div className="grid gap-6 md:grid-cols-2">
              <PostCard
                post={latestPost}
                locale={locale}
                readMoreLabel={dict.postCard.read}
              />
            </div>
          )}
          <div className="mt-10 flex justify-center">
            <Link
              href={localizePath("/blog", locale)}
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-6 py-3 font-semibold backdrop-blur transition hover:border-accent/60"
            >
              {dict.home.viewAllPosts}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <div className="card-glow relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-10 text-center backdrop-blur">
            <span className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl">
              {dict.home.ctaTitle}{" "}
              <span className="text-gradient">{dict.home.ctaTitleAccent}</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-muted">
              {dict.home.ctaText}
            </p>
            <Link
              href={localizePath("/contact", locale)}
              className="relative mt-8 inline-block rounded-lg bg-gradient-to-r from-accent to-accent-2 px-8 py-3 font-semibold text-white shadow-[0_12px_32px_-12px_var(--glow)] transition hover:brightness-110"
            >
              {dict.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {"// "}
        {number}
      </div>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-muted">{subtitle}</p>
    </div>
  );
}