/** @type {import('next').NextConfig} */
module.exports = {
  // @TODO figure out why the swc minifier breaks preview mode
  swcMinify: false,

  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  experimental: {
    nextScriptWorkers: true,
  },
}
