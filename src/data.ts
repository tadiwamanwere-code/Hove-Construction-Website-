import { Project, Service, Value, ProcessStep, Testimonial } from './types';
import cottageBlueRoof from './assets/images/hove-precast-cottage-blue-roof.jpg';
import verandaUnit from './assets/images/hove-precast-veranda-unit.jpg';
import slabPour from './assets/images/hove-site-slab-pour.jpg';
import pavedDriveway from './assets/images/hove-paved-driveway-garage.jpg';
import institutionalBlock from './assets/images/hove-institutional-block.jpg';
import compactUnit from './assets/images/hove-compact-unit.jpg';
import trussErection from './assets/images/hove-roof-truss-erection.jpg';

// ============================================================
// Content layer.
//
// Every photograph below is Hove Construction own site photography,
// supplied by the business. Captions describe only what is visible in
// the frame - build method, structure type, stage of works. Client
// names, contract values and floor areas are deliberately absent
// because they were not supplied; add them only when confirmed.
// ============================================================

export const ABOUT_IMAGE = slabPour;
export const PROCESS_IMAGE = trussErection;
export const SERVICES_IMAGE = institutionalBlock;

export const HERO_DATA = {
  bgImage: cottageBlueRoof,
  tagline: "PRECAST CONCRETE CONSTRUCTION",
  headline: "Built in Panels. Finished in Weeks.",
  subheadline: "Precast wall panels, roofing, slabs and paving for homes, schools and commercial sites across Zimbabwe.",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "See Our Work"
};

