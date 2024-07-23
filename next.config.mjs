/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.aianimeartgenerator.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
