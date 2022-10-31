/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'musica-api.up.railway.app',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
