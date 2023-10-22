/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  // basePath: '',
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'https://kwesinavilot.github.io/me/',
        port: '',
        pathname: '/images/**',
      },
    ]
  }
}

module.exports = nextConfig
