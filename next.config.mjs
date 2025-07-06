/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // importante si usas un puerto distinto al 80
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
