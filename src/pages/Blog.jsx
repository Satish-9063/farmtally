import BeforeAfterDiagram from '../components/BeforeAfterDiagram'

const articles = [
  {
    title: 'Where paddy procurement actually leaks — and how digital chain-of-custody stops it',
    abstract:
      'A stage-by-stage look at where weight, grade, and money go missing between the farm gate and the warehouse, and how GPS-tagged evidence and append-only records close each gap.',
    seo: 'paddy procurement leakage, procurement software India',
  },
  {
    title: 'Why your settlement should be computed, not negotiated',
    abstract:
      'Manual payout calculations invite errors and disputes. How automated, fully itemised settlement — gross weight to final amount — pays farmers faster and ends month-end arguments.',
    seo: 'farmer settlement software, agri payment transparency',
  },
  {
    title: "Offline-first: field software that works where the network doesn't",
    abstract:
      "Rural pickup points don't have reliable signal — your records can't depend on it. Inside FarmTally's offline capture and 30-second sync design.",
    seo: 'offline agri app, field data collection app India',
  },
]

export default function Blog() {
  return (
    <main className="bg-mist">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">Blog</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Notes from the field.
        </h1>

        <div className="mt-14">
          <BeforeAfterDiagram />
        </div>

        <ol className="mt-14 flex flex-col divide-y divide-line">
          {articles.map((article, i) => (
            <li key={i} className="py-10 flex flex-col gap-3">
              <h2 className="font-display text-[22px] md:text-2xl text-canopy leading-snug">
                {article.title}
              </h2>
              <p className="text-[15px] text-ink/70 leading-relaxed">{article.abstract}</p>
              <p className="font-mono text-[11px] text-ink/35 tracking-wide">{article.seo}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
