import SolutionPageTemplate from '../../components/SolutionPageTemplate'
import { primaryCta } from '../../config/cta'

// SOW Phase 5 — Input Supplier Solutions page. H1 is locked copy; do
// not paraphrase without a SOW update. First-ever build for this
// role — no prior version exists on the site (G4).
export default function InputSupplier() {
  return (
    <SolutionPageTemplate
      h1="Fulfil approved orders, get paid without the chase"
      painPoint="You deliver against an order, and then the wait begins — confirming it was actually approved, proving it was received, chasing someone in accounts to release payment. Every step depends on someone else's paperwork catching up."
      feature="FarmTally ties every input order to an approval before it ships and a delivery confirmation the moment it lands. Once both are on record, payment triggers automatically — no separate invoice chase, no waiting on a reconciliation cycle."
      proofPoint="The order you fulfilled, the approval behind it, and the payout it triggered all sit on the same locked record — so there's nothing left to dispute after delivery."
      cta={primaryCta}
      image={{
        src: '/images/solutions/input-supplier.jpg',
        alt: 'Input supplier confirming an approved order delivery on a tablet',
        width: 900,
        height: 1200,
      }}
    />
  )
}
