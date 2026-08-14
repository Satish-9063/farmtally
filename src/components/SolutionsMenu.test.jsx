import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import SolutionsMenu from './SolutionsMenu'
import { SOLUTIONS_ROLES } from '../config/solutions'

function render() {
  return renderToString(
    <StaticRouter location="/">
      <SolutionsMenu />
    </StaticRouter>
  )
}

describe('FTW-043 — SolutionsMenu', () => {
  it('renders the Solutions trigger button', () => {
    const html = render()
    expect(html).toContain('Solutions')
  })

  it('trigger declares aria-haspopup="menu"', () => {
    const html = render()
    expect(html).toContain('aria-haspopup="menu"')
  })

  it('trigger is collapsed (aria-expanded=false) on initial render', () => {
    const html = render()
    expect(html).toContain('aria-expanded="false"')
  })

  it('dropdown panel is absent in closed state', () => {
    const html = render()
    expect(html).not.toContain('role="menu"')
    expect(html).not.toContain('Solutions by role')
  })

  it('SOLUTIONS_ROLES list has exactly 8 entries (ADR-006)', () => {
    expect(SOLUTIONS_ROLES).toHaveLength(8)
  })

  it('SOLUTIONS_ROLES slugs include all eight canonical roles', () => {
    const slugs = SOLUTIONS_ROLES.map((r) => r.slug)
    expect(slugs).toContain('business-owner')
    expect(slugs).toContain('farmer')
    expect(slugs).toContain('field-manager')
    expect(slugs).toContain('transport-operator')
    expect(slugs).toContain('buyer')
    expect(slugs).toContain('input-supplier')
    expect(slugs).toContain('equipment-provider')
    expect(slugs).toContain('investor')
  })
})
