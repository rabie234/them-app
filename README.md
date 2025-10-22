# them-app

A Next.js 15 app with a responsive sidebar layout, theme switching, and demo charts using Recharts. It uses Radix UI, shadcn/ui primitives, Tailwind CSS, and next-themes.

## Tech stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS with custom theme tokens and tailwindcss-animate
- Radix UI primitives and shadcn/ui components
- next-themes for theme switching
- Recharts for charts

## Getting started

- Install: `npm i`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- Lint: `npm run lint`

Open http://localhost:3000 in your browser.

## Project structure

- src/app/layout.tsx: App shell with ThemeProvider, SidebarProvider, AppSidebar, AppNav, SidebarTrigger, and metadata.
- src/app/page.tsx: Home page with charts and a Drawer demo.
- src/components/ui: Reusable UI (button, card, dropdown, navigation, separator, sheet, skeleton, tooltip, chart).
- src/components: AppSidebar, AppNav, charts, theme provider, theme switcher.
- tailwind.config.ts: Theme tokens and content globs.
- components.json: shadcn/ui config and path aliases.
- next.config.ts, eslint.config.mjs: Build and lint setup.

## App architecture

The root layout wraps the app with theme and sidebar providers, rendering the sidebar, top navigation, and page content.

```mermaid
flowchart TD
  A[RootLayout] --> B[ThemeProvider]
  B --> C[SidebarProvider]
  C --> D[AppSidebar]
  C --> E[Main]
  E --> F[SidebarTrigger]
  E --> G[AppNav]
  E --> H[Page children]
