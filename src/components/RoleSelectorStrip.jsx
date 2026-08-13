import { Link } from 'react-router-dom'
import {
  Briefcase,
  Sprout,
  Tablet,
  Truck,
  ClipboardCheck,
  Package,
  Wrench,
  FileBarChart,
} from 'lucide-react'
import { SOLUTIONS_ROLES } from '../config/solutions'

// lucide-react doesn't ship Tabler's exact icon set (briefcase, plant-2,
// device-tablet, truck, clipboard-check, package, tool, report-money) —
// mapped to the closest lucide equivalent per role, in ADR-006 order.
const ROLE_ICONS = {
  'business-owner': Briefcase,
  farmer: Sprout,
  'field-manager': Tablet,
  'transport-operator': Truck,
  buyer: ClipboardCheck,
  'input-supplier': Package,
  'equipment-provider': Wrench,
  investor: FileBarChart,
}

export default function RoleSelectorStrip() {
  return (
    <nav aria-label="Solutions by role" className="flex flex-wrap items-center justify-center gap-3">
      {SOLUTIONS_ROLES.map((role) => {
        const Icon = ROLE_ICONS[role.slug]
        return (
          <Link
            key={role.slug}
            to={`/solutions/${role.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-line text-ink/75 hover:text-field hover:border-field/40 transition-colors"
          >
            <Icon aria-hidden="true" width={16} height={16} />
            {role.label}
          </Link>
        )
      })}
    </nav>
  )
}
