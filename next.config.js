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
        protocol: 'https',
        hostname: 'kwesinavilot.github.io',
        port: '',
        pathname: '/me/**',
      },
    ]
  }
}

module.exports = nextConfig
