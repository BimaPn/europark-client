/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "192.168.62.229",
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
