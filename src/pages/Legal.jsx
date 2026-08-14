import { useParams } from 'react-router-dom'

const titles = {
  privacy: 'Privacy Notice',
  terms: 'Terms of Service',
  cookies: 'Cookie Policy',
  refunds: 'Refund & Cancellation Policy',
  grievance: 'Grievance Officer',
}

const tok = (s) => <span className="font-mono text-soil text-[13px]">{s}</span>

const content = {
  privacy: [
    {
      heading: 'Who we are',
      body: 'Sariki Technologies Pvt Ltd is the data fiduciary for personal data processed through the FarmTally platform. Registered office: APIS IT Incubation Centre, Visakhapatnam, Andhra Pradesh 530048.',
    },
    {
      heading: 'What we collect',
      body: 'Business owner account details (name, phone, GST number); farmer identity data (name, phone, Aadhaar — encrypted at rest); field operator and transport operator account details; operational data (pickup records, weights, moisture readings, GPS coordinates, photos); financial data (settlement amounts, advances, bank account details).',
    },
    {
      heading: 'Purpose & legal basis',
      body: 'Data is collected to operate the procurement workflow, generate settlement records, and comply with applicable law. Legal basis: performance of a contract (platform services); legitimate interests (fraud prevention, platform integrity); consent (Aadhaar collection).',
    },
    {
      heading: 'Retention',
      body: tok('⟦legal: retention period⟧'),
    },
    {
      heading: 'Your rights under DPDPA',
      body: 'Under the Digital Personal Data Protection Act 2023, data principals have the right to access, correct, and erase their personal data, and to nominate a representative. To exercise these rights, contact the Grievance Officer below.',
    },
    {
      heading: 'Grievance Officer',
      body: <>
        {tok('⟦name⟧')} · {tok('⟦email⟧')}
      </>,
    },
    {
      heading: 'Platform privacy',
      body: 'Farmer PII (Aadhaar, bank details) is encrypted at rest and never appears in reports, exports, or logs. Bank details are visible only to roles with an explicit business need. Every business on FarmTally is an isolated tenant — no cross-tenant data access is possible.',
    },
  ],

  cookies: [
    {
      heading: 'What we store',
      body: 'FarmTally uses browser localStorage rather than HTTP cookies for consent tracking. A single entry is written when you make a choice on the consent banner.',
    },
    {
      heading: 'Essential storage',
      body: <>Always active — cannot be disabled. The {tok('farmtally_consent')} entry records whether you have accepted or declined analytics. Without it the consent banner would reappear on every page load.</>,
    },
    {
      heading: 'Analytics',
      body: <>Active only when {tok('farmtally_consent')} is set to {tok('allowed')}. We load privacy-respecting analytics that record pages visited, time on page, and referrer. No personally identifiable information is collected. No cross-site tracking or advertising profiles are built.</>,
    },
    {
      heading: 'Marketing',
      body: 'No marketing or advertising cookies, pixels, or trackers are loaded on this website.',
    },
    {
      heading: 'Withdrawing consent',
      body: <>To withdraw analytics consent, open your browser developer tools (F12 or Cmd-Option-I), go to Application → Local Storage → this site, and delete the {tok('farmtally_consent')} entry. The consent banner will reappear on your next page load and you can make a fresh choice.</>,
    },
  ],

  terms: [
    {
      heading: 'Service description',
      body: 'FarmTally is a cloud-based agri-procurement platform provided by Sariki Technologies Pvt Ltd. It provides role-based workflow management, chain-of-custody recording, settlement calculation, and financial ledger services for agri-commodity procurement businesses.',
    },
    {
      heading: 'Account eligibility',
      body: 'Business Owner accounts are available to entities holding a valid GST registration, verified during signup. Individuals without a valid GST number are not eligible to open a Business Owner account.',
    },
    {
      heading: 'Plan tiers',
      body: <>Per {tok('⟦OQ-14⟧')}, plan features, limits, and pricing are defined in the current published pricing schedule. Sariki Technologies reserves the right to adjust pricing with advance notice.</>,
    },
    {
      heading: 'Trial and suspension',
      body: <>Per {tok('⟦OQ-15⟧')}: a 7-day grace period applies at trial end before service suspension. Warning emails are sent during the grace period. Farmers and field operators are never locked out of in-progress pickups during a suspension grace period.</>,
    },
    {
      heading: 'Data ownership',
      body: 'All operational and financial data entered into FarmTally belongs to the Business Owner account that created it. Sariki Technologies does not claim any ownership over customer data. Data is exportable on request.',
    },
    {
      heading: 'Governing law',
      body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Andhra Pradesh.',
    },
  ],

  refunds: [
    {
      heading: 'Status',
      body: <>This policy is dependent on {tok('⟦OQ-14 / OQ-15 decision records⟧')} and cannot be finalised until those records are complete.</>,
    },
    {
      heading: 'Outline',
      body: 'The refund and cancellation policy will address: pro-rata refunds on downgrade or cancellation; treatment of the trial period; behaviour at subscription expiry; data export rights after cancellation; and the grace period before data deletion.',
    },
  ],

  grievance: [
    {
      heading: 'Grievance Officer',
      body: <>{tok('⟦name⟧')}</>,
    },
    {
      heading: 'Contact',
      body: <>{tok('⟦email⟧')}</>,
    },
    {
      heading: 'Response time',
      body: 'Grievances will be acknowledged and responded to within the statutory period prescribed under applicable Indian law, including the Digital Personal Data Protection Act 2023 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021.',
    },
  ],
}

export default function Legal() {
  const { page } = useParams()
  const key = page && titles[page] ? page : 'privacy'
  const title = titles[key]
  const sections = content[key]

  return (
    <main className="bg-mist">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Legal review banner */}
        <div className="mb-10 border-l-4 border-soil bg-soil/10 px-5 py-4 rounded-sm">
          <p className="font-mono text-[13px] text-soil">
            These are content outlines, not final legal text. Final drafting requires legal review
            — route via Prasad.
          </p>
        </div>

        <p className="eyebrow text-field mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          {title}
        </h1>

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl text-canopy">{s.heading}</h2>
              <p className="mt-2 text-[15px] text-ink/75 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

      </div>
    </main>
  )
}
