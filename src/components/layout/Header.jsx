import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { primaryCta, secondaryCta } from '../../config/cta'
import Logo from '../Logo'

const links = [
  { to: '/how-it-works', label: 'Product' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-mist/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-canopy"
        >
          <Logo />
          FarmTally
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink/80">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-field transition-colors ${isActive ? 'text-field font-medium' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline font-mono text-xs tracking-wide text-ink/50">
            EN │ తెలుగు
          </span>
          <Link
            to={secondaryCta.href}
            className="hidden sm:inline text-[14px] text-ink/80 hover:text-field transition-colors"
          >
            {secondaryCta.label}
          </Link>
          <Link
            to={primaryCta.href}
            className="bg-canopy text-mist text-[14px] font-medium px-4 py-2 rounded-sm hover:bg-field transition-colors inline-flex items-center gap-1.5"
          >
            {primaryCta.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
