import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações para estabilidade
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
