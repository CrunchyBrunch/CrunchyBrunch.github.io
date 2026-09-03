import { ProjectCard } from "../components/project-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { featuredProjects, secondaryProjects } from "../data/projects";
import { siteConfig, withBasePath } from "../data/site";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader root />
      <section className="hero drafting-grid">
        <div className="hero-copy">
          <h1>Structural engineering.<br />Better tools where they help.</h1>
          <p className="hero-lede">
            I&apos;m Brooks Estadt, an architectural engineering student at Penn State focused on
            building structures. I also build tools that cut repetitive work out of structural
            engineering workflows.
          </p>
          <div className="hero-actions" aria-label="Profile links">
            <a className="button button-primary" href={withBasePath("/#work")}>View selected work</a>
            <a className="button button-secondary" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="button button-secondary" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="button button-muted" aria-disabled="true">Résumé</span>
          </div>
        </div>
        <aside className="hero-note" aria-label="Profile summary">
          <span className="detail-number">01 / PROFILE</span>
          <div><p>Seeking</p><strong>Structural engineering internships</strong></div>
          <div><p>School</p><strong>Pennsylvania State University, University Park</strong></div>
          <div><p>Expected graduation</p><strong>2029</strong></div>
        </aside>
      </section>

      <section className="positioning-strip" aria-label="Career summary">
        <div><span>Program</span><strong>Architectural Engineering</strong></div>
        <div><span>Focus</span><strong>Building Structures</strong></div>
        <div><span>Experience</span><strong>Structural Engineering Intern, GPI</strong></div>
        <div><span>Also building</span><strong>Engineering tools and automation</strong></div>
      </section>

      <section className="section-shell" id="work">
        <div className="section-heading">
          <div><h2>Selected work</h2></div>
        </div>
        <div className="project-group-heading"><h3>Engineering tools</h3><span>Case studies · source private</span></div>
        <p className="project-group-copy">These are sanitized case studies of tools built around real engineering work. Employer files, project data, and private source material are not included.</p>
        <div className="project-list">
          {featuredProjects.filter((project) => project.group === "Engineering tools").map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
        <div className="project-group-heading personal-heading"><h3>Personal software</h3><span>Public work + experiments</span></div>
        <p className="project-group-copy">A few things I build outside structural engineering.</p>
        <div className="project-list">
          {featuredProjects.filter((project) => project.group === "Personal software").map((project, index) => (
            <ProjectCard project={project} index={index + 3} key={project.slug} />
          ))}
        </div>
        {secondaryProjects.map((project) => (
          <article className="secondary-project" key={project.slug}>
            <div><p className="eyebrow">In development</p><h3>{project.name}</h3></div>
            <p>{project.summary}</p>
            <a className="text-link" href={withBasePath(`/projects/${project.slug}/`)}>Read project note →</a>
          </article>
        ))}
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow">Experience & education</p><h2>Structural engineering is the main thing.</h2></div>
          <p>Most of the software came later. The useful ideas usually started with something repetitive or just slow in actual engineering work.</p>
        </div>
        <div className="timeline">
          <article><span className="timeline-marker">01</span><div><p className="timeline-type">Professional experience</p><h3>Structural Engineering Intern</h3><p className="timeline-org">Greenman-Pedersen, Inc. (GPI)</p><p>Worked with structural calculations, existing-member investigation, field surveys, CAD and Revit workflows, design documents, and engineering automation.</p></div></article>
          <article><span className="timeline-marker">02</span><div><p className="timeline-type">Education</p><h3>B.A.E./M.A.E. in Architectural Engineering</h3><p className="timeline-org">Pennsylvania State University, University Park</p><p>Structural Option · GPA: 3.9 · Expected 2029</p></div></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div><p className="eyebrow">How I build engineering tools</p><h2>Software should help the engineer, not pretend to be one.</h2></div>
        <div className="principles">
          <article><span>01</span><h3>Keep the important stuff visible</h3><p>Assumptions, source values, overrides, and review states should be easy to find.</p></article>
          <article><span>02</span><h3>Automate the repetitive part</h3><p>Transcription, formatting, searching, and data transfer are good automation targets. Engineering judgment stays with the engineer.</p></article>
          <article><span>03</span><h3>Be clear about the limits</h3><p>Every tool should make its inputs, intended use, current limitations, and unfinished pieces obvious.</p></article>
        </div>
      </section>

      <section className="contact-section drafting-grid" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Looking for a structural engineering intern?</h2>
        <p>I&apos;m interested in building-structure work where I can contribute, learn from practicing engineers, and keep improving in the profession.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${siteConfig.email}`}>Email</a>
          <a className="button button-secondary" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="button button-secondary" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <span className="button button-muted" aria-disabled="true">Résumé</span>
        </div>
        <small>Primary: {siteConfig.email} · Penn State: {siteConfig.schoolEmail}</small>
      </section>
      <SiteFooter />
    </main>
  );
}
