import SolutionPageTemplate from '../../components/SolutionPageTemplate'
import { primaryCta } from '../../config/cta'

// SOW Phase 5 — Field Manager Solutions page. H1 is locked copy; do not
// paraphrase without a SOW update. G1: role is 'Field Manager', not
// 'Field Operator' — do not rename.
export default function FieldManager() {
  return (
    <SolutionPageTemplate
      h1="Capture evidence that never gets disputed"
      painPoint="When a weighment or grade is challenged weeks later, you're asked to defend a call you made in the field with nothing but memory. Paper logs go missing, photos get relabeled, and it always comes down to your word against theirs."
      feature="FarmTally locks every weighment, grade, and GPS-tagged photo the moment you capture it — offline if the network is down, synced the instant it returns. No stage of the workflow advances without the evidence and approval it requires."
      proofPoint="The record you file in the field is the record everyone sees later — timestamped, geo-tagged, and permanent. No one, including you, can edit it after the fact."
      cta={primaryCta}
      image={{
        src: '/images/solutions/field-manager.jpg',
        alt: 'Field manager recording weighment and grade evidence on a tablet at a paddy field',
        width: 900,
        height: 1200,
      }}
    />
  )
}
