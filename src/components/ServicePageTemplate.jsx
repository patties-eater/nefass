import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'
import logo from '../assets/logo.png'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
      {eyebrow ? <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">{eyebrow}</p> : null}
      <h2 className="font-heading font-black text-3xl md:text-5xl text-navy leading-tight mb-4">{title}</h2>
      {subtitle ? <p className="text-gray-400 text-sm md:text-base leading-relaxed">{subtitle}</p> : null}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-16 bg-gray-100" />
        <div className="w-8 h-1 bg-brand rounded-full" />
        <div className="h-px w-16 bg-gray-100" />
      </div>
    </div>
  )
}

function FAQList({ faqs }) {
  return (
    <div className="grid gap-4">
      {faqs.map(({ q, a }, idx) => (
        <details
          key={q}
          className="group bg-white border border-gray-100 rounded-2xl p-4"
          open={idx === 0}
        >
          <summary className="cursor-pointer list-none flex items-start gap-3">
            <span className="mt-0.5 w-7 h-7 rounded-xl bg-brand/10 border border-brand/20 text-brand font-black text-sm flex items-center justify-center shrink-0">
              {idx + 1}
            </span>
            <h3 className="font-heading font-bold text-navy text-base leading-snug">{q}</h3>
          </summary>
          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  )
}

function TrustStrip() {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-5 md:gap-8 overflow-x-auto">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest shrink-0" style={{ color: 'rgba(255,255,255,0.30)' }}>
          Authorised Supplier of:
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Fire Safety Brands
          </span>
        </span>
      </div>
    </div>
  )
}

function CTAButton({ href, variant = 'primary', children }) {
  const cls =
    variant === 'primary'
      ? 'bg-brand hover:bg-brand-dark text-white'
      : 'border border-navy/10 text-navy hover:bg-navy hover:text-white'
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm ${cls}`}> 
      {children}
    </a>
  )
}

export default function ServicePageTemplate({ service, allServices, onRelatedClick }) {
  const related = (service.relatedServices || []).map((slug) => allServices.find((s) => s.slug === slug)).filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <section id="main-service" className="relative overflow-hidden pt-14 md:pt-16" style={{ background: '#1B2A4A' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 border border-brand/40 bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" style={{ animation: 'pulse 2s infinite' }} />
                NEFASS · Nepal Fire Safety Solutions
              </div>

              <h1 className="font-heading font-black text-[2.1rem] sm:text-5xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.08] mb-5">
                {service.heroHeadline}
              </h1>

              <div className="h-1 w-14 rounded-full mb-5" style={{ background: '#E67E22' }} />

              <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-lg mb-8">{service.heroSubheadline}</p>

              <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
                <a
                  href={service.callToAction?.phone?.href}
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
                  style={{ boxShadow: '0 8px 24px rgba(230,126,34,0.35)' }}
                >
                  <PhoneIcon />
                  {service.callToAction?.phone?.label || 'Call Now'}
                </a>
                <a
                  href={service.callToAction?.contact?.href}
                  className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                >
                  Contact
                  <ArrowRight />
                </a>
                <a
                  href={service.callToAction?.requestQuote?.href}
                  className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                >
                  Request Quote
                  <ArrowRight />
                </a>
              </div>

              <div className="grid grid-cols-4 gap-4 border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
                {[{ value: '18+', label: 'Years of Trust' }, { value: '100+', label: 'Products' }, { value: '14', label: 'Categories' }, { value: '24/7', label: 'Support' }].map(
                  ({ value, label }) => (
                    <div key={label}>
                      <p className="font-heading font-black text-xl md:text-2xl text-brand leading-none mb-1">{value}</p>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        {label}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="hidden md:block w-72 lg:w-96 shrink-0">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <img src={logo} alt="NEFASS logo" className="w-10 h-10 rounded-full bg-white/10" />
                  <div>
                    <p className="text-white font-bold text-sm">New Everest Fire and Safety Suppliers</p>
                    <p className="text-white/60 text-xs">NEFASS · Since 2008</p>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(service.primaryKeywords || []).slice(0, 3).map((k) => (
                    <span key={k} className="text-[0.62rem] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustStrip />
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white" aria-label="Service overview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Overview"
            title="What this service includes"
            subtitle="A practical, compliance-focused approach designed for Nepal’s real premises and safety needs."
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-navy text-lg mb-3">What it is</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{service.overview.whatItIs}</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-navy text-lg mb-3">Why it matters</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{service.overview.whyItMatters}</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-navy text-lg mb-3">Who needs it</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{service.overview.whoNeedsIt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-16 bg-gray-50" aria-label="Benefits">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Benefits"
            title="Professional outcomes for your safety team"
            subtitle="Conversion-focused benefits that match how facilities evaluate fire safety solutions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {service.benefits.map((b) => (
              <div key={b} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-black">
                  ✓
                </div>
                <p className="mt-4 text-navy font-heading font-bold text-base leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products/Solutions */}
      {service.solutions && service.solutions.length ? (
        <section className="py-16 md:py-24 bg-white" aria-label="Products or solutions">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Products / Solutions"
              title="Recommended options"
              subtitle="Categories we typically supply and configure for NEFASS customers in Nepal."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {service.solutions.map((s) => (
                <div key={s.category} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2">{s.category}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Industries */}
      <section className="py-10 md:py-16 bg-gray-50" aria-label="Industries served">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Industries served"
            title="Built for Nepal’s key facilities"
            subtitle="From hospitals to warehouses—NEFASS plans solutions for real operational needs."
          />

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {service.industriesServed.map((i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 text-sm text-navy font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white" aria-label="Process">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Process"
            title="How NEFASS delivers this service"
            subtitle="A clear workflow—from consultation to testing, training and maintenance planning."
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={step} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-black flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="font-heading font-bold text-navy text-base">Step</p>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16 bg-gray-50" aria-label="Frequently asked questions">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions facilities ask before we install"
            subtitle="Practical answers to help you decide quickly and confidently."
          />
          <FAQList faqs={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-24 bg-white" aria-label="Related services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Related services"
            title="Pair this with the right next step"
            subtitle="Enhance safety coverage by combining complementary services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {related.map((rs) => (
              <Link
                key={rs.slug}
                to={`/services/${rs.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base leading-snug">{rs.title}</h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{rs.shortDescription}</p>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center shrink-0">
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Conversion */}
      <section id="quote" className="py-10 md:py-16 bg-brand/5" aria-label="Request quote">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden border border-brand/20 bg-white shadow-sm">
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">Request a Quote</p>
                  <h2 className="font-heading font-black text-3xl md:text-5xl text-navy leading-tight">
                    Get a practical fire safety plan from NEFASS
                  </h2>
                  <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
                    Fast coordination for consultation, supply, installation, testing, and AMC planning across Nepal.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <a href={service.callToAction?.phone?.href} className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                      <PhoneIcon />
                      {service.callToAction?.phone?.label}
                    </a>
                    <a href={service.callToAction?.contact?.href} className="inline-flex items-center gap-2 border border-navy/10 text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                      Contact Us <ArrowRight />
                    </a>
                  </div>

                  <div className="mt-5">
                    <a
                      href={service.callToAction?.whatsapp?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-md shadow-green-500/25"
                    >
                      <span className="font-black">WhatsApp</span>
                      <ArrowRight />
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <p className="font-heading font-bold text-navy text-lg">What you’ll get</p>
                  <ul className="mt-4 space-y-3 text-gray-500 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand font-black flex items-center justify-center">1</span>
                      <span>Recommendation aligned to your facility’s risk profile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand font-black flex items-center justify-center">2</span>
                      <span>Installation, testing, and maintenance planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand font-black flex items-center justify-center">3</span>
                      <span>Support for documentation workflows</span>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={service.callToAction?.email?.href} className="inline-flex items-center gap-2 border border-gray-200 text-navy hover:text-brand font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                      Email
                    </a>
                    <a href={service.callToAction?.phone?.href} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-navy hover:border-brand font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                      <PhoneIcon /> Call
                    </a>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Trust badges</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Since 2008', 'Trained Technicians', 'Testing Included', 'Maintenance Options'].map((t) => (
                        <span key={t} className="text-[0.62rem] font-semibold bg-white border border-gray-200 rounded-full px-3 py-1 text-navy">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Customer testimonial</p>
                    <div className="mt-3 border border-gray-200 rounded-2xl p-4 bg-white">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        “NEFASS helped us choose the right fire safety setup and completed testing on time. The team explained everything clearly.”
                      </p>
                      <p className="text-navy font-bold text-sm mt-3">— Facility Manager, Lalitpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep WhatsAppButton global via Shell; this line is only for bundle-safe usage reference */}
      <Fragment>
        <WhatsAppButton />
      </Fragment>
    </div>
  )
}

