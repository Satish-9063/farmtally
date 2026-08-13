import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { SOLUTIONS_ROLES } from '../../config/solutions'
import { primaryCta } from '../../config/cta'

const FOCUSABLE = 'a[href], button:not([disabled])'

const itemVariant = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15 } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
}

export default function MobileMenu({ open, onClose }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const panelRef = useRef(null)
  const location = useLocation()

  // Stable ref so effects don't re-run when Header re-renders with a new arrow fn
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => { onCloseRef.current() }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const getFocusable = () => [
      ...(panelRef.current?.querySelectorAll(FOCUSABLE) ?? []),
    ]

    const raf = requestAnimationFrame(() => getFocusable()[0]?.focus())

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab') return
      const els = getFocusable()
      if (!els.length) return
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const linkCls = ({ isActive }) =>
    `block py-3 text-[15px] border-b border-line/60 transition-colors ${
      isActive ? 'text-field font-medium' : 'text-ink/80 hover:text-field'
    }`

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-ink/40 md:hidden"
            aria-hidden="true"
            onClick={() => onCloseRef.current()}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-16 inset-x-0 z-40 bg-mist border-b border-line shadow-lg md:hidden overflow-y-auto max-h-[calc(100dvh-4rem)]"
          >
            <nav aria-label="Mobile navigation">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={listVariants}
                className="flex flex-col px-5 py-2"
              >
                {/* Product */}
                <motion.li variants={itemVariant}>
                  <NavLink
                    to="/how-it-works"
                    onClick={() => onCloseRef.current()}
                    className={linkCls}
                  >
                    Product
                  </NavLink>
                </motion.li>

                {/* Solutions — accordion */}
                <motion.li variants={itemVariant}>
                  <button
                    type="button"
                    aria-expanded={solutionsOpen}
                    aria-controls="mobile-solutions-list"
                    onClick={() => setSolutionsOpen((o) => !o)}
                    className="flex items-center justify-between w-full py-3 text-[15px] text-ink/80 border-b border-line/60 hover:text-field transition-colors"
                  >
                    Solutions
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {solutionsOpen && (
                      <motion.ul
                        id="mobile-solutions-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden border-b border-line/60"
                      >
                        {SOLUTIONS_ROLES.map((role) => (
                          <li key={role.slug}>
                            <Link
                              to={`/solutions/${role.slug}`}
                              onClick={() => onCloseRef.current()}
                              className="block pl-4 pr-2 py-2.5 text-[14px] text-ink/70 hover:text-field transition-colors"
                            >
                              {role.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Pricing */}
                <motion.li variants={itemVariant}>
                  <NavLink to="/pricing" onClick={() => onCloseRef.current()} className={linkCls}>
                    Pricing
                  </NavLink>
                </motion.li>

                {/* About */}
                <motion.li variants={itemVariant}>
                  <NavLink to="/about" onClick={() => onCloseRef.current()} className={linkCls}>
                    About
                  </NavLink>
                </motion.li>

                {/* Blog */}
                <motion.li variants={itemVariant}>
                  <NavLink to="/blog" onClick={() => onCloseRef.current()} className={linkCls}>
                    Blog
                  </NavLink>
                </motion.li>
              </motion.ul>
            </nav>

            {/* Get Started — full-width CTA */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.32 }}
              className="px-5 py-4"
            >
              <Link
                to={primaryCta.href}
                onClick={() => onCloseRef.current()}
                className="flex items-center justify-center gap-2 w-full bg-canopy text-mist font-semibold py-3 rounded-sm hover:bg-field transition-colors"
              >
                {primaryCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
