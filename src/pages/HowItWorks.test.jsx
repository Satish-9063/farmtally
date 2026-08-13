import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import HowItWorks from './HowItWorks'

function render() {
  return renderToString(
    <StaticRouter location="/how-it-works">
      <HowItWorks />
    </StaticRouter>
  )
}

describe('FTW-023 — intersecting-role callout', () => {
  it('renders the Input Supplier callout item', () => {
    const html = render()
    expect(html).toContain('Input Supplier')
    expect(html).toContain('before Intent is signed')
  })

  it('renders the Equipment Provider callout item', () => {
    const html = render()
    expect(html).toContain('Equipment Provider')
    expect(html).toContain('multiple stages')
  })

  it('renders the callout eyebrow', () => {
    const html = render()
    expect(html).toContain('Outside the linear chain')
  })

  it('callout appears after the ChainOfCustody strip', () => {
    const html = render()
    const chainIdx = html.indexOf('Settlement stage')
    const calloutIdx = html.indexOf('Outside the linear chain')
    expect(chainIdx).toBeGreaterThan(0)
    expect(calloutIdx).toBeGreaterThan(chainIdx)
  })
})
