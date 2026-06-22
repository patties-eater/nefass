import { useState } from 'react'

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: 'Balkumari-3, Lalitpur, Nepal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Landline',
    value: '01-5201750',
    href: 'tel:+97715201750',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    label: 'Mobile',
    value: '9851-120100 / 9841-445648',
    href: 'tel:+9779851120100',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'jagrirb@gmail.com',
    href: 'mailto:jagrirb@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Office Hours',
    value: 'Sunday–Friday: 9 AM – 6 PM',
  },
]

const WA_NUMBER = '9779851120100'

const inputCls = 'w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all duration-150'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const text = [
      `Hello Agni Safe & Safety Center!`,
      ``,
      `Name: ${form.name}`,
      form.email    ? `Email: ${form.email}`        : null,
      form.phone    ? `Phone: ${form.phone}`        : null,
      form.service  ? `Service: ${form.service}`    : null,
      ``,
      `Message: ${form.message}`,
    ].filter(l => l !== null).join('\n')

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">Contact Us</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-navy leading-tight">
            Let's Keep You Safe
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Request a quote, ask about a product, or book a free site assessment.
            We respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Info panel */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-navy mb-6">Get in Touch</h3>
            <div className="space-y-5 mb-8">
              {info.map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-brand mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-navy hover:text-brand transition-colors font-medium">{value}</a>
                    ) : (
                      <p className="text-sm text-navy font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency strip */}
            <div className="mt-auto bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-xs font-bold tracking-wider uppercase text-brand mb-1 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Us Directly
              </p>
              <a href="tel:+97715201750" className="text-navy font-bold hover:text-brand transition-colors block">
                01-5201750
              </a>
              <a href="tel:+9779851120100" className="text-navy font-semibold text-sm hover:text-brand transition-colors">
                9851-120100 / 9841-445648
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <h3 className="font-heading font-bold text-navy text-base">Send us a message via WhatsApp</h3>
            </div>
            <p className="text-gray-400 text-xs mb-5">Fill in the form below. When you click Send, WhatsApp will open with your message ready to send.</p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={onChange} placeholder="Full name" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="98XXXXXXXX" className={inputCls} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service Needed</label>
                  <select name="service" value={form.service} onChange={onChange} className={inputCls}>
                    <option value="">Select a service</option>
                    <option value="Fire Extinguishers">Fire Extinguishers</option>
                    <option value="Fire Alarm System">Fire Alarm System</option>
                    <option value="CCTV & Security">CCTV &amp; Security</option>
                    <option value="EPABX System">EPABX System</option>
                    <option value="Clean Agent Suppression">Clean Agent Suppression</option>
                    <option value="Metal Detectors">Metal Detectors</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us what you need..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-px"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.089-1.371l-.361-.214-3.737.897.933-3.635-.235-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
