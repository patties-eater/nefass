import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireAlarmSystemsPage() {
  const service = bySlug['fire-alarm-systems']
  return <ServicePageTemplate service={service} allServices={services} />
}

