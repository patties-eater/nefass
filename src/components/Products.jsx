import { useState } from 'react'
import { products, WA, waLink } from '../data/products'

const WA_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const categories = ['All', 'Fire Fighting', 'Alarms & Detection', 'Security', 'Telecom']

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="products" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">Our Products</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-navy leading-tight mb-2">
            Products &amp; Services
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto hidden sm:block">
            Fire safety, CCTV, and office communication — supply, installation, and service.
          </p>
        </div>

        {/* Category filter — horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 md:mb-10">
          <div className="flex gap-2 sm:flex-wrap sm:justify-center w-max sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-150 ${
                  active === cat
                    ? 'bg-brand text-white border-brand shadow-sm'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-brand hover:text-brand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filtered.map(({ img, title, desc, price, tags, category }) => (
            <div
              key={title}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-32 sm:h-44 md:h-48 overflow-hidden bg-gray-100">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 text-[0.55rem] sm:text-[0.65rem] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-navy px-2 py-0.5 rounded-full shadow-sm">
                  {category}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy text-xs sm:text-base mb-1 group-hover:text-brand transition-colors leading-snug">
                  {title}
                </h3>

                {/* Description — desktop only */}
                <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1 hidden sm:block">{desc}</p>

                {/* Tags — desktop only */}
                <div className="flex-wrap gap-1.5 mb-4 hidden sm:flex">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-semibold bg-orange-50 text-brand border border-orange-100 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-1 pt-2 border-t border-gray-100 mt-auto">
                  <div>
                    <p className="text-[0.6rem] font-semibold text-gray-400 uppercase tracking-wide hidden sm:block">Price</p>
                    <p className="font-heading font-black text-brand text-xs sm:text-lg leading-tight">{price}</p>
                  </div>
                  <a
                    href={waLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-1.5 bg-green-500 hover:bg-green-600 text-white text-[0.6rem] sm:text-xs font-bold px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition-colors shrink-0"
                  >
                    {WA_SVG}
                    <span className="hidden sm:inline">Ask Price</span>
                    <span className="sm:hidden">Ask</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-14 text-center">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Need something not listed? We can source it for you.</p>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hello! I need a product that is not listed on your website. Can you help?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-lg shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 text-sm"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
