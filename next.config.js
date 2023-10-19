const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  sassOptions: {
    inlcudePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
