/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/secure-sand-box/checkbox-ui',
  assetPrefix: '/secure-sand-box/checkbox-ui',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
