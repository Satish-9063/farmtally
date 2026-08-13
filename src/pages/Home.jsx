import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Leaf, ClipboardList, Truck, ShoppingCart, Package, Wrench, TrendingUp,
} from 'lucide-react'
import { primaryCta, secondaryCta } from '../config/cta'
import Logo from '../components/Logo'
import ChainOfCustody from '../components/ChainOfCustody'
import CTABand from '../components/CTABand'

const painCards = [
  {
    title: 'Procurement leakage',
    copy: 'Weight and grade recorded at the field rarely match what arrives. Without evidence, every dispute is your word against theirs.',
  },
  {
    title: 'Settlement chaos',
    copy: 'Advances, deductions, moisture cuts, and transport charges reconciled by hand mean errors, arguments, and delayed farmer payouts.',
  },
  {
    title: 'Zero audit trail',
    copy: "When an investor or bank asks for records, a stack of registers isn't finance-ready proof.",
  },
]

const pillars = [
  {
    title: "Records that can't be rewritten",
    copy: 'Once a weighment, grade, or settlement is finalised, it is permanent. Corrections are added as new entries — the original never disappears.',
  },
  {
    title: 'Prices locked at the handshake',
    copy: 'The moment a farmer agrees, the price is locked to the millisecond — cryptographically. No quiet revisions after the lorry leaves.',
  },
  {
    title: 'Settlements computed, not negotiated',
    copy: 'Net payout is calculated automatically from recorded weight, grade, moisture, advances, and deductions. No one can manually override it.',
  },
  {
    title: "Works where the network doesn't",
    copy: 'Field operators capture weights, moisture, and GPS-tagged photos fully offline. Everything syncs within seconds of the signal returning.',
  },
]

// ADR-006 canonical role list minus Business Owner (who pays).
// All ecosystem members access FarmTally at Rs 0 (ADR-004).
const ECOSYSTEM_ROLES = [
  { label: 'Farmer',             Icon: Leaf },
  { label: 'Field Manager',      Icon: ClipboardList },
  { label: 'Transport Operator', Icon: Truck },
  { label: 'Buyer',              Icon: ShoppingCart },
  { label: 'Input Supplier',     Icon: Package },
  { label: 'Equipment Provider', Icon: Wrench },
  { label: 'Investor',           Icon: TrendingUp },
]

