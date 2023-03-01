/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dgzq3bicw/image/upload",
    unoptimized: true,
  },
};

module.exports = nextConfig;
