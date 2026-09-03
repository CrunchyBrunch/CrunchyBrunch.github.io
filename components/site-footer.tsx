import { siteConfig, withBasePath } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="wordmark-mark" aria-hidden="true">BE</span>
        <p>Brooks Estadt · Architectural Engineering</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${siteConfig.email}`}>Email</a>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={withBasePath("/#top")}>Back to top ↑</a>
      </div>
    </footer>
  );
}
