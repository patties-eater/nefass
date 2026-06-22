import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 gap-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0" onClick={close}>
          <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="font-heading font-black text-navy text-base tracking-tight">Everest</span>
            <span className="text-[0.6rem] font-bold tracking-widest uppercase text-brand" style={{marginTop: '-1px'}}>Fire &amp; Safety</span>
          </span>
        </a>

        {/* Desktop nav */}
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

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-px shrink-0"
        >
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`block w-5 h-0.5 bg-navy rounded transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy rounded transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={close} />
          <nav className="fixed top-0 right-0 h-dvh w-64 bg-white z-50 shadow-2xl flex flex-col pt-20 px-6 gap-1">
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1"
              onClick={close}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-base font-medium text-gray-700 hover:text-brand hover:bg-orange-50 px-4 py-3 rounded-lg transition-colors"
                onClick={close}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-lg text-center transition-colors"
              onClick={close}
            >
              Contact Us
            </a>
          </nav>
        </>
      )}
    </header>
  )
}
