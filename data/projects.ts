export type ProjectGroup = "Engineering tools" | "Personal software";

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly kind: "github" | "demo";
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly group: ProjectGroup;
  readonly type: string;
  readonly status: string;
  readonly version: string;
  readonly featured: boolean;
  readonly order: number;
  readonly problem: string;
  readonly summary: string;
  readonly overview: string;
  readonly solution: string;
  readonly features: readonly string[];
  readonly technologies: readonly string[];
  readonly technicalNotes: readonly string[];
  readonly impact: string;
  readonly currentState: string;
  readonly links: readonly ProjectLink[];
}

export const projects: readonly Project[] = [
  {
    slug: "design-criteria-calculator",
    name: "Design Criteria Calculator",
    shortName: "Design Criteria",
    group: "Engineering tools",
    type: "Structural Engineering Tool",
    status: "Internal · Case Study",
    version: "v1.5",
    featured: true,
    order: 1,
    problem:
      "Structural design criteria can end up spread across hazard reports, reference tables, engineer selections, and repetitive spreadsheets.",
    summary:
      "An Excel workflow that keeps those inputs organized, handles formula-driven design helpers, and produces a clean summary for the calculation package.",
    overview:
      "The current workbook is a focused office-standard cleanup draft for compiling project design criteria from verified external sources and visible engineering inputs. It keeps assumptions editable, calculated cells distinct, and review items explicit.",
    solution:
      "The workbook separates project information, hazard inputs, snow, wind, seismic, rain, geotechnical, and gravity-load data into reviewable sheets, then assembles selected values on one output sheet.",
    features: [
      "Manual ASCE Hazard Report input for snow, wind, seismic, and rain values",
      "Formula-driven snow factor workflow for Ce, Ct, Is, Pf, and a controlled Cs interpolation helper",
      "Directional wind exposure review framework with engineer overrides",
      "Seismic system lookup for R, Ω₀, Cd, permitted-height status, approximate period, and ELF Cs guidance",
      "Expandable gravity-load table and consolidated output sheet",
      "Visible VERIFY / Needs Review states where judgment or source confirmation is still required",
    ],
    technologies: ["Excel", "Formula-driven workflows", "ASCE 7-16", "Engineering QC"],
    technicalNotes: [
      "Fourteen-sheet workbook with centralized lookup and QC tables",
      "Input, calculation, source, and guidance cells use separate visual conventions",
      "Snow drift, full wind-pressure calculations, and C&C pressures remain external or future scope",
    ],
    impact:
      "It makes a fragmented design-criteria process easier to review, reuse, and hand off while keeping engineering assumptions and incomplete checks visible.",
    currentState:
      "Active internal workbook. The v1.5 draft includes calculation helpers and an organized output sheet, but it remains an engineering aid that requires source verification and professional review.",
    links: [],
  },
  {
    slug: "cad-revit-wind-generator",
    name: "CAD–Revit C&C Wind Generator",
    shortName: "C&C Wind Generator",
    group: "Engineering tools",
    type: "Engineering Automation",
    status: "Internal · Case Study",
    version: "CAD v1.3.5.3 · Revit v1.4.2.2 dev",
    featured: true,
    order: 2,
    problem:
      "Once component-and-cladding pressures are calculated, they still have to be transferred into drawing-ready output and checked.",
    summary:
      "A desktop tool that reads completed TEDDS output, structures the results, and generates CAD deliverables for engineer review.",
    overview:
      "The released CAD path focuses on moving completed TEDDS component-and-cladding results into a repeatable drafting workflow. A separate Revit renderer is in active development and has reached live proof-of-concept and full-layout test milestones.",
    solution:
      "A packaged Windows application parses a TEDDS Word export, preserves distinct component and effective-area rows, prompts for review-sensitive zone information, and produces a DXF detail plus normalized data and QC outputs.",
    features: [
      "Packaged desktop workflow for coworkers without a Python installation",
      "TEDDS Word-table parsing with normalized pressure rows and signs",
      "Independent Zone 3 and Zone 5 note applicability and distance handling",
      "Preferred AC1015 DXF output plus a diagnostic text fallback",
      "CSV, JSON, and QC report outputs for transparent checking",
      "Separate native Revit 2025 renderer development with template validation and rollback safeguards",
    ],
    technologies: ["Python", "python-docx", "ezdxf", "PyInstaller", "AutoCAD / DXF", "Revit API / C#"],
    technicalNotes: [
      "The production CAD path transfers values; it does not calculate wind loads or determine applicability",
      "The current Revit renderer targets Revit 2025 and still has focused live-acceptance items",
      "Generated drafting outputs require comparison against the governing calculation and office standards",
    ],
    impact:
      "It reduces repetitive transcription and drafting setup while leaving calculation ownership, applicability decisions, and final drawing QC with the responsible engineer.",
    currentState:
      "CAD v1.3.5.3 is the frozen shareable AutoCAD workflow. Revit v1.4.2.2 is a separate development track with live acceptance still pending for its latest rich-text correction.",
    links: [],
  },
  {
    slug: "aisc-section-finder",
    name: "AISC Section Finder",
    shortName: "AISC Section Finder",
    group: "Engineering tools",
    type: "Structural Investigation Tool",
    status: "Internal · Case Study",
    version: "v0.4.0",
    featured: true,
    order: 3,
    problem:
      "Field measurements rarely match catalog dimensions exactly, which can make existing steel member identification slower than it needs to be.",
    summary:
      "A desktop tool that searches measured dimensions within a tolerance and ranks likely W, C, and L shapes for engineering review.",
    overview:
      "AISC Section Finder supports preliminary identification of existing structural steel members from field measurements. It is designed as a transparent aid, not a substitute for field verification, analysis, or professional judgment.",
    solution:
      "Users select a shape family, enter decimal or fractional dimensions, set a search tolerance, and review ranked dimensional matches with a clearly separated conservative alternative.",
    features: [
      "W-shape, channel (C), and angle (L) search workflows",
      "Shape-specific measurement mapping and optional web-thickness input where appropriate",
      "Tolerance filtering with weighted match scoring and relative confidence",
      "Near-match conservative alternative by weight, section modulus, or area",
      "Resizable desktop interface with light and dark themes",
      "Standalone Windows distribution and keyboard-first data entry",
    ],
    technologies: ["Python", "Tkinter", "pandas", "openpyxl", "PyInstaller"],
    technicalNotes: [
      "Default search tolerance is 0.25 inches and remains user-adjustable",
      "Results include catalog label, key dimensions, W, Sx, A, match score, and confidence",
      "The tool validates the expected AISC database sheet and required columns at startup",
    ],
    impact:
      "It gives field measurements a repeatable, reviewable search path and makes uncertainty visible instead of presenting one catalog section as a definitive identification.",
    currentState:
      "Packaged v0.4.0 Windows application with W, C, and L shape-family support and internal distribution documentation.",
    links: [],
  },
  {
    slug: "fit-roulette",
    name: "Fit Roulette",
    shortName: "Fit Roulette",
    group: "Personal software",
    type: "Mobile-first PWA",
    status: "Public · Active",
    version: "v1.6.0",
    featured: true,
    order: 4,
    problem:
      "A real closet is more complicated than picking random clothes. Weather, occasion, recent wear, preferences, and bad combinations all matter.",
    summary:
      "A local-first wardrobe PWA for generating, adjusting, and logging outfits without accounts, a backend, or uploaded closet data.",
    overview:
      "Fit Roulette is the most mature personal application in this portfolio. It began as a quick outfit generator and grew through daily use into a versioned, mobile-first closet system with careful migration, offline, and accessibility behavior.",
    solution:
      "The app combines structured garment data with explicit compatibility rules, outfit history, context, and user controls while keeping wardrobe data in the browser.",
    features: [
      "One-press generation, reroll, build-around-item, and item-swap workflows",
      "Closet management with availability, archive states, pair rules, and exact bans",
      "Logged outfit history, recency-aware selection, manual logging, and JSON backup / restore",
      "Optional weather context with explicit location consent and manual / offline fallback",
      "PWA installation, service-worker caching, and no-account local storage",
      "Read-only closet insights and deterministic coverage analysis introduced in v1.6.0",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker", "localStorage"],
    technicalNotes: [
      "Static application with no backend, database server, paid API, analytics, or external model",
      "Schema-versioned local data with protected recovery copies during migrations",
      "Open-Meteo is used only for opt-in current conditions with visible attribution",
    ],
    impact:
      "It demonstrates long-term product iteration: solving a small daily problem, using the software personally, and improving its data model, interactions, resilience, and accessibility release by release.",
    currentState:
      "Public v1.6.0 release with a live GitHub Pages deployment and a maintained repository.",
    links: [
      { label: "Live demo", href: "https://crunchybrunch.github.io/fit-roulette/", kind: "demo" },
      { label: "View GitHub", href: "https://github.com/CrunchyBrunch/fit-roulette", kind: "github" },
    ],
  },
  {
    slug: "lionlog",
    name: "LionLog",
    shortName: "LionLog",
    group: "Personal software",
    type: "Dining workflow prototype",
    status: "Experimental · In Development",
    version: "v0.1.0-alpha.2.1",
    featured: false,
    order: 5,
    problem:
      "Penn State dining menus make it difficult to compare available items against practical meal and macronutrient goals in one workflow.",
    summary:
      "A mobile-first Penn State dining tool designed to make planning and logging meals faster. Live menu ingestion and nutrition workflows are currently in development.",
    overview:
      "LionLog currently proves the browsing and meal-context foundation: dining hall, meal period, service date, venue filtering, and nutrition display. It intentionally does not claim live Penn State data or a completed optimizer.",
    solution:
      "The prototype uses replaceable provider interfaces and sample menu data so the product surface and domain contracts can develop without unauthorized production retrieval.",
    features: [
      "Dining hall, meal period, service date, and venue selection",
      "Responsive sample menu with source serving units, protein, and calorie display",
      "Provider and domain boundaries prepared for a future authorized source",
      "PWA assets and offline-oriented application shell",
      "Documented caching, validation, attribution, failure, and data-minimization policy",
    ],
    technologies: ["React", "TypeScript", "Vinext", "Vite", "PWA architecture"],
    technicalNotes: [
      "Current UI uses deterministic sample data and says so prominently",
      "A public-source audit found no supported structured API and a robots policy that blocks automated production retrieval",
      "The meal-optimizer interface exists as a domain contract, but optimization is not implemented",
    ],
    impact:
      "The work shows how to separate product development from a risky data dependency and document the authorization, accuracy, and attribution conditions required before launch.",
    currentState:
      "Experimental alpha. Keep secondary until an approved Penn State feed or written permission is available and the meal-building workflow is implemented.",
    links: [],
  },
] as const;

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string): Project {
  const project = projects.find((candidate) => candidate.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}
