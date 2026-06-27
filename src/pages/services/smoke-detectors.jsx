import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function SmokeDetectorsPage() {
  const service = bySlug['smoke-detectors']
  return <ServicePageTemplate service={service} allServices={services} />
}

