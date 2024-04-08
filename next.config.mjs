/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  // Add webpack configuration to enable source maps
  webpack(config, { dev, isServer }) {
    // Check if it's not development mode and not server-side rendering
    if (!dev && !isServer) {
      // Enable source maps for production build
      config.devtool = "source-map";
    }

    return config;
  },
};

export default nextConfig;
