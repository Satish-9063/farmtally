// CTA STATE CONVENTION (MKT-WEB-01, Section 0):
// State A (pre-FIX-F9): "Request Early Access" -> Demo Request form.
// State B (post-FIX-F9): "Start Free Trial" -> TECH-MT-05 signup with planTier param.
//
// Do NOT flip this to 'B' until FIX-F9 has closed and OQ-15 (trial duration)
// has a decision record from Prasad Sariki.
export const CTA_STATE = 'A' // 'A' | 'B'

export const primaryCta = {
  label: CTA_STATE === 'A' ? 'Request Early Access' : 'Start Free Trial',
  href: CTA_STATE === 'A' ? '/demo?intent=early-access' : '/demo',
}

export const secondaryCta = {
  label: 'Book a Demo',
  href: '/demo',
}

// OQ-15 is a blocked token — trial duration is not invented here.
export const TRIAL_TOKEN = '⟦OQ-15: trial duration⟧'
