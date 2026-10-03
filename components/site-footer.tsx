import { withBasePath } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="wordmark-mark" aria-hidden="true">BE</span>
        <p>Brooks Estadt · Architectural Engineering</p>
      </div>
      <div className="footer-links">
        <a href={withBasePath("/#top")}>Back to top ↑</a>
      </div>
    </footer>
  );
}
