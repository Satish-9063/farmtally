import { Link } from 'react-router-dom'

// FTW-035 — required by the 21-document review. This is a real,
// published statement (unlike the /legal/:page outlines, which are
// still pending legal review) — do not add the "content outline"
// disclaimer banner here.
const tok = (s) => <span className="font-mono text-soil text-[13px]">{s}</span>

const sections = [
  {
    heading: 'Our commitment',
    body: 'Sariki Technologies Pvt Ltd is committed to making the FarmTally website usable by as many people as possible, including people who rely on assistive technology such as screen readers, screen magnifiers, or keyboard-only navigation.',
  },
  {
    heading: 'Conformance standard',
    body: 'We are targeting conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities, and more usable for everyone.',
  },
  {
    heading: 'Ongoing work',
    body: 'Accessibility is an ongoing effort. As we add new pages and features, we test them against WCAG 2.1 AA and correct issues we find. If a page on this site does not yet meet that standard, we want to know about it.',
  },
  {
    heading: 'Reporting an accessibility issue',
    body: <>
      If you encounter an accessibility barrier on this site, contact us at {tok('⟦accessibility contact email⟧')}, or reach us through our{' '}
      <Link to="/demo" className="text-field hover:underline">Contact page</Link>. Please describe the page you were on and the problem you
      encountered — we will acknowledge your report and work to resolve it.
    </>,
  },
]

export default function Accessibility() {
  return (
    <main className="bg-mist">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">Accessibility</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Accessibility Statement
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
