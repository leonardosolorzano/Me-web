import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { getDictionary, localizePath, resolveLocale } from "@/i18n";
import { locales } from "@/i18n/locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);
  return {
    title: {
      default: `${dict.profile.name} — ${dict.profile.role}`,
      template: `%s — ${dict.profile.name}`,
    },
    description: dict.profile.shortIntro,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const locale = resolveLocale((await params).lang);
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Background />
        <Navbar
          locale={locale}
          homeHref={localizePath("/", locale)}
          links={dict.nav.links.map((link) => ({
            ...link,
            href: localizePath(link.href, locale),
          }))}
          firstName={dict.profile.firstName}
          themeLabel={dict.nav.theme}
          menuLabel={dict.nav.menu}
          switchTo={dict.nav.switchTo}
          localeLabel={locale === "es" ? "EN" : "ES"}
        />
        <main className="flex-1">{children}</main>
        <Footer
          madeWith={dict.footer.madeWith}
          firstName={dict.profile.firstName}
          socials={dict.profile.socials}
        />
      </body>
    </html>
  );
}