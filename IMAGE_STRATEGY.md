# 图片策略和配置指南

## 📁 建议的图片目录结构

```
public/
├── images/
│   ├── hero/                    # 轮播图片
│   │   ├── slide-1.jpg         # 第一张轮播图
│   │   ├── slide-2.jpg         # 第二张轮播图
│   │   └── slide-3.jpg         # 第三张轮播图
│   ├── products/               # 产品图片
│   │   ├── tractors/
│   │   │   ├── tractor-85hp.jpg
│   │   │   └── tractor-45hp.jpg
│   │   ├── seeders/
│   │   │   ├── precision-planter.jpg
│   │   │   └── corn-seeder.jpg
│   │   └── sprayers/
│   │       └── knapsack-gx35.jpg
│   ├── company/                # 公司相关图片
│   │   ├── factory.jpg
│   │   ├── team.jpg
│   │   └── certificates.jpg
│   └── projects/               # 项目案例图片
│       ├── kenya-project.jpg
│       ├── brazil-project.jpg
│       └── vietnam-project.jpg
```

## 🚀 性能优化策略

### 1. 图片格式建议
- **WebP格式**: 现代浏览器支持，体积小50%
- **JPEG**: 兼容性好，适合照片
- **PNG**: 适合logo和图标

### 2. 图片尺寸规范
- **轮播图**: 1920x800px (2.4:1比例)
- **产品卡片**: 400x300px (4:3比例) 
- **项目案例**: 600x400px (3:2比例)

### 3. Next.js 图片优化
- 使用 `next/image` 组件自动优化
- 自动懒加载
- 自动格式转换
- 响应式图片

## 🎨 产品展示布局对比

### 当前布局 (一排3个)
✅ 优点:
- 信息密度高，一屏展示更多产品
- 适合桌面端浏览
- 现代化的网格布局

❌ 缺点:
- 移动端可能显得拥挤
- 每个产品获得的注意力较少

### 建议布局 (一排1个，大卡片)
✅ 优点:
- 每个产品获得更多关注
- 可以展示更多产品细节
- 更适合展示高价值B2B产品
- 移动端体验更好

❌ 缺点:
- 需要更多滚动才能看到所有产品

## 💡 针对外国客户的建议

### 推荐使用大卡片布局，因为:
1. **B2B特性**: 农机是高价值产品，客户需要详细信息
2. **信任建立**: 大图片更能展示产品质量
3. **移动优先**: 国外客户移动端使用率高
4. **转化率**: 更大的展示区域提高点击率

## 🔧 技术实现建议

### 1. 使用 Next.js Image 组件
```jsx
import Image from 'next/image'

<Image
  src="/images/products/tractors/tractor-85hp.jpg"
  alt="Agricultural Tractor 85HP"
  width={400}
  height={300}
  priority // 对首屏图片使用
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 2. 图片压缩工具
- **TinyPNG**: 在线压缩
- **ImageOptim**: Mac工具
- **Sharp**: Node.js批量处理

### 3. CDN建议
- **Vercel**: 自动CDN和图片优化
- **Cloudflare**: 全球CDN加速
- **阿里云OSS**: 国内外都快

## 📊 SEO优化建议

### 1. 图片SEO
- 有意义的文件名: `tractor-85hp-agricultural-machinery.jpg`
- Alt标签: 描述性文字
- 图片sitemap
- 结构化数据

### 2. 页面性能
- 图片懒加载
- 预加载关键图片
- 压缩图片
- 使用现代格式

## 🎯 行动计划

1. **收集图片**: 从原网站或供应商获取高质量产品图
2. **图片处理**: 统一尺寸和格式
3. **代码更新**: 替换占位符为真实图片
4. **性能测试**: 使用Lighthouse测试加载速度
5. **SEO优化**: 添加alt标签和结构化数据

