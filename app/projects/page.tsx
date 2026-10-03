import type { Metadata } from "next";
import { ProjectCard } from "../../components/project-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { projects } from "../../data/projects";

export const metadata: Metadata = { title: "Projects | Brooks Estadt" };

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content" tabIndex={-1}>
      <section className="index-hero"><p className="eyebrow">Project index</p><h1>Engineering tools & personal software.</h1><p>Selected engineering workflows and personal projects. Professional work is presented through sanitized case studies.</p></section>
      <section className="section-shell"><h2 className="visually-hidden">All projects</h2><div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
