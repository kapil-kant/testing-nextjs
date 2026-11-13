const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react'],
  },
  productionBrowserSourceMaps: false,
  compiler: {
    // Strip console.log/info/debug from production builds; keep error/warn for diagnostics
    removeConsole: process.env.BUILD_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.example.com', pathname: '/**' }],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
}

module.exports = withBundleAnalyzer(nextConfig)
