type Social = {
  name: string;
  href: string;
};

export default function Footer({
  madeWith,
  firstName,
  socials,
}: {
  madeWith: string;
  firstName: string;
  socials: Social[];
}) {
  return (
    <footer className="border-t border-line bg-background/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {firstName}_dev © {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted">{madeWith}</p>
      </div>
    </footer>
  );
}