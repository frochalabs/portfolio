/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Desabilita cache de imagens em desenvolvimento
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig

