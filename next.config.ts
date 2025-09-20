import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // MDX passthroughs for LLM routes
        {
          source: "/docs/:path*.mdx",
          destination: "/llms.mdx/:path*",
        },
      ],
    };
  },
  async redirects() {
    return [
      // Root and version root redirects
      {
        source: "/docs",
        destination: "/docs/get-started/overview",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
