import heroImg from '../assets/hero.png'

const brands = ['Uniview CCTV', 'Garrett Metal Detectors', 'Clean Agent Systems', 'EPABX Systems']

export default function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden pt-14 md:pt-16">

      {/* ── Desktop decorative bg ── */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 right-0 w-140 h-140 bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-95 h-95 bg-orange-50 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1B2A4A 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
      </div>

      {/* ── Mobile hero image banner ── */}
      <div className="md:hidden relative h-56 overflow-hidden">
        <img
          src={heroImg}
          alt="Fire safety equipment — NEFASS Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
            <svg width="10" height="10" viewBox="0 0 32 32" fill="none">
              <path fill="#E67E22" d="M16 2C13 8 9 12 9 18.5C9 23.7 12.1 28 16 28C19.9 28 23 23.7 23 18.5C23 15 21 12 19 10C19.5 12.5 18.5 14.5 16 16C18 13 18 8 16 2Z"/>
            </svg>
            NEFASS · Balkumari-3, Lalitpur
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-28">
        <div className="max-w-3xl">

          {/* Badge — desktop only */}
          <div className="hidden md:inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-brand text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-8">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
              <path fill="#E67E22" d="M16 2C13 8 9 12 9 18.5C9 23.7 12.1 28 16 28C19.9 28 23 23.7 23 18.5C23 15 21 12 19 10C19.5 12.5 18.5 14.5 16 16C18 13 18 8 16 2Z"/>
            </svg>
            NEFASS · Balkumari-3, Lalitpur
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1] mb-4 md:mb-5">
            Fire. Security.<br />
            <span className="text-brand">Total Protection.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-xl leading-relaxed max-w-xl mb-6 md:mb-10">
            <span className="hidden sm:inline">New Everest Fire and Safety Suppliers — certified fire fighting equipment,
            advanced CCTV &amp; security systems, EPABX solutions, and expert on-site
            service keeping your people and property safe across Nepal.</span>
            <span className="sm:hidden">Certified fire equipment, CCTV, alarms &amp; EPABX solutions.
            Supply, installation &amp; service across Nepal.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30 text-sm md:text-base"
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="tel:+97715201750"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy font-semibold px-7 py-3.5 rounded-lg border-2 border-gray-200 hover:border-brand transition-all duration-200 hover:-translate-y-0.5 text-sm sm:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call 01-5201750
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy font-semibold px-7 py-3.5 rounded-lg border-2 border-gray-200 hover:border-brand transition-all duration-200 hover:-translate-y-0.5"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="border-t border-gray-100 bg-gray-50 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4 md:gap-6 text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          <span className="shrink-0">Authorised Supplier of:</span>
          {brands.map(c => (
            <span key={c} className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
