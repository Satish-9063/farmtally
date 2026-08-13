import SolutionPageTemplate from '../../components/SolutionPageTemplate'

// SOW Phase 5 — Investor Solutions page.
// ADR-010: CTA is 'Talk to Our Team' -> /investor-relations, not the
// standard primaryCta. This is a financing inquiry, not a signup.
const investorCta = {
  label: 'Talk to Our Team',
  href: '/investor-relations',
}

export default function Investor() {
  return (
    <SolutionPageTemplate
      h1="The records a financing decision can actually rely on."
      painPoint="When you consider financing an agri-procurement business, you are handed a stack of registers. There is no way to verify the figures, trace a settlement back to the weighment that produced it, or confirm that nothing was adjusted after the fact."
      feature="FarmTally gives investors a hardcoded read-only console — operational metrics and settlement records, with hard data-security boundaries enforced at the architecture level. The ledger is append-only: every entry is permanent, corrections create new records alongside the originals, and no figure can be altered once finalised."
      proofPoint="Investor-grade audit visibility is not a feature you can toggle on. It is a consequence of the append-only ledger and role isolation that the platform runs on by design."
      cta={investorCta}
      image={{
        src: '/images/solutions/investor.jpg',
        alt: 'Investor reviewing procurement audit records on a laptop in a professional setting',
        width: 900,
        height: 1200,
      }}
    />
  )
}
