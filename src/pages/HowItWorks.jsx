import { Link } from 'react-router-dom'
import { Package, Wrench } from 'lucide-react'
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

          {/* Intersecting-role callout — roles that cross the linear chain */}
          <div className="mt-8 rounded-sm border border-line border-l-4 border-l-grain bg-grain/8 px-6 py-5">
            <p className="eyebrow text-grain-deep mb-5">Outside the linear chain</p>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-grain/20 text-grain-deep">
                  <Package size={15} aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold text-[14px] text-ink mb-1">Input Supplier</p>
                  <p className="text-[13.5px] text-ink/65 leading-relaxed">
                    Extends credit — seed, fertiliser, chemicals — before Intent is signed.
                    FarmTally logs the supply advance and deducts it automatically at Settlement,
                    so every input is accounted for without manual reconciliation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-grain/20 text-grain-deep">
                  <Wrench size={15} aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold text-[14px] text-ink mb-1">Equipment Provider</p>
                  <p className="text-[13.5px] text-ink/65 leading-relaxed">
                    Booked across multiple stages — a tractor at Pickup, a thresher at Farm Gate
                    — and tracked independently. Usage is logged per stage and settled alongside
                    the main chain without disrupting it.
                  </p>
                </div>
              </div>

            </div>
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
            bank, to{' '}
            <Link to="/solutions/investor" className="text-grain-light hover:underline">
              an investor
            </Link>
            , and to every farmer who works with you.
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
