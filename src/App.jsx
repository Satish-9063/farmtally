import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Solutions from './pages/Solutions'
import BusinessOwner from './pages/solutions/BusinessOwner'
import Farmer from './pages/solutions/Farmer'
import Buyer from './pages/solutions/Buyer'
import Investor from './pages/solutions/Investor'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'
import About from './pages/About'
import Blog from './pages/Blog'
import Legal from './pages/Legal'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions/business-owner" element={<BusinessOwner />} />
        <Route path="/solutions/farmer" element={<Farmer />} />
        <Route path="/solutions/buyer" element={<Buyer />} />
        <Route path="/solutions/investor" element={<Investor />} />
        <Route path="/solutions/:role" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/legal/:page" element={<Legal />} />
      </Route>
    </Routes>
  )
}

export default App
