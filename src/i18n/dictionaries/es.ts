import type { Dictionary } from "../types";

export const es: Dictionary = {
  profile: {
    name: "Leonardo",
    firstName: "Leonardo",
    role: "Desarrollador Web & Diseñador",
    typewriter: [
      "desarrollador web",
      "creador de experiencias digitales",
      "explorador del futuro",
      "apasionado del buen diseño",
    ],
    shortIntro:
      "Construyo interfaces modernas, rápidas y con estética futurista que convierten ideas en productos reales.",
    location: "Tu ciudad, País",
    email: "hola@leonardo.dev",
    bio: [
      "¡Hola! Soy Leonardo, desarrollador web con un enfoque en crear productos digitales únicos. Me encanta combinar diseño y tecnología para construir experiencias que no solo funcionen, sino que se sientan de otro nivel.",
      "Exploro constantemente nuevas herramientas, novedades del ecosistema web y tendencias de diseño para llevar cada proyecto un paso más allá. Mi objetivo es que cada línea de código cuente: limpia, rápida y con intención.",
      "Cuando no estoy frente al código, me gusta investigar innovación, ver series de ciencia ficción y experimentar con pequeños proyectos personales.",
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
          "Panel de control con visualización de datos en tiempo real, tema oscuro y animaciones fluidas.",
        tags: ["Next.js", "TypeScript", "D3.js"],
        href: "/blog",
        image: "/projects/nebula-dashboard.svg",
      },
      {
        title: "Aurora Store",
        description:
          "E-commerce con checkout optimizado, modo oscuro y experiencia de compra impecable.",
        tags: ["Django", "MySQL", "Stripe"],
        href: "/blog",
        image: "/projects/aurora-store.svg",
      },
      {
        title: "Orbit API",
        description:
          "API pública con documentación interactiva y escalado automático. Usada por más de 2k desarrolladores.",
        tags: ["FastAPI", "MySQL", "OpenAPI"],
        href: "/blog",
        image: "/projects/orbit-api.svg",
      },
    ],
    stats: [
      { value: "10+", label: "Proyectos completados" },
      { value: "5+", label: "Años de experiencia" },
      { value: "100%", label: "Pasión por el código" },
    ],
    timeline: [
      {
        period: "2023 — Presente",
        title: "Desarrollador Frontend",
        place: "Estudio de diseño digital",
        description:
          "Diseñando e implementando interfaces para clientes de varios sectores, con foco en rendimiento y accesibilidad.",
      },
      {
        period: "2021 — 2023",
        title: "Desarrollador Web Junior",
        place: "Agencia creativa",
        description:
          "Construcción de sitios y landing pages a medida, mejorando la velocidad y la experiencia de usuario.",
      },
      {
        period: "2019 — 2021",
        title: "Estudios en Desarrollo de Software",
        place: "Universidad",
        description:
          "Base sólida en programación, bases de datos y diseño de sistemas. Primeros proyectos con la comunidad.",
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
      { href: "/", label: "Inicio" },
      { href: "/about", label: "Sobre mí" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contacto" },
    ],
    theme: "Cambiar tema",
    menu: "Abrir menú",
    switchTo: "Cambiar idioma a inglés",
  },
  home: {
    badge: "portafolio",
    greeting: "Hola, soy",
    viewProjects: "Ver proyectos",
    contactMe: "Contáctame",
    projectsNumber: "01",
    projectsTitle: "Proyectos destacados",
    projectsSubtitle: "Una muestra de lo que he construido.",
    blogNumber: "02",
    blogTitle: "Último del blog",
    blogSubtitle: "Ideas, guías y experimentos técnicos.",
    viewAllPosts: "Ver todos los artículos",
    ctaTitle: "¿Trabajamos",
    ctaTitleAccent: "juntos",
    ctaText:
      "Si buscas una web que se sienta del futuro, estoy listo para convertir tu idea en realidad.",
    ctaButton: "Hablemos de tu proyecto",
  },
  about: {
    metaTitle: "Sobre mí",
    eyebrow: "sobre mí",
    title: "Persona detrás",
    titleAccent: "del código",
    role: "role",
    base: "base",
    talk: "Hablemos",
    readBlog: "Leer el blog",
    skillsFile: "skills.txt",
    careerEyebrow: "trayectoria",
    careerTitle: "Mi recorrido",
  },
  blog: {
    metaTitle: "Blog",
    eyebrow: "blog",
    title: "Ideas, guías y",
    titleAccent: "notas técnicas",
    intro:
      "Escribo sobre lo que aprendo mientras construyo: diseño, performance, herramientas y trucos de cada día.",
  },
  post: {
    backToBlog: "volver al blog",
    ctaTitle: "¿Te gustó?",
    ctaTitleAccent: "Sigue explorando",
    moreArticles: "Más artículos",
    talk: "Hablemos",
  },
  contact: {
    metaTitle: "Contacto",
    eyebrow: "contacto",
    title: "Hablemos de tu",
    titleAccent: "próximo proyecto",
    intro:
      "¿Tienes una idea en mente? Escríbeme y respondo lo antes posible. También puedes encontrarme en las redes.",
    emailLabel: "email",
    baseLabel: "base",
    socialsLabel: "redes",
    metaDescription: "Hablemos de tu proyecto: escríbeme a {email}.",
  },
  form: {
    fileName: "nuevo_mensaje.txt",
    name: "Tu nombre",
    namePlaceholder: "Ada Lovelace",
    email: "Tu email",
    emailPlaceholder: "ada@dominio.com",
    message: "Tu mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto, objetivo o fecha límite…",
    submit: "Enviar mensaje →",
    subjectPrefix: "Proyecto",
    subjectFallback: "contacto desde el portafolio",
    success: "✓ Abriendo tu cliente de correo… ¡gracias por escribirme!",
  },
  footer: {
    madeWith: "Hecho con Next.js desde el futuro",
  },
  projectCard: {
    explore: "Explorar",
  },
  postCard: {
    read: "Leer artículo",
  },
  posts: [
    {
      slug: "diseno-futurista-con-css",
      title: "Diseño futurista con CSS moderno",
      description:
        "Gradientes, glassmorphism y glow: cómo darle a tu web una estética de otro nivel sin librerías pesadas.",
      date: "2026-09-12",
      readTime: "6 min de lectura",
      tags: ["CSS", "UI", "Diseño"],
      blocks: [
        {
          type: "paragraph",
          text: "El diseño futurista no se trata de agregar mil animaciones. Se trata de intención: luz, profundidad y una atmósfera que invite a explorar la interfaz.",
        },
        {
          type: "heading",
          text: "Empieza por una paleta coherente",
        },
        {
          type: "paragraph",
          text: "Elige colores que cuenten una historia. Un buen truco es usar un acento vivo sobre un fondo neutro y dejar que el brillo (glow) haga el trabajo de resaltar lo importante.",
        },
        {
          type: "list",
          items: [
            "Usa CSS variables para tus colores y cambia toda la paleta desde un solo lugar.",
            "Combina un fondo oscuro profundo con un azul eléctrico o un teal.",
            "Reserva el brillo para acciones y estados clave, no lo desperdicies.",
          ],
        },
        {
          type: "quote",
          text: "Menos, pero mejor: el futuro se siente limpio.",
        },
        {
          type: "heading",
          text: "Glassmorphism y gradientes",
        },
        {
          type: "paragraph",
          text: "El efecto cristal aporta profundidad. Basta con un poco de backdrop-blur, un borde sutil y un color translúcido. Los gradientes suaves entre acentos crean movimiento visual sin mover ni un píxel.",
        },
      ],
    },
    {
      slug: "nextjs-app-router-guia",
      title: "Next.js App Router: una guía práctica",
      description:
        "Layouts, server components y rutas dinámicas: lo que todo proyecto moderno necesita para ser rápido y mantenible.",
      date: "2026-08-28",
      readTime: "8 min de lectura",
      tags: ["Next.js", "React", "Web"],
      blocks: [
        {
          type: "paragraph",
          text: "El App Router cambió la forma de pensar en React. Todo es un componente, y cada parte de la UI decide si se renderiza en el servidor o en el cliente.",
        },
        {
          type: "heading",
          text: "Server Components por defecto",
        },
        {
          type: "paragraph",
          text: "Renderizar en el servidor reduce el JavaScript enviado al navegador. Solo marca con 'use client' los componentes que necesiten interacción.",
        },
        {
          type: "list",
          items: [
            "Los layouts persisten entre navegaciones: menos re-renderizados.",
            "Las rutas dinámicas pre-renderizan con generateStaticParams.",
            "Las metadata se generan por página sin librerías extra.",
          ],
        },
        {
          type: "heading",
          text: "Rutas dinámicas",
        },
        {
          type: "paragraph",
          text: "Para un blog, la estructura app/blog/[slug]/page.tsx es oro puro. Cada artículo se convierte en una página estática increíblemente rápida.",
        },
        {
          type: "quote",
          text: "La velocidad es una característica, no una excusa.",
        },
      ],
    },
    {
      slug: "css-variables-temas-dark-light",
      title: "Temas dark/light sin complicaciones",
      description:
        "Aprende a construir un sistema de temas con CSS variables que respete la preferencia del usuario.",
      date: "2026-07-19",
      readTime: "5 min de lectura",
      tags: ["CSS", "Tailwind", "Temas"],
      blocks: [
        {
          type: "paragraph",
          text: "Gestionar un modo claro y uno oscuro parece difícil, pero con CSS variables es sorprendentemente simple: defines tu paleta en :root y la sobrescribes con una clase en tu raíz.",
        },
        {
          type: "heading",
          text: "La estructura",
        },
        {
          type: "list",
          items: [
            "Define tus tokens de color como variables en :root.",
            "Añade una clase .dark al <html> cuando el usuario lo pida.",
            "Usa esas variables en tu diseño y el cambio es automático.",
            "Guarda la preferencia en localStorage para no perderla al recargar.",
          ],
        },
        {
          type: "paragraph",
          text: "Hoy tu light puede ser un beige cálido tipo piel y tu dark un azul profundo. Mañana solo cambias dos líneas y toda la web se transforma.",
        },
        {
          type: "quote",
          text: "Tu tema, tus reglas: el control del color está en tus variables.",
        },
      ],
    },
  ],
};

export type { Dictionary, Project, Post, PostBlock } from "../types";