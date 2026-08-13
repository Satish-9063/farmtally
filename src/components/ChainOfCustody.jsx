import { Link } from 'react-router-dom'
import { FileText, MapPin, Scale, Route, Warehouse, Receipt } from 'lucide-react'

// Terracotta = field palette; Olive = soil palette (ADR-005 remapped).
const stages = [
  {
    n: 1,
    name: 'Intent',
    Icon: FileText,
    tone: 'terracotta',
    img: 'intent',
    roles: ['Business Owner', 'Farmer'],
    evidence: 'Procurement agreement locked with GPS-stamped timestamp — price, grade, and quantity confirmed before any movement begins.',
  },
  {
    n: 2,
    name: 'Pickup',
    Icon: MapPin,
    tone: 'olive',
    img: 'pickup',
    roles: ['Field Manager'],
    evidence: 'GPS-tagged photo of produce at the farm; quantity and condition recorded before loading.',
  },
  {
    n: 3,
    name: 'Farm Gate Evidence',
    Icon: Scale,
    tone: 'terracotta',
    img: 'farmgate',
    roles: ['Field Manager'],
    evidence: 'Weight, grade, and moisture reading captured on-site — signed off before the lorry departs.',
  },
  {
    n: 4,
    name: 'Transit',
    Icon: Route,
    tone: 'olive',
    img: 'transit',
    roles: ['Transport Operator'],
    evidence: 'GPS route tracked from farm gate to destination; driver confirmation recorded at handoff.',
  },
  {
    n: 5,
    name: 'Warehouse Verification',
    Icon: Warehouse,
    tone: 'terracotta',
    img: 'warehouse',
    roles: ['Buyer'],
    evidence: 'Arrival weight and quality checked against farm-gate records; any variance is flagged and logged — never quietly adjusted.',
  },
  {
    n: 6,
    name: 'Settlement',
    Icon: Receipt,
    tone: 'olive',
    img: 'settlement',
    roles: ['Business Owner', 'Farmer'],
    evidence: 'Net payout computed automatically from weight, grade, moisture, advances, and deductions. Ledger entry is permanent — no manual overrides.',
  },
]

// Compact view (homepage teaser)
const badgeCls = {
  terracotta: 'bg-field/15 text-field',
  olive:      'bg-soil/12 text-soil',
}

// Detailed view (How It Works page)
const tagCls = {
  terracotta: 'bg-field/10 text-field border border-field/25',
  olive:      'bg-soil/10 text-soil border border-soil/25',
}

const imgPlaceholderCls = {
  terracotta: 'bg-field/8',
  olive:      'bg-soil/8',
}

export default function ChainOfCustody({ detailed = false }) {
  if (detailed) {
    return (
      <ol className="flex flex-col gap-5">
        {stages.map((s) => (
          <li
            key={s.n}
            className="rounded-sm border border-line overflow-hidden grid md:grid-cols-[2fr_3fr]"
          >
            {/* Stage image */}
            <div className={`min-h-[180px] md:min-h-0 overflow-hidden ${imgPlaceholderCls[s.tone]}`}>
              <img
                src={`/images/how-it-works/chain/${s.img}.jpg`}
                alt={`${s.name} stage`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Stage content */}
            <div className="p-6 flex flex-col gap-3 bg-mist">
              {/* Icon + stage number + name */}
              <div className="flex items-start gap-3">
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${badgeCls[s.tone]}`}
                >
                  <s.Icon size={16} aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] text-ink/40 tracking-wider uppercase mb-0.5">
                    Stage {s.n}
                  </p>
                  <p className="font-display text-[18px] text-canopy leading-tight">{s.name}</p>
                </div>
              </div>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2">
                {s.roles.map((role) => (
                  <span
                    key={role}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold border ${tagCls[s.tone]}`}
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Evidence line */}
              <p className="text-[14px] text-ink/70 leading-relaxed">{s.evidence}</p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  // Compact linked teaser (used on Home page)
  return (
    <Link
      to="/how-it-works"
      aria-label="Chain of Custody — view full detail on How It Works"
      className="block group"
    >
      <ol className="grid gap-px bg-line rounded-sm overflow-hidden border border-line md:grid-cols-6 group-hover:border-field transition-colors duration-200">
        {stages.map((s) => {
          const isLast = s.n === 6
          return (
            <li
              key={s.n}
              className={`relative p-5 flex flex-col gap-2 ${isLast ? 'bg-mist-dark' : 'bg-mist'}`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center ${badgeCls[s.tone]}`}
              >
                <s.Icon size={15} aria-hidden="true" strokeWidth={1.75} />
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
    </Link>
  )
}
