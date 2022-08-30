/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.aitimes.com', 'lh3.googleusercontent.com', 'velog.velcdn.com', 'cdn.pixabay.com'],
  }
}

module.exports = nextConfig
