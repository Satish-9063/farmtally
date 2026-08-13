import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const STORAGE_KEY = 'farmtally_consent'

// Slide variants — Type B (translateY) + Type A (opacity).
// Reduced-motion: fade only, no positional shift.
function useVariants(prefersReduced) {
  if (prefersReduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit:    { opacity: 0 },
      transition: { duration: 0.15 },
    }
  }
  return {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0,      opacity: 1 },
    exit:    { y: '100%', opacity: 0 },
    transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
  }
}

export default function ConsentBanner() {
  const [choice, setChoice] = useState(null)
  const prefersReduced = useReducedMotion()
  const variants = useVariants(prefersReduced)

  useEffect(() => {
    setChoice(localStorage.getItem(STORAGE_KEY))
  }, [])

  const decide = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setChoice(value)
  }

  return (
    <AnimatePresence>
      {!choice && (
        <motion.div
          key="consent-banner"
          role="dialog"
          aria-label="Cookie and analytics consent"
          className="fixed bottom-0 inset-x-0 z-50 bg-canopy text-mist border-t border-mist/15"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={variants.transition}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-[14px] text-mist/85 max-w-2xl">
              We use privacy-respecting analytics to understand how visitors use this site. Nothing
              loads until you choose. Your choice does not affect anything on this website.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/legal/privacy" className="text-[13px] text-mist/60 hover:text-mist underline">
                Privacy Notice
              </Link>
              <button
                onClick={() => decide('declined')}
                className="text-[14px] font-medium px-4 py-2 rounded-sm border border-mist/40 hover:bg-mist/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => decide('allowed')}
                className="text-[14px] font-medium px-4 py-2 rounded-sm bg-grain text-canopy hover:brightness-95 transition-colors"
              >
                Allow analytics
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
