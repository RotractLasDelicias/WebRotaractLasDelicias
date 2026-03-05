import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200], // Crea versiones para móviles y PC
  },
}

export default nextConfig;
