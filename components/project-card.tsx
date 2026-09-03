import type { Project } from "../data/projects";
import { withBasePath } from "../data/site";

export function ProjectCard({ project, index }: { readonly project: Project; readonly index: number }) {
  const liveDemo = project.links.find((link) => link.kind === "demo");

  return (
    <article className={`project-card ${index === 0 ? "project-card-featured" : ""}`}>
      <div className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")} / {project.group === "Engineering tools" ? "ENG" : "APP"}
      </div>
      <div className="project-card-main">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.status}</span>
        </div>
        <h3><a href={withBasePath(`/projects/${project.slug}/`)}>{project.name}</a></h3>
        <dl className="project-brief">
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>Built</dt><dd>{project.summary}</dd></div>
        </dl>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="project-card-links">
        <a className="text-link" href={withBasePath(`/projects/${project.slug}/`)}>View case study →</a>
        {liveDemo && (
          <a className="text-link live-demo-link" href={liveDemo.href} target="_blank" rel="noreferrer">
            Open live app ↗
          </a>
        )}
      </div>
    </article>
  );
}
