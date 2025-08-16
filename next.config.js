/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export
  // output: "export",

  // Optional: you can keep trailingSlash
  trailingSlash: false, // or true if you prefer

  images: {
    unoptimized: true, // keep if you want to serve images without optimization
  },
};

module.exports = nextConfig;
