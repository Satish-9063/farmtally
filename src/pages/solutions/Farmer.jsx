import SolutionPageTemplate from '../../components/SolutionPageTemplate'
import { primaryCta } from '../../config/cta'

// SOW Phase 5 — Farmer Solutions page. H1 is locked copy; do not
// paraphrase without a SOW update.
export default function Farmer() {
  return (
    <SolutionPageTemplate
      h1="Every kilogram counted. Every rupee traceable."
      painPoint="When a lorry leaves your farm, you have no way to verify whether the grade changed, the weight shifted, or the price was quietly revised. At settlement you take what you are told — and if the number doesn't match your memory, there is no record to stand on."
      feature="FarmTally gives you a running ledger of every delivery, every advance drawn, and every deduction made — itemised, in real time. Your price is locked the moment you agree: cryptographically, to the millisecond. No revision is possible after the lorry leaves, by anyone."
      proofPoint="The figure in your ledger is the figure your buyer locked — not rounded, not adjusted after the fact. The same number, the same formula, the same proof, visible to you before settlement is finalised."
      cta={primaryCta}
      image={{
        src: '/images/solutions/farmer.jpg',
        alt: 'Farmer reviewing crop delivery records on a mobile phone at the edge of a paddy field',
        width: 900,
        height: 1200,
      }}
    />
  )
}
