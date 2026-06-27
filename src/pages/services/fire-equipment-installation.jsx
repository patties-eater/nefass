import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireEquipmentInstallationPage() {
  const service = bySlug['fire-equipment-installation']
  return <ServicePageTemplate service={service} allServices={services} />
}

