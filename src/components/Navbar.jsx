import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-brand rounded-lg flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="nfg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FCD34D"/>
                  <stop offset="100%" stopColor="#fff"/>
                </linearGradient>
              </defs>
              <path fill="url(#nfg)" d="M16 2C13 8 9 12 9 18.5C9 23.7 12.1 28 16 28C19.9 28 23 23.7 23 18.5C23 15 21 12 19 10C19.5 12.5 18.5 14.5 16 16C18 13 18 8 16 2Z"/>
            </svg>
          </div>
          <span className="flex flex-col leading-tight">
            <span className="font-heading font-black text-navy text-sm md:text-base tracking-tight">NEFASS</span>
            <span className="text-[0.55rem] md:text-[0.6rem] font-bold tracking-widest uppercase text-brand" style={{marginTop: '-1px'}}>Fire &amp; Safety</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-navy px-4 py-2 rounded-md hover:bg-gray-50 transition-all duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-px shrink-0"
        >
          Contact Us
        </a>

        {/* Mobile: call button shown inline in navbar */}
        <a
          href="tel:+97715201750"
          className="md:hidden flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-3.5 py-2 rounded-lg"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Now
        </a>
      </div>
    </header>
  )
}
