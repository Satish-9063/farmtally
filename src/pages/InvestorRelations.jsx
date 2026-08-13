import { useState } from 'react'
import { Link } from 'react-router-dom'

// Mirrors Demo.jsx's field styling exactly.
function fieldClass(error) {
  return [
    'w-full border rounded-sm px-4 py-2.5 text-[15px] bg-mist text-ink placeholder:text-ink/35',
    'focus:outline-none focus:ring-2 focus:ring-field transition-colors',
    error ? 'border-error' : 'border-line',
  ].join(' ')
}

const EMPTY = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
}

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Required'
  if (!f.organization.trim()) e.organization = 'Required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email address'
  // Phone is optional — only validate format if the user has typed something.
  if (f.phone.trim() && !/^[6-9]\d{9}$/.test(f.phone.trim())) {
    e.phone = 'Enter a valid 10-digit Indian mobile number, or leave blank'
  }
  return e
}

export default function InvestorRelations() {
  const [fields, setFields] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | offline

  function set(key, value) {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    if (!navigator.onLine) { setStatus('offline'); return }
    setStatus('submitting')
    // Placeholder: replace with real IR submission endpoint.
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <main className="bg-mist">
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-success mb-3">Received</p>
          <p className="font-display text-3xl text-canopy-deep leading-snug">
            Thank you. Our team will be in touch within two working days.
          </p>
          <p className="mt-6 text-[15px] text-ink/60">
            While you wait, see what the platform provides for your due-diligence review.
          </p>
          <Link
            to="/solutions/investor"
            className="inline-block mt-6 bg-canopy text-mist font-semibold px-6 py-3 rounded-sm hover:bg-canopy-deep transition-colors"
          >
            Investor features →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-mist">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">Investor Relations</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          Start an investor conversation.
        </h1>
        <p className="mt-4 text-[17px] text-ink/70">
          Tell us who you are. Our team will follow up within two working days to discuss
          how FarmTally fits your investment or financing thesis.
        </p>

        {status === 'offline' && (
          <div className="mt-8 border-l-4 border-error bg-error/10 px-5 py-4 rounded-sm">
            <p className="font-mono text-[13px] text-error">
              You appear to be offline. Your details are safe in this form — reconnect and
              press Send again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-10 flex flex-col gap-6">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Full name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              value={fields.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your name"
              className={fieldClass(errors.name)}
            />
            {errors.name && <p className="text-[12px] text-error">{errors.name}</p>}
          </div>

          {/* Organization */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Organization <span className="text-error">*</span>
            </label>
            <input
              type="text"
              value={fields.organization}
              onChange={(e) => set('organization', e.target.value)}
              placeholder="Fund, institution, or company name"
              className={fieldClass(errors.organization)}
            />
            {errors.organization && <p className="text-[12px] text-error">{errors.organization}</p>}
          </div>

          {/* Email + Phone side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                value={fields.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@fund.com"
                className={fieldClass(errors.email)}
              />
              {errors.email && <p className="text-[12px] text-error">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                Phone{' '}
                <span className="text-ink/40 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                value={fields.phone}
                onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile"
                className={fieldClass(errors.phone)}
              />
              {errors.phone && <p className="text-[12px] text-error">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Message{' '}
              <span className="text-ink/40 font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              value={fields.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder="Your investment thesis, the stage you focus on, specific questions about the platform…"
              className={fieldClass(false) + ' resize-y'}
            />
          </div>

          {/* Consent */}
          <div className="flex gap-3 items-start">
            <input
              id="ir-consent"
              type="checkbox"
              checked={fields.consent}
              onChange={(e) => set('consent', e.target.checked)}
              className="mt-1 w-4 h-4 shrink-0 accent-field cursor-pointer"
            />
            <label htmlFor="ir-consent" className="text-[13px] text-ink/65 leading-relaxed cursor-pointer">
              I agree that Sariki Technologies Pvt Ltd may use the details above to contact me
              regarding investment and financing discussions about FarmTally. My details will be
              used only for this purpose, will not be sold or shared with third parties, and will
              be deleted on request. See our{' '}
              <Link to="/legal/privacy" className="underline text-field hover:text-canopy">
                Privacy Notice
              </Link>{' '}
              for how to withdraw consent or reach our Grievance Officer.
            </label>
          </div>

          <button
            type="submit"
            disabled={!fields.consent || status === 'submitting'}
            className="mt-2 w-full bg-canopy text-mist font-semibold py-3 rounded-sm transition-colors hover:bg-canopy-deep disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
          </button>

        </form>
      </div>
    </main>
  )
}
