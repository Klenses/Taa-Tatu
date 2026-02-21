# TaaTatu Hub Limited Website

A production-oriented website for TaaTatu Hub Limited to build and ship sites quickly.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + Preline
- Headless UI (interaction logic)
- Framer Motion (animations)
- Heroicons
- Google Fonts (Raleway, `display=optional`)

## Routes
- `/`: marketing homepage
- `/about`: about page
- `/products`: products page
- `/services`: services page
- `/quality-compliance`: quality and compliance page
- `/logistics`: logistics page
- `/rfq`: request a quote page
- `/contact`: contact page

## Project Structure
- `app/`: routes and layouts
- `components/layout/`: shared site layout (`navbar.tsx`, `footer.tsx`, `layout.tsx`)
- `components/providers/`: runtime providers (Preline init)
- `components/icons.tsx`: centralized Heroicons wrapper

## Getting Started
Install dependencies, then run dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts
- `npm run dev`: start local dev server
- `npm run lint`: run ESLint
- `npm run build`: production build
- `npm run start`: run production server

## Layout Behavior
- Root layout (`app/layout.tsx`) applies fonts, providers, and the main website layout.

## Notes
- Font family and fallback behavior are configured in `app/layout.tsx` and `app/globals.css`.
- For icon consistency, import from `@/components/icons` instead of directly from `@heroicons/react`.

## Validation Before PR

```bash
npm run lint
npm run build
```

## Docker Compose (Development)
Run hot-reload development in Docker:

```bash
docker compose up --build
```

Open `http://localhost:3000`.

Stop and remove containers:

```bash
docker compose down
```

## Docker (Production)
Build and run the production container:

```bash
docker build -t taatatu-hub-limited-site .
docker run --rm -p 3000:3000 taatatu-hub-limited-site
```

Then open `http://localhost:3000`.
