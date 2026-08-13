import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Legal from './Legal'

function render(page) {
  return renderToString(
    <StaticRouter location={`/legal/${page}`}>
      <Routes>
        <Route path="/legal/:page" element={<Legal />} />
      </Routes>
    </StaticRouter>
  )
}

describe('FTW-038 — Cookie Policy in Legal.jsx', () => {
  it('routes /legal/cookies to Cookie Policy heading', () => {
    const html = render('cookies')
    expect(html).toContain('Cookie Policy')
  })

  it('renders the Essential storage section', () => {
    const html = render('cookies')
    expect(html).toContain('Essential storage')
    expect(html).toContain('farmtally_consent')
  })

  it('renders the Analytics section', () => {
    const html = render('cookies')
    expect(html).toContain('Analytics')
    expect(html).toContain('privacy-respecting analytics')
  })

  it('renders the Marketing section stating no trackers', () => {
    const html = render('cookies')
    expect(html).toContain('Marketing')
    expect(html).toContain('No marketing')
  })

  it('renders consent withdrawal instructions', () => {
    const html = render('cookies')
    expect(html).toContain('Withdrawing consent')
    expect(html).toContain('farmtally_consent')
  })
})
