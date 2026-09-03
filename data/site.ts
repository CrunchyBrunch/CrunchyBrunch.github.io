export const siteConfig = {
  githubUrl: "https://github.com/CrunchyBrunch",
  linkedinUrl: "https://www.linkedin.com/in/brooksestadt/",
  email: "brooksestadt80@gmail.com",
  schoolEmail: "bce5138@psu.edu",
  resumePath: null,
} as const;

export const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || null;
export const siteBasePath = process.env.SITE_BASE_PATH?.replace(/\/$/, "") || "";

export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${siteBasePath}${path}` : path;
}
