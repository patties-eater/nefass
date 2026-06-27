import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://nefass.com.np'
const LOGO_URL = `${SITE_URL}/logo.png`

import servicesData, { bySlug as servicesBySlug } from '../data/services'

const ROUTES = {
  '/': {
    title: 'NEFASS – New Everest Fire and Safety Suppliers | Balkumari, Lalitpur Nepal',
    description:
      "NEFASS (New Everest Fire and Safety Suppliers) — Balkumari-3, Lalitpur. Nepal's trusted supplier for fire extinguishers, CCTV cameras, fire alarms, EPABX systems, and metal detectors since 2008.",
  },
  '/products': {
    title: 'NEFASS Products – Fire Extinguishers, CCTV & Safety Equipment | Nepal',
    description:
      'Explore NEFASS products: fire extinguishers & refilling, CCTV cameras & installation, fire alarm systems, EPABX systems, clean agent suppression, and metal detectors across Nepal.',
  },
  '/about': {
    title: 'About NEFASS – Trusted Fire and Safety Supplier in Lalitpur, Nepal',
    description:
      'NEFASS (New Everest Fire and Safety Suppliers) has served Nepal since 2008 with fire safety equipment, CCTV security systems, fire alarms, EPABX telephone systems, and metal detectors.',
  },
  '/contact': {
    title: 'Contact NEFASS – Request a Quote for Fire Safety & Security Systems',
    description:
      'Request a quote or ask for installation/refilling support for fire extinguishers, CCTV cameras, fire alarm systems, EPABX systems, and metal detectors. Call or send us a WhatsApp message.',
  },
}

function getServiceFromPath(pathname) {
  // Expected: /services/<slug>
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 2 && parts[0] === 'services') {
    const slug = parts[1]
    return servicesBySlug[slug] || null
  }
  return null
}


function ensureMetaTag(name, getContent) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', getContent())
}

function ensurePropertyMetaTag(property, getContent) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', getContent())
}

function ensureCanonical(getHref) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', getHref())
}

function removeExistingJsonLd() {
  document.querySelectorAll('script[data-nefass-jsonld="true"]').forEach((s) => s.remove())
}

function injectJsonLd({ url, title, routeTitle, service }) {
  removeExistingJsonLd()

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'New Everest Fire and Safety Suppliers',
    alternateName: ['NEFASS', 'Agni Safe & Safety Center'],
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Nepal\u2019s trusted fire safety supplier since 2008. Specializing in fire extinguishers, CCTV cameras, fire alarms, EPABX systems, and metal detectors.',
    foundingDate: '2008',
  }


  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'New Everest Fire and Safety Suppliers',
    alternateName: ['NEFASS', 'Agni Safe & Safety Center', 'nefass.com.np'],
    description:
      'Supplier and installer of fire extinguishers, fire alarm systems, CCTV security cameras, EPABX telephone systems, and metal detectors across Nepal.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: ['+977-1-5201750', '+977-9851120100', '+977-9841445648'],
    email: 'jagrirb@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Balkumari-3',
      addressLocality: 'Lalitpur',
      addressRegion: 'Bagmati Province',
      postalCode: '44700',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '27.6588',
      longitude: '85.3247',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NEFASS \u2013 New Everest Fire and Safety Suppliers',
    alternateName: ['NEFASS', 'nefass.com.np', 'New Everest Fire Safety'],
    url: SITE_URL,
    description: 'Nepal\u2019s trusted fire safety supplier. Supply, installation & refilling across Nepal.',
    inLanguage: 'en-NP',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      queryInput: 'required name=search_term_string',
    },
  }

  const breadcrumbItems = service?.breadcrumb?.length
    ? service.breadcrumb.map((b) => ({ name: b.label, item: b.href ? `${SITE_URL}${b.href.startsWith('/') ? b.href : `/${b.href}`}` : url }))
    : [
        { name: 'Home', item: `${SITE_URL}/` },
        ...(url === `${SITE_URL}/` ? [] : [{ name: routeTitle || title.replace('NEFASS ', '').split(' | ')[0], item: url }]),
      ]


  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    name: title,
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
  }

  const baseServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service ? service.title : 'Fire Safety Products & Installation',
    provider: { '@type': 'LocalBusiness', name: 'New Everest Fire and Safety Suppliers', url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Nepal' },
    serviceType: service
      ? [service.title]
      : [
          'Fire extinguisher supply & refilling',
          'CCTV camera supply & installation',
          'Fire alarm system supply & installation',
          'EPABX/IP PBX telephone system supply & installation',
          'Metal detector supply',
        ],
  }


  const payloads = [org, localBusiness, website, breadcrumb, webpage, baseServiceSchema]

  payloads.forEach((payload) => {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-nefass-jsonld', 'true')
    s.textContent = JSON.stringify(payload)
    document.head.appendChild(s)
  })

  // FAQ schema from services.js when service page provides FAQs
  if (service?.faqs?.length) {
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    }

    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-nefass-jsonld', 'true')
    s.textContent = JSON.stringify(faq)
    document.head.appendChild(s)
  }

  // Keep existing home FAQ concept, but only when home.
  if (url === `${SITE_URL}/` && (!service || !service.faqs?.length)) {
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I buy fire extinguishers in Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NEFASS (New Everest Fire and Safety Suppliers) in Balkumari-3, Lalitpur supplies and refills fire extinguishers across Nepal. Call 01-5201750 or WhatsApp 9851-120100.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide CCTV camera installation in Lalitpur Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. NEFASS provides Uniview CCTV camera supply and installation for homes, offices, hotels, and factories in Lalitpur and across Nepal.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I request a quote for fire alarm systems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the contact form or WhatsApp us. We will guide you with pricing and recommended system options.',
          },
        },
      ],
    }

    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-nefass-jsonld', 'true')
    s.textContent = JSON.stringify(faq)
    document.head.appendChild(s)
  }
}


export default function SEO() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const service = getServiceFromPath(path)

    const routeKey = ROUTES[path] ? path : '/'
    const def = ROUTES[routeKey]

    const url = `${SITE_URL}${path === '/' ? '/' : path}`

    const title = service?.seoTitle || def.title
    const description = service?.metaDescription || def.description

    document.title = title

    ensureMetaTag('description', () => description)


    ensurePropertyMetaTag('og:type', () => 'website')
    ensurePropertyMetaTag('og:url', () => url)
    ensurePropertyMetaTag('og:title', () => title)
    ensurePropertyMetaTag('og:description', () => description)

    ensurePropertyMetaTag('og:image', () => LOGO_URL)
    ensurePropertyMetaTag('og:image:width', () => '1200')
    ensurePropertyMetaTag('og:image:height', () => '630')
    ensurePropertyMetaTag('og:image:alt', () => 'NEFASS - New Everest Fire and Safety Suppliers')

    ensureMetaTag('twitter:card', () => 'summary_large_image')
    ensureMetaTag('twitter:title', () => title)
    ensureMetaTag('twitter:description', () => description)

    ensureMetaTag('twitter:image', () => LOGO_URL)
    ensureMetaTag('twitter:image:alt', () => 'NEFASS - New Everest Fire and Safety Suppliers')

    ensureCanonical(() => url)

    injectJsonLd({ url, title, routeTitle: def.title, service })
  }, [location.pathname])


  return null
}

