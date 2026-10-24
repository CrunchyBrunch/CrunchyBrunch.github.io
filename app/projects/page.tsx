import type { Metadata } from "next";
import { ProjectCard } from "../../components/project-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { engineeringProjects, personalProjects } from "../../data/projects";

export const metadata: Metadata = { title: "Projects | Brooks Estadt" };

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content" tabIndex={-1}>
      <section className="index-hero"><p className="eyebrow">Project index</p><h1>Engineering tools & personal software.</h1><p>I like finding something repetitive or inconvenient and seeing whether I can make it easier. Sometimes that starts at work. Sometimes it starts in my closet.</p></section>
      <section className="section-shell" aria-labelledby="engineering-title"><div className="section-heading"><h2 id="engineering-title">Engineering tools</h2><p>Public case studies of internal work. Source code and employer materials are not shared here.</p></div><div className="project-list">{engineeringProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>
      <section className="section-shell personal-section" aria-labelledby="personal-title"><div className="section-heading"><h2 id="personal-title">Personal software</h2></div><div className="project-list">{personalProjects.map((project, index) => <ProjectCard project={project} index={index + engineeringProjects.length} key={project.slug} />)}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
