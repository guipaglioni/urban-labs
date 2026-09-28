import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Não anuncia o framework (X-Powered-By) para quem sonda o site.
  poweredByHeader: false,
};

export default nextConfig;
