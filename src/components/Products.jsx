import { useState } from 'react'
import { products, WA, waLink } from '../data/products'

const WA_SVG = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const CATEGORIES = [
  { label: 'All',               emoji: '🔍' },
  { label: 'Fire Safety',       emoji: '🔥' },
  { label: 'Industrial Safety', emoji: '🦺' },
  { label: 'Road Safety',       emoji: '🚧' },
  { label: 'Rescue Equipment',  emoji: '⛑️' },
  { label: 'Marine Safety',     emoji: '⚓' },
  { label: 'Security Systems',  emoji: '📷' },
  { label: 'Safety Signage',    emoji: '⚠️' },
]

const INITIAL = 6

function categoryCount(label) {
  if (label === 'All') return products.length
  return products.filter(p => p.category === label).length
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col animate-pulse">
      <div className="h-36 sm:h-44 bg-gray-200" />
      <div className="p-3 sm:p-4 flex flex-col gap-2">
        <div className="h-2.5 bg-gray-200 rounded w-1/3" />
        <div className="h-3.5 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-2/3 mt-1" />
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-7 w-16 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  const { img, contain, title, desc, price, tags, subcategory, category } = product
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div
        className={`relative overflow-hidden ${img ? (contain ? 'bg-white' : 'bg-gray-100') : 'bg-gray-50'}`}
        style={{ aspectRatio: '4 / 3' }}
      >
        {img ? (
          <img
            src={img}
            alt={title}
            loading="lazy"
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${contain ? 'object-contain p-4 sm:p-6' : 'object-cover'}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-200">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-10 h-10 sm:w-12 sm:h-12">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span className="text-[0.55rem] font-semibold tracking-widest uppercase text-gray-300">Photo coming soon</span>
          </div>
        )}
        <span className="absolute top-2.5 left-2.5 text-[0.55rem] sm:text-[0.6rem] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-navy px-2 py-0.5 rounded-full shadow-sm">
          {subcategory || category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-navy text-xs sm:text-sm leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 hidden sm:block line-clamp-2">{desc}</p>
        <div className="hidden sm:flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[0.6rem] font-semibold bg-orange-50 text-brand border border-orange-100 px-1.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-gray-100 mt-auto">
          <p className="font-heading font-black text-brand text-xs sm:text-sm leading-tight">{price}</p>
          <a
            href={waLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-green-500 hover:bg-green-600 text-white text-[0.6rem] sm:text-xs font-bold px-2 sm:px-3 py-1.5 rounded-lg transition-colors shrink-0"
          >
            {WA_SVG}
            <span className="hidden sm:inline">Ask Price</span>
            <span className="sm:hidden">Ask</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(false)

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL)
  const remaining = filtered.length - INITIAL

  const changeCategory = (cat) => {
    if (cat === active) return
    setLoading(true)
    setActive(cat)
    setShowAll(false)
    setTimeout(() => setLoading(false), 300)
  }

  return (
    <section id="products" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">Our Products</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-navy leading-tight mb-2">
            Products &amp; Services
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl hidden sm:block">
            Fire safety, industrial PPE, security systems, and more — supply, installation, and on-site service across Nepal.
          </p>
        </div>

        {/* Layout: sidebar + content */}
        <div className="flex gap-8 md:gap-10 items-start">

          {/* ── Category Sidebar (desktop only) ── */}
          <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-20">
            <p className="text-[0.65rem] font-black tracking-widest uppercase text-gray-400 mb-3 px-3">
              Categories
            </p>
            <nav className="flex flex-col gap-0.5">
              {CATEGORIES.map(({ label, emoji }) => {
                const isActive = active === label
                const count = categoryCount(label)
                return (
                  <button
                    key={label}
                    onClick={() => changeCategory(label)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'bg-brand text-white shadow-sm shadow-brand/30'
                        : 'text-gray-600 hover:bg-white hover:text-navy hover:shadow-sm'
                    }`}
                  >
                    <span className="text-base leading-none">{emoji}</span>
                    <span className="flex-1 leading-tight">{label}</span>
                    <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 min-w-5 text-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </nav>

            {/* Sidebar CTA */}
            <div className="mt-6 bg-navy rounded-2xl p-4 text-center">
              <p className="text-white text-xs font-semibold leading-snug mb-3">Can't find what you need?</p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent('Hello! I need a product not listed on your website. Can you help?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors w-full justify-center"
              >
                {WA_SVG}
                Ask on WhatsApp
              </a>
            </div>
          </aside>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">

            {/* Mobile: horizontal pill tabs */}
            <div className="md:hidden overflow-x-auto -mx-4 px-4 mb-5">
              <div className="flex gap-2 w-max pb-1">
                {CATEGORIES.map(({ label, emoji }) => {
                  const isActive = active === label
                  return (
                    <button
                      key={label}
                      onClick={() => changeCategory(label)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-brand text-white shadow-sm shadow-brand/30'
                          : 'bg-white text-gray-500 border border-gray-200 hover:border-brand hover:text-brand'
                      }`}
                    >
                      <span>{emoji}</span>
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active category label + count */}
            {!loading && (
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-gray-400 font-medium">
                  <span className="text-navy font-bold">{active}</span>
                  {' '}·{' '}
                  {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {loading
                ? Array.from({ length: INITIAL }).map((_, i) => <SkeletonCard key={i} />)
                : visible.map(product => <ProductCard key={product.title} product={product} />)
              }
            </div>

            {/* Load more / Show less */}
            {!loading && filtered.length > INITIAL && (
              <div className="mt-6 md:mt-8 text-center">
                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-brand text-navy hover:text-brand font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                    View {remaining} More {remaining === 1 ? 'Product' : 'Products'}
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAll(false)}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-navy font-semibold text-sm transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA — full width */}
        <div className="mt-12 md:mt-16 text-center border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-sm mb-3">Need something not listed? We can source it for you.</p>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hello! I need a product that is not listed on your website. Can you help source it?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            Contact Us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
