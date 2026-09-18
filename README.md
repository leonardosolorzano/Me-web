# Portafolio de Leonardo

Portafolio personal construido con **Next.js (App Router)**, **React 19** y **Tailwind CSS v4**. Sitio bilingüe (ES/EN) con tema claro/oscuro, blog, proyectos destacados y formulario de contacto sin backend.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Características

- **Bilingüe (ES/EN)** con rutas localizadas `/[lang]` y selector de idioma
- **Tema claro/oscuro** usando CSS variables, sin parpadeo (inline script) y con `localStorage`
- **Blog** con artículos renderizados por bloques (párrafos, listas, citas…) y rutas dinámicas `blog/[slug]`
- **Diseño futurista**: glassmorphism, gradientes, glow, animaciones y tipografías optimizadas (`next/font`)
- **100% estático**: todas las páginas se pre-renderizan (SSG) y son deployables en cualquier CDN
- **Formulario de contacto** que abre el cliente de correo del usuario (`mailto:`), sin backend

## Tecnologías

| Área            | Stack                                    |
| --------------- | ---------------------------------------- |
| Framework       | Next.js 16 · App Router                  |
| UI              | React 19 · TypeScript                    |
| Estilos         | Tailwind CSS v4 · CSS variables          |
| i18n            | Diccionarios propios (sin librerías)     |
| Tipografías     | Geist, Geist Mono, Space Grotesk         |

## Empezar

Requisitos: Node.js 20+ y npm/pnpm.

```bash
# instalar dependencias
npm install

# servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando           | Descripción                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor de desarrollo                 |
| `npm run build`   | Build de producción (SSG)              |
| `npm run start`   | Sirve el build de producción           |
| `npm run lint`    | ESLint                                 |

## Estructura

```
src/
├── app/
│   ├── [lang]/          # Rutas localizadas: home, about, blog, contact
│   │   ├── blog/[slug]/ # Página de artículo (SSG)
│   │   └── layout.tsx   # Layout raíz con fuentes, nav y footer
│   └── globals.css      # Tokens de tema (claro/oscuro) y estilos globales
├── components/          # Navbar, Background, ProjectCard, PostCard, etc.
├── i18n/
│   ├── dictionaries/    # es.ts y en.ts (todo el contenido del sitio)
│   └── locales.ts       # Configuración de idiomas y helpers
└── lib/theme.ts         # Lógica de tema claro/oscuro
public/
└── projects/            # Imágenes SVG de proyectos
```

## Contenido

Todo el contenido (bio, proyectos, artículos, textos) vive en `src/i18n/dictionaries/es.ts` y `en.ts`. Para editar el sitio:

- **Proyectos**: array `profile.projects`
- **Artículos**: array `posts` con bloques (`paragraph`, `heading`, `list`, `quote`)
- **Redes y datos personales**: `profile.socials`, `profile.email`, etc.

## Despliegue

Como todas las páginas son estáticas, puedes desplegar en:

```bash
npm run build && npm run start
```

o subirlo directamente a [Vercel](https://vercel.com/new), Netlify o cualquier hosting estático.

## Licencia

MIT