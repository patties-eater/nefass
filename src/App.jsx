import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileNav from './components/MobileNav'

import { Navigate, Route, Routes } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <FeaturedProducts />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />

      {/* Fallback: redirect any unknown route to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

