import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 配置图片质量，解决 Next.js 16 的警告
    qualities: [75, 85, 95],
    // 移除外部域名配置，因为现在使用本地图片
    formats: ['image/webp', 'image/avif'],
    // 图片尺寸配置
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
