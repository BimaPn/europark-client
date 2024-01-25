/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "8000",
          pathname: "/storage/**",
        },
      ],
    },
    eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig
