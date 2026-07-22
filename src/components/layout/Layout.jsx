import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ConsentBanner from './ConsentBanner'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  )
}
