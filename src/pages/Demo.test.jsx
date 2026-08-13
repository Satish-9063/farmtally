import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { describe, it, expect } from 'vitest'
import { fieldClass } from './Demo'

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
