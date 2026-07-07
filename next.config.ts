import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/konsinyo.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
