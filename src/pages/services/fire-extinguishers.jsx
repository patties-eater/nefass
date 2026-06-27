import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug } from '../../data/services'

export default function FireExtinguishersPage() {
  const service = bySlug['fire-extinguishers']
  return <ServicePageTemplate service={service} allServices={Object.values(bySlug)} />
}

