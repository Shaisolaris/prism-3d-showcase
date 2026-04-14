/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/prism-3d-showcase',
  assetPrefix: '/prism-3d-showcase/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
