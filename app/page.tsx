import { ProjectCard } from "../components/project-card";
import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { getProject } from "../data/projects";
import { siteConfig, withBasePath } from "../data/site";

const selectedWork = [
  {
    project: getProject("design-criteria-calculator"),
    description: "An Excel workflow that organizes structural design inputs and calculation helpers into a reviewable summary.",
    tags: ["Excel", "ASCE 7-16", "Engineering QC"],
  },
  {
    project: getProject("aisc-section-finder"),
    description: "A desktop tool that turns field measurements into ranked steel-section matches for engineering review.",
    tags: ["Python", "AISC shapes", "Field investigation"],
  },
  {
    project: getProject("fit-roulette"),
    description: "A wardrobe PWA for generating, adjusting, and logging outfits, with closet data kept in the browser.",
    tags: ["JavaScript", "PWA", "Local storage"],
  },
];

const otherWork = [
  { project: getProject("cad-revit-wind-generator"), description: "Completed wind calculations to drawing-ready CAD output. Revit development ongoing." },
  { project: getProject("lionlog"), description: "A Penn State dining menu browser with validated menu snapshots. In alpha development." },
];

export default function Home() {
  return (
    <>
      <SiteHeader root />
      <main id="content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <p className="hero-identity">Architectural Engineering <span aria-hidden="true">/</span> Penn State <span aria-hidden="true">/</span> Structures</p>
            <h1 id="hero-title">Structural engineering.<br /><span>Better tools where they help.</span></h1>
            <p className="hero-lede">I&apos;m Brooks Estadt, an architectural engineering student focused on building structures. I also build tools that cut repetitive work out of structural engineering workflows.</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={withBasePath("/#work")}>Selected work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={withBasePath(siteConfig.resumePath)} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-availability">Seeking structural engineering internships <span aria-hidden="true">·</span> Expected graduation 2029</p>
          </Reveal>
        </section>

        <section className="section-shell work-section" id="work" aria-labelledby="work-title">
          <Reveal className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <p>Practical tools, built around real work.<br />Engineering case studies use sanitized material.</p>
          </Reveal>
          <div className="project-list">
            {selectedWork.map(({ project, description, tags }, index) => (
              <ProjectCard project={project} index={index} description={description} tags={tags} key={project.slug} />
            ))}
          </div>
          <div className="other-work">
            <h3>Other work</h3>
            <div className="other-work-list">
              {otherWork.map(({ project, description }) => (
                <article key={project.slug}>
                  <h4><a href={withBasePath(`/projects/${project.slug}/`)}>{project.name} <span aria-hidden="true">↗</span></a></h4>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
          <Reveal className="engineering-statement">
            <p className="eyebrow">A working principle</p>
            <p className="statement">Software should help the engineer,<br className="desktop-break" /> not pretend to be one.</p>
            <p className="statement-note">Automate the repetitive part. Keep assumptions visible and engineering judgment with the engineer.</p>
          </Reveal>
        </section>

        <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
          <Reveal className="section-heading"><h2 id="experience-title">Experience & education</h2></Reveal>
          <div className="timeline">
            <article>
              <div><h3>Structural Engineering Intern</h3><p className="timeline-org">Greenman-Pedersen, Inc. (GPI)</p></div>
              <p className="timeline-copy">Structural calculations, existing-member investigation, field surveys, CAD and Revit workflows, design documents, and engineering automation.</p>
              <p className="timeline-date">Summer 2026</p>
            </article>
            <article>
              <div><h3>B.A.E./M.A.E. in Architectural Engineering</h3><p className="timeline-org">Pennsylvania State University, University Park</p></div>
              <p className="timeline-copy">Structural Option<br />GPA: 3.85</p>
              <p className="timeline-date">Expected 2029</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div><p className="eyebrow">Contact</p><h2 id="contact-title">Let&apos;s talk structures.</h2><p>I&apos;m looking for a structural engineering internship where I can contribute, learn from practicing engineers, and keep improving.</p></div>
            <div className="contact-links">
              <a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <span aria-hidden="true">↗</span></a>
              <div className="social-links">
                <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href={withBasePath(siteConfig.resumePath)} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
              </div>
              <a className="school-email" href={`mailto:${siteConfig.schoolEmail}`}>Penn State: {siteConfig.schoolEmail}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
