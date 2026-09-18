import type { Dictionary } from "../types";

export const en: Dictionary = {
  profile: {
    name: "Leonardo",
    firstName: "Leonardo",
    role: "Web Developer & Designer",
    typewriter: [
      "web developer",
      "creator of digital experiences",
      "explorer of the future",
      "passionate about good design",
    ],
    shortIntro:
      "I build modern, fast interfaces with a futuristic aesthetic that turn ideas into real products.",
    location: "Your city, Country",
    email: "hola@leonardo.dev",
    bio: [
      "Hi! I'm Leonardo, a web developer focused on creating unique digital products. I love combining design and technology to build experiences that not only work, but feel on another level.",
      "I constantly explore new tools, web ecosystem trends and design patterns to take every project one step further. My goal is that every line of code counts: clean, fast and intentional.",
      "When I'm not coding, I enjoy researching innovation, watching sci-fi shows and experimenting with small personal projects.",
    ],
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "React / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Django", level: 78 },
      { name: "MySQL", level: 70 },
      { name: "UI / UX Design", level: 80 },
      { name: "Git & DevOps", level: 70 },
    ],
    projects: [
      {
        title: "Nebula Dashboard",
        description:
          "Control panel with real-time data visualization, dark theme and fluid animations.",
        tags: ["Next.js", "TypeScript", "D3.js"],
        href: "/blog",
        image: "/projects/nebula-dashboard.svg",
      },
      {
        title: "Aurora Store",
        description:
          "E-commerce with optimized checkout, dark mode and a flawless shopping experience.",
        tags: ["Django", "MySQL", "Stripe"],
        href: "/blog",
        image: "/projects/aurora-store.svg",
      },
      {
        title: "Orbit API",
        description:
          "Public API with interactive documentation and automatic scaling. Used by 2k+ developers.",
        tags: ["FastAPI", "MySQL", "OpenAPI"],
        href: "/blog",
        image: "/projects/orbit-api.svg",
      },
    ],
    stats: [
      { value: "10+", label: "Completed projects" },
      { value: "5+", label: "Years of experience" },
      { value: "100%", label: "Passion for code" },
    ],
    timeline: [
      {
        period: "2023 — Present",
        title: "Frontend Developer",
        place: "Digital design studio",
        description:
          "Designing and implementing interfaces for clients across industries, focused on performance and accessibility.",
      },
      {
        period: "2021 — 2023",
        title: "Junior Web Developer",
        place: "Creative agency",
        description:
          "Building custom sites and landing pages, improving speed and user experience.",
      },
      {
        period: "2019 — 2021",
        title: "Software Development Studies",
        place: "University",
        description:
          "Solid foundation in programming, databases and systems design. First projects with the community.",
      },
    ],
    socials: [
      { name: "GitHub", href: "https://github.com/leo" },
      { name: "LinkedIn", href: "https://linkedin.com/in/leo" },
      { name: "X", href: "https://x.com/leo" },
    ],
  },
  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    theme: "Change theme",
    menu: "Open menu",
    switchTo: "Switch language to Spanish",
  },
  home: {
    badge: "portfolio",
    greeting: "Hi, I'm",
    viewProjects: "View projects",
    contactMe: "Contact me",
    projectsNumber: "01",
    projectsTitle: "Featured projects",
    projectsSubtitle: "A sample of what I've built.",
    blogNumber: "02",
    blogTitle: "Latest from the blog",
    blogSubtitle: "Ideas, guides and technical experiments.",
    viewAllPosts: "View all articles",
    ctaTitle: "Let's work",
    ctaTitleAccent: "together",
    ctaText:
      "If you're looking for a website that feels from the future, I'm ready to turn your idea into reality.",
    ctaButton: "Let's talk about your project",
  },
  about: {
    metaTitle: "About",
    eyebrow: "about me",
    title: "The person behind",
    titleAccent: "the code",
    role: "role",
    base: "base",
    talk: "Let's talk",
    readBlog: "Read the blog",
    skillsFile: "skills.txt",
    careerEyebrow: "journey",
    careerTitle: "My path",
  },
  blog: {
    metaTitle: "Blog",
    eyebrow: "blog",
    title: "Ideas, guides and",
    titleAccent: "technical notes",
    intro:
      "I write about what I learn while building: design, performance, tools and everyday tricks.",
  },
  post: {
    backToBlog: "back to blog",
    ctaTitle: "Like it?",
    ctaTitleAccent: "Keep exploring",
    moreArticles: "More articles",
    talk: "Let's talk",
  },
  contact: {
    metaTitle: "Contact",
    eyebrow: "contact",
    title: "Let's talk about your",
    titleAccent: "next project",
    intro:
      "Got an idea in mind? Write to me and I'll reply as soon as possible. You can also find me on social media.",
    emailLabel: "email",
    baseLabel: "base",
    socialsLabel: "social",
    metaDescription: "Let's talk about your project: email me at {email}.",
  },
  form: {
    fileName: "new_message.txt",
    name: "Your name",
    namePlaceholder: "Ada Lovelace",
    email: "Your email",
    emailPlaceholder: "ada@domain.com",
    message: "Your message",
    messagePlaceholder: "Tell me about your project, goal or deadline…",
    submit: "Send message →",
    subjectPrefix: "Project",
    subjectFallback: "contact from the portfolio",
    success: "✓ Opening your email client… thanks for reaching out!",
  },
  footer: {
    madeWith: "Made with Next.js from the future",
  },
  projectCard: {
    explore: "Explore",
  },
  postCard: {
    read: "Read article",
  },
  posts: [
    {
      slug: "diseno-futurista-con-css",
      title: "Futuristic design with modern CSS",
      description:
        "Gradients, glassmorphism and glow: how to give your website a next-level aesthetic without heavy libraries.",
      date: "2026-09-12",
      readTime: "6 min read",
      tags: ["CSS", "UI", "Design"],
      blocks: [
        {
          type: "paragraph",
          text: "Futuristic design isn't about adding a thousand animations. It's about intention: light, depth and an atmosphere that invites you to explore the interface.",
        },
        {
          type: "heading",
          text: "Start with a coherent palette",
        },
        {
          type: "paragraph",
          text: "Choose colors that tell a story. A good trick is using a vivid accent over a neutral background and letting the glow do the work of highlighting what matters.",
        },
        {
          type: "list",
          items: [
            "Use CSS variables for your colors and change the whole palette from a single place.",
            "Combine a deep dark background with an electric blue or teal.",
            "Save the glow for key actions and states, don't waste it.",
          ],
        },
        {
          type: "quote",
          text: "Less, but better: the future feels clean.",
        },
        {
          type: "heading",
          text: "Glassmorphism and gradients",
        },
        {
          type: "paragraph",
          text: "The glass effect adds depth. It just takes a bit of backdrop-blur, a subtle border and a translucent color. Soft gradients between accents create visual movement without moving a single pixel.",
        },
      ],
    },
    {
      slug: "nextjs-app-router-guia",
      title: "Next.js App Router: a practical guide",
      description:
        "Layouts, server components and dynamic routes: what every modern project needs to be fast and maintainable.",
      date: "2026-08-28",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web"],
      blocks: [
        {
          type: "paragraph",
          text: "The App Router changed the way we think about React. Everything is a component, and every part of the UI decides whether it renders on the server or on the client.",
        },
        {
          type: "heading",
          text: "Server Components by default",
        },
        {
          type: "paragraph",
          text: "Rendering on the server reduces the JavaScript sent to the browser. Only mark with 'use client' the components that need interaction.",
        },
        {
          type: "list",
          items: [
            "Layouts persist between navigations: fewer re-renders.",
            "Dynamic routes pre-render with generateStaticParams.",
            "Metadata is generated per page with no extra libraries.",
          ],
        },
        {
          type: "heading",
          text: "Dynamic routes",
        },
        {
          type: "paragraph",
          text: "For a blog, the app/blog/[slug]/page.tsx structure is gold. Every article becomes an incredibly fast static page.",
        },
        {
          type: "quote",
          text: "Speed is a feature, not an excuse.",
        },
      ],
    },
    {
      slug: "css-variables-temas-dark-light",
      title: "Dark/light themes without complications",
      description:
        "Learn to build a theme system with CSS variables that respects the user's preference.",
      date: "2026-07-19",
      readTime: "5 min read",
      tags: ["CSS", "Tailwind", "Themes"],
      blocks: [
        {
          type: "paragraph",
          text: "Managing light and dark modes seems hard, but with CSS variables it's surprisingly simple: define your palette in :root and override it with a class on your root element.",
        },
        {
          type: "heading",
          text: "The structure",
        },
        {
          type: "list",
          items: [
            "Define your color tokens as variables in :root.",
            "Add a .dark class to <html> when the user asks for it.",
            "Use those variables in your design and the change is automatic.",
            "Save the preference in localStorage so it survives reloads.",
          ],
        },
        {
          type: "paragraph",
          text: "Today your light mode can be a warm skin-like beige and your dark mode a deep blue. Tomorrow you change two lines and the whole site transforms.",
        },
        {
          type: "quote",
          text: "Your theme, your rules: the color control lives in your variables.",
        },
      ],
    },
  ],
};