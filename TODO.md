# NEFASS SEO Roadmap — Phase 3 (TODO)

## Step 1: Repo understanding (completed)
- Reviewed routing, existing SEO, and current homepage/components.

## Step 2: Create Phase 3 components (new)
- [ ] src/components/ServicesOverview.jsx
- [ ] src/components/IndustriesWeServe.jsx
- [ ] src/components/WhyChooseNEFASS.jsx
- [ ] src/components/Testimonials.jsx
- [ ] src/components/HomeFAQ.jsx
- [ ] src/components/FinalCTA.jsx
- [ ] src/components/StickyRequestQuote.jsx

## Step 3: Homepage optimization (existing files)
- [ ] Update src/components/Hero.jsx: H1 + CTAs (Request a Quote => #contact), emergency call button, trust section
- [ ] Update src/App.jsx to insert new sections in homepage order
- [ ] Ensure anchor ids: #services, #industries, #testimonials, #faq, #final-cta

## Step 4: About page expansion
- [ ] Update src/components/About.jsx: overview/mission/vision/values/industries/why/commitment/CTA
- [ ] Add About structured data (JSON-LD) via SEO or component

## Step 5: Contact page improvements
- [ ] Update src/components/Contact.jsx: add Google Maps placeholder + FAQs section + emergency messaging
- [ ] Add Contact page schema JSON-LD if appropriate

## Step 6: Navigation + internal linking
- [ ] Update src/components/Navbar.jsx: add Services + Products + Industries links to route/anchors
- [ ] Add internal links among Home/Services/Products/About/Contact

## Step 7: Products hash-to-category selection (conversion + UX)
- [ ] Update src/components/Products.jsx to auto-select category from location.hash

## Step 8: SEO + accessibility + performance
- [ ] Update src/seo/SEO.jsx: homepage title/description alignment + optional home JSON-LD expansion
- [ ] Verify one H1 per page and heading hierarchy
- [ ] Run npm build and fix any lint/build errors

## Step 9: Validation checklist
- [ ] Verify all routes work
- [ ] Verify metadata uniqueness
- [ ] Verify structured data renders (Home FAQ + Testimonials placeholders)
- [ ] Verify internal links
- [ ] Confirm build passes


