# NEFASS — Project Reference

## Business Info
| Field | Value |
|-------|-------|
| Full name | New Everest Fire and Safety Suppliers |
| Short name | NEFASS |
| Also known as | Agni Safe & Safety Center |
| Managing Director | Mena Gautam |
| Founded | 2008 |
| Location | Balkumari-3, Lalitpur, Nepal |
| Landline | 01-5201750 |
| Mobile | 9851-120100 / 9841-445648 |
| WhatsApp | 9779851120100 (used for all WA links: `https://wa.me/9779851120100`) |
| Email | jagrirb@gmail.com |
| Hours | Sunday–Friday 9 AM – 6 PM |
| Website | https://nefass.com.np |
| Vercel | https://nefass.vercel.app |
| GitHub | patties-eater/nefass |

---

## Tech Stack
- **React + Vite** (single page app)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme {}` in `src/index.css`. NO `tailwind.config.js`.
- Custom colors defined in `src/index.css`:
  - `--color-brand: #E67E22` → `bg-brand`, `text-brand`
  - `--color-brand-dark: #D35400`
  - `--color-navy: #1B2A4A` → `bg-navy`, `text-navy`
  - `--color-navy-mid: #243B5F`
  - `--font-heading: 'Montserrat'`
- Fonts: Montserrat (headings), Inter (body) — loaded from Google Fonts in `index.html`

---

## File Structure
```
src/
  assets/
    hero.png              ← Vite placeholder, do NOT use as hero banner
    Fire_Extinguisher.png ← 5 red extinguishers on white bg (product shot)
    CCTV_Camera.png       ← Uniview bullet camera on white bg (product shot)
    Smoke_Detector.png    ← White dome smoke detector on white bg (product shot)
    Hydrant_Valve.png     ← Red fire hydrant valve on white bg (product shot)
  components/
    Navbar.jsx            ← Fixed top bar; desktop nav + Call Now on mobile
    MobileNav.jsx         ← Fixed bottom bar (md:hidden); Home/Products/About/Contact
    Hero.jsx              ← Mobile: image banner + CTAs; Desktop: text + decorative bg
    FeaturedProducts.jsx  ← 4 featured products (contain:true flag), View All CTA
    Products.jsx          ← Image circle filters + 2-col mobile grid, load more (shows 4 first)
    About.jsx             ← Mobile: navy banner; MD card always side-by-side; Values 2x2
    Contact.jsx           ← Mobile: Call+WhatsApp strip; form full width; Info panel md+ only
    Footer.jsx            ← Services 2-col on mobile; pb-24 mobile for bottom nav clearance
    WhatsAppButton.jsx    ← Floating pill; bottom-20 on mobile to clear bottom nav
  data/
    products.js           ← Single source of truth for all products + waLink helper
  index.css               ← Tailwind v4 theme
  App.jsx                 ← Component order: Navbar > Hero > FeaturedProducts > Products > About > Contact > Footer > WhatsAppButton > MobileNav
public/
  mena_gautam.png         ← MD photo (served at /mena_gautam.png)
  robots.txt
  sitemap.xml
index.html                ← SEO: title, meta, JSON-LD schemas (WebSite, LocalBusiness, FAQPage), geo tags
```

---

## Products (src/data/products.js)
All products are in one shared array. Both `FeaturedProducts` and `Products` import from here.

| Title | Category | Local Image | featured | contain |
|-------|----------|-------------|----------|---------|
| Fire Extinguishers | Fire Fighting | Fire_Extinguisher.png | ✅ | ✅ |
| Clean Agent Suppression | Fire Fighting | — (Pexels) | ❌ | ❌ |
| Fire Hose Reels | Fire Fighting | Hydrant_Valve.png | ❌ | ✅ |
| Fire Alarm Systems | Alarms & Detection | — (Unsplash) | ✅ | ❌ |
| Smoke & Heat Detectors | Alarms & Detection | Smoke_Detector.png | ❌ | ✅ |
| Fire Control Panels | Alarms & Detection | — (Pexels) | ❌ | ❌ |
| CCTV & Security Systems | Security | CCTV_Camera.png | ✅ | ✅ |
| EPABX Phone Systems | Telecom | — (Pexels) | ✅ | ❌ |
| Handheld Metal Detectors | Security | — (Pexels) | ❌ | ❌ |

- `featured: true` → shown in FeaturedProducts section
- `contain: true` → card uses `object-contain + bg-white` (product shots on white bg)

---

## Category Filter Circles (Products section)
| Label | Image/Icon |
|-------|-----------|
| All | 4-square SVG icon |
| Fire Fighting | Fire_Extinguisher.png |
| Alarms & Detection | Smoke_Detector.png |
| Security | CCTV_Camera.png |
| Telecom | Phone SVG icon |

---

## Mobile Layout Notes
- **Bottom nav** (`MobileNav.jsx`): `md:hidden`, `z-50`, `h-16`
- **Main** has `pb-16 md:pb-0` to clear the bottom nav
- **Footer** has `pb-24 md:pb-10` to clear the bottom nav
- **WhatsApp button**: `bottom-20 md:bottom-6` to clear the bottom nav
- **Navbar height**: `h-14 md:h-16` — Hero uses `pt-14 md:pt-16`
- **Image banner** on Hero mobile: Unsplash fire extinguisher scene photo (NOT hero.png)

---

## SEO (index.html)
- Three JSON-LD schemas: `WebSite`, `LocalBusiness`, `FAQPage`
- Geo tags: `geo.region=NP-3`, lat/long `27.6588, 85.3247`
- `hreflang="en-NP"` and `x-default`
- Canonical: `https://nefass.com.np/`
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt`

---

## Key Conventions
- All WhatsApp links: `` `https://wa.me/9779851120100?text=${encodeURIComponent(...)}` ``
- Contact form `onSubmit` opens WhatsApp with the filled message (no backend)
- Company greeting in WhatsApp messages: `"Hello Agni Safe & Safety Center!"`
- Do NOT use `tailwind.config.js` — this is Tailwind v4
- Product images with white/transparent backgrounds must use `contain: true` in data
- `bg-gradient-to-t` is `bg-linear-to-t` in Tailwind v4
