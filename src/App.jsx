import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileNav from './components/MobileNav'

export default function App() {
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
