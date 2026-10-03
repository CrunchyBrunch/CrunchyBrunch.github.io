import { siteConfig, withBasePath } from "../data/site";

export function SiteHeader({ root = false }: { readonly root?: boolean }) {
  const home = root ? "/#top" : "/";
  const links = [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <a className="wordmark" href={withBasePath(home)} aria-label="Brooks Estadt home">
        <span className="wordmark-mark" aria-hidden="true">BE</span>
        <span>Brooks Estadt</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => <a className={link.label === "Experience" ? "nav-experience" : undefined} href={withBasePath(link.href)} key={link.label}>{link.label}</a>)}
        <a className="nav-resume" href={withBasePath(siteConfig.resumePath)} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
