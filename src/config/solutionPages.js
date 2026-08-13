// Role-specific Solutions page content.
// Add one entry per role as each page task ships.
// Slug keys must match SOLUTIONS_ROLES slugs (ADR-006).
export const SOLUTION_PAGES = {
  'equipment-provider': {
    roleLabel: 'Equipment Provider',
    title: 'Service completed, visible, and accounted for',
    intro:
      'FarmTally links every equipment booking to a live procurement cycle. When a tractor leaves your yard, the job it serves, the stages it covers, and the hours it runs are all on record — settled from data, not from memory.',
    imageSrc: '/images/solutions/equipment-provider.jpg',
    imageAlt: 'Equipment provider inspecting a tractor at an agri-procurement site',
    valueProps: [
      {
        title: 'Every booking tied to a live job',
        copy: 'Equipment is assigned against an active procurement cycle, not a loose purchase order. You know exactly which farm, which crop, and which stage your machine is serving at any point.',
      },
      {
        title: 'Field-confirmed delivery and return',
        copy: 'The field supervisor marks equipment as on-site and operational before the stage advances. Condition at collection is logged the same way — no verbal disputes about damage or delays.',
      },
      {
        title: 'Invoiced on verified hours, not estimates',
        copy: 'Your invoice is calculated from timestamped usage records — hours logged, stages served, and waiting time captured automatically. What was recorded is what gets paid.',
      },
    ],
  },
  'transport-operator': {
    roleLabel: 'Transport Operator',
    title: 'Deliver with a record, not just a memory',
    intro:
      'FarmTally gives every driver a GPS-stamped, tamper-proof delivery record from load to handoff. If weight goes missing between farm gate and warehouse, the evidence is already in the chain.',
    imageSrc: '/images/solutions/transport-operator.jpg',
    imageAlt: 'Transport operator beside a loaded lorry at an agri-procurement site',
    valueProps: [
      {
        title: 'Your load, locked at source',
        copy: 'Weight, grade, and quantity recorded at the farm gate travel with the consignment as a sealed record. No warehouse can quietly adjust what was signed off at pickup.',
      },
      {
        title: 'Route logged, delays documented',
        copy: 'GPS tracks your route from pickup to destination. Waiting time, route deviations, and delivery confirmation are timestamped and attached to the procurement record automatically.',
      },
      {
        title: 'Settled on data, not disputes',
        copy: 'Your transport fee, distance rate, and waiting charges are calculated from logged records — not negotiated after the lorry returns.',
      },
    ],
  },
}
