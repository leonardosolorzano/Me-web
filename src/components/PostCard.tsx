import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Post } from "@/i18n/dictionaries/es";
import { localizePath } from "@/i18n";

export default function PostCard({
  post,
  locale,
  readMoreLabel,
}: {
  post: Post;
  locale: Locale;
  readMoreLabel: string;
}) {
  return (
    <Link
      href={localizePath(`/blog/${post.slug}`, locale)}
      className="card-glow group relative flex h-full flex-col gap-4 rounded-lg border border-line bg-surface/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-accent/50"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
        {post.title}
      </h2>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted">
        {post.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-line bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        {readMoreLabel}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}