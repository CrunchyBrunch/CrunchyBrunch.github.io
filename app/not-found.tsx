import { SiteHeader } from "../components/site-header";
import { withBasePath } from "../data/site";
export default function NotFound() {
  return <><SiteHeader /><main id="content" tabIndex={-1}><section className="not-found"><p className="eyebrow">404 / Not found</p><h1>This detail isn&apos;t on the sheet.</h1><p>The page may have moved or may not exist yet.</p><a className="button button-primary" href={withBasePath("/")}>Return home</a></section></main></>;
}
