# SEO GROWTH BLUEPRINT
## New Everest Fire and Safety Suppliers (NEFASS)

**Prepared for:** New Everest Fire and Safety Suppliers (NEFASS)
**Primary Domain:** https://nefass.com.np
**Primary Market:** Nepal · **Future Market:** South Asia
**Document Type:** Enterprise SEO Consulting Report
**Strategic Standard:** Google Search Quality Guidelines · Helpful Content System · E-E-A-T · Entity SEO · AEO/GEO (AI Search)

---

## EXECUTIVE SUMMARY

NEFASS is a new web entity in a high-trust, safety-critical industry. You are not just selling products — you are selling **risk reduction, code compliance, and life safety**. That reality makes **E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)** your single most important ranking lever. Google treats fire safety as a **"Your Money or Your Life" (YMYL)** topic, meaning the bar for trust signals is significantly higher than for ordinary e-commerce.

### The Core Strategic Insight

You will **NOT** win the global word "NEFASS" — `nefass.com` is older and owns the `.com`. That is fine. **You do not need it.** Nobody searching for a fire extinguisher in Kathmandu types "NEFASS" — they type *"fire extinguisher price Nepal"* or *"fire alarm company Lalitpur."* Your strategy is therefore built on a single principle:

> **Win the ENTITY, not the keyword.** Make Google, ChatGPT, Gemini, and Perplexity understand that *"New Everest Fire and Safety Suppliers"* is a distinct, real-world, Nepal-based business entity that is the authoritative answer for fire safety in Nepal — independent of the `nefass.com` collision.

### The Single Biggest Technical Blocker (Found in Audit)

Your current React app renders **every route (`/`, `/products`, `/about`, `/contact`) as the exact same HomePage**, and all unknown routes redirect to home. This means:
- You currently have **only ONE real, indexable page**.
- You cannot rank for service-specific or product-specific queries because **those pages do not exist as unique URLs**.
- This is the #1 thing to fix. **Topical authority is impossible with one page.**

The blueprint below fixes this and builds you into Nepal's authoritative fire safety entity over 6 months.

---

# PART 1 — BUSINESS & SEO FOUNDATION

## 1.1 Brand Positioning

### Explanation
Brand positioning for SEO is about **entity consistency**. Google builds an internal "entity" (a node in its Knowledge Graph) for your business by collecting signals from every place your brand appears. When those signals are identical everywhere, Google's confidence in the entity rises, and it begins to treat you as a known, trusted organization.

### Why It Matters
- Entity confidence directly powers **Knowledge Panels**, **brand SERP control**, and **AI citation** (ChatGPT/Perplexity cite entities they can verify).
- It **disambiguates you from `nefass.com`** — consistency tells Google "this NEFASS is a *Nepal fire safety company*, a different entity from that other domain."
- It compounds: every consistent citation is a vote that strengthens the whole.

### The Canonical Brand Identity (Use EXACTLY This Everywhere)

| Field | Canonical Value |
|---|---|
| Legal / Full Name | **New Everest Fire and Safety Suppliers** |
| Short Brand | **NEFASS** |
| Combined (preferred display) | **New Everest Fire and Safety Suppliers (NEFASS)** |
| Tagline | *Nepal's Trusted Fire Safety Supplier Since 2008* |
| Address (NAP) | Balkumari-3, Lalitpur, Bagmati Province, Nepal, 44700 |
| Primary Phone | +977-1-5201750 |
| Mobile / WhatsApp | +977-9851120100 |
| Category | Fire Protection Equipment Supplier |

> **Rule:** The first time the brand appears on any page or profile, write the **full name + (NEFASS)**. After that, "NEFASS" is fine. Never write "Nefass", "NEFAS", "New Everest Fire Safety", or other variants.

### Priority: **HIGH** (foundational — do this first)

### Cross-Channel Consistency Checklist

