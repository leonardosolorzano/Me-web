import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getDictionary, getPosts, resolveLocale } from "@/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  return {
    title: dict.blog.metaTitle,
    description: dict.blog.intro,
  };
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  const posts = getPosts(dict);

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="animate-fade-up mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {"// "}
            {dict.blog.eyebrow}
          </div>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {dict.blog.title}
            <br />
            <span className="text-gradient">{dict.blog.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted">{dict.blog.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              locale={locale}
              readMoreLabel={dict.postCard.read}
            />
          ))}
        </div>
      </div>
    </div>
  );
}