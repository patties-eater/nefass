const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Certified Quality',
    desc: 'Every product meets national and international safety standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Service',
    desc: 'Quick turnaround on supply, installation, and refilling.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Trained technicians for fire, CCTV, and EPABX integration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'One-Stop Solution',
    desc: 'Fire, security, and telecom — all in one place.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white">

      {/* ── Mobile-only company banner ── */}
      <div className="md:hidden bg-navy px-4 py-8">
        <p className="text-brand text-xs font-bold tracking-widest uppercase mb-1">Who We Are</p>
        <h2 className="font-heading font-black text-2xl text-white leading-tight mb-3">
          Nepal's Trusted<br />Safety Supplier
        </h2>
        <p className="text-white/70 text-xs leading-relaxed">
          Balkumari-3, Lalitpur · Certified fire fighting equipment, CCTV, alarms, EPABX &amp; metal detectors since 2008.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-24">

        {/* ── Desktop: story block ── */}
        <div className="max-w-2xl mb-10 md:mb-16 hidden md:block">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">Who We Are</p>
          <h2 className="font-heading font-black text-5xl text-navy leading-tight mb-4">
            Nepal's Trusted Safety &amp; Security Supplier
          </h2>
          <p className="text-gray-500 leading-relaxed mb-3">
            Based in Balkumari-3, Lalitpur, Agni Safe &amp; Safety Center is led by Managing Director{' '}
            <span className="font-semibold text-navy">Mena Gautam</span>. We specialize in fire fighting
            equipment, electronic security systems, and telecom solutions across Nepal.
          </p>
          <p className="text-gray-500 leading-relaxed">
            From supplying and refilling branded fire extinguishers and Uniview CCTV systems to installing
            EPABX networks and Garrett metal detectors — reliable, certified products backed by hands-on support.
          </p>
        </div>

        {/* ── MD card — always side-by-side ── */}
        <div className="bg-navy rounded-2xl overflow-hidden mb-6 shadow-lg">
          <div className="flex flex-row">
            {/* Photo */}
            <div className="w-28 sm:w-44 shrink-0">
              <img
                src="/mena_gautam.png"
                alt="Mena Gautam — Managing Director, NEFASS"
                className="w-full h-full object-cover object-top opacity-95"
                style={{ minHeight: '140px' }}
              />
            </div>
            {/* Quote + info */}
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 min-w-0">
              <svg width="24" height="18" viewBox="0 0 32 24" fill="none" className="text-brand mb-2 shrink-0">
                <path d="M0 24V14.4C0 10.08 1.04 6.56 3.12 3.84 5.28 1.12 8.4 0 12.48 0v4.32c-2.4.32-4.08 1.2-5.04 2.64C6.48 8.4 6 10.08 6 12H12V24H0ZM20 24V14.4c0-4.32 1.04-7.84 3.12-10.56C25.28 1.12 28.4 0 32.48 0v4.32c-2.4.32-4.08 1.2-5.04 2.64C26.48 8.4 26 10.08 26 12H32V24H20Z" fill="currentColor" opacity="0.6"/>
              </svg>
              <p className="text-white text-[0.7rem] sm:text-sm leading-relaxed italic mb-3 line-clamp-4 sm:line-clamp-none">
                "Fire safety is not a luxury — it is a responsibility. Our goal is to make every home,
                office, hotel, and school in Nepal properly protected."
              </p>
              <div>
                <p className="font-heading font-black text-white text-xs sm:text-base">Mena Gautam</p>
                <p className="text-brand text-[0.6rem] sm:text-xs font-semibold tracking-wide">Managing Director (M.D.)</p>
                <p className="text-gray-400 text-[0.6rem] sm:text-xs mt-0.5 hidden sm:block">New Everest Fire and Safety Suppliers</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 text-sm mb-10 md:mb-16"
        >
          Talk to Our Team
        </a>

        {/* ── Why Choose Us ── */}
        <div className="border-t border-gray-100 pt-8 md:pt-16">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2 text-center">Our Promise</p>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-navy text-center mb-6 md:mb-10">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-orange-50 hover:border-orange-100 border border-transparent transition-all duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-100 shadow-sm text-brand flex items-center justify-center mb-3">
                  {icon}
                </div>
                <h4 className="font-heading font-bold text-navy text-xs md:text-sm mb-1">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
