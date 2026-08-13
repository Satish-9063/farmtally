import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import SolutionPageTemplate from './SolutionPageTemplate'

const MOCK = {
  h1: 'Locked heading copy here',
  painPoint: 'The pain point paragraph text.',
  feature: 'The feature paragraph text.',
  proofPoint: 'The proof point paragraph text.',
  cta: { label: 'Request Early Access', href: '/demo?intent=early-access' },
  image: { src: '/images/solutions/test.jpg', alt: 'Test image alt text', width: 900, height: 1200 },
}

function render(overrides = {}) {
  return renderToString(
    <StaticRouter location="/solutions/test">
      <SolutionPageTemplate {...MOCK} {...overrides} />
    </StaticRouter>
  )
}

describe('FTW-043 — SolutionPageTemplate', () => {
  it('renders the h1', () => {
    expect(render()).toContain('Locked heading copy here')
  })

  it('renders the pain point copy', () => {
    expect(render()).toContain('The pain point paragraph text.')
  })

  it('renders the feature copy', () => {
    expect(render()).toContain('The feature paragraph text.')
  })

  it('renders the proof point copy', () => {
    expect(render()).toContain('The proof point paragraph text.')
  })

  it('renders the CTA link with correct href', () => {
    expect(render()).toContain('/demo?intent=early-access')
  })

  it('renders the CTA label', () => {
    expect(render()).toContain('Request Early Access')
  })

  it('renders the role photo with correct src', () => {
    expect(render()).toContain('/images/solutions/test.jpg')
  })

  it('renders the role photo with correct alt text', () => {
    expect(render()).toContain('Test image alt text')
  })

  it('renders a custom CTA when passed', () => {
    const html = render({ cta: { label: 'Talk to Our Team', href: '/investor-relations' } })
    expect(html).toContain('Talk to Our Team')
    expect(html).toContain('/investor-relations')
    expect(html).not.toContain('Request Early Access')
  })
})
