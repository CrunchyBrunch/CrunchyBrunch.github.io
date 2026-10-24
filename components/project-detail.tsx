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
    <>
      <SiteHeader />
      <main id="content" tabIndex={-1}>
      <section className="case-hero">
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
            <div><span>Category</span><strong>{project.group}</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-layout">
        <aside className="case-sidebar">
          <nav aria-label="In this case study">
            <h2 className="section-number">In this project</h2>
            <ul className="case-contents">{project.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}<li><a href="#technical-notes">Technical notes & scope</a></li></ul>
          </nav>
        </aside>
        <div className="case-main">
          <div className="case-introduction"><p className="case-intro">{project.introduction}</p></div>
          {project.sections.map((section, index) => (
            <section className="case-section" aria-labelledby={section.id} key={section.id}>
              <p className="section-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
              <h2 id={section.id}>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p className="case-copy" key={paragraph}>{paragraph}</p>)}
              {section.items && (
                <ul className="feature-list">
                  {section.items.map((item) => <li key={item}><p>{item}</p></li>)}
                </ul>
              )}
            </section>
          ))}
          <section className="case-section technical-notes" aria-labelledby="technical-notes">
            <h2 id="technical-notes">Technical notes & scope</h2>
            <ul>{project.technicalNotes.map((note) => <li key={note}>{note}</li>)}</ul>
            <h3 className="section-number tools-heading">Tools & formats</h3>
            <ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </section>
        </div>
      </section>

      <a className="next-project" href={withBasePath(`/projects/${nextProject.slug}/`)}>
        <span>Next case study</span>
        <strong>{nextProject.name} →</strong>
      </a>
      </main>
      <SiteFooter />
    </>
  );
}
