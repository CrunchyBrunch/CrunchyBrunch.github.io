import type { Project } from "../data/projects";
import { withBasePath } from "../data/site";
import { Reveal } from "./reveal";

export function ProjectCard({ project, index, description = project.summary, tags = project.technologies.slice(0, 3) }: {
  readonly project: Project;
  readonly index: number;
  readonly description?: string;
  readonly tags?: readonly string[];
}) {
  const liveDemo = project.links.find((link) => link.kind === "demo");

  return (
    <Reveal delay={Math.min(index, 2) * 0.055}>
      <article className="project-card">
      <div className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="project-card-main">
        <p className="project-category">{project.group === "Engineering tools" ? "Engineering tool" : "Personal software"}</p>
        <h3><a href={withBasePath(`/projects/${project.slug}/`)}>{project.name}</a></h3>
        <p>{description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {tags.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="project-card-links">
        <a className="text-link" href={withBasePath(`/projects/${project.slug}/`)} aria-label={`View ${project.name} case study`}>View project <span aria-hidden="true">↗</span></a>
        {liveDemo && (
          <a className="text-link live-demo-link" href={liveDemo.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live app`}>
            Live app <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      </article>
    </Reveal>
  );
}
