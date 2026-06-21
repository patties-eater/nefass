export default function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden pt-16">
      {/* Subtle decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-140 h-140 bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-95 h-95 bg-orange-50 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1B2A4A 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-brand text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-8">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
              <path fill="#E67E22" d="M16 2C13 8 9 12 9 18.5C9 23.7 12.1 28 16 28C19.9 28 23 23.7 23 18.5C23 15 21 12 19 10C19.5 12.5 18.5 14.5 16 16C18 13 18 8 16 2Z"/>
            </svg>
            Everest Fire &amp; Safety · Balkumari-3, Lalitpur
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1] mb-6">
            Fire. Security.<br />
            <span className="text-brand">Total Protection.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Everest Fire &amp; Safety supplies certified fire fighting equipment,
            advanced CCTV &amp; security systems, EPABX solutions, and expert on-site
            service — keeping your people and property safe around the clock.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30"
            >
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-navy font-semibold px-7 py-3.5 rounded-lg border-2 border-gray-200 hover:border-brand transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-gray-100">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '500+', label: 'Products & Services' },
              { num: '1,000+', label: 'Happy Clients' },
              { num: '24/7', label: 'Support' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-heading font-black text-3xl text-brand">{num}</div>
                <div className="text-sm text-gray-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <span>Authorised Supplier of:</span>
          {['Uniview CCTV', 'Garrett Metal Detectors', 'Clean Agent Systems', 'EPABX Systems'].map(c => (
            <span key={c} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
