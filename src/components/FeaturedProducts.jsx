import { products, waLink } from '../data/products'

const featured = products.filter(p => p.featured)

const WA_SVG = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function FeaturedProducts() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand mb-1.5">Top Picks</p>
            <h2 className="font-heading font-black text-2xl md:text-4xl text-navy leading-tight">
              Featured Products
            </h2>
            <div className="h-1 w-10 bg-brand rounded-full mt-2.5" />
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-brand hover:text-brand-dark transition-colors shrink-0"
          >
            View All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Cards — snap scroll on mobile, 4-col on desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {featured.map(({ img, contain, title, desc, price, category, subcategory }) => (
            <div
              key={title}
              className="group snap-start shrink-0 w-[75vw] sm:w-72 md:w-auto flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${img ? (contain ? 'bg-white' : 'bg-gray-100') : 'bg-navy'}`} style={{ aspectRatio: '1 / 1' }}>
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${contain ? 'object-contain p-5' : 'object-cover'}`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243B5F 100%)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-14 h-14 text-white/20">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span className="text-[0.6rem] text-white/30 font-medium tracking-widest uppercase">Photo coming soon</span>
                  </div>
                )}
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[0.55rem] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-navy px-2 py-0.5 rounded-full shadow-sm">
                  {subcategory || category}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy text-xs sm:text-sm leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2 flex-1">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 hidden sm:block line-clamp-2">{desc}</p>
                <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-gray-100">
                  <p className="font-heading font-black text-brand text-sm sm:text-base leading-tight">{price}</p>
                  <a
                    href={waLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-[0.6rem] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors shrink-0"
                  >
                    {WA_SVG}
                    <span>Ask Price</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots — mobile only */}
        <div className="flex justify-center gap-1.5 mt-4 md:hidden">
          {featured.map((_, i) => (
            <span key={i} className={`rounded-full bg-gray-200 transition-all ${i === 0 ? 'w-4 h-1.5 bg-brand' : 'w-1.5 h-1.5'}`} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-all duration-200 text-sm"
          >
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
