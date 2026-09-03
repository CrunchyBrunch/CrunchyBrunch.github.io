import type { Metadata } from "next";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { withBasePath } from "../data/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function getProjectMetadata(project: Project): Metadata {
  const title = `${project.name} | Brooks Estadt`;

  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      images: [],
    },
    twitter: {
      title,
      description: project.summary,
      images: [],
    },
  };
}

export function ProjectDetail({ project }: { readonly project: Project }) {
  const currentIndex = projects.findIndex((candidate) => candidate.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="top">
      <SiteHeader />
      <section className="case-hero drafting-grid">
        <div className="case-breadcrumb"><a href={withBasePath("/#work")}>Selected work</a><span>/</span><span>{project.shortName}</span></div>
        <div className="case-hero-grid">
          <div>
            <p className="eyebrow">{project.group} · {project.type}</p>
            <h1>{project.name}</h1>
            <p className="case-lede">{project.summary}</p>
            {project.links.length > 0 && (
              <div className="hero-actions">
                {project.links.map((link, index) => (
                  <a className={`button ${index === 0 ? "button-primary" : "button-secondary"}`} href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
          <aside className="case-spec" aria-label="Project details">
            <div><span>Status</span><strong>{project.status}</strong></div>
            <div><span>Current version</span><strong>{project.version}</strong></div>
            <div><span>Category</span><strong>{project.group}</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-layout">
        <div className="case-main">
          <section className="case-section">
            <p className="section-number">01 / Overview</p>
            <p className="case-intro">{project.overview}</p>
          </section>
          <section className="case-section two-column-copy">
            <div><p className="section-number">02 / Problem</p><h2>What needed to improve</h2><p>{project.problem}</p></div>
            <div><p className="section-number">03 / Solution</p><h2>How the tool responds</h2><p>{project.solution}</p></div>
          </section>
          <section className="case-section">
            <p className="section-number">04 / Key capabilities</p>
            <h2>Verified in the current version</h2>
            <ol className="feature-list">
              {project.features.map((feature, index) => (
                <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></li>
              ))}
            </ol>
          </section>
          <section className="case-section two-column-copy">
            <div>
              <p className="section-number">05 / Engineering impact</p>
              <h2>Value without overstating it</h2>
              <p>{project.impact}</p>
            </div>
            <div>
              <p className="section-number">06 / Current state</p>
              <h2>Where it stands</h2>
              <p>{project.currentState}</p>
            </div>
          </section>
        </div>

        <aside className="case-sidebar">
          <div>
            <p className="section-number">Technical notes</p>
            <ul>{project.technicalNotes.map((note) => <li key={note}>{note}</li>)}</ul>
          </div>
          <div>
            <p className="section-number">Tools & formats</p>
            <ul className="sidebar-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </div>
        </aside>
      </section>

      <a className="next-project" href={withBasePath(`/projects/${nextProject.slug}/`)}>
        <span>Next case study</span>
        <strong>{nextProject.name} →</strong>
      </a>
      <SiteFooter />
    </main>
  );
}