| Channel | Action | Key Rule |
|---|---|---|
| ☐ Website | Footer + About show full legal name, NAP, founding year | Must match GBP byte-for-byte |
| ☐ Google Business Profile | Name = "New Everest Fire and Safety Suppliers" (NOT keyword-stuffed) | Exact legal name only |
| ☐ Facebook | Page name + About + NAP identical | Add `sameAs` link to site |
| ☐ LinkedIn | Company Page with same NAP, founded 2008 | Link website |
| ☐ Instagram | Bio: brand + city + link in bio | Same handle family |
| ☐ YouTube | Channel "New Everest Fire and Safety Suppliers (NEFASS)" | Link site in About |
| ☐ Business Directories | NepYellowPages, Nepal Telecom dir, etc. | Identical NAP |
| ☐ Invoices | Full legal name + PAN/VAT + NAP | Same address format |
| ☐ Email Signatures | Name, title, phone, site, address block | Same phone format |
| ☐ Brochures / Catalogues | Logo + full name + tagline | Same logo file |
| ☐ Business Cards | Full name + NEFASS + NAP | Same fonts/colors |
| ☐ Vehicle Branding | Logo + "NEFASS" + phone + website | Consistent red (#dc2626) |
| ☐ Product Packaging / Stickers | Brand + phone + site URL | Refill stickers = local citations on the street |

### Examples
- ✅ Correct: "New Everest Fire and Safety Suppliers (NEFASS), Balkumari-3, Lalitpur — +977-1-5201750"
- ❌ Wrong: "Nefass Fire | Best Fire Extinguisher Cheap Nepal #1" (keyword stuffing the brand name = GBP suspension risk)

### Common Mistakes
- Different phone number formats across platforms (Google treats `01-5201750` and `+977 1 5201750` as conflicting unless structured consistently — pick one display format and one E.164 format).
- Keyword-stuffing the Google Business Profile name (against Google guidelines → suspension).
- Using multiple slightly different logos.

### Implementation Tips
- Create a **one-page "Brand Reference Sheet"** (PDF) with exact name, NAP, logo files, hex colors, fonts. Give it to every staff member, printer, and directory.
- Keep an "NAP source-of-truth" spreadsheet listing every place the business is listed so you can audit consistency quarterly.

---

## 1.2 Website SEO Audit (React Application)

> **Audit Context:** The site is a **Vite + React + react-router-dom Single Page Application (SPA)** hosted on Vercel. The current `index.html` has *excellent* hand-crafted meta tags and rich JSON-LD (Organization, WebSite, LocalBusiness, FAQPage, BreadcrumbList) — that is a strong start. However, the **routing architecture critically undermines it.**

### 🔴 CRITICAL FINDING: The Single-Page Problem

Your `App.jsx` does this:
```jsx
<Route path="/" element={<HomePage />} />
<Route path="/products" element={<HomePage />} />   // same component!
<Route path="/about" element={<HomePage />} />      // same component!
<Route path="/contact" element={<HomePage />} />    // same component!
<Route path="*" element={<Navigate to="/" replace />} />  // redirects everything to home
```

**Consequences:**
1. There is functionally **one page**. You cannot rank for "fire alarm Nepal" without a dedicated, unique URL about fire alarms.
2. All meta tags live in static `index.html` → every route serves the **same title/description** → duplicate metadata.
3. `*` → redirect-to-home means there is **no real 404**, and any deep link a backlink points to collapses into the homepage.
4. CSR-only rendering means crawlers and **AI bots that don't execute JavaScript (many do not)** may see an empty `<div id="root">`.

### Why It Matters
Topical authority, the foundation of modern SEO, requires **many interlinked pages each covering one subtopic deeply**. With one page, Google has nothing to build a topic graph from, and you forfeit hundreds of long-tail commercial queries.

### Priority: **HIGH** (this unblocks everything in Parts 2–4)

### Rendering Strategy: CSR vs SSR vs SSG — Recommendation

| Approach | SEO Quality | Effort | Verdict for NEFASS |
|---|---|---|---|
| **CSR** (current) | Poor for new/low-authority sites; AI bots may see blank | Already built | ❌ Inadequate alone |
| **SSR** (server render per request) | Excellent, dynamic | High | Overkill — your content is mostly static |
| **SSG / Pre-rendering** (static HTML per route at build) | Excellent; full HTML in source | Medium | ✅ **RECOMMENDED** |

**Recommendation:** Migrate to **static generation / pre-rendering** so every URL ships fully-formed HTML (with its own title, meta, and JSON-LD) in the initial response. Practical options:
- **Best:** Adopt a meta-framework — **Next.js** (App Router, SSG) or **Astro** (ships zero-JS HTML, ideal for content/marketing sites). Astro is exceptionally strong for a fire-safety content+catalog site.
- **Fastest interim:** Keep Vite but add **`vite-plugin-ssg`** or **`vite-react-ssg`** / pre-render via `@prerenderer` so each route is pre-built to static HTML on Vercel.
- Use **`react-helmet-async`** (or framework head APIs) so each page sets its **own** title, meta description, canonical, OG tags, and JSON-LD.

### Full Technical SEO Audit & Action Table

| Area | Finding / Standard | Action | Priority |
|---|---|---|---|
| **Indexability** | Only home indexable; `*`→home destroys deep URLs | Create unique routes; remove catch-all redirect; add real 404 | 🔴 High |
| **Renderability** | CSR; bots may see empty root | Pre-render/SSG so HTML is in source | 🔴 High |
| **Per-page meta** | All routes share `index.html` meta | Per-route `<head>` via helmet/framework | 🔴 High |
| **Canonicals** | One static canonical to `/` | Self-referencing canonical per URL | 🔴 High |
| **XML Sitemap** | `public/sitemap.xml` exists (likely 1 URL) | Regenerate with every real page; submit to GSC | 🔴 High |
| **robots.txt** | Exists in `public/` | Ensure `Allow: /`, link sitemap, don't block JS/CSS | 🟠 Med |
| **Core Web Vitals** | Google fonts + images load early | Self-host fonts or `display=swap` (done); compress images to WebP/AVIF; set width/height to avoid CLS | 🟠 Med |
| **Image optimization** | PNG assets (heavy) | Convert to WebP/AVIF, `loading="lazy"`, responsive `srcset`, descriptive ALT | 🟠 Med |
| **Lazy loading** | Likely none | Lazy-load below-fold images & route-level code-split | 🟢 Low |
| **Headings** | One H1 per page; logical H2/H3 | Enforce single H1, semantic hierarchy | 🟠 Med |
| **Internal links** | SPA anchor links only | Build crawlable `<a href>` links between real pages | 🔴 High |
| **Breadcrumbs** | Schema stub only (Home) | Visible breadcrumb UI + BreadcrumbList per page | 🟠 Med |
| **Structured Data** | Strong on home | Extend Product/Service/Article schema to all pages | 🔴 High |
| **404 page** | Catch-all redirect (bad) | Real 404 with 404 status, helpful links | 🟠 Med |
| **Redirects** | Ensure `nefass.vercel.app` → `nefass.com.np` 301 | Canonicalize to one primary host | 🟠 Med |
| **HTTPS / Security** | HTTPS via Vercel ✓ | Add security headers (HSTS, CSP) in `vercel.json` | 🟢 Low |
| **URL structure** | Flat | Use clean, lowercase, hyphenated, keyword-rich slugs | 🟠 Med |
| **Duplicate content** | Same content on 4 routes | Eliminate by giving each route unique content | 🔴 High |
| **Accessibility** | Skip-link present ✓ | Alt text, ARIA labels, color contrast, focus states | 🟠 Med |
| **Search Console** | Set up & verify | Submit sitemap, monitor coverage/CWV | 🔴 High |
| **Bing Webmaster** | Set up (also feeds some AI) | Verify + submit sitemap | 🟠 Med |
| **Analytics** | GA4 + GBP Insights | Install GA4, define lead events (call/WhatsApp) | 🟠 Med |

### Recommended `robots.txt`
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /thank-you

# Explicitly welcome AI crawlers (AEO/GEO)
User-agent: GPTBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /

Sitemap: https://nefass.com.np/sitemap.xml
```
> Note: `Google-Extended` allowing means your content can be used in Gemini/AI Overviews. For a brand that *wants* AI visibility, **allow** it.

### Recommended `vercel.json` security headers (snippet)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Common Mistakes
- Blocking `/static/` or JS/CSS in robots.txt (breaks rendering).
- Trusting CSR to "just work" for a brand-new domain with zero authority.
- Submitting a sitemap that lists only the homepage.

### Implementation Priority Summary
1. **Week 1–2:** Convert routes to real, unique pages + per-page meta + real 404 + sitemap + GSC/Bing.
2. **Week 3–4:** Pre-render/SSG; image → WebP; internal linking; breadcrumbs.
3. **Ongoing:** CWV monitoring, schema expansion.

---

## 1.3 Keyword Research

### Strategy
Because the domain is new and YMYL, target **lower-competition, high-intent, locally-modified** keywords first ("Nepal", "Lalitpur", "Kathmandu", "Bagmati"). These convert and build topical authority fastest. Avoid head terms like "fire safety" alone.

### Search Intent Legend
**I** = Informational · **C** = Commercial · **T** = Transactional · **N** = Navigational

### Topical Silo 1 — Fire Extinguishers
| Keyword | Intent | Competition | Cluster Role |
|---|---|---|---|
| fire extinguisher Nepal | C/T | Med | Pillar |
| fire extinguisher price Nepal | T | Med | Money page |
| buy fire extinguisher Lalitpur | T | Low | Local money |
| fire extinguisher refilling Nepal | T | Low | Service |
| ABC fire extinguisher Nepal | C | Low | Type page |
| CO2 fire extinguisher Nepal | C | Low | Type page |
| 4kg fire extinguisher price Nepal | T | Low | Long-tail |
| which fire extinguisher for kitchen | I | Low | Blog → funnel |

### Topical Silo 2 — Fire Alarm & Detection
| Keyword | Intent | Competition |
|---|---|---|
| fire alarm system Nepal | C/T | Med |
| fire alarm installation Nepal | T | Low |
| addressable fire alarm Nepal | C | Low |
| smoke detector price Nepal | T | Low |
| heat detector Nepal | C | Low |
| fire alarm panel Nepal | C | Low |

### Topical Silo 3 — Suppression & Hydrant
| Keyword | Intent | Competition |
|---|---|---|
| fire suppression system Nepal | C | Low |
| FM200 system price Nepal | T | Low |
| server room fire suppression Nepal | C | Low |
| fire hydrant system Nepal | C | Low |
| fire hose reel Nepal | T | Low |

### Topical Silo 4 — Services
| Keyword | Intent | Competition |
|---|---|---|
| fire safety company Nepal | C | Med |
| annual maintenance contract fire Nepal | T | Low |
| fire safety training Nepal | C | Low |
| fire safety consultancy Nepal | C | Low |
| fire safety audit Nepal | C | Low |

### Topical Silo 5 — Local / Geo
fire safety Lalitpur · fire extinguisher Kathmandu · fire alarm Bhaktapur · fire safety supplier Patan · safety equipment Balkumari

### Question / Informational Keywords (AI & Featured Snippets)
- "How often should fire extinguishers be refilled in Nepal?"
- "What type of fire extinguisher for electrical fire?"
- "Fire safety requirements for hotels in Nepal"
- "How many fire extinguishers does an office need?"
- "Nepal National Building Code fire safety requirements"

### Comparison & Buying-Intent
ABC vs CO2 fire extinguisher · FM200 vs Novec 1230 · conventional vs addressable fire alarm · best fire extinguisher for home Nepal

### Zero-Volume / Low-Competition Opportunities (high ROI)
These have little measured volume but **convert** and are easy to rank #1: *"fire extinguisher refilling Balkumari"*, *"fire alarm AMC hospital Nepal"*, *"fire safety equipment for school Lalitpur"*. Own them early.

### Cluster → Page Map
| Silo | Pillar Page | Supporting Pages |
|---|---|---|
| Extinguishers | /fire-extinguishers | /types, /refilling, /price, type pages |
| Alarms | /fire-alarm-systems | /addressable, /smoke-detectors, /installation |
| Suppression | /fire-suppression-systems | /fm200, /server-room |
| Hydrant | /fire-hydrant-systems | /hose-reel, /hose-cabinet |
| Services | /services | /amc, /training, /consultancy, /inspection |
| Local | /fire-safety-lalitpur | /kathmandu, /bhaktapur |

---

# PART 2 — ON-PAGE SEO

> Convention used: Titles ≤ 60 chars where possible; meta descriptions 140–160 chars; one H1 per page.

## 2.1 Homepage `/`
| Element | Recommendation |
|---|---|
| **SEO Title** | New Everest Fire & Safety Suppliers (NEFASS) | Fire Safety Nepal |
| **Meta Description** | NEFASS — New Everest Fire and Safety Suppliers. Nepal's trusted source for fire extinguishers, alarms, suppression & CCTV. Lalitpur. Call 01-5201750. |
| **URL** | https://nefass.com.np/ |
| **H1** | New Everest Fire and Safety Suppliers (NEFASS) — Nepal's Trusted Fire Safety Partner |
| **H2s** | Our Fire Safety Solutions · Why Choose NEFASS · Industries We Serve · Trusted Since 2008 · Get a Free Quote |
| **H3s** | Under each: product/service summaries |
| **Word Count** | 800–1,200 |
| **Primary KW** | fire safety Nepal |
| **Secondary** | fire extinguisher Nepal, fire alarm Nepal, NEFASS |
| **Internal Links** | All pillar pages, About, Contact |
| **External Links** | Nepal National Building Code (gov), NFPA (authority) |
| **ALT example** | "NEFASS technician installing fire alarm panel in Lalitpur office" |
| **Schema** | Organization + WebSite + LocalBusiness (already present ✓) |
| **OG/Twitter** | Present ✓ |
| **CTA** | "Get a Free Fire Safety Quote" + Call + WhatsApp |
| **Trust signals** | "Since 2008", client logos, certifications, review count |

## 2.2 About `/about`
| Element | Value |
|---|---|
| Title | About NEFASS — Fire Safety Experts in Nepal Since 2008 |
| Meta | Meet New Everest Fire and Safety Suppliers (NEFASS). 15+ years protecting Nepal's homes, offices & industries. Our team, mission & certifications. |
| H1 | About New Everest Fire and Safety Suppliers (NEFASS) |
| H2s | Our Story · Our Team & Expertise (E-E-A-T) · Certifications & Standards · Clients We Protect |
| Word Count | 600–900 |
| Schema | AboutPage + Organization + Person (founder Mena Gautam) |
| Trust | Founder bio, photos, certifications, years, real address/map |

> **E-E-A-T note:** The About page is your most important trust asset. Show **real people, real credentials, real photos, real address**. Name technicians and their training. This is what AI engines verify before citing you.

## 2.3 Services `/services`
| Element | Value |
|---|---|
| Title | Fire Safety Services Nepal — Installation, AMC & Training | NEFASS |
| Meta | Fire safety installation, maintenance, AMC, inspection & training across Nepal by NEFASS. Certified technicians. Free site survey. Call 01-5201750. |
| H1 | Fire Safety Services in Nepal |
| H2s | Installation · Maintenance & AMC · Inspection · Consultancy · Training |
| Schema | Service (one per offering) + BreadcrumbList |
| CTA | "Book a Free Site Survey" |

## 2.4 Products `/products`
| Element | Value |
|---|---|
| Title | Fire Safety & Security Products Nepal — Extinguishers, Alarms, CCTV | NEFASS |
| Meta | Browse fire extinguishers, alarms, suppression systems, hydrants, CCTV & PPE. Nepal-wide supply & installation by NEFASS, Lalitpur. |
| H1 | Fire Safety & Security Products in Nepal |
| Schema | ItemList + Product (each item) |
| Internal | Each product → its detail/category page |

## 2.5 Contact `/contact`
| Element | Value |
|---|---|
| Title | Contact NEFASS — Fire Safety Suppliers, Lalitpur Nepal |
| Meta | Contact New Everest Fire and Safety Suppliers (NEFASS), Balkumari-3, Lalitpur. Call 01-5201750 / WhatsApp 9851120100. Free quotes. |
| H1 | Contact New Everest Fire and Safety Suppliers (NEFASS) |
| Schema | LocalBusiness + ContactPoint + embedded Google Map |
| Conversion | Click-to-call, WhatsApp, form, map, hours |

## 2.6 Blog `/blog`
| Element | Value |
|---|---|
| Title | Fire Safety Blog Nepal — Tips, Guides & Regulations | NEFASS |
| Meta | Expert fire safety guides for Nepal: extinguisher tips, building code, prevention & maintenance from NEFASS specialists. |
| H1 | Fire Safety Blog & Resources |
| Schema | Blog + ItemList; each post → Article + FAQPage |

### Reusable Sample Metadata Template
```html
<title>{Primary Keyword} | NEFASS Nepal</title>
<meta name="description" content="{140-160 char benefit + location + CTA + phone}" />
<link rel="canonical" href="https://nefass.com.np/{slug}" />
<meta property="og:title" content="{Title}" />
<meta property="og:description" content="{Description}" />
<meta property="og:image" content="https://nefass.com.np/og/{slug}.jpg" />
<meta property="og:url" content="https://nefass.com.np/{slug}" />
<meta name="twitter:card" content="summary_large_image" />
```

### Breadcrumb JSON-LD Template (per page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nefass.com.np/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nefass.com.np/services" },
    { "@type": "ListItem", "position": 3, "name": "Fire Alarm Systems", "item": "https://nefass.com.np/services/fire-alarm-systems" }
  ]
}
```

---

# PART 3 — SERVICE PAGE STRATEGY

> Each page below follows the same conversion-optimized template. Slugs are nested under `/services/` or `/products/` for clean silo structure. **Reusable Service JSON-LD** appears once at the end.

### 3.1 Fire Extinguishers — `/products/fire-extinguishers`
- **Title:** Fire Extinguishers Nepal — ABC, CO2, Foam & Refilling | NEFASS
- **Meta:** Buy & refill fire extinguishers in Nepal. ABC, CO2, foam & water types. Supply, installation & refilling by NEFASS, Lalitpur. Call 01-5201750.
- **H1:** Fire Extinguishers in Nepal — Supply, Installation & Refilling
- **Outline:** Intro → Types (ABC/CO2/Foam/Water) → Which to choose → Sizes & prices → Refilling service → Installation → Why NEFASS → FAQ → CTA
- **Target KW:** fire extinguisher Nepal, fire extinguisher price Nepal, refilling
- **FAQs:** Which extinguisher for electrical fire? · How often to refill? · Price of 4kg ABC?
- **Internal:** /services/installation, /services/amc, /blog/which-fire-extinguisher
- **Images:** product shots (WebP, alt "4kg ABC fire extinguisher Nepal price")
- **Schema:** Product + Offer + FAQPage + Breadcrumb
- **CTA:** "Get Extinguisher Quote" + WhatsApp

### 3.2 Fire Alarm Systems — `/services/fire-alarm-systems`
- **Title:** Fire Alarm Systems Nepal — Conventional & Addressable | NEFASS
- **Meta:** Fire alarm system supply & installation in Nepal. Conventional & addressable panels, smoke/heat detectors. Free survey by NEFASS. Call 9851120100.
- **H1:** Fire Alarm Systems in Nepal
- **Outline:** What is a fire alarm system → Conventional vs Addressable → Components → Installation process → AMC → Compliance (Nepal code) → FAQ → CTA
- **FAQs:** Conventional vs addressable? · Cost in Nepal? · Mandatory for offices?

### 3.3 Fire Suppression Systems — `/services/fire-suppression-systems`
- **Title:** Fire Suppression Systems Nepal — FM200 & Novec 1230 | NEFASS
- **Meta:** Clean-agent fire suppression for server rooms & data centers in Nepal. FM200, Novec 1230, CO2 systems. Design & install by NEFASS.
- **H1:** Clean Agent Fire Suppression Systems in Nepal
- **FAQs:** FM200 vs Novec 1230? · Suitable for server rooms? · Cost?

### 3.4 Fire Hydrant Systems — `/services/fire-hydrant-systems`
- **Title:** Fire Hydrant Systems Nepal — Design & Installation | NEFASS
- **H1:** Fire Hydrant & Hose Reel Systems in Nepal

### 3.5 Smoke Detectors — `/products/smoke-detectors`
- **Title:** Smoke & Heat Detectors Nepal — Price & Installation | NEFASS

### 3.6 Emergency Lights — `/products/emergency-lighting`
- **Title:** Emergency Lighting Nepal — Exit Signs & Backup Lights | NEFASS

### 3.7 PPE — `/products/ppe`
- **Title:** Fire Safety PPE Nepal — Suits, Gloves, Helmets | NEFASS

### 3.8 Safety Signage — `/products/safety-signage`
- **Title:** Fire Safety Signage Nepal — Exit & Hazard Signs | NEFASS

### 3.9 Fire Doors — `/products/fire-doors`
- **Title:** Fire Rated Doors Nepal — Supply & Installation | NEFASS

### 3.10 Consultation — `/services/fire-safety-consultancy`
- **Title:** Fire Safety Consultancy Nepal — Audit & Compliance | NEFASS

### 3.11 Installation — `/services/installation`
### 3.12 Inspection — `/services/inspection`
### 3.13 Maintenance — `/services/maintenance`
### 3.14 Annual Maintenance Contracts — `/services/amc`
- **Title:** Fire Safety AMC Nepal — Annual Maintenance Contracts | NEFASS
- **H1:** Annual Maintenance Contracts (AMC) for Fire Safety in Nepal

### 3.15 Training — `/services/fire-safety-training`
- **Title:** Fire Safety Training Nepal — Staff Drills & Certification | NEFASS

### 3.16 Refilling Services — `/services/fire-extinguisher-refilling`
- **Title:** Fire Extinguisher Refilling Nepal — All Types | NEFASS

### Industry / Vertical Landing Pages
| Page | Slug | Title |
|---|---|---|
| Industrial Safety | /industries/industrial | Industrial Fire Safety Solutions Nepal | NEFASS |
| Commercial Buildings | /industries/commercial-buildings | Fire Safety for Commercial Buildings Nepal | NEFASS |
| Hospitals | /industries/hospitals | Hospital Fire Safety Systems Nepal | NEFASS |
| Hotels | /industries/hotels | Hotel Fire Safety & Compliance Nepal | NEFASS |
| Schools | /industries/schools | School Fire Safety Solutions Nepal | NEFASS |
| Factories | /industries/factories | Factory Fire Protection Nepal | NEFASS |
| Warehouses | /industries/warehouses | Warehouse Fire Safety Systems Nepal | NEFASS |

> Each vertical page: H1 = "{Industry} Fire Safety in Nepal", outline = risks specific to industry → required systems → Nepal code → our solution → case example → FAQ → CTA. Internal-link to the relevant product/service pages.

### Reusable Service JSON-LD Template
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fire Alarm System Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "New Everest Fire and Safety Suppliers",
    "telephone": "+977-1-5201750",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Balkumari-3",
      "addressLocality": "Lalitpur",
      "addressRegion": "Bagmati Province",
      "addressCountry": "NP"
    }
  },
  "areaServed": { "@type": "Country", "name": "Nepal" },
  "description": "Conventional and addressable fire alarm system design, supply and installation across Nepal.",
  "offers": { "@type": "Offer", "priceCurrency": "NPR", "availability": "https://schema.org/InStock" }
}
```

---

# PART 4 — CONTENT MARKETING: 100 BLOG TOPICS

> Format per topic: **Title — [target keyword] | Intent | Difficulty | Conversion | CTA**. Intent: I/C/Cmp(comparison)/Buy. Difficulty: L/M/H.

### A. Educational (1–12)
1. What is a fire extinguisher and how does it work — [how does a fire extinguisher work] | I | L | Low | "See our extinguishers"
2. Classes of fire explained (A,B,C,D,K) — [classes of fire] | I | L | Low | "Match an extinguisher"
3. How a fire alarm system works — [how fire alarm works] | I | L | Med | "Get a system quote"
4. What is a fire suppression system — [fire suppression system] | I | L | Med | "Protect your server room"
5. Smoke detector vs heat detector — [smoke vs heat detector] | Cmp | L | Med | "Buy detectors"
6. What is a fire hydrant system — [fire hydrant system] | I | L | Med | "Design my hydrant system"
7. Understanding fire safety signage — [fire safety signs] | I | L | Low | "Order signage"
8. What is an AMC for fire safety — [fire safety AMC] | I | L | High | "Start an AMC"
9. PASS technique for using extinguishers — [how to use a fire extinguisher] | I | L | Low | "Book training"
10. What are fire rated doors — [fire rated doors] | I | L | Med | "Get fire doors"
11. Emergency lighting basics — [emergency lighting] | I | L | Med | "Quote emergency lights"
12. Fire safety glossary for Nepal businesses — [fire safety terms] | I | L | Low | "Talk to an expert"

### B. Commercial (13–24)
13. Best fire extinguisher for offices in Nepal — [office fire extinguisher Nepal] | C | L | High | "Get office quote"
14. Fire alarm system cost in Nepal (2025 guide) — [fire alarm price Nepal] | C | M | High | "Free quote"
15. How much does fire extinguisher refilling cost — [refilling cost Nepal] | C | L | High | "Refill now"
16. Choosing a fire safety company in Nepal — [fire safety company Nepal] | C | M | High | "Why NEFASS"
17. FM200 system price guide Nepal — [FM200 price Nepal] | C | L | High | "Quote FM200"
18. CCTV + fire alarm integration for offices — [CCTV fire alarm Nepal] | C | L | High | "Book survey"
19. Fire safety budget for a new building — [fire safety cost] | C | M | High | "Get estimate"
20. AMC vs one-time service: which is cheaper — [fire AMC Nepal] | Cmp | L | High | "Compare AMC"
21. Fire extinguisher sizes & which to buy — [fire extinguisher size guide] | C | L | High | "Buy now"
22. Best smoke detectors for homes in Nepal — [home smoke detector Nepal] | C | L | High | "Order"
23. Metal detector buying guide for hotels — [metal detector hotel Nepal] | C | L | High | "Buy detector"
24. Fire safety equipment checklist for shops — [shop fire safety Nepal] | C | L | High | "Get checklist + quote"

### C. Awareness (25–33)
25. Common causes of fires in Nepali homes | I | L | Low
26. Why fire safety matters for small businesses | I | L | Med
27. Fire statistics in Nepal & what they teach us | I | L | Low
28. The hidden cost of ignoring fire safety | I | L | Med
29. Fire safety myths debunked | I | L | Low
30. How a fire spreads in minutes | I | L | Low
31. Why expired extinguishers are dangerous | I | L | High
32. Top fire hazards in Kathmandu valley | I | L | Med
33. Fire safety as part of ESG/insurance | I | L | Med

### D. Comparison (34–42)
34. ABC vs CO2 fire extinguisher | Cmp | L | High
35. Conventional vs addressable fire alarm | Cmp | L | High
36. FM200 vs Novec 1230 | Cmp | L | High
37. Dry powder vs foam extinguisher | Cmp | L | Med
38. Wired vs wireless fire alarm | Cmp | L | High
39. IP vs analog CCTV for Nepal | Cmp | L | High
40. Sprinkler vs gas suppression | Cmp | L | Med
41. DIY vs professional extinguisher install | Cmp | L | Med
42. AMC vs in-house maintenance | Cmp | L | High

### E. Buying Guides (43–50)
43. Ultimate fire extinguisher buying guide Nepal | C | M | High
44. Complete fire alarm buying guide Nepal | C | M | High
45. CCTV buying guide for Nepali businesses | C | L | High
46. Server room fire protection buying guide | C | L | High
47. Hotel fire safety equipment buying guide | C | L | High
48. School fire safety buying guide | C | L | High
49. Restaurant kitchen fire safety guide | C | L | High
50. Warehouse fire protection buying guide | C | L | High

### F. Industry News (51–55)
51. Nepal fire safety regulation updates 2025 | I | L | Med
52. Recent major fire incidents & lessons | I | L | Low
53. New fire safety technology trends | I | L | Low
54. Fire department initiatives in Nepal | I | L | Low
55. NEFASS project spotlight / case studies | I | L | High

### G. Regulations & Nepal Fire Code (56–63)
56. Nepal National Building Code: fire safety summary | I | M | Med
57. Fire safety requirements for commercial buildings Nepal | I | M | High
58. Fire NOC process in Nepal explained | I | L | High
59. Legal fire safety obligations for employers | I | L | Med
60. Fire safety compliance checklist Nepal | I | L | High
61. How to pass a fire safety inspection | I | L | High
62. Building permit & fire safety in Kathmandu | I | M | Med
63. Fire insurance & equipment compliance | I | L | Med

### H. Maintenance (64–70)
64. How often to service fire extinguishers | I | L | High
65. Fire alarm testing schedule | I | L | High
66. Monsoon maintenance for fire equipment | I | L | High
67. Signs your extinguisher needs refilling | I | L | High
68. Annual fire safety maintenance checklist | I | L | High
69. How to maintain a hydrant system | I | L | Med
70. Battery & backup checks for alarms | I | L | Med

### I. Office Safety (71–74)
71. Office fire evacuation plan template | I | L | High
72. How many extinguishers does my office need | C | L | High
73. Fire warden roles & training | I | L | High
74. Fire safety for co-working spaces | I | L | Med

### J. Industrial Safety (75–78)
75. Fire risks in Nepali factories | I | L | High
76. Industrial fire suppression options | C | L | High
77. Flammable storage safety | I | L | Med
78. Fire safety for manufacturing units | C | L | High

### K. Construction (79–81)
79. Fire safety planning for new buildings | C | M | High
80. Fire safety on construction sites | I | L | Med
81. Integrating fire systems during construction | C | L | High

### L. Schools (82–84)
82. Fire safety checklist for schools Nepal | I | L | High
83. Fire drills for students | I | L | Med
84. Required equipment for school compliance | C | L | High

### M. Hospitals (85–87)
85. Fire safety for hospitals & clinics Nepal | C | L | High
86. Oxygen & fire risk in healthcare | I | L | Med
87. Hospital evacuation planning | I | L | Med

### N. Hotels (88–90)
88. Hotel fire safety compliance Nepal | C | L | High
89. Guest room fire safety standards | I | L | Med
90. Kitchen & laundry fire risks in hotels | I | L | High

### O. Factories & Warehouses (91–93)
91. Warehouse fire suppression strategies | C | L | High
92. Dust & combustible material fire safety | I | L | Med
93. High-rack storage fire protection | C | L | Med

### P. Kitchen Fire Safety (94–95)
94. Kitchen fire safety for restaurants Nepal | C | L | High
95. Best extinguisher for cooking-oil fires | C | L | High

### Q. Electrical Safety (96–97)
96. Preventing electrical fires in Nepal | I | L | Med
97. Electrical fire extinguisher selection | C | L | High

### R. Monsoon Fire Risks (98)
98. Monsoon & electrical fire risks in Nepal | I | L | Med

### S. Nepal Fire Code Deep-Dives (99–100)
99. Fire NOC documents checklist Nepal | I | L | High
100. Fire safety standards for high-rises in Kathmandu | I | M | Med

> **Publishing cadence:** 2–3 posts/week. Lead with high-conversion Commercial + Comparison + Maintenance topics in months 1–2 to drive early leads; layer Educational/Awareness for topical breadth.

---

# PART 5 — LOCAL SEO (NEPAL)

### Why It Matters
For a physical supplier in Lalitpur, **the Google Map Pack and Google Business Profile (GBP) often outrank the organic results** for "fire extinguisher near me" / "fire safety Lalitpur." Local SEO is your fastest path to leads.

### Priority: **HIGH**

### Google Business Profile Checklist
- ☐ Claim & verify GBP for "New Everest Fire and Safety Suppliers"
- ☐ Primary category: **Fire Protection Equipment Supplier**; add secondary: Fire Alarm Supplier, Safety Equipment Supplier, Security System Supplier
- ☐ Exact NAP matching the website footer (byte-for-byte)
- ☐ Service area: Lalitpur, Kathmandu, Bhaktapur + "across Nepal"
- ☐ Hours (Su–Fr 09:00–18:00), holiday hours
- ☐ 20+ photos: storefront, team, products, installations, vehicle branding
- ☐ Products & Services populated with prices
- ☐ Weekly **Google Posts** (offers, tips, new stock)
- ☐ Enable messaging + call button
- ☐ Q&A: seed common questions with answers

### NAP — Single Source of Truth
> New Everest Fire and Safety Suppliers
> Balkumari-3, Lalitpur, Bagmati Province, Nepal 44700
> +977-1-5201750 · +977-9851120100

### Reviews Strategy
- Ask every satisfied customer for a Google review (QR code on invoices/business cards).
- Target 5+ reviews/month; **respond to every review** (positive & negative).
- Never buy fake reviews (detectable, against policy, erodes trust).

### Citations & Nepal Directories
| Directory | Action |
|---|---|
| NepYellowPages.com | List with full NAP |
| Bizserve / Merojob business listings | List |
| Nepal Telecom yellow pages | List |
| Google Maps / Apple Maps / Bing Places | Claim |
| Facebook + Instagram business | Link NAP |
| Local chamber of commerce | Join + list |
| Industry/safety associations | Member listing |

### Location & Geo-Targeted Landing Pages
Create unique pages (NOT doorway duplicates) for each major area you serve:
- `/fire-safety-lalitpur` · `/fire-safety-kathmandu` · `/fire-safety-bhaktapur` · `/fire-safety-patan`
- Each with local content: areas served, local landmarks, local case examples, embedded map, local phone, unique copy.

### Map Pack Optimization
- Consistent NAP everywhere (biggest factor).
- Reviews velocity & rating.
- Proximity + correct primary category.
- Embed Google Map on Contact page; geo schema (already present ✓).

### Local PR
- Sponsor/run free fire-safety demos at schools/markets → local news coverage + backlinks.
- Press releases for safety awareness campaigns (Nepali media outlets).

### Common Mistakes
- Inconsistent NAP across directories (kills Map Pack trust).
- Keyword-stuffed GBP name → suspension.
- Doorway pages (thin duplicate location pages) → Helpful Content penalty.

---

# PART 6 — OFF-PAGE SEO (WHITE-HAT BACKLINKS)

### Philosophy
For YMYL, **link relevance and trust beat link volume**. A single link from a Nepali hospital, university, or government safety page is worth more than 100 generic directories. Build links that *make sense* for a fire safety company.

### Priority: **MEDIUM** (after foundation + content exist)

### Backlink Acquisition Roadmap
| Target | Tactic | Link Type |
|---|---|---|
| Construction companies | Become their fire-safety supplier; "our partners" listing | Partner |
| Architects / Engineering firms | Provide spec sheets they cite; guest expertise | Resource |
| Consultants | Co-author compliance guides | Editorial |
| Hospitals | Case studies (with permission) + supplier page | Reference |
| Schools / Universities | Free fire-drill workshops → news + .edu mentions | PR/Resource |
| Government / Municipality | Vendor registration, safety campaign partnerships | Authority |
| Hotels | Supplier/partner listings | Partner |
| Factories | Project case studies | Reference |
| Safety organizations / associations | Membership + directory profile | Authority |
| Manufacturers (Garrett, Uniview, etc.) | "Authorized dealer Nepal" listing | Brand |
| Media (Nepali news) | Expert commentary on fire incidents/safety | Editorial |
| Business directories | Quality Nepal directories only | Citation |

### White-Hat Tactics
- **Digital PR:** Offer expert quotes when fires make the news; publish original Nepal fire-safety data/checklists others cite.
- **Linkable assets:** "Nepal Fire Safety Compliance Checklist (PDF)", "Building Fire NOC Guide" — genuinely useful → earns links.
- **Partnerships:** "Authorized dealer" pages from manufacturers.
- **Guest articles** on construction/safety blogs with author bio link.
- **HARO-style** expert sourcing for Nepali/South Asian publications.

### Strictly Avoid
- ❌ Paid link schemes, PBNs, link farms, comment spam, irrelevant directories, exact-match anchor spam.

### Anchor Text Guidance
Keep natural: mostly brand ("New Everest Fire and Safety Suppliers", "NEFASS"), URL, and generic ("read more"); only occasionally partial-match ("fire safety supplier in Nepal").

---

# PART 7 — AI SEARCH OPTIMIZATION (AEO / GEO)

### Why It Matters
ChatGPT, Gemini, Google AI Overviews, Perplexity, Claude, and Copilot increasingly answer "who supplies fire alarms in Nepal?" directly. They cite **verifiable entities with structured, machine-readable, credible content**. Your existing schema is a head start — now make every page AI-citable.

### Priority: **HIGH** (this is the future of discovery)

### Entity SEO & Knowledge Graph
- Maintain consistent Organization + LocalBusiness schema (✓ present) across ALL pages.
- Add `sameAs` to **every** verified profile (Facebook, LinkedIn, YouTube, Instagram, GBP) — these are the edges that build your Knowledge Graph node.
- Create/claim a **Wikidata** entry once you have independent citations (news, directories) — a powerful entity anchor that disambiguates you from `nefass.com`.
- Use consistent founding date (2008), founder (Mena Gautam), and address everywhere.

### Schema Coverage (extend beyond home)
| Page type | Schema |
|---|---|
| Home | Organization, WebSite, LocalBusiness (✓) |
| Service | Service + Breadcrumb + FAQPage |
| Product | Product + Offer + AggregateRating |
| Blog post | Article + author (Person w/ credentials) + FAQPage |
| Industry | Service + FAQPage |

### Answer-Engine Optimization Patterns
- **Answer blocks:** Open each article with a 40–60 word direct answer to the title question (AI lifts these). Then go deep.
- **FAQ blocks** with real questions + concise answers (FAQPage schema).
- **Definition + key facts** near the top (entity, price ranges, location).
- **Tables & lists** — machine-readable, frequently cited.
- **Semantic HTML:** proper `<article>`, `<section>`, `<h1–h3>`, `<nav>`, `<address>`.

### Topical Authority & Freshness
- Cover the full fire-safety topic map (Parts 3–4) so engines see you as the Nepal authority.
- Add "Last updated" dates; refresh price/regulation posts.
- Cite authoritative sources (NFPA, Nepal Building Code) — borrowed credibility.

### Source Credibility (E-E-A-T for AI)
- Author bylines with real credentials ("Reviewed by [name], certified fire safety technician").
- Real address, phone, photos, registration/PAN — verifiable existence.
- Consistent NAP + citations → AI trusts you're a real Nepal business.

### Machine-Readable Sample: Article + FAQ JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fire Alarm System Cost in Nepal (2025 Guide)",
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "author": { "@type": "Person", "name": "Mena Gautam", "jobTitle": "Fire Safety Specialist" },
  "publisher": {
    "@type": "Organization",
    "name": "New Everest Fire and Safety Suppliers",
    "logo": { "@type": "ImageObject", "url": "https://nefass.com.np/logo.png" }
  },
  "mainEntityOfPage": "https://nefass.com.np/blog/fire-alarm-cost-nepal"
}
```

