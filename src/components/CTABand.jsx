import { Link } from 'react-router-dom'
import { primaryCta, secondaryCta, CTA_STATE, TRIAL_TOKEN } from '../config/cta'

export default function CTABand() {
  return (
    <section className="bg-soil text-mist">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl leading-tight">
          See your procurement the way your auditor will.
        </h2>
        <p className="mt-4 text-mist/75 text-[16px] max-w-xl mx-auto">
          Set up your business on FarmTally and run your first fully traceable procurement cycle.
          {CTA_STATE === 'B' && <> Free for {TRIAL_TOKEN} days. No card required.</>}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to={primaryCta.href}
            className="bg-field text-mist font-semibold px-6 py-3 rounded-sm hover:bg-canopy transition-colors"
          >
            {primaryCta.label}
          </Link>
          <Link
            to={secondaryCta.href}
            className="text-mist font-medium px-6 py-3 rounded-sm border border-mist/40 hover:bg-mist/10 transition-colors"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
