# Repository Guidelines

## Project Structure & Module Organization
- `app/`: App Router routes and layouts.
- `app/layout.tsx`: root HTML shell.
- `app/page.tsx`, `app/about/page.tsx`: marketing pages.
- `app/dashboard/layout.tsx`: dashboard-specific nested layout used by `/dashboard` and `/dashboard/list`.
- `public/`: static assets served from `/` (icons, SVGs, images).
- `components/layout/`: main website layout primitives (`navbar.tsx`, `footer.tsx`, `layout.tsx`).
- `components/home/`: homepage-specific interactive sections.
- `components/providers/`: client-side initializers.
- Build output: `.next/` (generated; do not edit).

Keep route-specific UI close to each route segment and use `@/*` imports.

## Build, Test, and Development Commands
- `npm run dev`: start local dev server.
- `npm run build`: create production build (validates compile-time issues).
- `npm run start`: run the built app in production mode.
- `npm run lint`: run ESLint with Next.js + TypeScript rules.

Before opening a PR, run:
```bash
npm run lint
npm run build
```

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with `strict` mode enabled.
- Indentation: 2 spaces; prefer double quotes to match existing files.
- Components: `PascalCase`; hooks/utilities: `camelCase`.
- Route files must follow Next.js conventions (`page.tsx`, `layout.tsx`).
- Styling: Tailwind CSS v4 in `app/globals.css`.

Use ESLint as the source of truth; fix warnings/errors before commit.

## UI Stack Conventions
- Preline: use for quick section/layout scaffolding.
- Headless UI: use for interaction logic and accessibility primitives.
- Framer Motion: use for subtle reveal/state transitions.
- Heroicons: import through `components/icons.tsx` so icon style can be switched centrally.
- Main site pages should use `MainLayout` from `components/layout/layout.tsx`; dashboard routes use the nested `app/dashboard/layout.tsx`.

## Typography & Font Loading
- Fonts are loaded from Google Fonts in `app/layout.tsx` with `preconnect` links.
- Current family is Raleway with `display=optional` to reduce CLS/reflow.
- Primary font variable is `--font-family-primary` in `app/globals.css`.
- If font loading strategy changes, keep `eslint.config.mjs` in sync (custom-font rule intentionally disabled).

## Testing Guidelines
No dedicated test framework is configured. For now:
- treat `npm run lint` and `npm run build` as required checks;
- manually verify changed routes in local dev.

When adding tests, colocate them with source files using `*.test.ts`/`*.test.tsx` naming.

## Commit & Pull Request Guidelines
Use concise, imperative commit subjects (for example: `Add dashboard list layout`).
- Keep subject lines <= 72 characters.
- Group related changes into one commit when practical.
- PRs should include purpose, key changes, validation steps, and linked issues.
- Include screenshots/GIFs for UI changes.
