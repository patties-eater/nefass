import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireSafetyTrainingPage() {
  const service = bySlug['fire-safety-training']
  return <ServicePageTemplate service={service} allServices={services} />
}

