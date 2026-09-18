import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getDictionary, resolveLocale } from "@/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription.replace(
      "{email}",
      dict.profile.email,
    ),
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="animate-fade-up mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {"// "}
            {dict.contact.eyebrow}
          </div>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {dict.contact.title}
            <br />
            <span className="text-gradient">{dict.contact.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted">{dict.contact.intro}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm email={dict.profile.email} strings={dict.form} />
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="card-glow rounded-lg border border-line bg-surface/60 p-6 backdrop-blur">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {dict.contact.emailLabel}
              </div>
              <a
                href={`mailto:${dict.profile.email}`}
                className="mt-2 block font-display text-lg font-semibold transition-colors hover:text-accent"
              >
                {dict.profile.email}
              </a>
            </div>

            <div className="card-glow rounded-lg border border-line bg-surface/60 p-6 backdrop-blur">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {dict.contact.baseLabel}
              </div>
              <div className="mt-2 font-display text-lg font-semibold">
                {dict.profile.location}
              </div>
            </div>

            <div className="card-glow rounded-lg border border-line bg-surface/60 p-6 backdrop-blur">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {dict.contact.socialsLabel}
              </div>
              <div className="mt-3 space-y-2">
                {dict.profile.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-line/70 pb-2 text-sm font-medium transition-colors last:border-0 last:pb-0 hover:text-accent"
                  >
                    {social.name}
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}