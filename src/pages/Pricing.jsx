import { Link } from 'react-router-dom'

const Token = ({ children }) => (
  <span className="font-mono text-soil text-[13px]">{children}</span>
)

const plans = [
  {
    id: 'STARTER',
    tagline: 'For businesses running their first digital season.',
    price: '⟦OQ-14: STARTER Rs/mo⟧',
    rows: [
      { label: 'Field operators', value: '⟦OQ-14: FM cap⟧' },
      { label: 'Farmers', value: '⟦OQ-14: farmer limit⟧' },
      { label: 'Commodity slots', value: '⟦OQ-14: slots⟧' },
      { label: 'Monthly transactions', value: '⟦OQ-14: volume⟧' },
      { label: 'API access', value: '⟦OQ-14: yes/no⟧' },
    ],
    cta: 'Start with STARTER',
  },
  {
    id: 'GROWTH',
    tagline: 'For established operations scaling across mandals.',
    price: '⟦OQ-14: GROWTH Rs/mo⟧',
    rows: [
      { label: 'Field operators', value: '⟦OQ-14: FM cap⟧' },
      { label: 'Farmers', value: '⟦OQ-14: farmer limit⟧' },
      { label: 'Commodity slots', value: '⟦OQ-14: slots⟧' },
      { label: 'Monthly transactions', value: '⟦OQ-14: volume⟧' },
      { label: 'API access', value: '⟦OQ-14: yes/no⟧' },
    ],
    cta: 'Start with GROWTH',
  },
  {
    id: 'ENTERPRISE',
    tagline: 'For multi-district operations with investor reporting.',
    taglineHref: '/solutions/investor',
    price: "⟦OQ-14: ENTERPRISE Rs/mo — or 'Talk to us'⟧",
    rows: [
      { label: 'Field operators', value: '⟦OQ-14: FM cap⟧' },
      { label: 'Farmers', value: '⟦OQ-14: farmer limit⟧' },
      { label: 'Commodity slots', value: '⟦OQ-14: slots⟧' },
      { label: 'Monthly transactions', value: '⟦OQ-14: volume⟧' },
      { label: 'API access', value: '⟦OQ-14: yes/no⟧' },
    ],
    cta: 'Start with ENTERPRISE / Talk to us',
  },
]

const faqs = [
  {
    q: 'What happens when my trial ends?',
    a: (
      <Token>
        ⟦OQ-15: exact trial-end and grace-period behaviour — write from decision record. Must state
        grace period, warning emails, and that farmers are never locked out of in-progress
        pickups.⟧
      </Token>
    ),
  },
  {
    q: 'Do my farmers pay anything?',
    a: 'No. Farmers, field operators, transport operators, and buyers join your business at no charge. You pay for the plan; your ecosystem uses it.',
  },
  {
    q: 'Can I change plans mid-season?',
    a: (
      <>
        Yes. Upgrades apply immediately. <Token>⟦OQ-14: downgrade policy⟧</Token>
      </>
    ),
  },
  {
    q: 'Is my data safe if I cancel?',
    a: (
      <>
        Your records remain yours.{' '}
        <Token>
          ⟦OQ-15: data retention after cancellation — write from decision record⟧
        </Token>
      </>
    ),
  },
  {
    q: 'Who else can see my data?',
    a: "No one. Every business on FarmTally is an isolated tenant. Sariki Technologies' platform operations team cannot access your operational or financial data.",
  },
  {
    q: 'What do I need to sign up?',
    a: 'Your GST number (verified during signup), business details, and a phone number. Most businesses are live the same day.',
  },
]

export default function Pricing() {
  return (
    <main className="bg-mist">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Publish block banner */}
        <div className="mb-10 border-l-4 border-soil bg-soil/10 px-5 py-4 rounded-sm">
          <p className="font-mono text-[13px] text-soil uppercase tracking-wide">
            PUBLISH BLOCK — this page cannot go live until the OQ-14 decision record is complete.
          </p>
        </div>

        <p className="eyebrow text-field mb-4">Pricing</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Simple plans that scale with your procurement.
        </h1>
        <p className="mt-4 text-[17px] text-ink/70 max-w-2xl">
          Pick the plan that fits your season. Upgrade any time — your data and your farmer network
          come with you.
        </p>

        {/* Plan cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className="stub rounded-sm p-7 flex flex-col gap-5">
              <div>
                <p className="eyebrow text-field">{plan.id}</p>
                <p className="mt-2 text-[14px] text-ink/60 leading-snug">
                  {plan.tagline}
                  {plan.taglineHref && (
                    <> <Link to={plan.taglineHref} className="text-field hover:underline">Learn more →</Link></>
                  )}
                </p>
              </div>

              <div>
                <p className="font-display text-[13px] text-canopy/50 uppercase tracking-wide mb-1">
                  Price
                </p>
                <Token>{plan.price}</Token>
              </div>

              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                {plan.rows.map((row) => (
                  <li key={row.label} className="flex justify-between gap-4 text-[14px]">
                    <span className="text-ink/60">{row.label}</span>
                    <Token>{row.value}</Token>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-auto w-full bg-canopy text-mist font-semibold text-[14px] py-3 rounded-sm hover:bg-canopy-deep transition-colors"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="font-display text-2xl md:text-3xl text-canopy-deep">Pricing FAQ</h2>
          <dl className="mt-8 flex flex-col divide-y divide-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-semibold text-[16px] text-canopy">{faq.q}</dt>
                <dd className="mt-2 text-[15px] text-ink/70 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </main>
  )
}
