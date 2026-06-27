import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireSuppressionSystemsPage() {
  const service = bySlug['fire-suppression-systems']
  return <ServicePageTemplate service={service} allServices={services} />
}

