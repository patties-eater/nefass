import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function EmergencyLightsPage() {
  const service = bySlug['emergency-lights']
  return <ServicePageTemplate service={service} allServices={services} />
}

