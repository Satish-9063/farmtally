import SolutionPageTemplate from '../../components/SolutionPageTemplate'
import { primaryCta } from '../../config/cta'

// SOW Phase 5 — Buyer Solutions page. Content is locked; do not
// paraphrase without a SOW update.
export default function Buyer() {
  return (
    <SolutionPageTemplate
      h1="Verify what arrives against what actually left"
      painPoint="Quantity and quality disputes at the warehouse drag on for days because there's no independent record of what left the farm versus what arrived."
      feature="Verify delivery against the farm-gate figures already on file. A 2%+ mismatch freezes settlement automatically and flags for review."
      proofPoint="If verification isn't completed within 24 hours, the system defaults to the farm-gate figures rather than leaving payment stuck in limbo."
      cta={primaryCta}
      image={{
        src: '/images/solutions/buyer.jpg',
        alt: 'Buyer inspecting stacked grain sacks with a tablet at a warehouse loading dock',
        width: 900,
        height: 1200,
      }}
    />
  )
}
