/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
