# FTW-003 — Staging Environment Proposal

**Status:** Awaiting sign-off — Lanka Navya (Cloud/Infra Owner)
**Author:** Ramesh (FTW-003)
**Date:** 2026-08-13
**Gate:** G4 HARD STOP — proposal only, nothing provisioned

---

## Context

FTW-002 retired GitHub Pages; all deployments now go straight to Firebase Hosting
(project `farmtally-8edf2`). There is no staging buffer between a merged PR and
production. This proposal asks for a decision on how to introduce one.

---

## Option A — Firebase Hosting Preview Channels *(Recommended)*

Firebase Hosting supports named preview channels inside the **same project**. Each
channel gets a unique URL (`farmtally-8edf2--<channel>.web.app`) that is served
from the same CDN, same Firestore rules, and same Auth config as production.

### How it would work

| Step | Action |
|------|--------|
| 1 | CI builds `dist/` on every PR |
| 2 | `firebase hosting:channel:deploy pr-<number> --expires 7d` publishes to the channel URL |
| 3 | Reviewer (or Lanka Navya) opens the URL, approves |
| 4 | Merge to `develop` triggers the existing `firebase deploy` to production |
| 5 | Channel auto-expires after 7 days; no manual cleanup needed |

### Cost

- **Storage:** preview channel files count against Firebase Hosting storage
  (first 10 GB free, then $0.026/GB/month). A Vite SPA dist folder is typically
  < 5 MB, so hundreds of simultaneous preview channels stay well inside the free tier.
- **Bandwidth:** channel serves from the same free-tier quota as production.
- **Extra Firebase project cost:** $0 — no second project, no Blaze upgrade required
  unless Firestore/Auth usage already exceeds Spark limits.

### Complexity

- **CI change only.** One additional `firebase` CLI step in the workflow; no new
  GCP project, no duplicate secrets, no second Firestore instance.
- **Env variables:** preview channels share production backend by default. If
  feature branches need isolated Firestore data, a separate Firestore database
  (`(staging)` named database on the Blaze plan) can be added later — not required now.
- **Command to add to CI (example):**
  ```
  firebase hosting:channel:deploy pr-${{ github.event.pull_request.number }} \
    --expires 7d \
    --project farmtally-8edf2
  ```

### Tradeoffs

| Pro | Con |
|-----|-----|
| Zero infra cost within free tier | Shares production Firestore — writes in a PR demo affect real data |
| Auto-expiry; no cleanup burden | Preview URL is publicly guessable (not secret) |
| Reviewable before merge in same environment | No isolated backend unless Blaze + named DB added |
| Ready in < 1 hour of CI work | |

---

## Option B — Second Firebase Project (`farmtally-staging`)

A fully separate Firebase project (`farmtally-staging`) with its own Firestore,
Auth, and Hosting. Production and staging are completely isolated.

### How it would work

1. Provision new Firebase project `farmtally-staging`.
2. Add a `.firebaserc` target and separate env file (`VITE_FIREBASE_CONFIG_STAGING`).
3. Deploy to `farmtally-staging` on every push to `develop`; deploy to
   `farmtally-8edf2` on every push to `main` (or a release tag).
4. Manual teardown is never needed — staging is always-on.

### Cost

- **Zero if on Spark plan** and staging usage stays under Firebase free tier limits
  (1 GB Firestore, 50k Auth users, 10 GB Hosting). For a dev/QA environment,
  this is almost certainly fine.
- If Blaze plan is required (e.g., outbound network calls, Cloud Functions),
  staging accrues a separate bill — typically a few dollars/month for low traffic.

### Complexity

- Provision new GCP/Firebase project — requires Owner or Editor IAM on the Firebase
  console.
- Duplicate all Firebase secrets in CI (API keys, service account JSON).
- Keep two Firestore schema/rules in sync.
- Developers must know which project they are deploying to.

### Tradeoffs

| Pro | Con |
|-----|-----|
| Fully isolated data — safe to write test records | Double the secrets / service accounts to manage |
| Always-on URL (good for QA, stakeholders) | Provisioning requires IAM work up front |
| Clean prod/staging boundary | Schema drift risk if migrations are applied inconsistently |
| Matches industry convention for larger teams | Overkill for a solo/small team at MVP stage |

---

## Option C — Fallback: `npm run preview` locally (deferred path)

If neither A nor B is approved now, the fallback is developer-local only:

```
npm run build && npm run preview
```

`vite preview` serves the production build at `http://localhost:4173`.

- **Cost:** $0
- **Limitation:** only the developer can see it; no shareable URL for Lanka Navya
  or external reviewers.
- **Appropriate when:** the team is small enough that the developer can screen-share
  or record a Loom before requesting a merge.

---

## Recommendation

**Option A (Preview Channels)** for immediate value at zero cost and minimal CI
complexity. If isolated Firestore data is later required (e.g., seeded test fixtures
that must not reach production), promote to Option B at that point.

Option C is the safe deferral path if this decision is not urgent.

---

## Decision Required from Lanka Navya

| Question | Options |
|----------|---------|
| Which option to proceed with? | A / B / C (defer) |
| If A: should preview channels share production Firestore, or is isolated data needed now? | Shared (default) / Isolated (requires Blaze + named DB) |
| If B: does the team have IAM access to provision a second Firebase project? | Yes / No |

**No provisioning will occur until explicit sign-off is recorded.**