### Crawler Access
- Allow GPTBot, PerplexityBot, Google-Extended, ClaudeBot in robots.txt (see Part 1.2) so your content can be cited.

---

# PART 8 — 6-MONTH IMPLEMENTATION ROADMAP

> KPIs are realistic for a brand-new YMYL domain in Nepal. Treat ranking/traffic goals as directional targets.

## Month 1 — Foundation & Technical Fix
| Area | Tasks |
|---|---|
| Technical | Convert SPA to real multi-page (unique routes + per-page meta); remove catch-all redirect; add real 404; pre-render/SSG; regenerate sitemap |
| Setup | Verify Google Search Console + Bing Webmaster; install GA4 w/ call & WhatsApp events; submit sitemap |
| Local | Claim & fully optimize GBP; lock NAP source-of-truth; create Brand Reference Sheet |
| Content | Publish Home/About/Services/Contact final copy + 4 cornerstone blogs |
| KPIs | Site fully indexed (all pages in GSC), GBP live, CWV pass |
| Goals | Indexed pages: 1 → 15+; first GBP impressions |

## Month 2 — On-Page & Service Pages
| Area | Tasks |
|---|---|
| Technical | Schema on all pages; breadcrumbs; image → WebP; internal-link map |
| Content | Launch all core service + product pages (Part 3); 8–10 blog posts |
| Local | 10+ Nepal citations; first 10 Google reviews; weekly GBP posts |
| Links | Manufacturer "authorized dealer" listings; 2 partner links |
| KPIs | Indexed pages 30+; Map Pack appearances for "fire safety Lalitpur" |
| Goals | First organic leads (calls/WhatsApp); 10 reviews |

