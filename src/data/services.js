// Single source of truth for all commercial service pages
// Slugs are used for routing and for SEO/structured data.

const SITE_SERVICE_BASE = '/services'

const commonIndustries = [
  'Commercial Buildings',
  'Hotels',
  'Hospitals',
  'Schools',
  'Warehouses',
  'Factories',
  'Apartments',
]

const nepaliContactIndustriesNote =
  'Suitable for Nepal’s commercial buildings and growing institutional facilities across Lalitpur, Kathmandu Valley, and beyond.'

function makeBreadcrumb(title) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: `${SITE_SERVICE_BASE}/` },
    { label: title, href: '' },
  ]
}

const phoneCta = {
  href: 'tel:+97715201750',
  label: 'Call 01-5201750',
}

const emailCta = {
  href: 'mailto:jagrirb@gmail.com',
  label: 'Email us',
}

const requestQuoteCta = {
  href: '#quote',
  label: 'Request Quote',
}

const contactCta = {
  href: '/contact',
  label: 'Contact Us',
}

const baseCallToAction = {
  phone: phoneCta,
  email: emailCta,
  requestQuote: requestQuoteCta,
  contact: contactCta,
  whatsapp: {
    // WhatsAppButton already exists globally; this is page-local text CTA.
    href: `https://wa.me/9779851120100?text=${encodeURIComponent(
      'Hello NEFASS, I need a quote for fire safety services. Please contact me.'
    )}`,
    label: 'WhatsApp for a fast reply',
  },
}