export const VALUES_DATA: Value[] = [
  {
    title: "Speed Without Shortcuts",
    description: "Panels are cast, cured and quality-checked before they reach your site. What would take months in brick goes up in weeks, because most of the work is already done when the truck arrives."
  },
  {
    title: "Built for Zimbabwean Sites",
    description: "Rural stands, sloping ground, remote plots far from a batching plant. Our panels travel to where the job is, and our teams set them on a slab we pour ourselves."
  },
  {
    title: "A Price That Holds",
    description: "Panel counts, roof sheeting and slab area are measurable before we start. You get an itemised quote up front, and it is the quote you pay."
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "residential",
    iconName: "Home",
    title: "Precast Homes & Cottages",
    description: "Complete single-storey homes, cottages and garden flats built from precast concrete wall panels on a poured slab.",
    details: [
      "Precast wall panels set into cast-in-place columns",
      "Reinforced floor slab, poured and cured on site",
      "Aluminium sliding windows and steel or timber doors",
      "Hip, gable or mono-pitch roofs in IBR sheeting"
    ]
  },
  {
    id: "commercial",
    iconName: "Briefcase",
    title: "Schools & Institutional Blocks",
    description: "Long-span classroom blocks, dormitories, clinics and staff housing where a fast, repeatable build matters more than a bespoke one.",
    details: [
      "Multi-room blocks built from a repeating panel module",
      "Gable roof structures over long spans",
      "Steel-framed windows and institutional-grade doors",
      "Phased handover so early rooms can be occupied first"
    ]
  },
  {
    id: "design-build",
    iconName: "Compass",
    title: "Roofing & Structural Timber",
    description: "Timber truss fabrication and roof sheeting, supplied and fitted as part of a build or as a standalone contract.",
    details: [
      "Hip and gable truss sets cut and assembled on site",
      "Purlins, bracing and wall plate fixing",
      "IBR and corrugated sheeting in colour or galvanised",
      "Ridging, flashing, barge boards and rainwater goods"
    ]
  },
  {
    id: "renovations",
    iconName: "Hammer",
    title: "Slabs, Paving & External Works",
    description: "The concrete work around the building: floor slabs, aprons, driveways, interlocking paving and boundary walling.",
    details: [
      "Reinforced floor slabs and surface beds",
      "Interlocking paver driveways and hardstandings",
      "Concrete aprons, walkways and vehicle crossings",
      "Precast durawall boundary walling and gate piers"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Site Visit & Quote",
    description: "We walk the stand, check access for the delivery truck, confirm ground conditions and measure the footprint. You get an itemised written quote covering panels, slab, roof and labour.",
    duration: "3 - 7 Days",
    deliverables: ["Site and access assessment", "Measured panel and sheeting schedule", "Itemised fixed-price quote"]
  },
  {
    step: "02",
    title: "Casting & Slab Prep",
    description: "Your panels are cast and left to cure while we clear the site, set out the footprint and pour the reinforced floor slab. The two run in parallel, which is where the time is saved.",
    duration: "2 - 4 Weeks",
    deliverables: ["Panels cast and curing", "Foundation trenches and reinforcement", "Floor slab poured and cured"]
  },
  {
    step: "03",
    title: "Panel Erection & Roofing",
    description: "Panels are delivered, set into position and locked into cast columns. Timber trusses go up next, then purlins, then sheeting, until the structure is closed and weathertight.",
    duration: "1 - 3 Weeks",
    deliverables: ["Walls erected and joints sealed", "Truss structure erected and braced", "Roof sheeted, ridged and flashed"]
  },
  {
    step: "04",
    title: "Finishes & Handover",
    description: "Windows and doors are fitted, the apron and any paving is laid, the site is cleared and we walk the building with you before handing over the keys.",
    duration: "1 - 2 Weeks",
    deliverables: ["Windows, doors and ironmongery fitted", "Apron, walkways and paving complete", "Joint walkthrough and handover"]
  }
];

// Projects describe only what is visible in each photograph. Client names,
// contract values and floor areas were not supplied and are therefore not
// claimed. Location is the general area; replace with the exact site once
// the business confirms it.
export const PROJECTS_DATA: Project[] = [
  {
    id: "hove-01",
    title: "Three-Bedroom Precast Cottage",
    category: "residential",
    categoryLabel: "Precast Homes & Cottages",
    description: "A completed single-storey home in precast wall panels on a poured slab, finished with a hip roof in blue IBR sheeting, wide aluminium sliding windows and a wrapped concrete apron. Photographed on handover, before landscaping.",
    afterImage: cottageBlueRoof,
    year: "2025",
    location: "Zimbabwe",
    client: "Private client",
    area: "On request",
    budget: "On request",
    highlights: ["Precast panel walls with cast-in columns", "Hip roof in colour-bonded IBR sheeting", "Full-perimeter concrete apron", "Aluminium sliding window sets"]
  },
  {
    id: "hove-02",
    title: "Classroom Block, Hillside Site",
    category: "commercial",
    categoryLabel: "Schools & Institutional Blocks",
    description: "A long-span institutional block built from a repeating precast panel module on a sloping, rock-strewn site. Twin gable ends and a continuous blue IBR roof run the full length of the structure, overlooking the settlement below.",
    afterImage: institutionalBlock,
    year: "2025",
    location: "Zimbabwe",
    client: "Institutional client",
    area: "On request",
    budget: "On request",
    highlights: ["Repeating panel module across a long span", "Twin gable ends with continuous ridge", "Built on a sloping granite site", "Steel-framed classroom windows"]
  },
  {
    id: "hove-03",
    title: "Veranda Unit, Arid Stand",
    category: "residential",
    categoryLabel: "Precast Homes & Cottages",
    description: "A precast unit with a covered veranda running the length of the front elevation, carried on exposed timber beams under a mono-pitch roof. The concrete apron extends past the veranda to form a hardstanding.",
    afterImage: verandaUnit,
    year: "2024",
    location: "Zimbabwe",
    client: "Private client",
    area: "On request",
    budget: "On request",
    highlights: ["Mono-pitch roof on exposed timber beams", "Full-length covered veranda", "Extended concrete apron and hardstanding", "Sliding window sets throughout"]
  },
  {
    id: "hove-04",
    title: "Interlocking Paver Driveway",
    category: "renovation",
    categoryLabel: "Slabs, Paving & External Works",
    description: "A double-width driveway and garage forecourt laid in interlocking pavers, banded in charcoal against a red field, with a kerbed edge separating the drive from the lawn and a concrete crossing into the garages.",
    afterImage: pavedDriveway,
    year: "2024",
    location: "Zimbabwe",
    client: "Private client",
    area: "On request",
    budget: "On request",
    highlights: ["Interlocking pavers in a two-tone banded pattern", "Kerbed edging to lawn", "Double garage forecourt and crossing", "Falls set for surface drainage"]
  },
  {
    id: "hove-05",
    title: "Compact Precast Unit",
    category: "residential",
    categoryLabel: "Precast Homes & Cottages",
    description: "A compact precast unit on an open plain, built as a single run of panels under a shallow mono-pitch roof with a stepped return at the end elevation. Top-hung windows and a separate external door serve the rear room.",
    afterImage: compactUnit,
    year: "2025",
    location: "Zimbabwe",
    client: "Private client",
    area: "On request",
    budget: "On request",
    highlights: ["Single-run panel construction", "Shallow mono-pitch roof with boxed fascia", "Stepped return at the end elevation", "Top-hung and sliding window mix"]
  }
];

// No testimonials are published. The section is hidden until real, attributed
// quotes are supplied with the client permission to use them.
export const TESTIMONIALS_DATA: Testimonial[] = [];

export const CONTACT_INFO = {
  // TODO: confirm every field below with the business before launch.
  phone: "+263 77 000 0000",
  email: "info@hoveconstruction.co.zw",
  officeAddress: "Harare, Zimbabwe",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM (CAT)",
  socials: {
    instagram: "https://instagram.com/hoveconstruction",
    linkedin: "https://linkedin.com/company/hoveconstruction",
    archdaily: ""
  },
  coordinates: {
    lat: -17.82485,
    lng: 31.05303
  }
};
