import { useState } from 'react'

const WA = '9779851120100'
const waLink = (product) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(`Hello! I am interested in "${product}". Please share the price and details.`)}`

const products = [
  {
    img: 'https://images.unsplash.com/photo-1513492448296-5f8b2ed8935a?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Fire Extinguishers',
    desc: 'New branded extinguishers and refilling service. Available in dry powder, CO₂, foam, and water types.',
    price: 'From NPR 1,500',
    tags: ['ABC Type', 'CO₂', 'Foam', 'Refilling'],
    category: 'Fire Fighting',
  },
  {
    img: 'https://images.pexels.com/photos/7241774/pexels-photo-7241774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Clean Agent Suppression',
    desc: 'Automatic suppression systems for server rooms, offices, and sensitive equipment areas.',
    price: 'From NPR 45,000',
    tags: ['FM-200', 'Novec 1230', 'CO₂', 'Inergen'],
    category: 'Fire Fighting',
  },
  {
    img: 'https://images.unsplash.com/photo-1560517734-124ebe0ad826?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Fire Hose Reels',
    desc: 'Wall-mounted fire hose reels, nozzles, and cabinets for quick response during a fire.',
    price: 'From NPR 8,500',
    tags: ['Hose Reels', 'Nozzles', 'Couplings', 'Cabinets'],
    category: 'Fire Fighting',
  },
  {
    img: 'https://images.unsplash.com/photo-1585367437379-e0b71bb18156?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Fire Alarm Systems',
    desc: 'Full fire alarm network design and installation — smoke, heat, and manual call points included.',
    price: 'From NPR 25,000',
    tags: ['Conventional', 'Addressable', 'Design', 'Installation'],
    category: 'Alarms & Detection',
  },
  {
    img: 'https://images.pexels.com/photos/8381832/pexels-photo-8381832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Smoke & Heat Detectors',
    desc: 'Ceiling-mounted detectors that trigger alarms early — before a small fire becomes a big problem.',
    price: 'From NPR 2,500',
    tags: ['Smoke', 'Heat', 'Multi-Sensor', 'Addressable'],
    category: 'Alarms & Detection',
  },
  {
    img: 'https://images.pexels.com/photos/13533810/pexels-photo-13533810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Fire Control Panels',
    desc: 'Central panels that monitor and control your entire fire alarm network from one place.',
    price: 'From NPR 18,000',
    tags: ['Control Panel', 'Zone Map', 'LCD Display', 'BMS'],
    category: 'Alarms & Detection',
  },
  {
    img: 'https://images.unsplash.com/photo-1549109926-58f039549485?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'CCTV & Security Systems',
    desc: 'Uniview IP cameras, NVRs, and complete CCTV setups for homes, offices, and factories.',
    price: 'From NPR 5,500',
    tags: ['Uniview', 'IP Cameras', 'NVR', 'Remote View'],
    category: 'Security',
  },
  {
    img: 'https://images.pexels.com/photos/17636234/pexels-photo-17636234.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'EPABX Phone Systems',
    desc: 'Office telephone systems that connect all your staff internally and reduce call costs.',
    price: 'From NPR 22,000',
    tags: ['EPABX', 'IP PBX', 'Intercom', 'Corporate'],
    category: 'Telecom',
  },
  {
    img: 'https://images.pexels.com/photos/32027096/pexels-photo-32027096.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Handheld Metal Detectors',
    desc: 'Garrett security wands for hotels, events, schools, and entry checkpoints.',
    price: 'From NPR 6,500',
    tags: ['Garrett', 'Portable', 'Events', 'Security'],
    category: 'Security',
  },
]

const categories = ['All', 'Fire Fighting', 'Alarms & Detection', 'Security', 'Telecom']

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="products" className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">Our Products</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-navy leading-tight mb-4">
            Products &amp; Services
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Everything for fire safety, CCTV, and office communication — supply, installation, and service.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-150 ${
                active === cat
                  ? 'bg-brand text-white border-brand shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ img, title, desc, price, tags, category }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category chip */}
                <span className="absolute top-3 left-3 text-[0.65rem] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-navy px-2.5 py-1 rounded-full shadow-sm">
                  {category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy text-base mb-1.5 group-hover:text-brand transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1">{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
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
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-wide">Price</p>
                    <p className="font-heading font-black text-brand text-lg leading-tight">{price}</p>
                  </div>
                  <a
                    href={waLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Ask Price
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-4">Need something not listed? We can source it for you.</p>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hello! I need a product that is not listed on your website. Can you help?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-lg shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
