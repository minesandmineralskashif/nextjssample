/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Use static export instead of `next export`
  output: "export",

  // ✅ Disable image optimization (needed for static export)
  images: {
    unoptimized: true,
  },

  // ✅ Optional: Set trailingSlash so Netlify serves `/about` as `/about/index.html`
  trailingSlash: true,
};

module.exports = nextConfig;
