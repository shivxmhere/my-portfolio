# Shivam Singh — Portfolio

A cinematic, dark-themed personal portfolio website showcasing my projects, certifications, achievements, and resume.

**Live:** [shivamsingh-iit-patna-portfolio.vercel.app](https://shivamsingh-iit-patna-portfolio.vercel.app)

## Overview

Built as a single-page application with smooth scroll-based animations, interactive hover/touch effects, and a grayscale-to-color visual style. The site features a hero section with an animated profile image, project showcase, timeline, certificates gallery, achievements, and a downloadable resume.

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM |
| **Deployment** | Vercel |
| **SEO** | JSON-LD Structured Data, Open Graph, Sitemap |

## Features

- **Cinematic Hero** — Animated profile image with grayscale-to-color effect, sparkle particles on hover/touch
- **Project Showcase** — Grid layout with project details, tags, and links
- **Certificates Gallery** — Interactive cards with grayscale-to-color transition on hover and touch
- **Timeline** — Academic and professional milestones
- **Resume** — View and download PDF resume directly
- **Responsive** — Fully optimized for desktop and mobile with touch support
- **SEO Optimized** — Structured data, meta tags, sitemap, and robots.txt

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npx vite build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Animated hero section with profile image
│   ├── Projects.tsx       # Project showcase grid
│   ├── Timeline.tsx       # Academic/professional timeline
│   ├── Certificates.tsx   # Interactive certificate gallery
│   ├── Achievements.tsx   # Achievements section
│   ├── Resume.tsx         # Resume viewer and download
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with social links
│   ├── Layout.tsx         # Page layout wrapper
│   └── MagicText.tsx      # Animated text component
├── pages/
│   └── Home.tsx           # Main page assembling all sections
└── main.tsx               # App entry point
```

## Author

**Shivam Singh**
- IIT Patna — Computer Science & Data Analytics
- GitHub: [@shivxmhere](https://github.com/shivxmhere)
- LinkedIn: [shivxmhere](https://linkedin.com/in/shivxmhere)
