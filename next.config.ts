/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      src: "./app",
      language: "typescript",
      artifactDirectory: "./app/__generated__",
    },
  },
};

export default nextConfig;