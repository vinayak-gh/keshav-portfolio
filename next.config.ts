import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Vercel deployment
  output: "standalone",
  
  // Transpile Three.js and related packages
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Empty turbopack config to satisfy Next.js 16 Turbopack default
  turbopack: {},
};

export default nextConfig;
