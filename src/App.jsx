import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileNav from './components/MobileNav'

import SEO from './seo/SEO'

import { Navigate, Route, Routes } from 'react-router-dom'

function Shell({ children }) {
  return (
    <>
      <SEO />
      <Navbar />
      <a className="skip-link" href="#main-content" aria-label="Skip to main content">
        Skip to content
      </a>

      <main id="main-content" className="pb-16 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </>
  )
}



function HomePage() {
  return (
    <Shell>
      <Hero />
      <FeaturedProducts />
      <Products />
      <About />
      <Contact />
    </Shell>
  )
}


function ProductsPage() {
  return (
    <Shell>
      <Hero />
      <FeaturedProducts />
      <Products />
      <Contact />
    </Shell>
  )
}

function AboutPage() {
  return (
    <Shell>
      <Hero />
      <FeaturedProducts />
      <About />
      <Contact />
    </Shell>
  )
}

function ContactPage() {
  return (
    <Shell>
      <Hero />
      <Contact />
    </Shell>
  )
}

import FireExtinguishersPage from './pages/services/fire-extinguishers'
import FireAlarmSystemsPage from './pages/services/fire-alarm-systems'
import FireSuppressionSystemsPage from './pages/services/fire-suppression-systems'
import FireHydrantSystemsPage from './pages/services/fire-hydrant-systems'
import SmokeDetectorsPage from './pages/services/smoke-detectors'
import EmergencyLightsPage from './pages/services/emergency-lights'
import PpePersonalProtectiveEquipmentPage from './pages/services/ppe-personal-protective-equipment'
import FireSafetyConsultationPage from './pages/services/fire-safety-consultation'
import FireEquipmentInstallationPage from './pages/services/fire-equipment-installation'
import FireEquipmentMaintenancePage from './pages/services/fire-equipment-maintenance'
import AnnualMaintenanceContractsAcmPage from './pages/services/annual-maintenance-contracts-amc'
import FireSafetyTrainingPage from './pages/services/fire-safety-training'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/services/fire-extinguishers" element={<FireExtinguishersPage />} />
      <Route path="/services/fire-alarm-systems" element={<FireAlarmSystemsPage />} />
      <Route path="/services/fire-suppression-systems" element={<FireSuppressionSystemsPage />} />
      <Route path="/services/fire-hydrant-systems" element={<FireHydrantSystemsPage />} />
      <Route path="/services/smoke-detectors" element={<SmokeDetectorsPage />} />
      <Route path="/services/emergency-lights" element={<EmergencyLightsPage />} />
      <Route
        path="/services/ppe-personal-protective-equipment"
        element={<PpePersonalProtectiveEquipmentPage />}
      />
      <Route path="/services/fire-safety-consultation" element={<FireSafetyConsultationPage />} />
      <Route path="/services/fire-equipment-installation" element={<FireEquipmentInstallationPage />} />
      <Route path="/services/fire-equipment-maintenance" element={<FireEquipmentMaintenancePage />} />
      <Route
        path="/services/annual-maintenance-contracts-amc"
        element={<AnnualMaintenanceContractsAcmPage />}
      />
      <Route path="/services/fire-safety-training" element={<FireSafetyTrainingPage />} />

      {/* Fallback: redirect any unknown route to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}



