export type ProjectGroup = "Engineering tools" | "Personal software";

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly kind: "github" | "demo";
}

export interface ProjectSection {
  readonly id: string;
  readonly title: string;
  readonly paragraphs?: readonly string[];
  readonly items?: readonly string[];
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly group: ProjectGroup;
  readonly type: string;
  readonly status: string;
  readonly summary: string;
  readonly introduction: string;
  readonly sections: readonly ProjectSection[];
  readonly cardTags: readonly string[];
  readonly technologies: readonly string[];
  readonly technicalNotes: readonly string[];
  readonly links: readonly ProjectLink[];
}

// Display order also controls the next-project links on each case study.
export const projects: readonly Project[] = [
  {
    slug: "cad-revit-wind-generator",
    name: "CAD–Revit C&C Wind Generator",
    shortName: "C&C Wind Generator",
    group: "Engineering tools",
    type: "Calculation-to-drawing workflow",
    status: "Internal CAD tool · Revit in development",
    summary:
      "I built a Windows tool to carry completed TEDDS wind-pressure results into CAD details and QC files. A separate Revit version is in development.",
    introduction:
      "Finishing a wind-pressure calculation doesn't finish the drawing. The results still need to be transferred, formatted, and checked. That repetitive work was the part I wanted to tackle.",
    sections: [
      {
        id: "calculation-to-drawing",
        title: "From a completed calculation to a drawing",
        paragraphs: [
          "The workflow starts with a Word export of a completed Tekla TEDDS component-and-cladding calculation. My Python application reads the tables, organizes the pressure results, and creates a DXF detail alongside CSV, JSON, and QC files.",
          "The CAD workflow is packaged for Windows, so coworkers can use it without installing Python. It transfers calculated values; it does not calculate wind loads or decide where they apply.",
        ],
      },
      {
        id: "checking-the-transfer",
        title: "Keeping the transfer checkable",
        paragraphs: [
          "Getting numbers into a drawing is only useful if their meaning survives the trip. Component rows, effective areas, pressure signs, and zone information need to stay distinct.",
        ],
        items: [
          "The parser preserves separate component and effective-area rows rather than collapsing them into one pressure value.",
          "Zone 3 and Zone 5 distances and note applicability are handled independently, with review-sensitive choices left to the user.",
          "Normalized CSV and JSON outputs and a QC report make it possible to compare the drawing with the governing calculation.",
        ],
      },
      {
        id: "cad-and-revit",
        title: "CAD works. Revit is a separate step.",
        paragraphs: [
          "The CAD workflow has been tested in AutoCAD and is available internally. The preferred output is a DXF detail, with a simpler text-based DXF available for diagnosis.",
          "The separate Revit 2025 renderer has reached live proof-of-concept and full-layout tests. Its latest text-formatting correction still needs live acceptance, so I don't present it as a finished Revit workflow.",
          "Working on both has made the boundary clear: parsing calculation results and reproducing a usable drawing are different problems. The responsible engineer still checks values, signs, zones, applicability, and the final drawing against the calculation and office requirements.",
        ],
      },
    ],
    cardTags: ["TEDDS to CAD", "Python", "Drawing QC"],
    technologies: ["Python", "python-docx", "ezdxf", "PyInstaller", "AutoCAD / DXF", "Revit API / C#"],
    technicalNotes: [
      "CAD v1.3.5.3 is the packaged internal workflow. Preferred DXF output uses AC1015; the diagnostic LINE/TEXT fallback uses AC1009.",
      "The Revit v1.4.2.2 development track includes template validation and transaction rollback safeguards. Live acceptance of its latest rich-text correction is pending.",
      "This is a public description of internal work. Source code, office templates, and project drawings are not distributed here.",
    ],
    links: [],
  },
  {
    slug: "aisc-section-finder",
    name: "AISC Section Finder",
    shortName: "AISC Section Finder",
    group: "Engineering tools",
    type: "Existing-member investigation",
    status: "Internal Windows application",
    summary:
      "Field measurements rarely match catalog dimensions exactly. This Python tool ranks likely steel sections so an engineer has a better place to start.",
    introduction:
      "During my internship, I built a tool to make the search through AISC tables less tedious. The aim was to turn imperfect field measurements into a useful shortlist, while keeping the uncertainty visible.",
    sections: [
      {
        id: "field-to-shortlist",
        title: "From field measurements to likely sections",
        paragraphs: [
          "Choose a shape family, enter the dimensions you measured, and set a search tolerance. Decimal and fractional inputs are accepted. The tool filters the catalog and ranks the remaining sections by weighted dimensional match.",
        ],
        items: [
          "W shapes: depth, flange width, flange thickness, and optional web thickness.",
          "Channels (C): depth, flange width, and web thickness.",
          "Angles (L): both leg dimensions and thickness.",
        ],
      },
      {
        id: "reading-results",
        title: "A match is a starting point",
        paragraphs: [
          "Results show the section label, key dimensions, weight, section modulus, area, match score, and relative confidence. A separate conservative alternative can be selected from near matches by weight, section modulus, or area.",
          "That distinction matters: the closest dimensional match and a conservative candidate answer different questions. Neither establishes a member's identity or load-carrying capacity. Field verification and engineering review still determine what can be used in an assessment.",
        ],
      },
      {
        id: "using-the-tool",
        title: "Making it practical to use",
        paragraphs: [
          "The packaged Windows app supports all three shape families, keyboard-first entry, a resizable interface, and light and dark themes. It is distributed internally, so using it does not require a Python setup.",
          "For me, the useful result is a repeatable search that shows its reasoning. It helps narrow the investigation without hiding the limits of the measurements.",
        ],
      },
    ],
    cardTags: ["Field investigation", "Steel sections", "Python"],
    technologies: ["Python", "Tkinter", "pandas", "openpyxl", "PyInstaller"],
    technicalNotes: [
      "The v0.4.0 application uses adjustable dimensional tolerances, with a default of 0.25 inches. This is an absolute difference in each measured dimension, not a percentage. Confidence is a relative match score, not a probability of correct identification.",
      "The expected database sheet and required columns are checked at startup.",
      "The AISC Shapes Database is licensed reference material and is not distributed on this site. The tool is not an official AISC product.",
    ],
    links: [],
  },
  {
    slug: "design-criteria-calculator",
    name: "Design Criteria Calculator",
    shortName: "Design Criteria",
    group: "Engineering tools",
    type: "Design criteria workbook",
    status: "Internal workbook · In development",
    summary:
      "An Excel workbook that brings structural design inputs and calculation helpers together, with assumptions and unfinished checks kept visible.",
    introduction:
      "Design criteria have a habit of ending up in too many places: hazard reports, reference tables, spreadsheets, and separate engineering decisions. I wanted a clearer way to bring them together and review what goes into the calculation package.",
    sections: [
      {
        id: "different-kinds-of-input",
        title: "Not every input means the same thing",
        paragraphs: [
          "A value copied from a hazard report, a formula result, and an engineer's selection shouldn't look interchangeable. The workbook separates inputs, calculations, sources, and guidance so the origin of a value stays visible.",
          "Hazard information is entered manually from external reports. Engineer-selected parameters remain editable, and missing checks are marked VERIFY or Needs Review. The workbook organizes those decisions; it doesn't make them authoritative.",
        ],
      },
      {
        id: "calculation-helpers",
        title: "Where formulas help",
        items: [
          "Snow: factors for exposure, thermal conditions, and importance; flat-roof snow pressure; and a controlled slope-factor interpolation helper.",
          "Wind: a directional exposure review framework with engineer overrides, rather than an automatic exposure decision.",
          "Seismic: system lookup for R, Ω₀, Cd, and permitted-height status, with approximate-period and equivalent-lateral-force Cs guidance.",
          "Project information, rain, geotechnical inputs, and an expandable gravity-load table feed a consolidated output sheet alongside the other criteria.",
        ],
      },
      {
        id: "reviewable-summary",
        title: "One summary, with the working still visible",
        paragraphs: [
          "The output sheet pulls selected values together for review. The supporting sheets remain available so someone can trace a result back to its input, reference, or assumption.",
          "The current internal draft includes the calculation helpers and summary, but source confirmation and incomplete checks still need attention. Full wind-pressure calculations, component-and-cladding pressures, and snow drift calculations remain outside its implemented scope.",
          "The part I care about most is that handoff: a tidy summary is only useful if the next engineer can understand where it came from.",
        ],
      },
    ],
    cardTags: ["Excel", "ASCE 7-16", "Design inputs"],
    technologies: ["Excel", "Formula-driven workflows", "ASCE 7-16", "Engineering QC"],
    technicalNotes: [
      "The v1.5 draft uses fourteen sheets, including centralized lookup tables and dedicated QC sheets.",
      "External design criteria and reference values need verification for the project. Formula results do not replace checking applicability and assumptions.",
      "The workbook and its reference content are internal and are not downloadable here.",
    ],
    links: [],
  },
  {
    slug: "fit-roulette",
    name: "Fit Roulette",
    shortName: "Fit Roulette",
    group: "Personal software",
    type: "Wardrobe PWA",
    status: "Public · Actively developed",
    summary:
      "Getting dressed from my own closet became a software project. Fit Roulette suggests outfits, remembers what I've logged, and keeps wardrobe data in the browser.",
    introduction:
      "I wanted an easier way to put outfits together using clothes I already owned. A simple randomizer was a start. Using it regularly gave me a much longer list of things I wanted it to understand.",
    sections: [
      {
        id: "more-than-random",
        title: "A little less random than the name suggests",
        paragraphs: [
          "The app considers garment compatibility, occasion, availability, and recent logged wear. I can generate an outfit, reroll it, start with one item I want to wear, or swap a piece without starting over.",
          "Pair preferences and exact combination bans give me a way to tell it what works. Rerolls prefer combinations I haven't seen in the current session, then allow repeats when the valid pool runs out.",
        ],
      },
      {
        id: "using-it-every-day",
        title: "The parts that grew out of using it",
        items: [
          "Closet editing includes availability and archive states, duplicate warnings, and protection for unsaved changes.",
          "Outfit history supports manual logging and editing, with saved garment snapshots so past outfits don't silently change when the closet does.",
          "Optional weather context works alongside manual controls and an offline fallback. Location is only requested with consent.",
          "Read-only insights show closet composition, logged activity, and compatibility coverage without treating a suggested outfit as one actually worn.",
        ],
      },
      {
        id: "keeping-data-local",
        title: "My closet doesn't need an account",
        paragraphs: [
          "Fit Roulette is a static HTML, CSS, and JavaScript app. Wardrobe and history data live in localStorage, and a service worker caches the app for offline use. There is no account, backend, or uploaded closet database.",
          "That makes backup important. JSON export and restore let users keep their own copies, and schema migrations preserve recovery copies before replacing older data. Browser-local storage is convenient, but it isn't a substitute for a downloaded backup.",
        ],
      },
      {
        id: "ongoing-work",
        title: "A small annoyance, a substantial project",
        paragraphs: [
          "The public v1.6.3 release brings these pieces together. Keeping the app useful as it grows has meant paying attention to data migration, offline behavior, accessibility, and the details of editing and logging, not just outfit generation.",
          "This is the project I keep coming back to because I use it. The interesting work is often in the small interactions I notice after the original idea already works.",
        ],
      },
    ],
    cardTags: ["Outfit generation", "PWA", "Local storage"],
    technologies: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker", "localStorage"],
    technicalNotes: [
      "Opt-in weather sends rounded coordinates to Open-Meteo, never wardrobe or outfit-history data. Manual context remains available without location or network access.",
      "Insights are calculated locally. Coverage analysis reports a lower bound if its candidate limit is reached; it does not extrapolate a total.",
      "Layering supports one optional layer. Physical garment fit and arbitrary layer stacks are not modeled.",
    ],
    links: [
      { label: "Try Fit Roulette", href: "https://crunchybrunch.github.io/fit-roulette/", kind: "demo" },
      { label: "View GitHub", href: "https://github.com/CrunchyBrunch/fit-roulette", kind: "github" },
    ],
  },
  {
    slug: "lionlog",
    name: "LionLog",
    shortName: "LionLog",
    group: "Personal software",
    type: "Penn State dining menu browser",
    status: "Alpha · In development",
    summary:
      "My attempt to make Penn State dining menus and available nutrition information easier to browse. Currently an alpha, independent of Penn State.",
    introduction:
      "Penn State publishes its dining menus, but finding what I want to eat can still take more digging than I'd like, especially when I want to check the nutrition information. LionLog starts with making that information easier to find on a phone.",
    sections: [
      {
        id: "menu-browser",
        title: "Starting with the menu",
        paragraphs: [
          "The alpha lets me browse by dining hall, service date, meal period, and venue. It shows the source's serving units and available nutrition information, with separate states for current, cached, stale, sample, and unavailable data.",
          "It's a menu browser at this stage. Meal planning, nutrition targets, calorie tracking, accounts, and a food diary are not implemented.",
        ],
      },
      {
        id: "trusting-the-data",
        title: "The harder part is knowing what to show",
        paragraphs: [
          "A polished menu isn't helpful if the data is old or incomplete. I separated data retrieval from the interface: a manually run process reads public menu HTML, validates versioned snapshots, and exports a static catalog for the app.",
          "The React interface reads those snapshots through provider interfaces. Missing, invalid, or expired publications show as unavailable. Sample mode is a deliberate choice; it never quietly fills a gap in the real menu.",
          "That separation lets me work on the interface without pretending the data source is more reliable than it is.",
        ],
      },
      {
        id: "where-it-stands",
        title: "Still an exploration",
        paragraphs: [
          "The v0.2.0-alpha.4 milestone can prepare a reviewable app artifact with validated public-menu snapshots. Preparation and public deployment are separate manual steps, and scheduled production retrieval is not implemented.",
          "LionLog is an independent, unofficial project, not affiliated with or endorsed by Penn State. It reads public menu information and does not use an official Penn State API.",
        ],
      },
    ],
    cardTags: ["Dining menus", "Nutrition data", "Alpha"],
    technologies: ["React", "TypeScript", "Vinext", "Vite", "Zod", "PWA"],
    technicalNotes: [
      "Public-menu HTML is parsed outside the browser app. Snapshots are validated at ingestion and again before static export.",
      "Versioned data contracts keep retrieval, validation, and presentation separate. The PWA shell does not scrape Penn State.",
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/CrunchyBrunch/LionLog", kind: "github" },
    ],
  },
] as const;

export const engineeringProjects = projects.filter((project) => project.group === "Engineering tools");
export const personalProjects = projects.filter((project) => project.group === "Personal software");

export function getProject(slug: string): Project {
  const project = projects.find((candidate) => candidate.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}
