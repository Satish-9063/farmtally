import { Link } from 'react-router-dom'

// Shared layout for the 8 per-role Solutions pages (ADR-006 role list).
// Desktop: 3/12 photo (left) + 9/12 text (right) inside a 1280px container.
// Mobile (<768px): stacks full-width, image on top, cropped 16:9 instead
// of the desktop 3:4 portrait crop.
export default function SolutionPageTemplate({ h1, painPoint, feature, proofPoint, cta, image }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-3">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full aspect-[16/9] md:aspect-[3/4] object-cover rounded-sm border border-line"
          />
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-4xl md:text-5xl text-canopy leading-tight">{h1}</h1>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed">{painPoint}</p>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed">{feature}</p>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed font-medium text-canopy">
            {proofPoint}
          </p>
          <Link
            to={cta.href}
            className="mt-8 inline-block bg-field text-mist font-medium px-6 py-3 rounded-sm hover:bg-canopy transition-colors"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
