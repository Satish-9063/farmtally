// Shared scaffold for pages that are wired into routing but not yet
// content-complete. Each real page component should replace its <PageStub>
// usage with full section markup per its assigned prompt — do not delete
// the eyebrow/H1 text below, it is locked copy from MKT-WEB-01.
export default function PageStub({ eyebrow, title, intro, taskId }) {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-24">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="font-display text-4xl md:text-5xl mt-4 text-canopy leading-tight">
        {title}
      </h1>
      {intro && (
        <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed text-lg">{intro}</p>
      )}
      <div className="mt-14 stub rounded-sm p-6 text-[13.5px] text-ink/50 font-mono">
        {taskId} — layout wired, content pending build-out.
      </div>
    </section>
  )
}
