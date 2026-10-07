import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
