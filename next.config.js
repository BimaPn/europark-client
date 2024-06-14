/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "backend",
          port: "9000",
          pathname: "/**",
        },
      ],
    },
    eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig
