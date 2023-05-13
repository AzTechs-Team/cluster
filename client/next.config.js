/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloud.appwrite.io"],
  },
  experimental: {
    // scrollRestoration: true,
  },
}

module.exports = nextConfig