## Month 3 — Content Engine & Authority
| Area | Tasks |
|---|---|
| Technical | Fix any CWV/coverage issues; add location pages |
| Content | 10–12 blogs (Commercial + Comparison + Maintenance first) |
| Local | Geo landing pages (Lalitpur/Kathmandu/Bhaktapur); 5+ new reviews |
| Links | 1 linkable asset (Compliance Checklist PDF) + outreach to 10 partners |
| Perf | Compress/lazy-load; Lighthouse 90+ mobile |
| KPIs | Top-10 for 5+ long-tail local KWs; traffic +50% MoM |
| Goals | 20–30 organic leads/month |

## Month 4 — Local Domination & PR
| Area | Tasks |
|---|---|
| Local | Free fire-safety demo at a school/market → local PR + backlink |
| Content | 10 blogs (Regulations + Industry verticals) |
| Links | Digital PR pitch to Nepali media; 3–5 new editorial/partner links |
| AI | Add answer blocks + FAQ schema sitewide; allow AI crawlers; pursue Wikidata |
| KPIs | Knowledge Panel candidacy; AI engines begin citing/finding NEFASS |
| Goals | Map Pack top-3 for "fire safety Lalitpur"; 40+ leads/month |

## Month 5 — Topical Authority & Conversion
| Area | Tasks |
|---|---|
| Content | 10 blogs (industry deep-dives: hospitals/hotels/factories) |
| Conversion | CRO: quote forms, click-to-call tracking, trust badges, case studies |
| Links | 5+ relevant links (hospitals/schools/associations) |
| Local | 5+ reviews; refresh GBP products/posts |
| KPIs | Top-10 for several "{service} Nepal" head-ish terms; rising AI citations |
| Goals | 60+ leads/month; brand SERP fully owned in Nepal |

