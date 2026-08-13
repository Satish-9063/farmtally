import { Scale, Calculator, Lock, FileStack, Truck, Warehouse } from 'lucide-react'

// SOW-locked before/after pairs. Coded diagram, not photography — do not
// swap rows for an image.
const rows = [
  {
    Icon: Scale,
    before: 'Weight and grade recorded on paper — easy to alter, hard to trust',
    after: "GPS-tagged, timestamped digital evidence, locked the moment it's captured",
  },
  {
    Icon: Calculator,
    before: 'Settlement reconciled by hand — arithmetic errors, arguments',
    after: 'One automated formula, calculated precisely, no manual override by anyone',
  },
  {
    Icon: Lock,
    before: 'Prices sometimes quietly revised after the crop has left',
    after: 'Price locked to the exact moment of farmer acceptance — permanently',
  },
  {
    Icon: FileStack,
    before: 'A stack of registers when a bank or investor asks for proof',
    after: 'An unbroken, unchangeable digital record from farm gate to settlement',
  },
  {
    Icon: Truck,
    before: 'No capacity checks — overloaded lorries discovered too late',
    after: 'A three-layer check that catches an overload before the lorry even leaves',
  },
  {
    Icon: Warehouse,
    before: "Warehouse disputes: one party's word against the other's",
    after: 'Independent verification against the original farm-gate record',
  },
]

export default function BeforeAfterDiagram() {
  return (
    <div className="rounded-sm overflow-hidden border border-line">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-ink/50 bg-soil/15">
          Before FarmTally
        </div>
        <div className="px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-mist bg-field">
          After FarmTally
        </div>
      </div>
      <div className="divide-y divide-line">
        {rows.map(({ Icon, before, after }, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            <div className="flex items-start gap-3 px-5 py-5 bg-soil/8">
              <Icon size={18} className="mt-0.5 shrink-0 text-soil" aria-hidden="true" strokeWidth={1.75} />
              <p className="text-[14.5px] text-ink/70 leading-relaxed">{before}</p>
            </div>
            <div className="flex items-start gap-3 px-5 py-5 bg-field/10">
              <Icon size={18} className="mt-0.5 shrink-0 text-field" aria-hidden="true" strokeWidth={1.75} />
              <p className="text-[14.5px] text-ink/85 font-medium leading-relaxed">{after}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
