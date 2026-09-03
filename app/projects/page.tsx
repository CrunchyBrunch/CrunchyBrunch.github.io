import type { Metadata } from "next";
import { ProjectCard } from "../../components/project-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { projects } from "../../data/projects";

export const metadata: Metadata = { title: "Projects | Brooks Estadt" };

export default function ProjectsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="index-hero drafting-grid"><p className="eyebrow">Project index</p><h1>Engineering tools & personal software.</h1><p>Five locally audited projects, with professional work kept at the sanitized case-study level.</p></section>
      <section className="section-shell"><div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>
      <SiteFooter />
    </main>
  );
}
