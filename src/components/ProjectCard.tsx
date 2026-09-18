import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/i18n/dictionaries/es";

export default function ProjectCard({
  project,
  index = 1,
  exploreLabel,
}: {
  project: Project;
  index?: number;
  exploreLabel: string;
}) {
  return (
    <Link
      href={project.href}
      className="card-glow group relative flex h-full flex-col gap-4 rounded-lg border border-line bg-surface/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-accent/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded border border-white/40 bg-black/40 font-mono text-[11px] text-white backdrop-blur transition-colors group-hover:border-accent/70">
          0{index}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-line bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        {exploreLabel}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}