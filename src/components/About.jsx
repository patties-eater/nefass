const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Certified Quality',
    desc: 'Every product we supply meets national and international safety standards — from fire equipment to CCTV and telecom.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Service',
    desc: 'Quick turnaround on supply, installation, and refilling. Emergency support available for critical safety needs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Our trained technicians handle everything from fire extinguisher refilling to full CCTV and EPABX system integration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'One-Stop Solution',
    desc: 'Fire fighting, security, and telecom — we cover all your safety and communication infrastructure needs in one place.',
  },
]

const milestones = [
  { year: '2008', text: 'Established in Balkumari, Lalitpur with a focus on fire fighting equipment supply and refilling.' },
  { year: '2013', text: 'Expanded into electronic security — offering CCTV installation and access control systems.' },
  { year: '2018', text: 'Added EPABX and telecom solutions, becoming a one-stop safety and communication supplier.' },
  { year: '2024', text: 'Serving 1,000+ clients across Nepal — hotels, factories, schools, hospitals, and government offices.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Story + Timeline */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">Who We Are</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-navy leading-tight mb-6">
              Lalitpur's Trusted Safety &amp; Security Supplier
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Based in Balkumari-3, Lalitpur, Agni Safe &amp; Safety Center is led by
              Managing Director <span className="font-semibold text-navy">Mena Gautam</span>. We
              specialize in fire fighting equipment, electronic security systems, and telecom
              solutions for businesses, institutions, and public facilities across Nepal.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From supplying and refilling branded fire extinguishers and Uniview CCTV systems
              to installing EPABX networks and Garrett metal detectors — we provide reliable,
              certified products backed by hands-on technical support.
            </p>

            {/* MD card */}
            <div className="bg-navy rounded-2xl overflow-hidden mb-8 shadow-lg">
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-44 shrink-0 bg-navy-mid">
                  <img
                    src="/mena_gautam.png"
                    alt="Mena Gautam — Managing Director, NEFASS"
                    className="w-full h-52 sm:h-full object-cover object-top opacity-95"
                  />
                </div>

                {/* Quote + info */}
                <div className="p-6 flex flex-col justify-between">
                  {/* Big quote mark */}
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-brand mb-3 shrink-0">
                    <path d="M0 24V14.4C0 10.08 1.04 6.56 3.12 3.84 5.28 1.12 8.4 0 12.48 0v4.32c-2.4.32-4.08 1.2-5.04 2.64C6.48 8.4 6 10.08 6 12H12V24H0ZM20 24V14.4c0-4.32 1.04-7.84 3.12-10.56C25.28 1.12 28.4 0 32.48 0v4.32c-2.4.32-4.08 1.2-5.04 2.64C26.48 8.4 26 10.08 26 12H32V24H20Z" fill="currentColor" opacity="0.6"/>
                  </svg>

                  <p className="text-white text-sm leading-relaxed italic mb-5">
                    "Fire safety is not a luxury — it is a responsibility. Our goal is to make every home, office, hotel, and school in Nepal properly protected with certified, reliable equipment."
                  </p>

                  <div>
                    <p className="font-heading font-black text-white text-base">Mena Gautam</p>
                    <p className="text-brand text-xs font-semibold tracking-wide">Managing Director (M.D.)</p>
                    <p className="text-gray-400 text-xs mt-0.5">New Everest Fire and Safety Suppliers</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30"
            >
              Talk to Our Team
            </a>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {milestones.map(({ year, text }, i) => (
              <div key={year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-orange-50 border-2 border-brand text-brand flex items-center justify-center shrink-0 font-heading font-black text-[0.65rem] z-10">
                    {year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-100 my-1" style={{ minHeight: '2rem' }} />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-heading font-bold text-navy text-sm mb-1">{year}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3 text-center">Our Promise</p>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-navy text-center mb-10">
            Why Choose Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 hover:border-orange-100 border border-transparent transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm text-brand flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h4 className="font-heading font-bold text-navy text-sm mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
