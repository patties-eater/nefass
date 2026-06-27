const stats = [
  { value: '18+', label: 'Years of Trust' },
  { value: '100+', label: 'Products' },
  { value: '14',  label: 'Categories' },
  { value: '24/7', label: 'Support' },
]

const brands = ['Uniview CCTV', 'Garrett Metal Detectors', 'Clean Agent Systems', 'EPABX Systems']

const catMosaic = [
  { label: 'Fire Suppression',    accent: '#E67E22' },
  { label: 'Fire Alarms',         accent: '#EF4444' },
  { label: 'Hydrant Systems',     accent: '#F97316' },
  { label: 'CCTV & Security',     accent: '#3B82F6' },
  { label: 'Gas Detection',       accent: '#14B8A6' },
  { label: 'Industrial PPE',      accent: '#EAB308' },
  { label: 'Emergency Lighting',  accent: '#22C55E' },
  { label: 'Rescue Equipment',    accent: '#A855F7' },
  { label: 'Work-at-Height',      accent: '#6366F1' },
]

const FireFlame = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-4 h-4 shrink-0">
    <path fill="#E67E22" d="M16 2C13 8 9 12 9 18.5C9 23.7 12.1 28 16 28C19.9 28 23 23.7 23 18.5C23 15 21 12 19 10C19.5 12.5 18.5 14.5 16 16C18 13 18 8 16 2Z"/>
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 md:pt-16" style={{ background: '#1B2A4A' }}>


      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient orange glow — top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      {/* Ambient blue glow — bottom-left */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* ── Main grid ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="min-w-0">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-brand/40 bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" style={{ animation: 'pulse 2s infinite' }} />
              Since 2008 · Balkumari-3, Lalitpur
            </div>

            {/* H1: single primary headline */}
            <h1 className="font-heading font-black text-[2.1rem] sm:text-5xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.08] mb-5">
              Fire Safety Equipment Supplier in Nepal
            </h1>

            {/* Orange accent rule */}
            <div className="h-1 w-14 rounded-full mb-5" style={{ background: '#E67E22' }} />

            {/* Description / subtitle: naturally includes 2nd keyword without competing headline */}
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-lg mb-8">
              New Everest Fire and Safety Suppliers (NEFASS) delivers complete fire protection solutions in Nepal — including fire
              extinguishers, fire alarm systems, hydrants, fire suppression systems, emergency lighting, and industrial safety equipment.
              Supply, installation &amp; after-sales support across Balkumari, Lalitpur and beyond.
            </p>


            {/* Primary CTA then Secondary CTA */}
            <div className="flex flex-wrap gap-3 mb-10 md:mb-12">

              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
                style={{ boxShadow: '0 8px 24px rgba(230,126,34,0.35)' }}
              >
                Explore Products
                <ArrowRight />
              </a>
              <a
                href="tel:9851120100"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                <PhoneIcon />
                Call 9851120100
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading font-black text-xl md:text-2xl text-brand leading-none mb-1">{value}</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Category mosaic (desktop only) ── */}
         <div className="hidden md:block w-72 lg:w-96 shrink-0">
            <div className="grid grid-cols-3 gap-2">
              {catMosaic.map(({ label, accent }) => (
                <div
                  key={label}
                  className="rounded-xl p-3 flex flex-col items-center justify-center text-center min-height: 5.5rem; border transition-transform duration-300 hover:-translate-y-0.5 cursor-default"
                  style={{
                    background: `${accent}14`,
                    borderColor: `${accent}28`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mb-2"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}80` }}
                  />
                  <span className="text-[0.62rem] font-semibold leading-tight" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Mosaic label */}
            <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.2em] mt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
              14 Safety Categories
            </p>
          </div>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-5 md:gap-8 overflow-x-auto">
          <span className="text-[0.65rem] font-bold uppercase tracking-widest shrink-0" style={{ color: 'rgba(255,255,255,0.30)' }}>
            Authorised Supplier of:
          </span>
          {brands.map(c => (
            <span key={c} className="flex items-center gap-2 shrink-0">
              <FireFlame />
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>{c}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
