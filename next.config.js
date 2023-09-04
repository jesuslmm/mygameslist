/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.rawg.io"],
  },
};

module.exports = {
  ...nextConfig,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};