export default function Home() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* HERO — mist */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="badge bg-grain/20 text-grain-deep border border-grain/40">
          <Logo className="w-3.5 h-3.5" />
          Agri Procurement · Logistics · Services · Settlement
        </span>
        <h1 className="font-display text-4xl md:text-6xl mt-6 leading-[1.08] text-canopy max-w-4xl mx-auto">
          The settlement layer for agri-procurement.
        </h1>
        <p className="mt-6 text-ink/70 text-lg max-w-2xl mx-auto leading-relaxed">
          FarmTally unifies agri-procurement operations and agri-fintech infrastructure —
          GPS-tagged evidence, tamper-proof records, and automated settlements that turn every
          transaction into finance-ready data your accountant, your investors, and your farmers
          can all trust.
        </p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <Link
            to={primaryCta.href}
            className="bg-field text-mist font-medium px-6 py-3 rounded-sm hover:bg-canopy transition-colors"
          >
            {primaryCta.label}
          </Link>
          <Link
            to={secondaryCta.href}
            className="text-soil font-medium px-6 py-3 rounded-sm border border-soil/40 hover:bg-soil/5 transition-colors"
          >
            {secondaryCta.label}
          </Link>
        </div>
        <p className="mt-5 font-mono text-[13px] text-ink/45">
          Built for agri-procurement businesses in Andhra Pradesh and across India.
        </p>
        <div className="mt-12 rounded-sm overflow-hidden border border-line">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Agri-procurement operations on the ground"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* PROBLEM — soil-deep band (the brown, per your reference) */}
      <section className="bg-soil-deep text-mist">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl">
            You know exactly where your paddy leaks. You just can't prove it.
          </h2>
          <p className="mt-5 text-mist/70 max-w-2xl leading-relaxed">
            Between the farm gate and your warehouse, weight goes missing, grades change on
            paper, advances get double-counted, and settlement disputes drag on for weeks.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {painCards.map((c) => (
              <div key={c.title} className="rounded-sm p-6 bg-mist/8 border border-mist/15">
                <div className="font-display text-lg text-grain-light">{c.title}</div>
                <p className="mt-2 text-[14.5px] text-mist/75 leading-relaxed">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION / CHAIN OF CUSTODY — mist */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl text-canopy max-w-2xl">
            One unbroken digital record — from intent to settlement.
          </h2>
          <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">
            FarmTally runs your procurement as a controlled, step-by-step workflow. No stage
            advances without the required approval, GPS-tagged photo evidence, and a locked
            record.
          </p>
          <div className="mt-10">
            <ChainOfCustody />
          </div>
          <Link to="/how-it-works" className="mt-6 inline-block text-field font-medium hover:underline">
            See how it works →
          </Link>
        </div>
      </section>

      {/* TRUST BADGES — mist-dark, mixed pill colors */}
      <section className="hairline bg-mist-dark">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-center gap-3">
          <span className="badge bg-field/15 text-field border border-field/30">
            Hosted on Google Cloud, Mumbai region
          </span>
          <span className="badge bg-grain/20 text-grain-deep border border-grain/40">
            DPDPA-compliant — Aadhaar encrypted at rest
          </span>
          <span className="badge bg-soil/10 text-soil border border-soil/30">
            Append-only financial ledger
          </span>
          <span className="badge bg-canopy/10 text-canopy border border-canopy/30">
            Fully isolated per business — no cross-account data access
          </span>
        </div>
      </section>

      {/* TRUST PILLARS — canopy-deep band */}
      <section className="bg-canopy-deep text-mist">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="p-6 rounded-sm bg-mist/8 border border-mist/15">
                <div className="font-display text-xl text-grain-light">{p.title}</div>
                <p className="mt-2 text-[14.5px] text-mist/75 leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE STRIP — mist */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-canopy">
            One platform. Your entire procurement ecosystem.
          </h2>
          <p className="mt-5 text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Your staff, field operators, transport operators, buyers, and investors each get a
            purpose-built view — while your farmers get complete transparency into every rupee.
          </p>
          <Link to="/features" className="mt-5 inline-block text-field font-medium hover:underline">
            Explore features by role →
          </Link>
        </div>
      </section>

      {/* FREE-FOR-ECOSYSTEM — canopy band (Zero-Cost Ecosystem Access, ADR-004) */}
      <section className="bg-canopy text-mist">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="eyebrow text-grain-light mb-10">Zero-Cost Ecosystem Access</p>

          {/* Rs 0 badge — Type B subtle pulse (scale) */}
          <motion.div
            role="img"
            aria-label="Rs 0 — free for all ecosystem roles"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.04, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            className="inline-flex items-end gap-2 mb-4"
          >
            <span className="font-mono text-2xl text-mist/40 mb-5 leading-none select-none">
              Rs
            </span>
            <span className="font-display text-[9rem] md:text-[11rem] leading-none text-grain-light">
              0
            </span>
          </motion.div>

          <p className="eyebrow text-mist/40 mb-14">per ecosystem member · per month · forever</p>

          {/* Role icons — all SOLUTIONS_ROLES except Business Owner */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 mb-16">
            {ECOSYSTEM_ROLES.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 w-24">
                <div className="w-14 h-14 rounded-full bg-mist/10 border border-mist/15 flex items-center justify-center">
                  <Icon size={24} className="text-grain-light" aria-hidden="true" />
                </div>
                <span className="font-mono text-[10px] font-bold text-grain tracking-widest">
                  FREE
                </span>
                <span className="text-[12.5px] text-mist/65 leading-tight text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Closing line — SOW Phase 6 Step 5 */}
          <p className="max-w-2xl mx-auto text-[16.5px] text-mist/75 leading-relaxed">
            Every farmer, field team, transporter, buyer, and service partner in your network
            joins FarmTally at no cost. Your subscription funds the entire procurement
            ecosystem — not just your own seat at the table.
          </p>
        </div>
      </section>

      {/* INVESTOR BAND — bg-inverse, Type C fade/slide (ADR-010) */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-inverse text-mist"
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="eyebrow text-grain-light mb-4">For Investors</p>
          <h2 className="font-display text-3xl md:text-4xl">
            Every claim in this pitch is backed by a record, not a promise.
          </h2>
          <p className="mt-5 text-mist/70 max-w-2xl mx-auto leading-relaxed">
            Append-only ledgers, GPS-tagged evidence, and tamper-proof settlements give you the
            same audit trail your diligence team would build from scratch — already running in
            production.
          </p>
          <Link
            to="/investor-relations"
            className="mt-9 inline-block bg-field text-mist font-medium px-6 py-3 rounded-sm hover:bg-canopy transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </motion.section>

      <CTABand />
    </>
  )
}
