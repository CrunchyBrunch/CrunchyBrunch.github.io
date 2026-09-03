import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";
const configuredBasePath = process.env.SITE_BASE_PATH?.trim() ?? "";
const basePath = configuredBasePath === "/" ? "" : configuredBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  trailingSlash: staticExport,
  ...(staticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
