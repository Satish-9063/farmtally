const stages = [
  { n: 1, name: 'Intent' },
  { n: 2, name: 'Pickup' },
  { n: 3, name: 'Farm Gate Evidence' },
  { n: 4, name: 'Transit' },
  { n: 5, name: 'Warehouse Verification' },
  { n: 6, name: 'Settlement' },
]

// Alternates field-green and grain-gold numeral chips so the strip reads
// as a sequence of distinct checkpoints, not one flat color block. The
// final stage (Settlement) gets the soil-brown "Locked" mark since price
// and payout are permanent at that point — the one moment worth a
// different visual weight.
export default function ChainOfCustody() {
  return (
    <ol className="grid gap-px bg-line rounded-sm overflow-hidden border border-line md:grid-cols-6">
      {stages.map((s) => {
        const isLast = s.n === 6
        const chipTone = s.n % 2 === 0 ? 'bg-field text-mist' : 'bg-grain text-canopy-deep'
        return (
          <li
            key={s.n}
            className={`relative p-5 flex flex-col gap-2 ${isLast ? 'bg-mist-dark' : 'bg-mist'}`}
          >
            <span
              className={`font-mono text-[11px] w-6 h-6 rounded-full flex items-center justify-center ${chipTone}`}
            >
              {s.n}
            </span>
            <span className="font-display text-[16px] text-canopy leading-tight">{s.name}</span>
            {isLast && (
              <span className="absolute top-4 right-4 border border-soil text-soil font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm rotate-[-6deg]">
                Locked
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