const services = [
  {
    slug: 'fire-extinguishers',
    title: 'Fire Extinguishers (Supply, Refilling & Replacement)',
    seoTitle: 'Fire Extinguishers in Nepal | NEFASS Supply & Refilling',
    metaDescription:
      'Buy and refill ABC, CO₂, Foam and more fire extinguishers in Nepal. NEFASS supplies certified extinguishers with inspection, placement guidance, and fast service.',
    shortDescription:
      'Certified fire extinguishers supplied, refilled, and replaced with proper guidance for premises in Nepal.',
    heroHeadline: 'Fire Extinguishers for Offices, Homes & Businesses',
    heroSubheadline:
      'Proper extinguisher type, correct placement, and reliable refilling—so your team is ready when seconds matter.',
    overview: {
      whatItIs:
        'Fire extinguishers are portable first-response firefighting devices designed for small, fast suppression in the early stage of a fire.',
      whyItMatters:
        'Correct extinguisher selection and service reduces fire damage, supports safety compliance, and improves staff readiness.',
      whoNeedsIt:
        'Any facility that stores or uses combustibles—especially commercial offices, warehouses, hotels, and apartments.',
    },
    benefits: [
      'Compliance support for fire safety requirements',
      'Faster response with correct extinguisher type',
      'Certified products where applicable',
      'Professional installation guidance for placement',
      'Refilling and maintenance by trained technicians',
      'Reliable after-sales service across Nepal',
    ],
    solutions: [
      {
        category: 'ABC Dry Powder',
        description: 'Multi-purpose protection for most common fire classes.',
      },
      {
        category: 'CO₂ (Carbon Dioxide)',
        description: 'Suitable for electrical equipment and sensitive areas.',
      },
      {
        category: 'Foam Extinguishers',
        description: 'Effective for flammable liquid hazards.',
      },
      {
        category: 'Clean Agent Options',
        description: 'For low-residue protection for electronics and server rooms.',
      },
      {
        category: 'Water & Wet Chemical',
        description: 'For specific hazard types with trained selection.',
      },
    ],
    industriesServed: commonIndustries.concat(['Restaurant kitchens & commercial cooking areas']),
    processSteps: [
      'Consultation & safety requirement check',
      'Site assessment & extinguisher count/placement plan',
      'Product recommendation (ABC/CO₂/Foam/Clean Agent)',
      'Supply & on-site mounting',
      'Testing/inspection & documentation support',
      'Refilling schedule & maintenance guidance',
    ],
    faqs: [
      {
        q: 'Which fire extinguisher type is best for offices?',
        a: 'Most offices require ABC dry powder for general hazards, plus CO₂ for electrical panels. NEFASS helps you choose the right mix based on your layout and risks.',
      },
      {
        q: 'Do you provide refilling services for existing extinguishers?',
        a: 'Yes. NEFASS supports refilling and replacement based on condition and compliance needs. We also advise on correct placement and readiness checks.',
      },
      {
        q: 'How many fire extinguishers should a building have?',
        a: 'The number depends on area, risk level, and coverage. During assessment, we prepare a placement plan for each floor/zone.',
      },
      {
        q: 'Can you recommend extinguishers for server rooms?',
        a: 'Yes. For sensitive equipment we suggest clean agent options where appropriate and provide guidance for safe coverage.',
      },
      {
        q: 'Do you help with inspection and record keeping?',
        a: 'We provide inspection/testing and support documentation workflows so your facility stays prepared for audits and internal safety checks.',
      },
      {
        q: 'Do you supply extinguishers across Nepal?',
        a: 'Yes. NEFASS supplies and supports service requests across Nepal, with strong coverage around Lalitpur and Kathmandu Valley.',
      },
    ],
    relatedServices: [
      'fire-alarm-systems',
      'smoke-detectors',
      'fire-suppression-systems',
      'fire-equipment-installation',
      'fire-equipment-maintenance',
    ],
    primaryKeywords: ['fire extinguisher', 'buy fire extinguisher Nepal', 'fire extinguisher refilling Nepal'],
    secondaryKeywords: ['ABC extinguisher', 'CO₂ fire extinguisher', 'foam extinguisher', 'dry powder extinguisher'],
    imageAlt: 'Fire extinguisher supply and refilling in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Extinguishers', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-alarm-systems',
    title: 'Fire Alarm Systems (Design, Supply & Installation)',
    seoTitle: 'Fire Alarm Systems in Nepal | NEFASS Installation',
    metaDescription:
      'Design and install fire alarm systems in Nepal with professional placement, certified components, testing, and staff handover for reliable early warning.',
    shortDescription:
      'Fire detection and alarm systems engineered for early warning in Nepal’s commercial and institutional buildings.',
    heroHeadline: 'Early Warning with Reliable Fire Alarm Systems',
    heroSubheadline:
      'From control panels to detectors and sounders—NEFASS builds alarm systems that trigger correctly and stay dependable.',
    overview: {
      whatItIs:
        'Fire alarm systems detect smoke/heat and activate alarms to alert occupants immediately, supporting evacuation and emergency response.',
      whyItMatters:
        'Early detection reduces casualties and loss. Testing and professional configuration keep alarms accurate over time.',
      whoNeedsIt:
        'Hotels, hospitals, offices, schools, warehouses, and other facilities needing compliant and dependable evacuation alerts.',
    },
    benefits: [
      'Improved evacuation readiness with early alerts',
      'Professional design for your building zones',
      'Reliable components and system configuration',
      'Testing, documentation, and handover support',
      'Reduced false alarms through correct placement',
      'Ongoing maintenance options available',
    ],
    solutions: [
      { category: 'Control Panels', description: 'Centralized monitoring for multiple zones.' },
      { category: 'Fire Detectors', description: 'Smoke/heat detection for different hazard types.' },
      { category: 'Sounders & Visual Alarms', description: 'Audible and visual alerts for all occupants.' },
      { category: 'Manual Call Points', description: 'Immediate activation for staff response.' },
      { category: 'Zoning & Cabling', description: 'Proper layouts for predictable coverage.' },
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'Consultation and requirement mapping',
      'Site survey and zoning plan',
      'System recommendation & component selection',
      'Installation and commissioning',
      'Testing (functional and signal verification)',
      'User handover and maintenance schedule',
    ],
    faqs: [
      { q: 'Do you design fire alarm systems or only supply equipment?', a: 'NEFASS offers both design support and installation/commissioning so the system works as intended.' },
      { q: 'Will the system work with our building layout?', a: 'Yes. We create zones and placement plans based on your floors, exits, and risk areas.' },
      { q: 'How do you reduce false alarms?', a: 'Correct detector type selection, placement height, and configuration help reduce nuisance alarms. We test and adjust during commissioning.' },
      { q: 'Can you install both wired and suitable alternatives?', a: 'We recommend the appropriate approach for your building needs and compliance expectations. During the survey we confirm the best fit.' },
      { q: 'Do you provide maintenance after installation?', a: 'Yes. We can provide ongoing maintenance and Annual Maintenance Contracts (AMC) for consistent readiness.' },
      { q: 'How long does installation take?', a: 'Timeline depends on building size and complexity. We provide an installation plan after survey.' },
    ],
    relatedServices: [
      'smoke-detectors',
      'fire-suppression-systems',
      'fire-equipment-installation',
      'annual-maintenance-contracts-amc',
      'fire-safety-consultation',
    ],
    primaryKeywords: ['fire alarm system', 'fire alarm installation Nepal', 'fire alarm maintenance Nepal'],
    secondaryKeywords: ['control panel', 'smoke detector', 'manual call point', 'zoning', 'fire sounder'],
    imageAlt: 'NEFASS fire alarm systems installation in Nepal',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Alarm Systems', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-suppression-systems',
    title: 'Fire Suppression Systems (Gas, Clean Agent & More)',
    seoTitle: 'Fire Suppression Systems in Nepal | Clean Agent Solutions',
    metaDescription:
      'Install fire suppression systems in Nepal for server rooms, industrial hazards, and sensitive areas. Professional design, commissioning, testing, and maintenance.',
    shortDescription:
      'High-impact suppression systems that protect valuable assets and reduce fire escalation.',
    heroHeadline: 'Protect Assets with Fire Suppression Systems',
    heroSubheadline:
      'Fast-acting suppression for sensitive spaces—engineered for correct discharge, coverage, and safe operation.',
    overview: {
      whatItIs:
        'Fire suppression systems detect and suppress fires using suppression agents (clean agents, clean agent systems, and other engineered solutions).',
      whyItMatters:
        'Suppression limits damage, helps protect electronics and machinery, and supports emergency response planning.',
      whoNeedsIt:
        'Facilities with critical equipment: server rooms, control rooms, warehouses with valuable stock, and industrial spaces.',
    },
    benefits: [
      'Reduced fire damage to equipment and inventory',
      'Engineered agent selection for your hazard type',
      'Professional commissioning and testing',
      'Clear system handover and readiness planning',
      'Compatible with detection and alarm strategies',
      'Maintenance options to keep systems reliable',
    ],
    solutions: [
      { category: 'Clean Agent Systems', description: 'Low residue options for sensitive electronics.' },
      { category: 'Clean Agent Suppression', description: 'Engineered discharge for room protection.' },
      { category: 'Specialty Suppression', description: 'Selection depends on hazard assessment.' },
    ],
    industriesServed: commonIndustries.concat(['Server rooms & IT rooms', 'Electrical control rooms', 'Industrial production floors']),
    processSteps: [
      'Safety consultation & hazard assessment',
      'Room/zone design and agent recommendation',
      'Component supply and engineered layout',
      'Installation and system connection',
      'Commissioning and performance testing',
      'Training and maintenance plan',
    ],
    faqs: [
      { q: 'Are clean agent systems safe for electronics?', a: 'Yes—clean agent solutions are commonly selected for protecting electronics where low residue and safe discharge behavior are required.' },
      { q: 'Do you coordinate suppression with fire alarms?', a: 'Yes. Suppression systems work best when integrated with detection and alarm strategies, which we design during planning.' },
      { q: 'How do you choose the right suppression approach?', a: 'We evaluate the hazard type, room volume, occupancy constraints, and asset sensitivity to recommend the best-fit solution.' },
      { q: 'Do you provide testing and documentation?', a: 'We support commissioning/testing and handover so your team understands readiness and operating steps.' },
      { q: 'What about maintenance of suppression systems?', a: 'NEFASS can provide periodic maintenance and AMC options to keep the system ready year-round.' },
      { q: 'Can you install suppression in existing buildings?', a: 'In many cases yes. After site inspection, we confirm feasibility and best configuration.' },
    ],
    relatedServices: [
      'fire-alarm-systems',
      'smoke-detectors',
      'fire-equipment-maintenance',
      'annual-maintenance-contracts-amc',
      'fire-safety-consultation',
    ],
    primaryKeywords: ['fire suppression system', 'clean agent suppression Nepal', 'FM200 Nepal', 'Novec 1230 Nepal'],
    secondaryKeywords: ['server room suppression', 'agent discharge system', 'engineered suppression'],
    imageAlt: 'Fire suppression systems installation in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Suppression Systems', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-hydrant-systems',
    title: 'Fire Hydrant Systems (Pumps, Hydrants & Valves)',
    seoTitle: 'Fire Hydrant Systems in Nepal | NEFASS Installation',
    metaDescription:
      'Design and install fire hydrant systems in Nepal with pumps, hydrants, valves, and layout planning for reliable firefighting water supply.',
    shortDescription:
      'Hydrant systems built for dependable water supply and fast response for commercial premises.',
    heroHeadline: 'Reliable Fire Hydrant Systems for Fast Response',
    heroSubheadline:
      'Proper layout, correct pump support, and tested components—so hydrants perform when needed.',
    overview: {
      whatItIs:
        'A fire hydrant system includes pumps, valves, hydrants, hoses/connections, and controlled water supply designed for firefighting use.',
      whyItMatters:
        'Reliable hydrant performance supports effective response and reduces spread during early fire stages.',
      whoNeedsIt:
        'Warehouses, factories, large commercial buildings, and multi-tenant properties with higher fire load potential.',
    },
    benefits: [
      'Engineered water supply layout for your site',
      'Professional installation of pumps, valves & hydrant points',
      'Testing and readiness checks',
      'Compatible with firefighting training and procedures',
      'Reduced downtime through maintenance planning',
      'Supports safety compliance workflows',
    ],
    solutions: [
      { category: 'Hydrant Valves & Fittings', description: 'Reliable components for controlled flow.' },
      { category: 'Fire Hoses & Connections', description: 'Correct hose reel/cabinet integration where required.' },
      { category: 'Pump Support', description: 'Where needed, installed with correct integration.' },
    ],
    industriesServed: commonIndustries.concat(['Industrial premises', 'Warehouses & logistics centers', 'Commercial buildings with shared facilities']),
    processSteps: [
      'Consultation and site water supply review',
      'Hydrant map and coverage plan',
      'Component recommendation (valves, hydrants, fittings)',
      'Installation and integration',
      'Testing: flow/pressure checks and verification',
      'Training and maintenance schedule',
    ],
    faqs: [
      { q: 'Do hydrant systems require pumps?', a: 'Often yes for reliable pressure depending on site conditions. After inspection, NEFASS recommends the correct pump/connection approach.' },
      { q: 'Can you install hydrants in existing buildings?', a: 'Yes. Feasibility depends on water supply, space, and routing. We confirm during site inspection.' },
      { q: 'How do you plan hydrant placement?', a: 'We plan based on coverage needs, distances, and facility layout to ensure practical accessibility for response teams.' },
      { q: 'Do you provide hoses and fittings?', a: 'We supply and recommend the appropriate hoses/connections and integrate them where required.' },
      { q: 'Do you maintain hydrant systems?', a: 'Yes. We offer maintenance and AMC options to keep valves, fittings, and readiness checks consistent.' },
      { q: 'Is testing included?', a: 'Commissioning includes verification steps such as flow/pressure checks based on the installed configuration.' },
    ],
    relatedServices: [
      'fire-equipment-installation',
      'fire-equipment-maintenance',
      'annual-maintenance-contracts-amc',
      'fire-safety-training',
    ],
    primaryKeywords: ['fire hydrant system', 'hydrant valve Nepal', 'fire hydrant installation Nepal'],
    secondaryKeywords: ['fire hose pipe Nepal', 'pump and valves', 'hydrant layout'],
    imageAlt: 'Fire hydrant system installation in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Hydrant Systems', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'smoke-detectors',
    title: 'Smoke Detectors (Detection & Placement)',
    seoTitle: 'Smoke Detectors in Nepal | NEFASS Supply & Installation',
    metaDescription:
      'Supply and install smoke detectors in Nepal with correct placement and testing. Improve early warning reliability for offices, schools, hotels, and hospitals.',
    shortDescription:
      'Smoke detector solutions designed for early warning and dependable detection in Nepal’s facilities.',
    heroHeadline: 'Dependable Smoke Detection for Early Warning',
    heroSubheadline:
      'We help you choose the right detector type and placement to maximize reliability and reduce nuisance alarms.',
    overview: {
      whatItIs:
        'Smoke detectors sense smoke particles and send signals to control panels or alarms to trigger alerts for evacuation.',
      whyItMatters:
        'Early warning helps prevent fire growth and supports prompt emergency response.',
      whoNeedsIt:
        'Homes, offices, schools, hotels, and hospitals—especially where evacuation time matters.',
    },
    benefits: [
      'Correct placement for realistic smoke coverage',
      'Improved reliability through testing',
      'Support for alarm system integration',
      'Reduced false alarms using appropriate detector selection',
      'Professional installation and handover',
      'Maintenance options to keep systems ready',
    ],
    solutions: [
      { category: 'Smoke Detectors', description: 'Engineered detection for your risk profile.' },
      { category: 'Alarm Integration', description: 'Compatible setup with fire alarm panels.' },
      { category: 'Testing & Commissioning', description: 'Functional verification for dependable operation.' },
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'Consultation and area assessment',
      'Detector type recommendation based on hazards',
      'Placement plan and installation',
      'System integration (when needed)',
      'Testing and signal verification',
      'Maintenance schedule recommendation',
    ],
    faqs: [
      { q: 'Which rooms need smoke detectors?', a: 'Typically hallways, bedrooms, escape routes, and any area with combustible materials. The plan depends on occupancy and layout.' },
      { q: 'Do you install smoke detectors alone or as part of a fire alarm system?', a: 'Both options are available. We can install detectors alone or integrate them into a complete alarm system.' },
      { q: 'How do you reduce false alarms?', a: 'We select appropriate detector types and ensure correct mounting height and location. We also verify operation during testing.' },
      { q: 'Do you provide testing after installation?', a: 'Yes. We perform verification steps and provide handover guidance for readiness checks.' },
      { q: 'Can we request a site inspection first?', a: 'Yes. Use the request quote CTA or WhatsApp and we’ll schedule a suitable assessment.' },
      { q: 'Do you offer maintenance?', a: 'Yes. We provide maintenance and AMC options so detectors remain dependable.' },
    ],
    relatedServices: [
      'fire-alarm-systems',
      'fire-equipment-installation',
      'fire-equipment-maintenance',
      'annual-maintenance-contracts-amc',
    ],
    primaryKeywords: ['smoke detector', 'smoke detector installation Nepal', 'smoke detection system Nepal'],
    secondaryKeywords: ['fire alarm integration', 'detector placement', 'nuisance alarms'],
    imageAlt: 'Smoke detector installation and testing in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Smoke Detectors', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'emergency-lights',
    title: 'Emergency Lights & Exit Systems',
    seoTitle: 'Emergency Lights in Nepal | NEFASS Exit & Safety Lighting',
    metaDescription:
      'Install emergency lights and exit signage in Nepal for safe evacuation. NEFASS provides reliable equipment, proper placement, and testing.',
    shortDescription:
      'Emergency lighting and exit systems that guide occupants during power outages and emergencies.',
    heroHeadline: 'Emergency Lights for Safe Evacuation',
    heroSubheadline:
      'We install and test emergency lighting and exit solutions so people can find the way out confidently.',
    overview: {
      whatItIs:
        'Emergency lights and exit systems provide illumination and guidance during emergencies and power failures.',
      whyItMatters:
        'Good evacuation lighting reduces panic and helps occupants move toward exits safely.',
      whoNeedsIt:
        'Commercial buildings, hotels, hospitals, schools, and apartments that require safe egress planning.',
    },
    benefits: [
      'Improves evacuation visibility and guidance',
      'Professional placement planning based on exits',
      'Testing and readiness verification',
      'Supports compliance and safety requirements',
      'Reliable equipment with after-sales support',
      'Maintenance options for long-term reliability',
    ],
    solutions: [
      { category: 'Emergency Lights', description: 'Backup illumination for key routes and exits.' },
      { category: 'Exit Signage', description: 'Clear visual guidance for safe direction.' },
      { category: 'Testing & Commissioning', description: 'Functional verification for readiness.' },
    ],
    industriesServed: commonIndustries.concat(['Parking areas and stairwells', 'Multi-floor buildings']),
    processSteps: [
      'Consultation and egress review',
      'Exit and lighting layout plan',
      'Equipment supply and installation',
      'Wiring/integration checks',
      'Testing and commissioning',
      'Maintenance schedule recommendation',
    ],
    faqs: [
      { q: 'Where should emergency lights be installed?', a: 'Typically along corridors, stairwells, escape routes, and near exits. We plan based on your building layout and safety needs.' },
      { q: 'Do you test emergency lights after installation?', a: 'Yes. We perform commissioning/testing so the system works correctly during failures.' },
      { q: 'Do emergency lights require maintenance?', a: 'Yes. Batteries and components should be checked regularly. We offer maintenance and AMC options.' },
      { q: 'Can you install emergency lights in existing buildings?', a: 'Yes. We can retrofit solutions after site evaluation and wiring feasibility checks.' },
      { q: 'Do you supply exit signage too?', a: 'Yes. We provide a coordinated emergency lighting and exit guidance solution.' },
      { q: 'How quickly can you complete installation?', a: 'Timeline depends on building size and complexity. We provide an installation plan after inspection.' },
    ],
    relatedServices: [
      'fire-safety-consultation',
      'fire-equipment-installation',
      'fire-equipment-maintenance',
      'annual-maintenance-contracts-amc',
    ],
    primaryKeywords: ['emergency light Nepal', 'exit signage Nepal', 'emergency lighting installation Nepal'],
    secondaryKeywords: ['safe evacuation lighting', 'stairwell lighting', 'egress planning'],
    imageAlt: 'Emergency lights and exit signage installation in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Emergency Lights', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'ppe-personal-protective-equipment',
    title: 'Personal Protective Equipment (PPE)',
    seoTitle: 'Firefighter PPE in Nepal | NEFASS Safety Gear',
    metaDescription:
      'Supply and support industrial safety PPE in Nepal, including firefighter protective gear. NEFASS helps you choose safety equipment for reliable protection.',
    shortDescription:
      'Professional PPE selection and supply for industrial safety, firefighting readiness, and workplace compliance.',
    heroHeadline: 'Protect Your Team with Professional PPE',
    heroSubheadline:
      'Right PPE selection helps reduce injury risk and supports safer operations—on every call, inspection, and emergency.',
    overview: {
      whatItIs:
        'PPE includes protective clothing and equipment used to reduce exposure to hazards and support safer response.',
      whyItMatters:
        'Correct PPE improves worker safety, supports preparedness training, and reduces risk during emergencies.',
      whoNeedsIt:
        'Workplaces with firefighting responsibilities, industrial operations, and teams handling hazardous tasks.',
    },
    benefits: [
      'Better protection for responders and staff',
      'Supports compliance and safety readiness',
      'Professional recommendations based on hazard type',
      'Reliable supply with after-sales guidance',
      'Compatible with training and maintenance schedules',
      'Improved preparedness for emergency response',
    ],
    solutions: [
      { category: 'Firefighter Protective Gear', description: 'Protective items for fire response teams.' },
      { category: 'Industrial PPE', description: 'Safety gear based on workplace hazards.' },
      { category: 'Training-Ready Kits', description: 'Supporting equipment for drills and training.' },
    ],
    industriesServed: commonIndustries.concat(['Industrial facilities', 'Work-at-height operations']),
    processSteps: [
      'Consultation on roles and hazard types',
      'PPE selection recommendation',
      'Supply and documentation support',
      'Fit/usage guidance (where applicable)',
      'Integration with training plans',
      'Replacement/maintenance guidance',
    ],
    faqs: [
      { q: 'Do you supply firefighter PPE kits?', a: 'Yes. NEFASS can help supply appropriate protective equipment based on your team requirements and hazard profile.' },
      { q: 'How do we choose the right PPE?', a: 'We start with a consultation on tasks and hazards, then recommend protective categories suitable for safe response.' },
      { q: 'Do you offer advice on PPE replacement cycles?', a: 'We provide guidance based on usage and safety readiness expectations, and can support replacement needs.' },
      { q: 'Can PPE be included in your AMC or maintenance service?', a: 'PPE itself is typically managed through replacement schedules. We can coordinate it alongside other safety services and training needs.' },
      { q: 'Do you support workplace safety audits?', a: 'Yes. Through consultation and assessment, we help identify gaps and recommend next steps.' },
      { q: 'Do you supply PPE for schools and institutions?', a: 'For institutions, we can supply suitable PPE for safety drills and preparedness needs alongside required fire protection equipment.' },
    ],
    relatedServices: [
      'fire-safety-training',
      'fire-safety-consultation',
      'fire-equipment-maintenance',
    ],
    primaryKeywords: ['PPE', 'firefighter PPE Nepal', 'industrial safety PPE Nepal'],
    secondaryKeywords: ['protective gear', 'safety readiness', 'workplace safety equipment'],
    imageAlt: 'Personal protective equipment supply in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Personal Protective Equipment (PPE)', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-safety-consultation',
    title: 'Fire Safety Consultation (Assessment & Planning)',
    seoTitle: 'Fire Safety Consultation in Nepal | NEFASS Site Assessment',
    metaDescription:
      'Get fire safety consultation in Nepal. NEFASS assesses your site, identifies gaps, recommends systems, and provides a practical plan for compliant fire safety.',
    shortDescription:
      'A structured consultation to identify gaps, plan safer upgrades, and map solutions to your facility risks.',
    heroHeadline: 'Fire Safety Consultation & Risk Planning',
    heroSubheadline:
      'Before buying equipment, get an expert assessment so your investments match your actual hazards and compliance needs.',
    overview: {
      whatItIs:
        'Fire safety consultation includes a review of your premises, risks, egress routes, and required safety equipment strategy.',
      whyItMatters:
        'A gap analysis prevents wrong product choices, avoids unnecessary spend, and improves readiness outcomes.',
      whoNeedsIt:
        'Facilities planning upgrades, audits, new construction, or improvements for safety compliance.',
    },
    benefits: [
      'Gap analysis to guide the right purchases',
      'Clear recommendation plan for systems and equipment',
      'Improved compliance readiness',
      'Faster decisions for management and procurement',
      'Practical road map for installation and maintenance',
      'Supports coordination across multiple safety services',
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'Book consultation request',
      'On-site assessment / document review',
      'Risk & requirement mapping',
      'Recommendation report (systems, placement, schedule)',
      'Implementation coordination with NEFASS',
      'Follow-up and maintenance planning',
    ],
    faqs: [
      { q: 'Is consultation a paid service?', a: 'Consultation scope can vary based on site size. Request a quote and we’ll confirm the best option for your needs.' },
      { q: 'What do you assess during site review?', a: 'We review hazards, egress/escape routes, existing safety equipment readiness, and practical integration of new systems.' },
      { q: 'Do you provide a recommendation report?', a: 'Yes. We provide a practical plan with suggested systems, sequencing, and next steps.' },
      { q: 'Can you support audits and compliance preparation?', a: 'We support compliance workflows by recommending the correct systems and helping plan testing/maintenance readiness.' },
      { q: 'Do you work with new construction and renovations?', a: 'Yes. We can plan system integration for new builds or upgrades after inspection.' },
      { q: 'How soon can you start?', a: 'Timing depends on availability and site scheduling. WhatsApp request usually helps us coordinate quickly.' },
    ],
    relatedServices: [
      'fire-extinguishers',
      'fire-alarm-systems',
      'fire-suppression-systems',
      'fire-hydrant-systems',
      'fire-equipment-installation',
    ],
    primaryKeywords: ['fire safety consultation Nepal', 'fire safety assessment Nepal', 'fire risk planning Nepal'],
    secondaryKeywords: ['gap analysis', 'safety compliance plan', 'site assessment'],
    imageAlt: 'Fire safety consultation and site assessment by NEFASS in Nepal',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Safety Consultation', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-equipment-installation',
    title: 'Fire Equipment Installation (Professional Setup)',
    seoTitle: 'Fire Equipment Installation in Nepal | NEFASS Installation',
    metaDescription:
      'Professional fire equipment installation in Nepal. NEFASS installs extinguishers, alarms, detectors and safety equipment with testing and handover for readiness.',
    shortDescription:
      'Installation service ensuring correct placement, wiring/configuration, and testing for dependable performance.',
    heroHeadline: 'Professional Fire Equipment Installation',
    heroSubheadline:
      'Correct installation prevents failures. We install and commission so your systems work reliably from day one.',
    overview: {
      whatItIs:
        'Installation includes the physical mounting, integration, wiring/configuration, and commissioning checks required for safe operation.',
      whyItMatters:
        'Even great equipment fails when installed incorrectly. Testing reduces risk and supports compliance.',
      whoNeedsIt:
        'Facilities buying new equipment, upgrading systems, or replacing old/expired safety devices.',
    },
    benefits: [
      'Correct placement for real-world coverage',
      'Wiring and integration best practices',
      'Commissioning/testing verification',
      'Handover guidance for operators and safety teams',
      'Reduced operational risk',
      'Coordination across multiple safety systems',
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'Consultation on equipment scope',
      'Site survey and installation plan',
      'Supply coordination (if needed)',
      'Installation and integration',
      'Testing and functional verification',
      'Handover + maintenance recommendations',
    ],
    faqs: [
      { q: 'Do you install equipment you didn’t sell?', a: 'We can evaluate installation scope. For best results, we recommend selecting the appropriate equipment with NEFASS support.' },
      { q: 'Do you provide testing after installation?', a: 'Yes. Commissioning/testing is included to confirm proper operation and safety readiness.' },
      { q: 'Can you install in phases?', a: 'Yes. We can coordinate installation in phases to match budget and facility operational needs.' },
      { q: 'Do you provide documentation?', a: 'We can provide setup/testing notes and handover guidance to support your internal compliance workflow.' },
      { q: 'How do you manage cable routing and placement?', a: 'We plan routing based on building layout, safety constraints, and installation best practices during survey.' },
      { q: 'Do you support multiple services under one roof?', a: 'Yes. We can coordinate installation across extinguishers, alarms, detectors, emergency lights and more.' },
    ],
    relatedServices: [
      'fire-extinguishers',
      'fire-alarm-systems',
      'smoke-detectors',
      'emergency-lights',
      'fire-equipment-maintenance',
    ],
    primaryKeywords: ['fire equipment installation Nepal', 'fire alarm installation Nepal', 'emergency lighting installation Nepal'],
    secondaryKeywords: ['commissioning', 'wiring integration', 'safe installation practices'],
    imageAlt: 'Fire equipment installation and commissioning by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Equipment Installation', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-equipment-maintenance',
    title: 'Fire Equipment Maintenance (Inspection & Repair)',
    seoTitle: 'Fire Equipment Maintenance in Nepal | NEFASS Inspection',
    metaDescription:
      'Maintain fire safety equipment in Nepal. NEFASS performs inspections, servicing, repairs and readiness checks for extinguishers, alarms, detectors and emergency systems.',
    shortDescription:
      'Keep your fire safety equipment operational with routine inspections, servicing and readiness checks.',
    heroHeadline: 'Maintain Fire Safety Equipment for Maximum Readiness',
    heroSubheadline:
      'Regular maintenance prevents failures and supports compliance—so your systems stay ready.',
    overview: {
      whatItIs:
        'Maintenance includes inspection, testing, servicing, and repair of fire safety equipment to ensure continued performance.',
      whyItMatters:
        'Without maintenance, equipment can fail when needed most. Scheduled checks improve reliability and safety.',
      whoNeedsIt:
        'Facilities with installed extinguishers, alarm systems, detectors, emergency lights, and suppression equipment.',
    },
    benefits: [
      'Prevents equipment failure through inspections',
      'Increases reliability and readiness for emergencies',
      'Supports compliance and audit preparation',
      'Faster identification of issues and corrective action',
      'Documentation and handover support',
      'Long-term cost control via planned servicing',
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'Maintenance request and asset list review',
      'Inspection plan and on-site servicing',
      'Testing and performance verification',
      'Repairs/replacement recommendation if needed',
      'Maintenance records & handover',
      'Next service interval planning',
    ],
    faqs: [
      { q: 'How often should fire equipment be maintained?', a: 'Frequency depends on equipment type and usage. We recommend maintenance intervals after inspection and based on safety requirements.' },
      { q: 'Do you service extinguishers and alarm equipment?', a: 'Yes. NEFASS supports inspection/service and testing workflows for multiple safety equipment categories.' },
      { q: 'Can you handle maintenance for multiple buildings?', a: 'Yes. We can coordinate maintenance schedules based on your site locations and service requirements.' },
      { q: 'Do you provide maintenance records?', a: 'We support documentation for maintenance activities and readiness verification for internal compliance workflows.' },
      { q: 'Do you offer AMC as well?', a: 'Yes. For consistent coverage, we offer Annual Maintenance Contracts (AMC).' },
      { q: 'Will maintenance include testing for alarms/detectors?', a: 'Yes—commissioning/testing is part of maintenance to confirm correct signal behavior and readiness.' },
    ],
    relatedServices: [
      'annual-maintenance-contracts-amc',
      'fire-extinguishers',
      'fire-alarm-systems',
      'smoke-detectors',
      'fire-suppression-systems',
    ],
    primaryKeywords: ['fire equipment maintenance Nepal', 'fire alarm maintenance Nepal', 'extinguisher servicing Nepal'],
    secondaryKeywords: ['inspection', 'testing', 'repair', 'maintenance records'],
    imageAlt: 'Fire equipment maintenance inspection and servicing by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Equipment Maintenance', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'annual-maintenance-contracts-amc',
    title: 'Annual Maintenance Contracts (AMC) for Fire Safety',
    seoTitle: 'Annual Maintenance Contract (AMC) in Nepal | NEFASS',
    metaDescription:
      'Annual Maintenance Contracts (AMC) for fire safety equipment in Nepal. NEFASS provides scheduled inspections, testing, servicing and compliance readiness.',
    shortDescription:
      'A predictable AMC plan that keeps fire safety equipment checked and ready throughout the year.',
    heroHeadline: 'Annual Maintenance Contracts (AMC) That Keep You Ready',
    heroSubheadline:
      'Avoid last-minute failures—get scheduled checks for reliable fire safety equipment performance.',
    overview: {
      whatItIs:
        'An AMC is a yearly agreement that covers routine inspections, testing, servicing and readiness support for fire safety equipment.',
      whyItMatters:
        'Fire equipment readiness must be maintained regularly. AMC helps avoid lapses and reduces risk exposure.',
      whoNeedsIt:
        'Hotels, hospitals, warehouses, offices, and facilities that require consistent safety checks and documentation.',
    },
    benefits: [
      'Scheduled inspections and testing',
      'Reduced risk of emergency failures',
      'Predictable maintenance budgeting',
      'Faster issue identification and corrective action',
      'Compliance documentation support',
      'Priority coordination for service requests',
    ],
    industriesServed: commonIndustries,
    processSteps: [
      'AMC inquiry and equipment assessment',
      'Define scope and annual schedule',
      'Plan inspection, testing and servicing cycles',
      'Execution of scheduled maintenance',
      'Quarterly readiness updates (where applicable)',
      'Year-end reporting and next-cycle planning',
    ],
    faqs: [
      { q: 'What does AMC usually cover?', a: 'AMC typically includes scheduled inspection/testing, routine servicing, and readiness support. The exact scope depends on your equipment list.' },
      { q: 'Do you provide AMC for multiple equipment types?', a: 'Yes. We can coordinate AMC coverage for extinguishers, alarm systems, detectors, emergency lights and more.' },
      { q: 'How do you set the yearly schedule?', a: 'We define a practical schedule based on equipment categories and facility operations.' },
      { q: 'Is AMC documentation provided?', a: 'Yes, we support maintenance records and readiness verification for internal compliance workflows.' },
      { q: 'Can AMC be adjusted during the year?', a: 'If your equipment list changes, we can coordinate scope updates where feasible.' },
      { q: 'Do you provide priority response under AMC?', a: 'AMC plans can include prioritized service coordination. Request a quote to confirm the option available for your scope.' },
    ],
    relatedServices: [
      'fire-equipment-maintenance',
      'fire-alarm-systems',
      'fire-extinguishers',
      'emergency-lights',
    ],
    primaryKeywords: ['Annual Maintenance Contract Nepal', 'fire safety AMC Nepal', 'fire alarm AMC Nepal'],
    secondaryKeywords: ['scheduled maintenance', 'inspection and testing', 'compliance readiness'],
    imageAlt: 'Annual Maintenance Contract (AMC) for fire safety equipment in Nepal',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Annual Maintenance Contracts (AMC)', href: '' },
    ],
    callToAction: baseCallToAction,
  },
  {
    slug: 'fire-safety-training',
    title: 'Fire Safety Training (Preparedness & Drills)',
    seoTitle: 'Fire Safety Training in Nepal | NEFASS Workshops',
    metaDescription:
      'Fire safety training in Nepal by NEFASS. Learn extinguisher handling, evacuation procedures, and emergency response drills for safer workplaces.',
    shortDescription:
      'Practical fire safety training that improves team readiness, response confidence, and workplace safety culture.',
    heroHeadline: 'Train Your Team for Confident Fire Response',
    heroSubheadline:
      'From extinguisher handling to emergency procedures—training that turns equipment into effective readiness.',
    overview: {
      whatItIs:
        'Fire safety training includes hands-on learning for emergency response procedures, equipment usage, and drill readiness for staff.',
      whyItMatters:
        'Proper training reduces panic and improves correct actions during real emergencies.',
      whoNeedsIt:
        'All workplaces with safety roles: offices, hotels, hospitals, schools, factories, and apartment communities.',
    },
    benefits: [
      'Improves staff confidence and correct response actions',
      'Hands-on extinguisher usage guidance',
      'Supports evacuation readiness and drill planning',
      'Enhances safety culture and compliance preparedness',
      'Better coordination with installed fire safety systems',
      'Repeatable training structure for new staff',
    ],
    industriesServed: commonIndustries.concat(['Residential apartment associations', 'Community facilities']),
    processSteps: [
      'Training inquiry and objectives discussion',
      'Training plan and scenario selection',
      'Hands-on equipment familiarization',
      'Evacuation & emergency procedure drill',
      'Evaluation and improvement recommendations',
      'Follow-up training schedule (optional)',
    ],
    faqs: [
      { q: 'Do you provide hands-on extinguisher training?', a: 'Yes—training includes practical guidance for safe extinguisher use and response procedures.' },
      { q: 'How do you tailor training for different industries?', a: 'We align scenarios and responsibilities to your facility type, risk profile and staff roles.' },
      { q: 'Do you train management and staff together?', a: 'Yes. Effective drills involve both decision-makers and responders, so everyone understands roles and steps.' },
      { q: 'Can training be scheduled for multiple shifts?', a: 'Yes. We can coordinate sessions based on your team availability and operational needs.' },
      { q: 'Do you recommend training intervals?', a: 'We recommend refresh schedules based on staff changes and risk maturity. For facilities with AMC, we can coordinate training moments.' },
      { q: 'Is training connected to equipment installation?', a: 'Where relevant, we coordinate training with installed systems so staff learns the exact equipment and procedures in your facility.' },
    ],
    relatedServices: [
      'fire-extinguishers',
      'fire-alarm-systems',
      'annual-maintenance-contracts-amc',
      'ppe-personal-protective-equipment',
      'fire-safety-consultation',
    ],
    primaryKeywords: ['fire safety training Nepal', 'fire extinguisher training Nepal', 'emergency response training Nepal'],
    secondaryKeywords: ['evacuation drills', 'staff preparedness', 'safety workshops'],
    imageAlt: 'Fire safety training workshop in Nepal by NEFASS',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Fire Safety Training', href: '' },
    ],
    callToAction: baseCallToAction,
  },
]

// Additional slugs required by the task (distinct from template file names)
const installationService = services.find((s) => s.slug === 'fire-equipment-installation')
const maintenanceService = services.find((s) => s.slug === 'fire-equipment-maintenance')

if (!installationService || !maintenanceService) {
  throw new Error('services.js: Missing required installation/maintenance services')
}

const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

export { services, bySlug }
export default services

