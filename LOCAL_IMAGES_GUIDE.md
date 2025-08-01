# 📸 本地图片使用和部署指南

## 🎯 概述

本指南将帮助你：
1. 在相册中使用本地图片
2. 优化图片以提高加载速度
3. 正确部署包含本地图片的网站

## 📁 图片目录结构

```
public/
├── images/
│   ├── album1/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── image3.jpg
│   ├── album2/
│   │   ├── photo1.jpg
│   │   └── photo2.jpg
│   └── README.md
└── favicon.svg
```

## 🖼️ 添加本地图片

### 1. 准备图片文件

支持的格式：
- **JPG/JPEG** - 适合照片，文件较小
- **PNG** - 适合需要透明背景的图片
- **WebP** - 现代格式，压缩率最高
- **GIF** - 适合简单动画

### 2. 图片优化建议

**尺寸建议：**
- 卡片显示：600×400px
- 全屏预览：1200×800px
- 最大宽度：1920px

**文件大小：**
- 卡片图片：< 200KB
- 预览图片：< 500KB

**命名规范：**
```
album-name-01.jpg
album-name-02.jpg
album-name-03.jpg
```

### 3. 放置图片

将图片文件放入 `public/images/` 目录：

```bash
# 创建相册目录
mkdir public/images/spring-cherry-blossom
mkdir public/images/summer-beach
mkdir public/images/autumn-mountain

# 复制图片文件
cp your-photos/*.jpg public/images/spring-cherry-blossom/
```

## 📝 在相册中使用本地图片

### 1. 更新相册数据

编辑 `src/data/albums.ts` 文件：

```typescript
export const albums: Album[] = [
  {
    id: "1",
    title: "春日樱花",
    description: "在樱花盛开的季节，漫步在樱花大道上，感受春天的气息。",
    date: "2024-03-15",
    location: "北京玉渊潭公园",
    images: [
      "/images/spring-cherry-blossom/cherry-01.jpg",
      "/images/spring-cherry-blossom/cherry-02.jpg",
      "/images/spring-cherry-blossom/cherry-03.jpg"
    ]
  },
  {
    id: "2",
    title: "海边日落",
    description: "在青岛的海边，看着夕阳西下，天空被染成了金黄色。",
    date: "2024-02-20",
    location: "青岛栈桥",
    images: [
      "/images/summer-beach/sunset-01.jpg",
      "/images/summer-beach/sunset-02.jpg"
    ]
  }
];
```

### 2. 路径说明

- 路径以 `/` 开头表示从网站根目录开始
- `public/` 目录下的文件会被直接复制到构建输出目录
- 例如：`public/images/photo.jpg` → `/images/photo.jpg`

## 🚀 部署指南

### 1. 本地测试

```bash
# 启动开发服务器
pnpm dev

# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

### 2. 部署到 Vercel

**自动部署：**
1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Astro 项目并部署

**手动部署：**
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

### 3. 部署到 Netlify

**自动部署：**
1. 将代码推送到 GitHub
2. 在 Netlify 中连接 GitHub 仓库
3. 构建命令：`pnpm build`
4. 发布目录：`dist`

**手动部署：**
```bash
# 构建项目
pnpm build

# 将 dist 目录拖拽到 Netlify
```

### 4. 部署到 GitHub Pages

**使用 GitHub Actions：**

1. 确保 `.github/workflows/deploy.yml` 文件存在
2. 推送代码到 GitHub
3. 在仓库设置中启用 GitHub Pages
4. 选择 "GitHub Actions" 作为源

**手动部署：**
```bash
# 构建项目
pnpm build

# 推送到 gh-pages 分支
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 🔧 图片优化技巧

### 1. 使用 WebP 格式

```bash
# 使用 ImageMagick 转换
convert image.jpg image.webp

# 使用 cwebp 工具
cwebp -q 80 image.jpg -o image.webp
```

### 2. 批量处理图片

创建 `scripts/optimize-images.js`：

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 处理所有图片
function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = filePath.replace(inputDir, outputDir);
      const outputDirPath = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }
      
      sharp(filePath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath.replace(/\.[^.]+$/, '.webp'))
        .then(() => console.log(`Optimized: ${file}`))
        .catch(err => console.error(`Error processing ${file}:`, err));
    }
  });
}

optimizeImages(inputDir);
```

### 3. 添加图片懒加载

在 `src/components/AlbumCard.astro` 中添加懒加载：

```astro
<img 
  src={image} 
  alt={`${title} - 图片 ${index + 1}`}
  class="w-full h-full object-cover"
  loading="lazy"
/>
```

## 📊 性能监控

### 1. 图片大小检查

```bash
# 检查图片文件大小
find public/images -name "*.jpg" -o -name "*.png" -o -name "*.webp" | xargs ls -lh
```

### 2. 构建大小分析

```bash
# 构建项目
pnpm build

# 查看构建输出大小
du -sh dist/
```

## 🛠️ 故障排除

### 1. 图片不显示

**检查路径：**
- 确保图片路径以 `/` 开头
- 检查文件名大小写是否正确
- 确认图片文件存在于 `public/images/` 目录

**检查构建：**
```bash
# 重新构建
pnpm build

# 检查 dist 目录中是否有图片
ls -la dist/images/
```

### 2. 图片加载缓慢

**优化建议：**
- 压缩图片文件大小
- 使用 WebP 格式
- 启用图片懒加载
- 考虑使用 CDN

### 3. 部署后图片丢失

**检查部署配置：**
- 确认 `public/` 目录被正确复制
- 检查部署平台的静态文件配置
- 验证构建输出目录设置

## 📚 进阶技巧

### 1. 使用图片 CDN

如果图片较多，考虑使用图片 CDN 服务：

```typescript
// 使用 Cloudinary
const images = [
  "https://res.cloudinary.com/your-cloud/image/upload/v1/album1/image1.jpg",
  "https://res.cloudinary.com/your-cloud/image/upload/v1/album1/image2.jpg"
];
```

### 2. 响应式图片

```astro
<picture>
  <source srcset="/images/photo.webp" type="image/webp">
  <source srcset="/images/photo.jpg" type="image/jpeg">
  <img src="/images/photo.jpg" alt="描述" class="w-full h-full object-cover">
</picture>
```

### 3. 图片预加载

```astro
<link rel="preload" as="image" href="/images/important-photo.jpg">
```

## 🎉 总结

通过以上步骤，你可以：

1. ✅ 在相册中使用本地图片
2. ✅ 优化图片以提高性能
3. ✅ 正确部署到各种平台
4. ✅ 监控和维护图片质量

记住：好的图片管理是成功相册网站的关键！ 