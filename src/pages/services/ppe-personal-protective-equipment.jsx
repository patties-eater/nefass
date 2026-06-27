import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function PpePersonalProtectiveEquipmentPage() {
  const service = bySlug['ppe-personal-protective-equipment']
  return <ServicePageTemplate service={service} allServices={services} />
}

