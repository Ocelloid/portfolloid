import { env } from "./src/env.js";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      {
        source: "/vtt",
        destination: `http://${env.VTT_IP}:${env.VTT_PORT}/`,
        permanent: true,
      },
      {
        source: "/vtt/:path*",
        destination: `http://${env.VTT_IP}:${env.VTT_PORT}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default config;
