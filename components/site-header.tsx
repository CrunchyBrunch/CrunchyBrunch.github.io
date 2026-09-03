import { withBasePath } from "../data/site";

export function SiteHeader({ root = false }: { readonly root?: boolean }) {
  const home = root ? "/#top" : "/";
  const links = [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="site-header">
      <a className="wordmark" href={withBasePath(home)} aria-label="Brooks Estadt home">
        <span className="wordmark-mark" aria-hidden="true">BE</span>
        <span>Brooks Estadt</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <a href={withBasePath(link.href)} key={link.label}>{link.label}</a>)}
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <a href={withBasePath(link.href)} key={link.label}>{link.label}</a>)}
        </nav>
      </details>
    </header>
  );
}
