/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // distDir: 'build',
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.aitimes.com', 'lh3.googleusercontent.com', 'velog.velcdn.com', 'cdn.pixabay.com'],
  }
}

module.exports = nextConfig
