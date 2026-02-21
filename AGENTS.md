# Repository Guidelines

## Project Structure & Module Organization
- `app/`: App Router routes and layouts.
- `app/layout.tsx`: root HTML shell.
- `app/page.tsx`, `app/about/page.tsx`: core marketing pages.
- `app/products/page.tsx`, `app/services/page.tsx`, `app/quality-compliance/page.tsx`, `app/logistics/page.tsx`, `app/rfq/page.tsx`, `app/contact/page.tsx`: launch pages.
- `public/`: static assets served from `/` (icons, SVGs, images).
- `components/layout/`: main website layout primitives (`navbar.tsx`, `footer.tsx`, `layout.tsx`).
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
- Heroicons: import through `components/icons.tsx` so icon style can be switched centrally.
- Main site pages should use `MainLayout` from `components/layout/layout.tsx`.

## Branding & Theme
Use this palette consistently across website UI:
- Deep Navy (primary anchor): `#1F2747`
  Use for headings, navigation, footer background, dark primary buttons, strong contrast text on light backgrounds.
- Teal (brand core): `#22979B`
  Use for primary accents, CTA hover states, links, active states, icons, section dividers.
- Golden Yellow: `#F1B211`
  Use for highlights, badges, callouts, pricing emphasis, and subtle light-section tints.
- Vibrant Orange: `#FF8126`
  Use for secondary CTAs, hover accents, micro-interactions, emphasis tags.
- Light Neutral Background: `#E9E9E9`
  Use for page background, soft sections, and cards.
- Pure White: `#FFFFFF`
  Use for content sections, forms, and cards layered over light gray.
- Dark Navy Variant: `#161E3A`
  Use for hero/footer alternative dark surfaces.

Primary theme logic:
- Light mode default:
  Background `#FFFFFF` or `#E9E9E9`, headings `#1F2747`, body text `#2C2C2C`, links `#22979B`.
- Buttons:
  Primary button `#1F2747` text `#FFFFFF`; hover `#161E3A`.
  Secondary button `#22979B` text `#FFFFFF`.
- Accent usage:
  Use `#F1B211` and `#FF8126` sparingly for emphasis.

Hero option:
- Background `#1F2747`, headline `#FFFFFF`, subtext `#E9E9E9`.
- Primary CTA `#22979B`, secondary CTA `#FF8126`.
- Decorative circles can use yellow/orange at ~10% opacity.

Gradient option:
- Brand gradient is teal to navy (`#22979B` -> `#1F2747`).
- Limit gradients to hero, banners, or subtle section transitions.

Accessibility:
- White text is valid on `#1F2747`, `#161E3A`, and `#22979B`.
- Avoid white text on yellow/orange; use navy text instead.
- Do not use Tailwind default palettes (for example `zinc`, `gray`, `slate`, `sky`) for primary UI surfaces, text, or actions.
- Use semantic brand tokens from `app/globals.css` (for example `text-heading`, `text-foreground`, `bg-button-primary-bg`, `bg-surface-soft`) so branding remains consistent.

Rationale:
- Navy communicates reliability and discipline.
- Teal communicates movement and cross-border flow.
- Yellow and orange provide warmth and vibrancy without reducing professionalism.

## Typography & Font Loading
- Fonts are loaded from Google Fonts in `app/layout.tsx` with `preconnect` links.
- Current family is Raleway with `display=optional` to reduce CLS/reflow.
- Primary font variable is `--font-family-primary` in `app/globals.css`.
- If font loading strategy changes, keep `eslint.config.mjs` in sync (custom-font rule intentionally disabled).

## Testing Guidelines
No dedicated test framework is configured.
- manually verify changed routes in local dev.

When adding tests, colocate them with source files using `*.test.ts`/`*.test.tsx` naming.

## Commit & Pull Request Guidelines
Use concise, imperative commit subjects (for example: `Add RFQ page fields`).
- Keep subject lines <= 72 characters.
- Group related changes into one commit when practical.
- PRs should include purpose, key changes, validation steps, and linked issues.
- Include screenshots/GIFs for UI changes.

## Token Efficiency
- Never re-read files you just wrote or edited. You know the contents.
- Never re-run commands to "verify" unless the outcome was uncertain.
- Don't echo back large blocks of code or file contents unless asked.
- Batch related edits into single operations. Don't make 5 edits when 1 handles it.
- Skip confirmations like "I'll continue..."  Lust do it.
- If a task needs 1 tool call, don't use 3. Plan before acting.
- Do not summarize what you just did unless the result is ambiguous or you need additional input