## Month 6 — Scale & Measure
| Area | Tasks |
|---|---|
| Content | 10 blogs; refresh top performers; build comparison hub |
| Technical | Full audit re-run; fix decay; expand schema (HowTo/Video) |
| Links | Continue PR + partnerships (target 20+ quality links total) |
| AI/Entity | Confirm Knowledge Panel; verify AI citations across ChatGPT/Perplexity/Gemini |
| KPIs | #1 in Nepal for brand + several commercial KWs; CWV all green |
| Goals | 80–100+ leads/month; established as Nepal's authoritative fire-safety entity |

### 6-Month Target Summary
| Metric | Start | Month 6 Target |
|---|---|---|
| Indexed pages | 1 | 60+ |
| Organic keywords ranking | ~5 | 200+ |
| Map Pack (Lalitpur fire terms) | none | Top 3 |
| Google reviews | 0 | 40+ |
| Quality backlinks | few | 20+ |
| Monthly organic leads | ~0 | 80–100+ |
| AI engine citation | none | Cited by ≥2 engines |
| Brand SERP control (Nepal) | weak | #1 for "New Everest Fire and Safety Suppliers" + "NEFASS Nepal" |

---

## CLOSING STRATEGIC NOTES

1. **Win the entity, ignore the `.com` collision.** You don't need global "NEFASS" — you need to be Nepal's verified fire-safety authority. Schema + consistent NAP + content depth + reviews achieve this.
2. **Fix the one-page architecture first.** Everything else is blocked until each service/product/topic has its own indexable, pre-rendered URL.
3. **E-E-A-T is your moat in YMYL.** Real people, real credentials, real address, real reviews, real case studies. This is also exactly what AI engines verify before citing you.
4. **Local + AI are your fastest wins.** GBP/Map Pack drives leads now; AEO/GEO future-proofs discovery.
5. **Stay white-hat.** No keyword stuffing, no spam links, no doorway pages. Authority compounds; shortcuts get penalized — especially in YMYL.

*Prepared as an enterprise SEO consulting deliverable for New Everest Fire and Safety Suppliers (NEFASS). Execute in priority order; review KPIs monthly in Google Search Console, GA4, and GBP Insights.*
