import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function FireEquipmentMaintenancePage() {
  const service = bySlug['fire-equipment-maintenance']
  return <ServicePageTemplate service={service} allServices={services} />
}

