import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { primaryCta } from '../config/cta'
import CTABand from './CTABand'

// Shared template for all /solutions/:role pages (ADR-011, FTW-028+).
// Future role tasks pass their content via props — layout is not re-implemented.
export default function SolutionRolePage({
  roleLabel,
  title,
  intro,
  imageSrc,
  imageAlt,
  valueProps,
}) {
  return (
    <main>
      {/* Hero — mist */}
      <section className="bg-mist">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-field mb-4">{`Solutions · ${roleLabel}`}</p>
            <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
              {title}
            </h1>
            <p className="mt-5 text-[17px] text-ink/70 leading-relaxed max-w-lg">{intro}</p>
            <Link
              to={primaryCta.href}
              className="mt-8 inline-flex items-center gap-2 bg-canopy text-mist font-semibold px-6 py-3 rounded-sm hover:bg-field transition-colors"
            >
              {primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Role photo — order-first on mobile so image leads on small screens */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden bg-mist-dark order-first md:order-last">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Value props — canopy-deep band */}
      <section className="bg-canopy-deep text-mist">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((v) => (
              <div key={v.title} className="p-6 bg-mist/8 border border-mist/15 rounded-sm">
                <p className="font-display text-lg text-grain-light leading-tight">{v.title}</p>
                <p className="mt-2 text-[14.5px] text-mist/75 leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
