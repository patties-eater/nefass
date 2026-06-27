import ServicePageTemplate from '../../components/ServicePageTemplate'
import { bySlug, services } from '../../data/services'

export default function AnnualMaintenanceContractsAcmPage() {
  const service = bySlug['annual-maintenance-contracts-amc']
  return <ServicePageTemplate service={service} allServices={services} />
}

