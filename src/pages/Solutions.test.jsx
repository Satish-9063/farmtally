import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Solutions from './Solutions'

function render(path) {
  return renderToString(
    <StaticRouter location={path}>
      <Routes>
        <Route path="/solutions/:role" element={<Solutions />} />
      </Routes>
    </StaticRouter>
  )
}

describe('FTW-028 — Transport Operator Solutions page', () => {
  it('renders the locked H1 for /solutions/transport-operator', () => {
    const html = render('/solutions/transport-operator')
    expect(html).toContain('Deliver with a record, not just a memory')
  })

  it('renders the role eyebrow', () => {
    const html = render('/solutions/transport-operator')
    expect(html).toContain('Solutions · Transport Operator')
  })

  it('wires the role photo from /images/solutions/', () => {
    const html = render('/solutions/transport-operator')
    expect(html).toContain('/images/solutions/transport-operator.jpg')
  })

  it('renders all three value proposition headings', () => {
    const html = render('/solutions/transport-operator')
    expect(html).toContain('Your load, locked at source')
    expect(html).toContain('Route logged, delays documented')
    expect(html).toContain('Settled on data, not disputes')
  })

  it('falls back to PageStub for unbuilt roles', () => {
    const html = render('/solutions/farmer')
    expect(html).toContain('FTW-010')
    expect(html).not.toContain('Deliver with a record')
  })
})
