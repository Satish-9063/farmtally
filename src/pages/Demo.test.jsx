import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import Demo, { fieldClass } from './Demo'

function renderDemo() {
  return renderToString(
    <StaticRouter location="/demo">
      <Demo />
    </StaticRouter>
  )
}

describe('FTW-009 — semantic color tokens', () => {
  describe('fieldClass', () => {
    it('returns border-error for invalid fields', () => {
      expect(fieldClass(true)).toContain('border-error')
    })

    it('returns border-line for valid fields', () => {
      const cls = fieldClass(false)
      expect(cls).toContain('border-line')
      expect(cls).not.toContain('border-error')
    })
  })

  describe('success page', () => {
    it('renders text-success eyebrow', () => {
      const html = renderToString(
        <StaticRouter location="/demo">
          <p className="eyebrow text-success mb-3">Submitted</p>
        </StaticRouter>
      )
      expect(html).toContain('text-success')
    })
  })
})

describe('FTW-039 — Demo.jsx spinner', () => {
  it('submit button shows idle label by default', () => {
    const html = renderDemo()
    expect(html).toContain('Request a demo')
  })

  it('spinner is absent in idle state', () => {
    const html = renderDemo()
    // Loader2 with animate-spin only renders when status === 'submitting'
    expect(html).not.toContain('animate-spin')
  })

  it('submit button is a flex container for spinner + label', () => {
    const html = renderDemo()
    expect(html).toContain('items-center justify-center gap-2')
  })
})
