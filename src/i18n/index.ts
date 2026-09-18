import { es, type Dictionary } from "./dictionaries/es";
import { en } from "./dictionaries/en";
import { defaultLocale, isLocale, type Locale } from "./locales";

export type { Dictionary } from "./dictionaries/es";
export type { Locale } from "./locales";
export { defaultLocale } from "./locales";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function resolveLocale(value: string | undefined): Locale {
  return value !== undefined && isLocale(value) ? value : defaultLocale;
}

export function localizePath(path: string, locale: Locale): string {
  const base = path === "/" ? "" : path;
  return `/${locale}${base}`;
}

export function getPosts(dictionary: Dictionary) {
  return [...dictionary.posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(dictionary: Dictionary, slug: string) {
  return dictionary.posts.find((post) => post.slug === slug);
}