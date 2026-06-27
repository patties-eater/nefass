import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireHydrantSystemsPage() {
  const service = bySlug['fire-hydrant-systems']
  return <ServicePageTemplate service={service} allServices={services} />
}

