import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  outputFileTracingIncludes: {
    "/api/**/*": ["./node_modules/**/*.wasm"]
  },
  serverExternalPackages: ["tiktoken", "onnxruntime-node"],
};

export default withMDX(config);
