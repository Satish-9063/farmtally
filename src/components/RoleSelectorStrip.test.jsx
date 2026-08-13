import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import RoleSelectorStrip from './RoleSelectorStrip'
import { SOLUTIONS_ROLES } from '../config/solutions'

describe('FTW-017 — Role Selector strip', () => {
  const html = renderToString(
    <StaticRouter location="/">
      <RoleSelectorStrip />
    </StaticRouter>
  )

  it('renders exactly 8 chips', () => {
    const matches = html.match(/<a /g) ?? []
    expect(matches.length).toBe(8)
  })

  it('links each chip directly to its /solutions/:role route', () => {
    for (const role of SOLUTIONS_ROLES) {
      expect(html).toContain(`href="/solutions/${role.slug}"`)
    }
  })

  it('renders each role label', () => {
    for (const role of SOLUTIONS_ROLES) {
      expect(html).toContain(role.label)
    }
  })

  it('contains no scroll-to-anchor code', () => {
    expect(html).not.toMatch(/#[a-z-]+"/)
    expect(html).not.toContain('scrollIntoView')
  })
})
