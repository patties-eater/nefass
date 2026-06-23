import imgABC from '../assets/4kg ABC Type Fire Extinguisher.png'
import imgCO2 from '../assets/2 Kg CO2 Type Fire Extinguisher.png'
import imgFireStop from '../assets/500ml Fire Stop Extinguisher.png'
import imgCleanAgent from '../assets/Clean agent suppression.png'
import imgHose from '../assets/Fire_Hose_Pipe.png'
import imgBlanket from '../assets/Sri Fire Blanket.png'
import imgSmoke from '../assets/Smoke_Detector.png'
import imgCCTV from '../assets/CCTV_Camera.png'
import imgMetal from '../assets/metalDetector.png'

export const WA = '9779851120100'
export const waLink = (product) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(`Hello! I am interested in "${product}". Please share the price and details.`)}`

export const products = [
  {
    img: imgABC,
    contain: true,
    title: 'ABC Dry Powder Extinguisher',
    desc: 'Multi-purpose 4kg dry powder extinguisher for Class A, B, and C fires. Ideal for offices, kitchens, and vehicles.',
    price: 'From NPR 1,500',
    tags: ['4kg', 'ABC Type', 'Multi-Purpose', 'Refilling'],
    category: 'Fire Fighting',
    featured: true,
  },
  {
    img: imgCO2,
    contain: true,
    title: 'CO₂ Fire Extinguisher',
    desc: 'Clean CO₂ extinguisher — no residue, safe for electrical equipment, server rooms, and labs.',
    price: 'From NPR 3,500',
    tags: ['CO₂', '2kg', 'Electrical', 'Clean Agent'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: imgFireStop,
    contain: true,
    title: '500ml Fire Stop Extinguisher',
    desc: 'Compact aerosol-type fire extinguisher for cars, kitchens, and small spaces. Easy to use, no training needed.',
    price: 'From NPR 800',
    tags: ['Aerosol', 'Compact', 'Car', 'Kitchen'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: imgCleanAgent,
    contain: false,
    title: 'Clean Agent Suppression System',
    desc: 'Automatic suppression systems for server rooms, offices, and sensitive equipment areas.',
    price: 'From NPR 45,000',
    tags: ['FM-200', 'Novec 1230', 'CO₂', 'Inergen'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: imgHose,
    contain: true,
    title: 'Fire Hose Reels',
    desc: 'Wall-mounted fire hose reels, nozzles, and cabinets for quick response during a fire.',
    price: 'From NPR 8,500',
    tags: ['Hose Reels', 'Nozzles', 'Couplings', 'Cabinets'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: imgBlanket,
    contain: true,
    title: 'Fire Blanket',
    desc: 'Fiberglass fire blanket for smothering small fires and protecting people during evacuation.',
    price: 'From NPR 1,200',
    tags: ['Fiberglass', 'Kitchen', 'Emergency', 'Wall Mount'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1585367437379-e0b71bb18156?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Fire Alarm Systems',
    desc: 'Full fire alarm network design and installation — smoke, heat, and manual call points included.',
    price: 'From NPR 25,000',
    tags: ['Conventional', 'Addressable', 'Design', 'Installation'],
    category: 'Alarms & Detection',
    featured: true,
  },
  {
    img: imgSmoke,
    contain: true,
    title: 'Smoke & Heat Detectors',
    desc: 'Ceiling-mounted detectors that trigger alarms early — before a small fire becomes a big problem.',
    price: 'From NPR 2,500',
    tags: ['Smoke', 'Heat', 'Multi-Sensor', 'Addressable'],
    category: 'Alarms & Detection',
    featured: false,
  },
  {
    img: 'https://images.pexels.com/photos/13533810/pexels-photo-13533810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Fire Control Panels',
    desc: 'Central panels that monitor and control your entire fire alarm network from one place.',
    price: 'From NPR 18,000',
    tags: ['Control Panel', 'Zone Map', 'LCD Display', 'BMS'],
    category: 'Alarms & Detection',
    featured: false,
  },
  {
    img: imgCCTV,
    contain: true,
    title: 'CCTV & Security Systems',
    desc: 'Uniview IP cameras, NVRs, and complete CCTV setups for homes, offices, and factories.',
    price: 'From NPR 5,500',
    tags: ['Uniview', 'IP Cameras', 'NVR', 'Remote View'],
    category: 'Security',
    featured: true,
  },
  {
    img: imgMetal,
    contain: false,
    title: 'Handheld Metal Detectors',
    desc: 'Garrett security wands for hotels, events, schools, and entry checkpoints.',
    price: 'From NPR 6,500',
    tags: ['Garrett', 'Portable', 'Events', 'Security'],
    category: 'Security',
    featured: false,
  },
  {
    img: 'https://images.pexels.com/photos/17636234/pexels-photo-17636234.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'EPABX Phone Systems',
    desc: 'Office telephone systems that connect all your staff internally and reduce call costs.',
    price: 'From NPR 22,000',
    tags: ['EPABX', 'IP PBX', 'Intercom', 'Corporate'],
    category: 'Telecom',
    featured: true,
  },
]
