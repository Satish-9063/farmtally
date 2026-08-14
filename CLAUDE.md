# CLAUDE.md

Guidance for Claude Code (and any contributor) working in this repository.

## Product Identity

FarmTally is a **commercial marketing website**, not the FarmTally product itself.
Its job is to explain and sell the platform to:

- **Business Owners** — evaluating FarmTally for their operation
- **Investors** — assessing the company/product
- Six operational roles who use the underlying product day-to-day:
  1. Farm Owner/Manager
  2. Field Supervisor
  3. Harvest/Logistics Coordinator
  4. Warehouse/Inventory Staff
  5. Accounts/Finance Staff
  6. Driver/Transporter

Copy and UI should speak to whichever of these audiences a page targets — don't blur
investor-facing language with in-app operator language.

## Tech Stack (locked — FTW-001 approved)

Only use packages already present in `package.json`. Do not add new dependencies
without updating that approval list first.

- **Build**: Vite + React 19 + React Router (`react-router-dom`). **Not Next.js** —
  no server components, no file-based routing, no `next/*` imports.
- **Styling**: Tailwind **v4**, CSS-first config via `@tailwindcss/vite` and `@theme`
  in `src/index.css`. **Not v3** — no `tailwind.config.js`, no `@apply` sprawl.
- **Components**: Radix UI primitives + shadcn-style wrappers (`class-variance-authority`,
  `clsx`, `tailwind-merge`). Build new UI on Radix, don't hand-roll dialogs/selects.
- **Motion**: Framer Motion for JS-driven animation, plain CSS for everything else.
  Only Motion Types A–D are approved:
  - **A** — opacity/fade transitions
  - **B** — transform (translate/scale) transitions
  - **C** — staggered list/children reveals
  - **D** — scroll-linked reveals (`whileInView`)
  No physics playgrounds, no drag gestures, no layout animation unless a task
  explicitly calls for it.
- **Icons**: `lucide-react` only. Don't mix in other icon sets or inline SVG icon libs.
- **Fonts**: Playfair Display (display/headings), Lato (body), Source Code Pro
  (numerals/code/mono contexts).
- **Linting**: `oxlint` (`npm run lint`). **Not ESLint** — don't add `.eslintrc*` or
  `eslint-*` packages.
- **Testing**: Vitest + Testing Library + jsdom (unit), Playwright (E2E), axe-core
  (a11y), `@lhci/cli` (performance budget).

## Brand Colors

- **Primary**: `#A34A2E` (terracotta)
- **Secondary**: `#5B6B3F` (olive)

**Forbidden** — legacy palette, must not appear in new work:
- `#F7941D` (orange)
- `#00AEEF` (cyan/sky blue)
- `#1A2F5A` (navy)

If you find these in existing files, that's legacy debt — don't extend it, and flag
it rather than quietly reusing it.

## Four-Gate Compliance

Every task must clear all four gates before it's "done."

- **G1 — Names locked.** Tech stack, brand colors, and fonts above are fixed. Don't
  substitute alternatives (e.g. a different icon set, Next.js, Tailwind v3, ESLint)
  even if they seem more convenient for a given task.
- **G2 — Design spec per page.** Any new or materially changed page needs a
  `DESIGN_SPEC.md` (co-located with the page) describing layout, audience, and content
  before implementation. No spec, no page.
- **G3 — Tests before done.** A task isn't complete until it has a passing Vitest
  suite covering the new behavior. Write the test before marking work finished, not
  as an afterthought.
- **G4 — One component per task.** Each task delivers exactly one component (or one
  page section). Don't bundle unrelated components into a single task/PR — split it.

## What Not To Do

- Don't introduce Next.js, ESLint, Tailwind v3, or non-Lucide icon packages.
- Don't use the forbidden legacy colors above, even as gradients/tints.
- Don't add Motion Types beyond A–D (no drag, no spring playgrounds, no parallax
  rigs) without explicit sign-off.
- Don't add a page without its `DESIGN_SPEC.md`.
- Don't ship a task without a Vitest test.
- Don't fold multiple components into one task/PR — one component, one task.
- Don't add new dependencies outside the FTW-001 approved `package.json` list without
  updating the approval first.
- Don't write in-app operator copy on investor/business-owner-facing pages, or vice
  versa — match the audience for the page.
