/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["google.com", "cdn.pixabay.com", "unsplash.com"],
    unoptimized: true,
  }
};

module.exports = nextConfig;
