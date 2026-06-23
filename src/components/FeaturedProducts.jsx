import { products, waLink } from '../data/products'

const featured = products.filter(p => p.featured)

export default function FeaturedProducts() {
  return (
    <section className="py-10 md:py-20 bg-white">
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

        {/* Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {featured.map(({ img, contain, title, desc, price, category }) => (
            <div
              key={title}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className={`relative overflow-hidden aspect-square ${contain ? 'bg-white' : 'bg-gray-50'}`}>
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${contain ? 'object-contain p-4' : 'object-cover'}`}
                />
                <span className="absolute top-2 left-2 text-[0.55rem] md:text-[0.6rem] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-navy px-1.5 md:px-2 py-0.5 rounded-full shadow-sm">
                  {category}
                </span>
              </div>

              {/* Content */}
              <div className="p-2.5 sm:p-4 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy text-xs sm:text-base mb-1 leading-snug group-hover:text-brand transition-colors line-clamp-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 hidden sm:block line-clamp-2">
                  {desc}
                </p>
                <div className="flex items-center justify-between gap-1.5 mt-auto pt-2 border-t border-gray-100">
                  <p className="font-heading font-black text-brand text-xs sm:text-sm leading-tight">{price}</p>
                  <a
                    href={waLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-[0.6rem] font-bold px-2 py-1.5 rounded-lg transition-colors shrink-0"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    <span className="hidden sm:inline">Ask Price</span>
                    <span className="sm:hidden">Ask</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 md:mt-10 text-center">
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
