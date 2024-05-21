/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "product-cdn.systembolaget.se",
        port: "",
        pathname: "/productimages/**",
      },
    ],
  },
};

export default nextConfig;
