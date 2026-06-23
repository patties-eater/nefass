import imgFireExtinguisher from '../assets/Fire_Extinguisher.png'
import imgCCTV from '../assets/CCTV_Camera.png'
import imgSmoke from '../assets/Smoke_Detector.png'
import imgHydrant from '../assets/Hydrant_Valve.png'

export const WA = '9779851120100'
export const waLink = (product) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(`Hello! I am interested in "${product}". Please share the price and details.`)}`

export const products = [
  {
    img: imgFireExtinguisher,
    title: 'Fire Extinguishers',
    desc: 'New branded extinguishers and refilling service. Available in dry powder, CO₂, foam, and water types.',
    price: 'From NPR 1,500',
    tags: ['ABC Type', 'CO₂', 'Foam', 'Refilling'],
    category: 'Fire Fighting',
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/7241774/pexels-photo-7241774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Clean Agent Suppression',
    desc: 'Automatic suppression systems for server rooms, offices, and sensitive equipment areas.',
    price: 'From NPR 45,000',
    tags: ['FM-200', 'Novec 1230', 'CO₂', 'Inergen'],
    category: 'Fire Fighting',
    featured: false,
  },
  {
    img: imgHydrant,
    title: 'Fire Hose Reels',
    desc: 'Wall-mounted fire hose reels, nozzles, and cabinets for quick response during a fire.',
    price: 'From NPR 8,500',
    tags: ['Hose Reels', 'Nozzles', 'Couplings', 'Cabinets'],
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
    title: 'CCTV & Security Systems',
    desc: 'Uniview IP cameras, NVRs, and complete CCTV setups for homes, offices, and factories.',
    price: 'From NPR 5,500',
    tags: ['Uniview', 'IP Cameras', 'NVR', 'Remote View'],
    category: 'Security',
    featured: true,
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
  {
    img: 'https://images.pexels.com/photos/32027096/pexels-photo-32027096.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Handheld Metal Detectors',
    desc: 'Garrett security wands for hotels, events, schools, and entry checkpoints.',
    price: 'From NPR 6,500',
    tags: ['Garrett', 'Portable', 'Events', 'Security'],
    category: 'Security',
    featured: false,
  },
]
