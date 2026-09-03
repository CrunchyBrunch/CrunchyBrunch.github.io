import type { Metadata } from "next";
import { publicSiteUrl, withBasePath } from "../data/site";
import "./globals.css";

const title = "Brooks Estadt | Architectural & Structural Engineering";
const description =
  "Penn State Architectural Engineering student focused on structural engineering and practical software for engineering workflows.";
const socialImage = publicSiteUrl ? new URL("og.png", `${publicSiteUrl.replace(/\/$/, "")}/`).toString() : null;

export const metadata: Metadata = {
  metadataBase: publicSiteUrl ? new URL(publicSiteUrl) : undefined,
  title: { default: title, template: "%s" },
  description,
  applicationName: "Brooks Estadt Portfolio",
  authors: [{ name: "Brooks Estadt" }],
  manifest: withBasePath("/site.webmanifest"),
  icons: { icon: withBasePath("/favicon.png") },
  openGraph: {
    type: "website",
    siteName: "Brooks Estadt",
    title,
    description,
    ...(publicSiteUrl ? { url: publicSiteUrl } : {}),
    ...(socialImage ? { images: [{ url: socialImage, width: 1200, height: 630, alt: "Brooks Estadt — Architectural Engineering · Structural Focus" }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
