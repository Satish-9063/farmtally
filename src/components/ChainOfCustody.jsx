import { Link } from 'react-router-dom'
import { FileText, MapPin, Scale, Route, Warehouse, Receipt } from 'lucide-react'

// Terracotta = soil palette; Olive = field palette. Alternates per stage.
const stages = [
  { n: 1, name: 'Intent',               Icon: FileText,  tone: 'terracotta' },
  { n: 2, name: 'Pickup',               Icon: MapPin,    tone: 'olive' },
  { n: 3, name: 'Farm Gate Evidence',   Icon: Scale,     tone: 'terracotta' },
  { n: 4, name: 'Transit',              Icon: Route,     tone: 'olive' },
  { n: 5, name: 'Warehouse Verification', Icon: Warehouse, tone: 'terracotta' },
  { n: 6, name: 'Settlement',           Icon: Receipt,   tone: 'olive' },
]

const badgeCls = {
  terracotta: 'bg-soil/12 text-soil',
  olive:      'bg-field/15 text-field',
}

export default function ChainOfCustody() {
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
