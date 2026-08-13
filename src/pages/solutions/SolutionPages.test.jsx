import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import BusinessOwner from './BusinessOwner'
import Farmer from './Farmer'
import FieldManager from './FieldManager'
import Buyer from './Buyer'
import InputSupplier from './InputSupplier'
import Investor from './Investor'

function render(Component) {
  return renderToString(
    <StaticRouter location="/solutions/test">
      <Component />
    </StaticRouter>
  )
}

// ── Business Owner ──────────────────────────────────────────────────────────

describe('FTW-043 — Business Owner Solutions page', () => {
  it('renders the locked H1', () => {
    expect(render(BusinessOwner)).toContain('One console for the entire procurement chain')
  })

  it('wires the role photo', () => {
    expect(render(BusinessOwner)).toContain('/images/solutions/business-owner.jpg')
  })

  it('renders the standard primaryCta', () => {
    const html = render(BusinessOwner)
    expect(html).toContain('Request Early Access')
    expect(html).toContain('/demo?intent=early-access')
  })
})

// ── Farmer ───────────────────────────────────────────────────────────────────

describe('FTW-043 — Farmer Solutions page', () => {
  it('renders the locked H1', () => {
    expect(render(Farmer)).toContain('Every kilogram counted. Every rupee traceable.')
  })

  it('wires the role photo', () => {
    expect(render(Farmer)).toContain('/images/solutions/farmer.jpg')
  })

  it('references the locked-price guarantee in copy', () => {
    expect(render(Farmer)).toContain('cryptographically')
  })
})

// ── Field Manager ─────────────────────────────────────────────────────────────

describe('FTW-043 — Field Manager Solutions page', () => {
  it('renders the locked H1', () => {
    expect(render(FieldManager)).toContain('Capture evidence that never gets disputed')
  })

  it('wires the role photo', () => {
    expect(render(FieldManager)).toContain('/images/solutions/field-manager.jpg')
  })

  it('mentions GPS-tagged evidence in copy', () => {
    expect(render(FieldManager)).toContain('GPS-tagged')
  })
})

// ── Buyer ─────────────────────────────────────────────────────────────────────

describe('FTW-043 — Buyer Solutions page', () => {
  it('renders the locked H1', () => {
    expect(render(Buyer)).toContain('Verify what arrives against what actually left')
  })

  it('wires the role photo', () => {
    expect(render(Buyer)).toContain('/images/solutions/buyer.jpg')
  })

  it('references the 2%+ mismatch-freeze behaviour in copy', () => {
    expect(render(Buyer)).toContain('2%+')
  })

  it('references auto-default to farm-gate figures in copy', () => {
    expect(render(Buyer)).toContain('farm-gate figures')
  })
})

// ── Input Supplier ────────────────────────────────────────────────────────────

describe('FTW-043 — Input Supplier Solutions page', () => {
  it('renders the locked H1', () => {
    expect(render(InputSupplier)).toContain('Fulfil approved orders, get paid without the chase')
  })

  it('wires the role photo', () => {
    expect(render(InputSupplier)).toContain('/images/solutions/input-supplier.jpg')
  })

  it('references automatic payment trigger in copy', () => {
    expect(render(InputSupplier)).toContain('payment triggers automatically')
  })
})

// ── Investor ─────────────────────────────────────────────────────────────────

describe('FTW-043 — Investor Solutions page (ADR-010 CTA)', () => {
  it('renders the locked H1', () => {
    expect(render(Investor)).toContain('The records a financing decision can actually rely on.')
  })

  it('wires the role photo', () => {
    expect(render(Investor)).toContain('/images/solutions/investor.jpg')
  })

  it('uses the investor-specific CTA "Talk to Our Team"', () => {
    expect(render(Investor)).toContain('Talk to Our Team')
  })

  it('CTA links to /investor-relations, not the standard demo href', () => {
    const html = render(Investor)
    expect(html).toContain('/investor-relations')
    expect(html).not.toContain('/demo?intent=early-access')
  })

  it('references the append-only ledger in copy', () => {
    expect(render(Investor)).toContain('append-only')
  })
})
