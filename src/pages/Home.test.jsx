import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import Home from './Home'

function render() {
  return renderToString(
    <StaticRouter location="/">
      <Home />
    </StaticRouter>
  )
}

describe('FTW-015 — Free-for-Ecosystem band', () => {
  it('renders the Rs 0 badge', () => {
    const html = render()
    expect(html).toContain('Rs')
    expect(html).toContain('aria-label="Rs 0 — free for all ecosystem roles"')
  })

  it('renders the Zero-Cost Ecosystem Access eyebrow', () => {
    const html = render()
    expect(html).toContain('Zero-Cost Ecosystem Access')
  })

  it('renders a FREE label for every ecosystem role', () => {
    const html = render()
    // 7 roles × one FREE label each
    const count = (html.match(/\bFREE\b/g) ?? []).length
    expect(count).toBe(7)
  })

  it('renders all seven ecosystem role names', () => {
    const html = render()
    expect(html).toContain('Farmer')
    expect(html).toContain('Field Manager')
    expect(html).toContain('Transport Operator')
    expect(html).toContain('Buyer')
    expect(html).toContain('Input Supplier')
    expect(html).toContain('Equipment Provider')
    expect(html).toContain('Investor')
  })

  it('renders the closing subscription copy', () => {
    const html = render()
    expect(html).toContain('subscription')
    expect(html).toContain('ecosystem')
  })
})
