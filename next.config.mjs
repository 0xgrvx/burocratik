/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/burocratik' : '', output: 'export', images: { unoptimized: true, },};

export default nextConfig;
