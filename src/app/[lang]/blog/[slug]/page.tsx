import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, getPostBySlug, localizePath, resolveLocale } from "@/i18n";
import type { PostBlock } from "@/i18n/dictionaries/es";
import { locales } from "@/i18n/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDictionary(lang).posts.map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  const post = getPostBySlug(dict, slug);
  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostPage({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { slug } = await params;
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  const post = getPostBySlug(dict, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-6 pt-32 pb-24">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href={localizePath("/blog", locale)}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          {dict.post.backToBlog}
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span>{post.date}</span>
            <span className="text-accent">/</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-accent via-line to-transparent" />

        <div className="mt-10 space-y-6">
          {post.blocks.map((block, i) => (
            <PostBlockView key={i} block={block} />
          ))}
        </div>

        <div className="card-glow mt-16 rounded-lg border border-line bg-surface/60 p-8 text-center backdrop-blur">
          <h2 className="font-display text-2xl font-bold">
            {dict.post.ctaTitle}{" "}
            <span className="text-gradient">{dict.post.ctaTitleAccent}</span>
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href={localizePath("/blog", locale)}
              className="rounded-lg border border-line bg-background/60 px-6 py-2.5 font-semibold backdrop-blur transition hover:border-accent/60"
            >
              {dict.post.moreArticles}
            </Link>
            <Link
              href={localizePath("/contact", locale)}
              className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 font-semibold text-white shadow-[0_12px_32px_-12px_var(--glow)] transition hover:brightness-110"
            >
              {dict.post.talk}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostBlockView({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="border-l-2 border-accent pl-4 font-display text-2xl font-bold tracking-tight">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="card-glow rounded-lg border border-line bg-surface/60 p-6 font-display text-xl font-medium backdrop-blur">
          <span className="text-gradient">“</span>
          {block.text}
          <span className="text-gradient">”</span>
        </blockquote>
      );
    default:
      return (
        <p className="text-lg leading-relaxed text-muted">{block.text}</p>
      );
  }
}