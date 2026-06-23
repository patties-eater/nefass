import { useState } from 'react'
import { products, WA, waLink } from '../data/products'

// Category colour tokens — badge + placeholder gradient
const CAT_META = {
  'Fire Detection & Alarm Systems':       { badge: 'bg-red-50 text-red-600 border-red-100',          grad: ['#FEF2F2', '#FECACA'] },
  'Fire Suppression Systems':             { badge: 'bg-orange-50 text-orange-600 border-orange-100',  grad: ['#FFF7ED', '#FDBA74'] },
  'Fire Hydrant Systems':                 { badge: 'bg-rose-50 text-rose-600 border-rose-100',        grad: ['#FFF1F2', '#FDA4AF'] },
  'Firefighter PPE':                      { badge: 'bg-red-50 text-red-700 border-red-100',           grad: ['#FEE2E2', '#FCA5A5'] },
  'Industrial Safety PPE':                { badge: 'bg-blue-50 text-blue-600 border-blue-100',        grad: ['#EFF6FF', '#BFDBFE'] },
  'Work-at-Height Safety':                { badge: 'bg-violet-50 text-violet-600 border-violet-100',  grad: ['#F5F3FF', '#DDD6FE'] },
  'Electrical Safety Equipment':          { badge: 'bg-yellow-50 text-yellow-700 border-yellow-100',  grad: ['#FEFCE8', '#FDE68A'] },
  'Gas Detection Systems':                { badge: 'bg-teal-50 text-teal-600 border-teal-100',        grad: ['#F0FDFA', '#99F6E4'] },
  'Rescue Equipment':                     { badge: 'bg-sky-50 text-sky-600 border-sky-100',           grad: ['#F0F9FF', '#BAE6FD'] },
  'Emergency Lighting & Exit Systems':    { badge: 'bg-amber-50 text-amber-600 border-amber-100',     grad: ['#FFFBEB', '#FDE68A'] },
  'Road Safety Equipment':                { badge: 'bg-yellow-50 text-yellow-800 border-yellow-100',  grad: ['#FEFCE8', '#FEF08A'] },
  'Marine Safety Equipment':              { badge: 'bg-cyan-50 text-cyan-600 border-cyan-100',        grad: ['#ECFEFF', '#A5F3FC'] },
  'Security & Surveillance Systems':      { badge: 'bg-slate-50 text-slate-600 border-slate-100',     grad: ['#F8FAFC', '#CBD5E1'] },
  'Spill Control & Environmental Safety': { badge: 'bg-green-50 text-green-700 border-green-100',     grad: ['#F0FDF4', '#BBF7D0'] },
}

const CATEGORIES = [
  'All',
  'Fire Detection & Alarm Systems',
  'Fire Suppression Systems',
  'Fire Hydrant Systems',
  'Firefighter PPE',
  'Industrial Safety PPE',
  'Work-at-Height Safety',
  'Electrical Safety Equipment',
  'Gas Detection Systems',
  'Rescue Equipment',
  'Emergency Lighting & Exit Systems',
  'Road Safety Equipment',
  'Marine Safety Equipment',
  'Security & Surveillance Systems',
  'Spill Control & Environmental Safety',
]

const INITIAL = 8

function catCount(label) {
  return label === 'All' ? products.length : products.filter(p => p.category === label).length
}

// ── Skeleton ─────────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse flex flex-col">
      <div className="h-48 bg-gray-100" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-4 w-24 bg-gray-100 rounded-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-full" />
        <div className="h-3 bg-gray-100 rounded w-2/3" />
        <div className="h-9 bg-gray-100 rounded-xl mt-1" />
      </div>
    </div>
  )
}

