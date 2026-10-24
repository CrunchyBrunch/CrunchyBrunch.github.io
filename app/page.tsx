import Image from "next/image";
import { ProjectCard } from "../components/project-card";
import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { engineeringProjects, personalProjects } from "../data/projects";
import { siteConfig, withBasePath } from "../data/site";

export default function Home() {
  return (
    <>
      <SiteHeader root />
      <main id="content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <p className="hero-identity">Brooks Estadt <span aria-hidden="true">/</span> Penn State <span aria-hidden="true">/</span> Structures</p>
            <h1 id="hero-title">Structural engineering.<br /><span>Better tools where they help.</span></h1>
            <p className="hero-lede">I&apos;m Brooks, an architectural engineering student at Penn State focused on structures. My internship at GPI took me from field surveys to design and analysis. I enjoy that work, and I like finding repetitive tasks I can make easier with software.</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={withBasePath("/#work")}>Selected work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={withBasePath(siteConfig.resumePath)} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-availability">Seeking a <strong>Summer 2027</strong> structural engineering internship <span aria-hidden="true">·</span> Graduating 2029</p>
          </Reveal>
          <div className="hero-portrait">
            <Image src={withBasePath("/brooks-estadt-portrait.webp")} alt="Brooks Estadt wearing a navy jacket and light blue shirt" width={800} height={800} unoptimized priority sizes="(max-width: 760px) 176px, (max-width: 1000px) 20vw, 204px" />
          </div>
        </section>

        <section className="section-shell work-section" id="work" aria-labelledby="work-title">
          <Reveal className="section-heading">
            <h2 id="work-title">Engineering tools</h2>
            <p>Three ways I&apos;ve worked on the repetitive parts of structural engineering. Public case studies of internal work.</p>
          </Reveal>
          <div className="project-list">
            {engineeringProjects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
          <Reveal className="engineering-statement">
            <p className="eyebrow">A working principle</p>
            <p className="statement">Software should help the engineer,<br className="desktop-break" /> not pretend to be one.</p>
            <p className="statement-note">I&apos;m all for automating repetitive work, as long as the assumptions stay visible and the important decisions stay with the engineer.</p>
          </Reveal>
        </section>

        <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
          <Reveal className="section-heading"><h2 id="experience-title">Experience & education</h2></Reveal>
          <div className="timeline">
            <article>
              <div><h3>Structural Engineering Intern</h3><p className="timeline-org">Greenman-Pedersen, Inc. (GPI)</p></div>
              <p className="timeline-copy">I supported structural design and analysis, surveyed existing conditions, and helped turn field information into CAD drawings and Revit models. The tools above grew out of that work.</p>
              <p className="timeline-date">Summer 2026</p>
            </article>
            <article>
              <div><h3>Research Intern</h3><p className="timeline-org">NASA Undergraduate Research Internship Program (URIP) · Penn State</p></div>
              <p className="timeline-copy">I used remote-sensing and ArcGIS data to study flood susceptibility and infrastructure vulnerability, then presented the findings to academic audiences.</p>
              <p className="timeline-date">Oct. 2024–Dec. 2025</p>
            </article>
            <article>
              <div><h3>B.A.E./M.A.E. in Architectural Engineering</h3><p className="timeline-org">Pennsylvania State University, University Park</p></div>
              <p className="timeline-copy">Structural Option<br />GPA: 3.85 / 4.00<br />Interested in building design, analysis, investigation, and eventually project management.</p>
              <p className="timeline-date">Expected May 2029</p>
            </article>
          </div>
        </section>

        <section className="section-shell personal-section" id="personal-software" aria-labelledby="personal-title">
          <Reveal className="section-heading">
            <h2 id="personal-title">Personal software</h2>
            <p>Some problems follow me outside engineering. These started with my closet and the dining hall.</p>
          </Reveal>
          <div className="project-list">
            {personalProjects.map((project, index) => <ProjectCard project={project} index={index + engineeringProjects.length} key={project.slug} />)}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div><p className="eyebrow">Contact</p><h2 id="contact-title">Get in touch</h2><p>I&apos;m looking for a Summer 2027 structural engineering internship. If my work seems relevant to your team, I&apos;d be glad to connect.</p></div>
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
