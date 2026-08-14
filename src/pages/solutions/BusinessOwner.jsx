import SolutionPageTemplate from '../../components/SolutionPageTemplate'
import { primaryCta } from '../../config/cta'

// SOW Phase 5 — Business Owner Solutions page. Content is locked; do not
// paraphrase without a SOW update.
export default function BusinessOwner() {
  return (
    <SolutionPageTemplate
      h1="One console for the entire procurement chain"
      painPoint="Approving, pricing, arbitrating, and settling all happen across disconnected registers — and when a bank or investor finally asks for proof, a stack of paper ledgers isn't good enough."
      feature="One console for everything — approve or reject pickups with a reason code, build trip manifests with automatic payload checks, and see any farmer's full profile, ledger, advances, and settlement history on one screen."
      proofPoint="Every settlement runs through one locked formula, calculated to the exact rupee — no manual override, by anyone, ever."
      cta={primaryCta}
      image={{
        src: '/images/solutions/business-owner.jpg',
        alt: 'Business Owner reviewing procurement data on a laptop in an office setting',
        width: 900,
        height: 1200,
      }}
    />
  )
}
