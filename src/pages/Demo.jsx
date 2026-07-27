import { useState } from 'react'
import { Link } from 'react-router-dom'

const COMMODITIES = [
  'Paddy', 'Maize', 'Groundnut', 'Cotton', 'Sunflower',
  'Soybean', 'Jowar', 'Bajra', 'Turmeric', 'Chilli',
]

const STATES = [
  'Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Maharashtra',
  'Odisha', 'Madhya Pradesh', 'Chhattisgarh', 'Gujarat', 'Rajasthan',
  'Uttar Pradesh', 'Bihar', 'West Bengal', 'Punjab', 'Haryana', 'Other',
]

const EMPTY = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  state: 'Andhra Pradesh',
  district: '',
  commodities: [],
  message: '',
  consent: false,
}

function fieldClass(error) {
  return [
    'w-full border rounded-sm px-4 py-2.5 text-[15px] bg-mist text-ink placeholder:text-ink/35',
    'focus:outline-none focus:ring-2 focus:ring-field transition-colors',
    error ? 'border-soil' : 'border-line',
  ].join(' ')
}

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Required'
  if (!f.businessName.trim()) e.businessName = 'Required'
  if (!/^[6-9]\d{9}$/.test(f.phone.trim())) e.phone = 'Enter a valid 10-digit Indian mobile number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email address'
  if (!f.state) e.state = 'Required'
  if (!f.district.trim()) e.district = 'Required'
  return e
}

export default function Demo() {
  const [fields, setFields] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | offline

  function set(key, value) {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n })
  }

  function toggleCommodity(c) {
    setFields((f) => ({
      ...f,
      commodities: f.commodities.includes(c)
        ? f.commodities.filter((x) => x !== c)
        : [...f.commodities, c],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    if (!navigator.onLine) { setStatus('offline'); return }
    setStatus('submitting')
    // Placeholder: replace with real submission endpoint
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <main className="bg-mist">
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <p className="font-display text-3xl text-canopy-deep leading-snug">
            Thank you! Our team will call you within one working day.
          </p>
          <p className="mt-6 text-[15px] text-ink/60">
            While you wait, see exactly how FarmTally handles each procurement stage.
          </p>
          <Link
            to="/how-it-works"
            className="inline-block mt-6 bg-canopy text-mist font-semibold px-6 py-3 rounded-sm hover:bg-canopy-deep transition-colors"
          >
            How it works →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-mist">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <p className="eyebrow text-field mb-4">Book a demo</p>
        <h1 className="font-display text-4xl md:text-5xl text-canopy-deep leading-tight">
          See FarmTally on your own procurement.
        </h1>
        <p className="mt-4 text-[17px] text-ink/70">
          Book a 30-minute walkthrough with our team. Demos available in Telugu and English.
        </p>

        {status === 'offline' && (
          <div className="mt-8 border-l-4 border-soil bg-soil/10 px-5 py-4 rounded-sm">
            <p className="font-mono text-[13px] text-soil">
              You appear to be offline. Your details are safe in this form — reconnect and press
              Send again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-10 flex flex-col gap-6">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Full name <span className="text-soil">*</span>
            </label>
            <input
              type="text"
              value={fields.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your name"
              className={fieldClass(errors.name)}
            />
            {errors.name && <p className="text-[12px] text-soil">{errors.name}</p>}
          </div>

          {/* Business name */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Business name <span className="text-soil">*</span>
            </label>
            <input
              type="text"
              value={fields.businessName}
              onChange={(e) => set('businessName', e.target.value)}
              placeholder="Your business or trade name"
              className={fieldClass(errors.businessName)}
            />
            {errors.businessName && <p className="text-[12px] text-soil">{errors.businessName}</p>}
          </div>

          {/* Phone + Email side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                Mobile number <span className="text-soil">*</span>
              </label>
              <input
                type="tel"
                value={fields.phone}
                onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile"
                className={fieldClass(errors.phone)}
              />
              {errors.phone && <p className="text-[12px] text-soil">{errors.phone}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                Email <span className="text-soil">*</span>
              </label>
              <input
                type="email"
                value={fields.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@business.com"
                className={fieldClass(errors.email)}
              />
              {errors.email && <p className="text-[12px] text-soil">{errors.email}</p>}
            </div>
          </div>

          {/* State + District side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                State <span className="text-soil">*</span>
              </label>
              <select
                value={fields.state}
                onChange={(e) => set('state', e.target.value)}
                className={fieldClass(errors.state)}
              >
                {STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.state && <p className="text-[12px] text-soil">{errors.state}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-canopy">
                District <span className="text-soil">*</span>
              </label>
              <input
                type="text"
                value={fields.district}
                onChange={(e) => set('district', e.target.value)}
                placeholder="e.g. Srikakulam"
                className={fieldClass(errors.district)}
              />
              {errors.district && <p className="text-[12px] text-soil">{errors.district}</p>}
            </div>
          </div>

          {/* Commodity chips */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-canopy">
              Commodity focus <span className="text-ink/40 font-normal">(optional, select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {COMMODITIES.map((c) => {
                const active = fields.commodities.includes(c)
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCommodity(c)}
                    className={[
                      'px-3 py-1.5 rounded-sm text-[13px] font-medium border transition-colors',
                      active
                        ? 'bg-field text-mist border-field'
                        : 'bg-mist text-ink/70 border-line hover:border-field hover:text-field',
                    ].join(' ')}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-canopy">
              Anything you'd like us to know <span className="text-ink/40 font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              value={fields.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder="Your current process, volume, specific questions…"
              className={fieldClass(false) + ' resize-y'}
            />
          </div>

          {/* Consent */}
          <div className="flex gap-3 items-start">
            <input
              id="consent"
              type="checkbox"
              checked={fields.consent}
              onChange={(e) => set('consent', e.target.checked)}
              className="mt-1 w-4 h-4 shrink-0 accent-field cursor-pointer"
            />
            <label htmlFor="consent" className="text-[13px] text-ink/65 leading-relaxed cursor-pointer">
              I agree that Sariki Technologies Pvt Ltd may use the details above to contact me about
              FarmTally, including a product demonstration. My details will be used only for this
              purpose, will not be sold or shared with third parties, and will be deleted on request.
              See our{' '}
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
            {status === 'submitting' ? 'Sending…' : 'Request a demo'}
          </button>

        </form>
      </div>
    </main>
  )
}
