export type Social = {
  name: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  blocks: PostBlock[];
};

export type NavLink = {
  href: string;
  label: string;
};

export interface Dictionary {
  profile: {
    name: string;
    firstName: string;
    role: string;
    typewriter: string[];
    shortIntro: string;
    location: string;
    email: string;
    bio: string[];
    skills: Skill[];
    projects: Project[];
    stats: Stat[];
    timeline: TimelineEntry[];
    socials: Social[];
  };
  nav: {
    links: NavLink[];
    theme: string;
    menu: string;
    switchTo: string;
  };
  home: {
    badge: string;
    greeting: string;
    viewProjects: string;
    contactMe: string;
    projectsNumber: string;
    projectsTitle: string;
    projectsSubtitle: string;
    blogNumber: string;
    blogTitle: string;
    blogSubtitle: string;
    viewAllPosts: string;
    ctaTitle: string;
    ctaTitleAccent: string;
    ctaText: string;
    ctaButton: string;
  };
  about: {
    metaTitle: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    role: string;
    base: string;
    talk: string;
    readBlog: string;
    skillsFile: string;
    careerEyebrow: string;
    careerTitle: string;
  };
  blog: {
    metaTitle: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
  };
  post: {
    backToBlog: string;
    ctaTitle: string;
    ctaTitleAccent: string;
    moreArticles: string;
    talk: string;
  };
  contact: {
    metaTitle: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    emailLabel: string;
    baseLabel: string;
    socialsLabel: string;
    metaDescription: string;
  };
  form: {
    fileName: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    subjectPrefix: string;
    subjectFallback: string;
    success: string;
  };
  footer: {
    madeWith: string;
  };
  projectCard: {
    explore: string;
  };
  postCard: {
    read: string;
  };
  posts: Post[];
}