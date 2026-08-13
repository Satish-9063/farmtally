// Role-specific Solutions page content.
// Add one entry per role as each page task ships.
// Slug keys must match SOLUTIONS_ROLES slugs (ADR-006).
export const SOLUTION_PAGES = {
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
