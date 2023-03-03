/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/dgzq3bicw/image/upload",
    // unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.cloudinary.com/v1_1/:path*",
      },
    ];
  },
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
};

module.exports = nextConfig;
