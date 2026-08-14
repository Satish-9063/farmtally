# Home.jsx — Section-Order Design Spec

**Ticket:** FTW-005  
**Gate:** G2 — section-order interface artifact  
**Last updated:** 2026-08-13

---

## Current Live Order (before)

The following sections exist in `src/pages/Home.jsx` as of the G2 baseline:

| # | Section | JSX comment / identifier |
|---|---------|--------------------------|
| 1 | Hero | `{/* HERO — mist */}` |
| 2 | Problem Band | `{/* PROBLEM — soil-deep band */}` |
| 3 | Chain-of-Custody | `{/* SOLUTION / CHAIN OF CUSTODY — mist */}` |
| 4 | Trust Pillars | `{/* TRUST PILLARS — canopy-deep band */}` |
| 5 | Audience Strip | `{/* AUDIENCE STRIP — mist */}` |
| 6 | Trust Badges | `{/* TRUST BADGES — mist-dark */}` |
| 7 | CTA Band | `<CTABand />` |

Footer is rendered by the shared `<Layout>` wrapper (`src/components/layout/Layout.jsx`), not inside `Home.jsx`.

---

## Target Section Order (G2 spec)

The table below is the authoritative render order for `Home.jsx` going forward.  
**10 positions are listed.** Positions marked `REMOVED` or `RESERVED` are not rendered.

| Pos | Section | Status | Notes |
|-----|---------|--------|-------|
| 1 | **Hero** | Active | Full-bleed hero with headline, sub-copy, primary + secondary CTA buttons. |
| 2 | **Role Selector Strip** | Active | Horizontal strip; lets visitors self-identify (Buyer / FPO / Investor / Farmer). Drives contextual copy below. |
| 3 | **Chain-of-Custody** | Active | Step-by-step workflow visualisation from farm-gate to settlement. Links to `/how-it-works`. |
| 4 | **Trust & Compliance** | Active | Compliance badges and trust signals (DPDPA, append-only ledger, Google Cloud Mumbai). |
| 5 | **Free-for-Ecosystem** | Active | "One platform. Your entire procurement ecosystem." audience overview. Links to `/features`. |
| 6 | **Investor Band** | Active | Investor-facing value proposition, data-room hook, and secondary CTA for investor contact. |
| 7 | **Role Proof Cards** | **REMOVED** | Duplicated content already covered by the Role Selector Strip (pos 2) and the Solutions pages. Do not rebuild. |
| 8 | **Metrics Band** | **RESERVED — not built** | Social-proof metrics (e.g. tonnes processed, farmers paid). No genuine pre-launch metric exists; section must remain absent until real data is available. |
| 9 | **CTA Band** | Active | Full-width call-to-action band (`<CTABand />`). |
| 10 | **Footer** | Active | Rendered by `<Layout>`; not a Home.jsx section. Listed here for scroll-order completeness. |

---

## Key decisions

- **Role Proof Cards removed (pos 7):** The cards duplicated role-specific messaging that the Role Selector Strip (pos 2) and dedicated Solutions pages already handle. Keeping both would create redundancy and dilute the strip's navigation value.
- **Metrics Band reserved (pos 8):** Placeholder metrics undermine trust more than no metrics at all. The band is spec'd and positioned so it can be dropped in without reshuffling the order when real data exists.
- **Footer at pos 10:** Footer is a layout concern, not a page section. It is included in the order table only so implementers have a complete scroll-sequence reference.
