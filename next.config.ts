import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Pin the root so stray lockfiles in parent directories are not picked up.
  turbopack: { root: __dirname },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // CI sets this to /<repo-name> for GitHub Pages; leave unset for local dev or a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
