import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className="bg-canopy text-mist/90 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl mb-3">
            <Logo tone="reversed" />
            FarmTally
          </div>
          <p className="text-mist/70 text-[15px] max-w-sm">
            Every kilogram accounted for, every rupee traceable.
          </p>
        </div>

        <div>
          <div className="eyebrow text-mist/50 mb-3">Product</div>
          <ul className="space-y-2 text-[14.5px] text-mist/80">
            <li><Link to="/how-it-works" className="hover:text-mist">How It Works</Link></li>
            <li><Link to="/features" className="hover:text-mist">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-mist">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-mist">Resources</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-mist/50 mb-3">Company</div>
          <ul className="space-y-2 text-[14.5px] text-mist/80">
            <li>
              <a href="https://sarikitechnologies.com" className="hover:text-mist">
                About Sariki Technologies
              </a>
            </li>
            <li><Link to="/demo" className="hover:text-mist">Contact</Link></li>
            <li className="text-mist/50">Careers (sarikitechnologies.com)</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-mist/50 mb-3">Legal</div>
          <ul className="space-y-2 text-[14.5px] text-mist/80">
            <li><Link to="/legal/privacy" className="hover:text-mist">Privacy Notice</Link></li>
            <li><Link to="/legal/terms" className="hover:text-mist">Terms of Service</Link></li>
            <li><Link to="/legal/refunds" className="hover:text-mist">Refund &amp; Cancellation Policy</Link></li>
            <li><Link to="/legal/grievance" className="hover:text-mist">Grievance Officer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist/15">
        <div className="max-w-6xl mx-auto px-6 py-5 text-[12.5px] text-mist/50">
          © 2026 Sariki Technologies Pvt Ltd, Visakhapatnam, Andhra Pradesh. FarmTally is a
          product of Sariki Technologies. Built and hosted in India. DPDPA-compliant.
        </div>
      </div>
    </footer>
  )
}
