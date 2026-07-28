const sections = [
  {
    heading: 'Who we are',
    body: 'FarmTally is built by Sariki Technologies Pvt Ltd, an AI-native software company headquartered in Visakhapatnam, Andhra Pradesh. We build products at the intersection of agriculture, governance, and education — including FarmTally, Sarpanch Mitra, and campus AI platforms — and deliver AI transformation for enterprise and government clients.',
  },
  {
    heading: 'Why FarmTally exists',
    body: 'Agri-procurement in India runs on trust — and trust breaks where records are weak. We built FarmTally so that a paddy business in Srikakulam can produce the same quality of financial record as a listed company: evidence-backed, tamper-proof, and transparent to everyone with a stake in it, from the farmer at the gate to the investor reading the ledger.',
  },
  {
    heading: 'How we build',
    body: "FarmTally is engineered under Sariki's GenAI SDLC programme — a delivery discipline where every feature passes four quality gates (shared language, agreed design, written test contract, defined scope) before a line of implementation code is written. It's slower on day one and dramatically safer on day one thousand — which is exactly the trade a financial platform should make.",
  },
]

export default function About() {
  return (
    <main className="bg-mist">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">About</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Built in Andhra Pradesh, for the way procurement actually works here.
        </h1>

        <div className="mt-14 flex flex-col gap-12">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl text-canopy">{s.heading}</h2>
              <p className="mt-3 text-[16px] text-ink/75 leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="font-display text-2xl text-canopy">Leadership</h2>
            <p className="mt-3 text-[16px] text-ink/75 leading-relaxed">
              Founded and led by Prasad Sariki (CEO &amp; Managing Director).
            </p>
            <p className="mt-3 font-mono text-[13px] text-soil">
              ⟦Optional: 2–3 line founder note + photo — Prasad to approve⟧
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-line">
          <p className="text-[14px] text-ink/60 leading-relaxed">
            Sariki Technologies Pvt Ltd · APIS IT Incubation Centre, Visakhapatnam, Andhra Pradesh
            530048
          </p>
          <p className="mt-1 font-mono text-[13px] text-soil">
            ⟦public contact email — confirm⟧
          </p>
        </div>
      </div>
    </main>
  )
}
