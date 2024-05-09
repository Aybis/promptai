/** @type {import('next').NextConfig} */

const hostnames = ['via.placeholder.com'];

const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
};

export default nextConfig;
