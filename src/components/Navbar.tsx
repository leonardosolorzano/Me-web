"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/i18n/locales";
import { toggleTheme, useTheme } from "@/lib/theme";

type NavLink = {
  href: string;
  label: string;
};

export default function Navbar({
  locale,
  homeHref,
  links,
  firstName,
  themeLabel,
  menuLabel,
  switchTo,
  localeLabel,
}: {
  locale: Locale;
  homeHref: string;
  links: NavLink[];
  firstName: string;
  themeLabel: string;
  menuLabel: string;
  switchTo: string;
  localeLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 8,
  );
  const theme = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === homeHref ? pathname === homeHref : pathname.startsWith(href);

  const targetLocale = locale === "es" ? "en" : "es";
  const switchHref = pathname.replace(
    /^\/(es|en)(?=\/|$)/,
    `/${targetLocale}`,
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line transition-all ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl shadow-[0_8px_40px_-24px_var(--glow)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href={homeHref}
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
        >
          <span className="relative grid h-8 w-8 place-items-center">
            <span className="absolute inset-0 rotate-45 rounded-[6px] border border-accent/60 transition-transform duration-500 group-hover:rotate-[135deg]" />
            <span className="text-gradient font-mono text-sm font-semibold">
              {firstName[0]}
            </span>
          </span>
          <span className="text-foreground">
            {firstName}
            <span className="text-accent">.</span>
            <span className="text-gradient">dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent-2 transition-opacity ${
                  isActive(link.href) ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${targetLocale}; path=/; max-age=31536000; samesite=lax`;
            }}
            aria-label={switchTo}
            title={switchTo}
            className="grid min-w-9 place-items-center rounded-lg border border-line bg-surface/60 px-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition hover:border-accent/60 hover:text-accent"
          >
            {localeLabel}
          </Link>

          <button
            type="button"
            onClick={() => void toggleTheme()}
            aria-label={themeLabel}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60 text-muted transition hover:border-accent/60 hover:text-accent"
          >
            {theme === "dark" ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.05 16.95l-1.41 1.41m12.72 0-1.41-1.41M7.05 7.05 5.64 5.64M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={menuLabel}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60 text-foreground md:hidden"
          >
            {open ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background/90 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 py-3 text-sm font-medium transition-colors last:border-0 ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}