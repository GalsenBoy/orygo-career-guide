# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Orygo Career Guide** is a career exploration platform built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS. The project is managed through Lovable (lovable.dev) which automatically commits changes to this repository.

**Lovable Project URL**: https://lovable.dev/projects/6b60b737-b96d-463a-b499-3f8959c7d749

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (managed by shadcn CLI)
│   ├── Hero.tsx        # Landing page sections
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── pages/              # Route pages
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
│   └── utils.ts        # cn() helper for Tailwind class merging
├── assets/             # Static assets (images, etc.)
├── index.css           # Global styles & design system
└── main.tsx            # Application entry point
```

### Application Architecture

**Router Setup** ([App.tsx](src/App.tsx:1-28))
- Uses React Router v6 with `BrowserRouter`
- All custom routes must be added ABOVE the catch-all `*` route
- Wrapped with `QueryClientProvider` for TanStack Query
- Includes `TooltipProvider`, `Toaster`, and `Sonner` for UI notifications

**Page Structure** ([Index.tsx](src/pages/Index.tsx:1-20))
- Landing page composed of section components (Hero, Features, HowItWorks, CTA, Footer)
- Each section is a self-contained component in `src/components/`

### Design System & Styling

**Color Palette** ([src/index.css](src/index.css:1-106))
- HSL-based color system with CSS custom properties
- Brand colors: Primary (bleu-teal `#255f85`), Secondary (bleu-gris `#6b8a9f`), Tertiary (bleu ciel `#7ba3bd`)
- Extended palette includes success, warning, error, and gold accent colors
- Dark mode support via `.dark` class
- All colors and design tokens are defined in `src/index.css` under `:root` and `.dark`

**Tailwind Configuration** ([tailwind.config.ts](tailwind.config.ts:1-94))
- Custom color extensions for primary-light, primary-dark, secondary-light, secondary-dark, tertiary-light
- Extended with `tailwindcss-animate` plugin for animations
- Uses HSL color variables for dynamic theming

**Path Aliases** ([vite.config.ts](vite.config.ts:1-19))
- `@/` maps to `./src`
- Use `@/components/ui/button` instead of `../components/ui/button`

**Class Name Utility** ([src/lib/utils.ts](src/lib/utils.ts:1-7))
- `cn()` function combines `clsx` and `tailwind-merge` for conditional class merging
- Use for dynamic className composition: `cn("base-classes", condition && "conditional-classes")`

### shadcn/ui Components

**Configuration** ([components.json](components.json:1-21))
- Components installed in `src/components/ui/`
- Managed via `npx shadcn@latest add <component-name>`
- All components use TypeScript with the `default` style
- CSS variables enabled for theming

**Component Usage Pattern**
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Components accept className for customization
<Button className={cn("custom-styles", variant && "variant-styles")}>
  Click me
</Button>
```

### Development Tools

**Vite Configuration** ([vite.config.ts](vite.config.ts:1-19))
- Server runs on host `::` (IPv6) port `8080`
- Uses SWC plugin for fast React compilation
- `lovable-tagger` plugin enabled in development mode only

**TypeScript**
- Strict mode enabled
- Path aliases configured for `@/` imports
- Separate configs: `tsconfig.app.json` (app code), `tsconfig.node.json` (build tools)

## Working with Lovable

- Changes committed via Lovable will be automatically pushed to this repo
- When working locally, push changes to sync them back to Lovable
- Use `[skip lovable]` in commit messages to prevent Lovable from processing the commit

## Adding New Routes

1. Create a new page component in `src/pages/`
2. Import and add the route in [App.tsx](src/App.tsx:1-28) ABOVE the `*` catch-all route:

```tsx
import NewPage from "./pages/NewPage";

// Add route above the NotFound route
<Route path="/new-path" element={<NewPage />} />
<Route path="*" element={<NotFound />} />
```

## Styling Guidelines

- Use Tailwind utility classes for styling
- Reference design system colors via CSS variables: `bg-primary`, `text-secondary-foreground`
- For gradients, use the gradient variables: `from-primary via-primary-dark to-[hsl(var(--gradient-end))]`
- Maintain consistent spacing using Tailwind's spacing scale
- Use `cn()` utility for conditional class merging
