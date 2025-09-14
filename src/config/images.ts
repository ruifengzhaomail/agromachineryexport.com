// 图片配置文件 - 集中管理所有图片路径
// 修改图片只需要在这个文件中更新路径即可

export const IMAGES = {
  // 轮播图片 - 使用您提供的真实农机图片
  hero: {
    slide1: '/images/hero/slide1.jpg', // 播种机田间作业
    slide2: '/images/hero/slide2.png', // 现代农业设备
    slide3: '/images/hero/slide3.jpg', // 农机工作场景
  },

  // 产品图片 - 使用您提供的真实产品图片
  products: {
    precisionPlanter: '/images/products/precision-seeder.jpeg', // 精密播种设备
    knapsackSprayer: '/images/products/knapsack-sprayer.png', // 喷雾设备
    seedingEquipment: '/images/hero/slide1.jpg', // 播种机
    hydroponicSystem: '/images/products/hydroponic-system.jpeg', // 现代农业系统
    tractorUtility: '/images/hero/slide3.jpg', // 拖拉机应用
    miniHarvester: '/images/products/precision-seeder.jpeg', // 小型收获机
  },

  // 公司相关图片
  company: {
    factory: '/images/company/factory-exterior.jpg',
    team: '/images/company/team-photo.jpg',
    certificates: '/images/company/certificates-wall.jpg',
    warehouse: '/images/company/warehouse-interior.jpg',
  },

  // 项目案例图片 (建议尺寸: 600x400px)
  projects: {
    kenya: '/images/projects/kenya-tractor-delivery.jpg',
    brazil: '/images/projects/brazil-precision-planting.jpg',
    vietnam: '/images/projects/vietnam-sprayer-training.jpg',
    argentina: '/images/projects/argentina-harvester-field.jpg',
    nigeria: '/images/projects/nigeria-mechanization.jpg',
    peru: '/images/projects/peru-organic-farming.jpg',
  },

  // 特色图标和装饰图片
  features: {
    experience: '/images/icons/experience-icon.svg',
    global: '/images/icons/global-reach-icon.svg',
    customization: '/images/icons/customization-icon.svg',
    security: '/images/icons/secure-trade-icon.svg',
  }
}

// 图片优化配置
export const IMAGE_CONFIG = {
  // 图片质量设置 (1-100)
  quality: 85,
  
  // 图片格式优先级
  formats: ['webp', 'jpg'],
  
  // 响应式图片尺寸
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw',
    product: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, 25vw',
  },
  
  // 懒加载设置
  loading: {
    hero: 'eager' as const, // 首屏图片立即加载
    product: 'lazy' as const, // 产品图片懒加载
    other: 'lazy' as const,
  }
}

// 占位符图片 (开发阶段使用)
export const PLACEHOLDER_IMAGES = {
  hero: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxOTIwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iODAwIiBmaWxsPSIjNEY0NjRGIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCI+QWdyaWN1bHR1cmFsIE1hY2hpbmVyeTwvdGV4dD4KPC9zdmc+',
  product: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNEY0NjRGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIzMiI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+',
}

// 图片路径验证函数
export const getImagePath = (category: keyof typeof IMAGES, imageName: string): string => {
  const categoryImages = IMAGES[category] as Record<string, string>
  return categoryImages[imageName] || PLACEHOLDER_IMAGES.product
}

// 图片预加载函数
export const preloadImages = (imagePaths: string[]) => {
  imagePaths.forEach(path => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = path
    document.head.appendChild(link)
  })
}
