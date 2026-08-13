import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { primaryCta, secondaryCta } from '../../config/cta'
import Logo from '../Logo'
import SolutionsMenu from '../SolutionsMenu'
import MobileMenu from './MobileMenu'

const navCls = ({ isActive }) =>
  `hover:text-field transition-colors ${isActive ? 'text-field font-medium' : ''}`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
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
            <NavLink to="/how-it-works" className={navCls}>Product</NavLink>
            <SolutionsMenu />
            <NavLink to="/pricing" className={navCls}>Pricing</NavLink>
            <NavLink to="/about" className={navCls}>About</NavLink>
            <NavLink to="/blog" className={navCls}>Blog</NavLink>
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
              className="hidden md:inline-flex bg-canopy text-mist text-[14px] font-medium px-4 py-2 rounded-sm hover:bg-field transition-colors items-center gap-1.5"
            >
              {primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden text-ink/80 hover:text-field transition-colors p-1 -mr-1"
            >
              {menuOpen
                ? <X size={22} aria-hidden="true" />
                : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
