import { Link } from 'react-router-dom'

const leaks = [
  {
    title: 'Weight leakage',
    body: 'Farm-gate weight and warehouse weight diverge with nothing on record to resolve the gap. FarmTally requires GPS-tagged photo evidence at both points — the same rigour at every handoff, every time.',
  },
  {
    title: 'Grade manipulation',
    body: 'A grade recorded at the gate and quietly revised before settlement is undetectable without a lock. Every grade entry in FarmTally is permanent at the moment of recording. Corrections create new entries alongside the original — the original never disappears.',
  },
  {
    title: 'Settlement disputes',
    body: 'Advances, moisture cuts, transport deductions, and grade adjustments reconciled by hand produce errors, arguments, and delayed payouts. FarmTally computes net settlement automatically from locked inputs. No manual override is possible.',
  },
  {
    title: 'Audit gaps',
    body: 'When a bank, investor, or regulator asks for records, a stack of registers is not finance-ready proof. FarmTally produces a complete, timestamped, GPS-backed audit trail from the first procurement intent to the final payout.',
  },
]

const stages = [
  'Intent — pickup approved by the business owner, price locked at the moment of agreement.',
  'Pickup — field operator dispatched with a locked manifest; no pickup without assignment.',
  'Farm Gate Evidence — GPS-tagged photos, moisture reading, and weight captured. Offline-capable; syncs on reconnection.',
  'Transit — lorry assigned, payload guard enforced, loading manifest sealed.',
  'Warehouse Verification — incoming weight checked against farm-gate record, photo evidence attached, 24-hour SLA.',
  'Settlement — net payout computed from locked weight, grade, moisture, advances, and deductions. Record is final.',
]

const roles = [
  { name: 'Business Owner',     desc: 'Command console — approvals, farmer network, live settlement calculator, staff scoped permissions.' },
  { name: 'Farmer',             desc: 'Full transparency: every delivery, advance, deduction, and payout itemised. Price locked cryptographically at the handshake.' },
  { name: 'Field Manager',      desc: 'Offline-capable field app — moisture, weight, and GPS-tagged photos captured without a signal, synced within seconds of reconnection.' },
  { name: 'Transport Operator', desc: 'Trip assignments with locked loading manifests and payload guards enforced before departure.' },
  { name: 'Buyer',              desc: 'Warehouse verification against farm-gate records, with photo evidence and a 24-hour confirmation SLA.' },
  { name: 'Input Supplier',     desc: 'Platform visibility into the operations they support, without access to settlement or financial records.' },
  { name: 'Equipment Provider', desc: 'Platform visibility into the operations they support, without access to settlement or financial records.' },
  { name: 'Investor', to: '/solutions/investor', desc: 'Hardcoded read-only console — operational metrics and settlement records, with hard data-security boundaries.' },
]

const trust = [
  {
    title: 'Role isolation',
    body: 'Each role sees only what their function requires. Farmer Aadhaar and bank details are never visible in reports, exports, or logs. Investor access is hardcoded read-only with no path to financial data outside that boundary.',
  },
  {
    title: 'DPDPA-compliant',
    body: 'Aadhaar is encrypted at rest. Data is hosted on Google Cloud in the Mumbai region and never leaves India. Farmer PII does not appear in any report, export, or operational log.',
  },
  {
    title: 'Append-only ledger',
    body: 'Once a weighment, grade, price, or settlement is finalised, it is permanent. No record can be altered. Corrections are new entries that sit alongside the original — giving you a complete revision history by design.',
  },
  {
    title: 'Cryptographic price lock',
    body: 'The moment a farmer agrees to a price, that price is locked to the millisecond. No revision is possible after the lorry leaves. The farmer sees the same locked figure you do.',
  },
]

export default function About() {
  return (
    <main className="bg-mist">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">About</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          What FarmTally is, what it does, and why every number in it is final.
        </h1>
        <p className="mt-6 text-[17px] text-ink/70 leading-relaxed">
          FarmTally is paddy procurement and settlement software for agri-procurement businesses
          in India. It runs the entire chain of custody — from farm-gate pickup to final farmer
          payout — as a deterministic, evidence-backed workflow. Every stage requires the right
          approval and the right proof before the next stage unlocks.
        </p>

        <div className="mt-16 flex flex-col gap-14">

          {/* Four leaks */}
          <section>
            <h2 className="font-display text-2xl text-canopy mb-6">The four leaks it closes</h2>
            <ul className="flex flex-col gap-6">
              {leaks.map((l) => (
                <li key={l.title} className="flex gap-4">
                  <span className="mt-[5px] shrink-0 w-[6px] h-[6px] rounded-full bg-soil-light" />
                  <div>
                    <p className="font-display text-[17px] text-canopy leading-snug">{l.title}</p>
                    <p className="mt-1 text-[15px] text-ink/70 leading-relaxed">{l.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Six-stage process */}
          <section>
            <h2 className="font-display text-2xl text-canopy mb-2">Six stages, end to end</h2>
            <p className="text-[15px] text-ink/60 mb-6">
              No stage can be skipped or completed out of sequence.{' '}
              <Link to="/how-it-works" className="text-field hover:underline">
                See the full workflow →
              </Link>
            </p>
            <ol className="flex flex-col gap-4 border-l-2 border-line pl-5">
              {stages.map((s, i) => (
                <li key={i} className="relative text-[15px] text-ink/75 leading-relaxed">
                  <span className="absolute -left-[23px] top-[3px] w-[8px] h-[8px] rounded-full bg-field" />
                  {s}
                </li>
              ))}
            </ol>
          </section>

          {/* Eight roles */}
          <section>
            <h2 className="font-display text-2xl text-canopy mb-2">Who it serves</h2>
            <p className="text-[15px] text-ink/60 mb-6">
              Eight roles, one platform. The business owner pays one subscription — every other
              role in the ecosystem uses FarmTally at no cost.
            </p>
            <ul className="flex flex-col gap-4">
              {roles.map((r) => (
                <li key={r.name} className="flex gap-4">
                  <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-field-light" />
                  <div>
                    {r.to
                    ? <Link to={r.to} className="font-display text-[16px] text-canopy hover:text-field">{r.name}</Link>
                    : <span className="font-display text-[16px] text-canopy">{r.name}</span>
                  }
                    <span className="text-ink/50 mx-2">—</span>
                    <span className="text-[15px] text-ink/70">{r.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust */}
          <section>
            <h2 className="font-display text-2xl text-canopy mb-6">Why its records can be trusted</h2>
            <ul className="flex flex-col gap-6">
              {trust.map((t) => (
                <li key={t.title} className="flex gap-4">
                  <span className="mt-[5px] shrink-0 w-[6px] h-[6px] rounded-full bg-grain-deep" />
                  <div>
                    <p className="font-display text-[17px] text-canopy leading-snug">{t.title}</p>
                    <p className="mt-1 text-[15px] text-ink/70 leading-relaxed">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </main>
  )
}
