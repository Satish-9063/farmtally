import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import ConsentBanner from './ConsentBanner'

// Effects don't run in renderToString, so choice stays null — banner renders.
function render() {
  return renderToString(
    <StaticRouter location="/">
      <ConsentBanner />
    </StaticRouter>
  )
}

describe('FTW-039 — ConsentBanner animation structure', () => {
  it('renders the consent dialog in initial (no-choice) state', () => {
    const html = render()
    expect(html).toContain('role="dialog"')
    expect(html).toContain('Cookie and analytics consent')
  })

  it('renders Decline and Allow analytics buttons', () => {
    const html = render()
    expect(html).toContain('Decline')
    expect(html).toContain('Allow analytics')
  })

  it('links to the Privacy Notice', () => {
    const html = render()
    expect(html).toContain('/legal/privacy')
    expect(html).toContain('Privacy Notice')
  })
})
