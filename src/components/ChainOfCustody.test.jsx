import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import ChainOfCustody from './ChainOfCustody'

function render(props = {}) {
  return renderToString(
    <StaticRouter location="/how-it-works">
      <ChainOfCustody {...props} />
    </StaticRouter>
  )
}

describe('FTW-022 — ChainOfCustody detailed prop', () => {
  it('compact (default): wraps stages in a link to /how-it-works', () => {
    const html = render()
    expect(html).toContain('href="/how-it-works"')
  })

  it('detailed: does not render a navigable link', () => {
    const html = render({ detailed: true })
    expect(html).not.toContain('href="/how-it-works"')
  })

  it('detailed: renders role tags for all six stages', () => {
    const html = render({ detailed: true })
    expect(html).toContain('Business Owner')
    expect(html).toContain('Farmer')
    expect(html).toContain('Field Manager')
    expect(html).toContain('Transport Operator')
    expect(html).toContain('Buyer')
  })

  it('detailed: renders evidence lines with key domain terms', () => {
    const html = render({ detailed: true })
    expect(html).toContain('GPS')
    expect(html).toContain('moisture')
    expect(html).toContain('Ledger')
  })

  it('detailed: wires all six stage images from /images/how-it-works/chain/', () => {
    const html = render({ detailed: true })
    ;['intent', 'pickup', 'farmgate', 'transit', 'warehouse', 'settlement'].forEach((slug) => {
      expect(html).toContain(`/images/how-it-works/chain/${slug}.jpg`)
    })
  })

  it('detailed: renders all six stage names', () => {
    const html = render({ detailed: true })
    ;['Intent', 'Pickup', 'Farm Gate Evidence', 'Transit', 'Warehouse Verification', 'Settlement'].forEach(
      (name) => expect(html).toContain(name)
    )
  })
})
