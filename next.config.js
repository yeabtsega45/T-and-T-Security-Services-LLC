/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["google.com", "cdn.pixabay.com", "unsplash.com"],
    unoptimized: true,
  }
};

module.exports = nextConfig;
