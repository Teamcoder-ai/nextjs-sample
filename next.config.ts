import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Slim standalone build for Docker deploys. Emits .next/standalone/ that the
  // runtime image copies in — ~150MB image instead of ~500MB with node_modules.
  output: "standalone",
};

export default nextConfig;
