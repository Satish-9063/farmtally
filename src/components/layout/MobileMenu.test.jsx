import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect, vi } from 'vitest'
import { primaryCta } from '../../config/cta'
import MobileMenu from './MobileMenu'

function render(props) {
  return renderToString(
    <StaticRouter location="/">
      <MobileMenu {...props} />
    </StaticRouter>
  )
}

describe('FTW-012 — MobileMenu', () => {
  it('renders nothing when closed', () => {
    const html = render({ open: false, onClose: vi.fn() })
    expect(html).not.toContain('/how-it-works')
    expect(html).not.toContain('Navigation menu')
  })

  it('renders flat nav links when open', () => {
    const html = render({ open: true, onClose: vi.fn() })
    expect(html).toContain('/how-it-works')
    expect(html).toContain('/pricing')
    expect(html).toContain('/about')
    expect(html).toContain('/blog')
  })

  it('renders Solutions accordion trigger when open', () => {
    const html = render({ open: true, onClose: vi.fn() })
    expect(html).toContain('Solutions')
    expect(html).toContain('aria-expanded')
    expect(html).toContain('aria-controls="mobile-solutions-list"')
  })

  it('renders full-width Get Started CTA when open', () => {
    const html = render({ open: true, onClose: vi.fn() })
    expect(html).toContain('Request Early Access')
    expect(html).toContain(primaryCta.href)
  })

  it('panel carries dialog role and aria-modal when open', () => {
    const html = render({ open: true, onClose: vi.fn() })
    expect(html).toContain('role="dialog"')
    expect(html).toContain('aria-modal="true"')
    expect(html).toContain('aria-label="Navigation menu"')
  })
})
