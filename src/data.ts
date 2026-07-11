import { Project, Service, Value, ProcessStep, Testimonial } from './types';

export const HERO_DATA = {
  bgImage: "/src/assets/images/hero_construction_1783762476247.jpg",
  tagline: "CRAFTING LUXURY ARCHITECTURE",
  headline: "Building Beyond Blueprints",
  subheadline: "Award-winning design-build and construction services for premium residential & commercial spaces. Est. 2010.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Our Work"
};

export const VALUES_DATA: Value[] = [
  {
    title: "Uncompromising Precision",
    description: "We work to millimeter tolerances. From structural foundation pouring to final cabinetry joinery, precision is our baseline."
  },
  {
    title: "Architectural Integrity",
    description: "We translate challenging architectural designs with complete fidelity, respecting the material choice, structural lines, and aesthetic vision."
  },
  {
    title: "Absolute Transparency",
    description: "Clear communication, online portal tracking, fixed milestones, and honest material specifications. No hidden fees or unexpected changes."
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "residential",
    iconName: "Home",
    title: "High-End Residential",
    description: "Custom architect-designed estates, luxury villas, and brutalist concrete residences crafted to perfection.",
    details: [
      "Monolithic raw concrete pouring and texturing",
      "Structural timber, steel cantilevers, and hidden frames",
      "Seamless indoor-outdoor sliding glass facades",
      "High-efficiency thermal and acoustic insulation integration"
    ]
  },
  {
    id: "commercial",
    iconName: "Briefcase",
    title: "Commercial & Corporate",
    description: "Premium office spaces, flagship retail stores, and boutique corporate buildings with strong architectural identities.",
    details: [
      "Multi-story structural steel work",
      "Glass curtain walls and facade systems",
      "Custom acoustic treatment and light routing",
      "Fast-track construction schedules with strict delivery penalties"
    ]
  },
  {
    id: "design-build",
    iconName: "Compass",
    title: "Design-Build Integration",
    description: "A single point of accountability from initial architectural sketches and permits through construction to final key delivery.",
    details: [
      "In-house drafting, engineering, and spatial design",
      "Permit filing, zoning reviews, and regulatory clearance",
      "Cost-optimized material selection during design",
      "Pre-construction feasibility studies and 3D rendering"
    ]
  },
  {
    id: "renovations",
    iconName: "Hammer",
    title: "Architectural Renovations",
    description: "Revitalizing heritage spaces, brutalist renovations, and transforming raw industrial assets into premium functional volumes.",
    details: [
      "Historical masonry restoration and preservation",
      "Structural underpinning and layout reconfiguration",
      "Complete system upgrades (electrical, smart automation, HVAC)",
      "High-finish surface upgrades with matching materials"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Feasibility",
    description: "We review your architectural concepts, site conditions, zoning regulations, and target budget to establish project parameters.",
    duration: "1 - 2 Weeks",
    deliverables: ["Site inspection summary", "Pre-construction schedule estimate", "Preliminary budget outlines"]
  },
  {
    step: "02",
    title: "Design & Engineering",
    description: "Our engineers and designers work in partnership with you to finalize blueprints, load calculations, custom material orders, and municipal permits.",
    duration: "4 - 8 Weeks",
    deliverables: ["Approved structural blueprints", "Interior surface & finish specifications", "Final fixed-price quote and timeline"]
  },
  {
    step: "03",
    title: "Precision Build",
    description: "Our certified operators and master craftsmen execute the layout, foundations, framing, envelope, and precise custom finishes under strict supervision.",
    duration: "6 - 12 Months",
    deliverables: ["Bi-weekly drone progress videos", "Completed inspections at each major phase", "Site access logs and quality assurance sign-offs"]
  },
  {
    step: "04",
    title: "Handover & Support",
    description: "A comprehensive final walkthrough is conducted. We deliver keys, equipment warranties, structural certificates, and offer a dedicated post-handover warranty.",
    duration: "1 - 2 Weeks",
    deliverables: ["Operation manuals and warranties", "Occupancy permit delivery", "10-year structural warranty certificate"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "hove-01",
    title: "The Borrowdale Villa",
    category: "residential",
    categoryLabel: "High-End Residential",
    description: "A modern concrete-and-glass architectural masterwork featuring dramatic cantilevers, massive raw board-formed concrete walls, and triple-glazed frameless glass facades that capture panoramic valley views.",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    beforeImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200", // Vintage raw state
    year: "2024",
    location: "Borrowdale, Harare",
    client: "Chigumba Estates Ltd",
    area: "6,500 sq ft",
    budget: "$4.8M",
    highlights: ["Board-formed architectural concrete", "22-foot glass sliding panels", "Geothermal climate control", "Cantilevered infinity-edge lap pool"]
  },
  {
    id: "hove-02",
    title: "Milton Corporate Tower",
    category: "commercial",
    categoryLabel: "Commercial & Corporate",
    description: "A stunning corporate headquarters facade renovation utilizing structural steel framing, customized tinted thermal panels, and geometric concrete architectural fins.",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    year: "2023",
    location: "Milton Park, Harare",
    client: "Apex Zimbabwe Partners",
    area: "24,000 sq ft",
    budget: "$3.2M",
    highlights: ["Custom powder-coated architectural fins", "Low-emissivity smart glass envelope", "Integrated structural steel support matrix", "LEED Gold certified envelope"]
  },
  {
    id: "hove-03",
    title: "The Vumba Atrium Pavilion",
    category: "design-build",
    categoryLabel: "Design-Build Integration",
    description: "A luxury design-build project combining rustic timber craftsmanship with modern industrial aesthetics, blending into the lush forest surroundings.",
    afterImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    year: "2025",
    location: "Vumba, Mutare",
    client: "Nyanga Highlands Development",
    area: "4,200 sq ft",
    budget: "$2.5M",
    highlights: ["Exposed reclaimed red cedar trusses", "Hand-welded matte black structural steel connections", "Custom floating concrete stairs", "Floor-to-ceiling glass atrium core"]
  },
  {
    id: "hove-04",
    title: "Avondale Creative Studio",
    category: "renovation",
    categoryLabel: "Architectural Renovations",
    description: "A high-end structural restoration and retrofit of a vintage industrial warehouse into a premium creative office space.",
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    beforeImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200",
    year: "2024",
    location: "Avondale, Harare",
    client: "Nkata Media Group",
    area: "3,100 sq ft",
    budget: "$1.4M",
    highlights: ["Historical brickwork restoration", "Brushed white oak ceiling panels", "Raw structural steel column stabilization", "Integrated bespoke kitchen monolith in concrete"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-01",
    quote: "Working with Hove Construction was a revelation. Their commitment to architectural fidelity and millimeter-level accuracy is unmatched. They built our monolith home exactly as the architect envisioned—no compromises, no shortcuts.",
    author: "Grace Chigumba",
    role: "Director, Chigumba Estates Ltd",
    project: "The Borrowdale Villa",
    rating: 5
  },
  {
    id: "t-02",
    quote: "As developers, we've dealt with numerous general contractors. Hove stands out for their absolute commercial transparency. Their site managers review schedules daily and their online coordination portal kept us in the loop at every concrete pour.",
    author: "Richard Nkomo",
    role: "Managing Partner, Apex Zimbabwe Partners",
    project: "Milton Corporate Tower",
    rating: 5
  },
  {
    id: "t-03",
    quote: "The design-build team at Hove Construction took our abstract forest pavilion concept and turned it into an award-winning architectural masterpiece. The timber details, the custom hand-welded steel, and the floating stairs are sheer works of art.",
    author: "Tendai Maposa",
    role: "Trustee, Nyanga Highlands Development",
    project: "The Vumba Atrium Pavilion",
    rating: 5
  }
];

export const CONTACT_INFO = {
  phone: "+263 242 555 4683",
  email: "projects@hoveconstruction.co.zw",
  officeAddress: "42 Samora Machel Avenue, Harare, Zimbabwe",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM (CAT)",
  socials: {
    instagram: "https://instagram.com/hoveconstruction",
    linkedin: "https://linkedin.com/company/hoveconstruction",
    archdaily: "https://archdaily.com/hove-construction"
  },
  coordinates: {
    lat: -17.82485,
    lng: 31.05303
  }
};
