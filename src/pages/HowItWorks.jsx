import ChainOfCustody from '../components/ChainOfCustody'
import CTABand from '../components/CTABand'

export default function HowItWorks() {
  return (
    <main>
      <section className="bg-mist">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="eyebrow text-field mb-4">How it works</p>
          <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
            Six stages. One unbroken record.
          </h1>
          <p className="mt-4 text-[17px] text-ink/70 max-w-2xl">
            FarmTally runs procurement as a deterministic workflow: every stage requires the right
            role's approval and the right evidence before the next stage unlocks.
          </p>
          <div className="mt-12">
            <ChainOfCustody detailed />
          </div>
        </div>
      </section>

      <section className="bg-canopy-deep text-mist">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Software that refuses to look the other way.
          </h2>
          <p className="mt-6 text-mist/75 text-[17px] max-w-2xl leading-relaxed">
            Most tools record what you type. FarmTally enforces what must be true: moisture before
            weight, evidence before transit, verification before settlement, and a ledger no one can
            edit after the fact. That discipline is what makes your records worth something — to a
            bank, to an investor, and to every farmer who works with you.
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
