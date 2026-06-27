import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireSafetyConsultationPage() {
  const service = bySlug['fire-safety-consultation']
  return <ServicePageTemplate service={service} allServices={services} />
}

