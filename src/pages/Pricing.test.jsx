import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import Pricing from './Pricing'

function render() {
  return renderToString(
    <StaticRouter location="/pricing">
      <Pricing />
    </StaticRouter>
  )
}

describe('FTW-038 — Pricing FAQ wording', () => {
  it('data-access answer does not name the company directly', () => {
    const html = render()
    // "Who else can see my data?" answer must not name Sariki Technologies
    expect(html).not.toContain('Sariki Technologies')
  })

  it('data-access answer retains the isolated-tenant guarantee', () => {
    const html = render()
    expect(html).toContain('isolated tenant')
  })
})
