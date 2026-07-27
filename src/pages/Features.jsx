const roles = [
  {
    name: 'Business Owners',
    subtitle: 'your command console',
    bullets: [
      'Approve pickups, assign lorries, and manage your farmer network from one web console.',
      'Live settlement calculator showing the complete computation: gross weight to grade cut to adjusted weight to price/kg — every figure locked and visible.',
      'Farmer running ledger with itemised advances and deductions — the same view your farmer sees.',
      'Invite farmers with a QR code or WhatsApp join link; approve registrations from an activation queue.',
      'Staff accounts with scoped permissions — approvals-only or settlement-only roles for your team.',
    ],
  },
  {
    name: 'Field Operators',
    subtitle: 'an app built for the field',
    bullets: [
      'Full offline operation: capture moisture, weights, and photos with zero network. Syncs automatically within 30 seconds of connectivity.',
      'Moisture-first workflow — the app enforces the correct sequence so records are always complete.',
      'GPS-tagged, timestamped photo evidence attached to every loading entry.',
      'Camera failure? Emergency override text entry keeps the trip moving — flagged for your review in the console.',
    ],
  },
  {
    name: 'Transport Operators',
    subtitle: null,
    bullets: [
      "Trip assignments with locked loading manifests — what's loaded is what's on record.",
      'Payload guard: the platform blocks assignments beyond vehicle capacity before the trip starts.',
    ],
  },
  {
    name: 'Buyers',
    subtitle: null,
    bullets: [
      'Warehouse verification against farm-gate records, with photo evidence attached.',
      '24-hour confirmation SLA with automatic verification — no deals stuck waiting on a signature.',
    ],
  },
  {
    name: 'Investors',
    subtitle: 'read-only, always',
    bullets: [
      'A hardcoded read-only console: operational metrics and settlement records, with hard data-security boundaries.',
      'Append-only ledger gives investor-grade audit visibility — the records a financing decision can actually rely on.',
    ],
  },
  {
    name: 'Farmers',
    subtitle: 'complete transparency',
    bullets: [
      'A running ledger showing every delivery, every advance, and every deduction, itemised.',
      'Price locked at the handshake — cryptographically, at the moment of agreement.',
      'Advance recovery simulation: farmers see exactly how an advance affects their next payout before they take it.',
      "Aadhaar encrypted at rest; bank details visible to no one who doesn't strictly need them. Farmer PII never appears in reports or logs.",
    ],
  },
]

export default function Features() {
  return (
    <main className="bg-mist">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">Features</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Purpose-built for every role in your operation.
        </h1>
        <p className="mt-4 text-[17px] text-ink/70 max-w-2xl">
          One platform, role-based access. Everyone sees exactly what they need — and nothing they
          shouldn't.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <div key={role.name} className="stub rounded-sm p-7 flex flex-col gap-3">
              <div>
                <h2 className="font-display text-[22px] text-canopy leading-snug">{role.name}</h2>
                {role.subtitle && (
                  <p className="eyebrow text-field-light mt-1">{role.subtitle}</p>
                )}
              </div>
              <ul className="flex flex-col gap-2 mt-1">
                {role.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-[15px] text-ink/80 leading-relaxed">
                    <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-grain-deep" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-20 text-center font-display text-2xl md:text-3xl text-canopy-deep leading-snug max-w-2xl mx-auto">
          Farmers who trust your numbers bring you their best harvest — and their neighbours.
        </p>
      </div>
    </main>
  )
}
