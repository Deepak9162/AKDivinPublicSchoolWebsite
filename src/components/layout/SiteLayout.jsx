import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import TopBar from './TopBar'
import ScrollToTop from './ScrollToTop'
import ScrollRevealManager from '../ui/ScrollRevealManager'
import BackToTop from '../ui/BackToTop'
import SiteIntro from '../ui/SiteIntro'

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <SiteIntro />
      <ScrollToTop />
      <ScrollRevealManager />
      <BackToTop />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <TopBar />
      <Navbar />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