// ── Product card ──────────────────────────────────────────────────────────────
function ProductCard({ product, onSelect }) {
  const { img, contain, title, desc, category } = product
  const meta = CAT_META[category] || CAT_META['Industrial Safety PPE']

  return (
    <article
      onClick={() => onSelect(product)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer"
      style={{ borderRadius: '16px' }}
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden shrink-0">
        {img ? (
          <img
            src={img}
            alt={title}
            loading="lazy"
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              contain ? 'object-contain p-6 bg-white' : 'object-cover'
            }`}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${meta.grad[0]} 0%, ${meta.grad[1]} 100%)` }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-gray-300">
              <rect x="3" y="3" width="18" height="18" rx="2.5"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-[0.55rem] font-bold tracking-widest uppercase text-gray-400">Photo Coming Soon</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`self-start text-[0.55rem] sm:text-[0.6rem] font-bold tracking-wide uppercase border px-2.5 py-0.5 rounded-full mb-3 ${meta.badge}`}>
          {category}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-navy text-sm leading-snug mb-2 group-hover:text-brand transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Description — 2 lines */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
          {desc}
        </p>

        {/* CTA */}
        <button className="w-full inline-flex items-center justify-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-brand/25 group-hover:-translate-y-0.5">
          View Details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  )
}

// ── Product detail modal ──────────────────────────────────────────────────────
function ProductModal({ product, onClose }) {
  if (!product) return null
  const { img, contain, title, desc, price, tags, category } = product
  const meta = CAT_META[category] || CAT_META['Industrial Safety PPE']

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div
          className="relative h-56 shrink-0"
          style={!img ? { background: `linear-gradient(135deg, ${meta.grad[0]} 0%, ${meta.grad[1]} 100%)` } : {}}
        >
          {img ? (
            <img
              src={img}
              alt={title}
              className={`w-full h-full ${contain ? 'object-contain p-8 bg-white' : 'object-cover'}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-16 h-16 text-gray-300">
                <rect x="3" y="3" width="18" height="18" rx="2.5"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          )}
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-700">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <span className={`text-[0.6rem] font-bold tracking-wide uppercase border px-2.5 py-0.5 rounded-full ${meta.badge}`}>
            {category}
          </span>
          <h2 className="font-heading font-black text-navy text-xl leading-tight mt-3 mb-2">
            {title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map(tag => (
              <span key={tag} className="text-[0.65rem] font-semibold bg-orange-50 text-brand border border-orange-100 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="flex-1">
              <p className="text-[0.65rem] text-gray-400 font-medium uppercase tracking-wide">Starting price</p>
              <p className="font-heading font-black text-brand text-xl leading-tight">{price}</p>
            </div>
            <a
              href={waLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm shadow-md shadow-green-500/25"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Products() {
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)

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
    <>
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">Our Products</p>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-navy leading-tight mb-4">
              Our Safety Products
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Certified fire, industrial, and security safety equipment — design, supply, installation, and maintenance across Nepal.
            </p>
            {/* Accent line */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="h-px w-16 bg-gray-100" />
              <div className="w-8 h-1 bg-brand rounded-full" />
              <div className="h-px w-16 bg-gray-100" />
            </div>
          </div>

          {/* Category filter — horizontal scroll */}
          <div className="overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 mb-10">
            <div className="flex gap-2 w-max lg:w-auto lg:flex-wrap lg:justify-center pb-1">
              {CATEGORIES.map(label => {
                const isActive = active === label
                return (
                  <button
                    key={label}
                    onClick={() => changeCategory(label)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-navy text-white shadow-md'
                        : 'bg-gray-50 text-gray-500 border border-gray-150 hover:border-brand/40 hover:text-brand hover:bg-orange-50'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="bg-white/20 text-white text-[0.55rem] font-bold px-1.5 py-0.5 rounded-full">
                        {catCount(label)}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Result count */}
          {!loading && (
            <p className="text-xs text-gray-400 font-medium mb-6">
              Showing <span className="font-bold text-navy">{visible.length}</span> of{' '}
              <span className="font-bold text-navy">{filtered.length}</span> products
              {active !== 'All' && <> in <span className="text-brand font-bold">{active}</span></>}
            </p>
          )}

          {/* Grid — 1 mobile / 2 tablet / 4 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {loading
              ? Array.from({ length: INITIAL }).map((_, i) => <SkeletonCard key={i} />)
              : visible.map(product => (
                  <ProductCard key={product.title} product={product} onSelect={setSelected} />
                ))
            }
          </div>

          {/* Load more / Show less */}
          {!loading && filtered.length > INITIAL && (
            <div className="mt-10 text-center">
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-brand text-navy hover:text-brand font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                  Load {remaining} More Product{remaining !== 1 ? 's' : ''}
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

          {/* Bottom CTA */}
          <div className="mt-14 md:mt-20 border-t border-gray-100 pt-10 text-center">
            <p className="text-gray-400 text-sm mb-1">Can't find what you're looking for?</p>
            <p className="text-navy font-semibold text-sm mb-5">We source specialised safety equipment on request.</p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent('Hello! I need a safety product not listed on your website. Can you help source it?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Product detail modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
