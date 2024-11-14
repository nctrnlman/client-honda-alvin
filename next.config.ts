import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "www.google.com",
      "id.motor1.com",
      "cdn.motor1.com",
      "media.ed.edmunds-media.com",
      "di-uploads-pod1.dealerinspire.com",
      "honda-kl.com",
    ], // Tambahkan domain yang diizinkan
  },
};

export default nextConfig;
