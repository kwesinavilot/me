/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '',
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'https://kwesinavilot.github.io/',
        port: '',
        pathname: '/',
      },
    ]
  }
}

module.exports = nextConfig
