# 🚀 本地图片快速开始指南

## 📋 步骤概览

1. 准备图片文件
2. 创建目录结构
3. 放置图片文件
4. 更新相册数据
5. 测试和部署

## 🖼️ 第一步：准备图片文件

### 支持的格式
- **JPG/JPEG** - 推荐用于照片
- **PNG** - 适合需要透明背景的图片
- **WebP** - 最佳压缩率（推荐）
- **GIF** - 适合简单动画

### 图片要求
- **尺寸**：建议 600×400px 到 1200×800px
- **大小**：单张图片 < 500KB
- **命名**：使用英文和数字，如 `photo-01.jpg`

## 📁 第二步：创建目录结构

```bash
# 在项目根目录下执行
mkdir -p public/images/spring-cherry-blossom
mkdir -p public/images/summer-beach
mkdir -p public/images/autumn-mountain
```

## 📸 第三步：放置图片文件

将你的图片文件复制到对应目录：

```bash
# 示例：复制樱花相册的图片
cp your-photos/cherry-*.jpg public/images/spring-cherry-blossom/

# 示例：复制海边相册的图片
cp your-photos/beach-*.jpg public/images/summer-beach/
```

## 📝 第四步：更新相册数据

编辑 `src/data/albums.ts` 文件：

```typescript
export const albums: Album[] = [
  {
    id: "1",
    title: "春日樱花",
    description: "樱花盛开的季节",
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
    description: "美丽的海边日落",
    date: "2024-02-20",
    location: "青岛栈桥",
    images: [
      "/images/summer-beach/beach-01.jpg",
      "/images/summer-beach/beach-02.jpg"
    ]
  }
];
```

## 🧪 第五步：测试

```bash
# 启动开发服务器
pnpm dev

# 在浏览器中访问 http://localhost:4321
# 检查图片是否正确显示
```

## 🚀 第六步：部署

### 本地构建测试
```bash
# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

### 部署到平台

**Vercel（推荐）：**
1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

**Netlify：**
1. 推送代码到 GitHub
2. 在 Netlify 中连接仓库
3. 构建命令：`pnpm build`
4. 发布目录：`dist`

## 🔧 图片优化（可选）

### 安装优化工具
```bash
npm install sharp
```

### 运行优化脚本
```bash
# 优化所有图片
pnpm optimize-images

# 检查图片大小
pnpm check-images
```

## 📊 目录结构示例

```
public/
├── images/
│   ├── spring-cherry-blossom/
│   │   ├── cherry-01.jpg
│   │   ├── cherry-02.jpg
│   │   └── cherry-03.jpg
│   ├── summer-beach/
│   │   ├── beach-01.jpg
│   │   └── beach-02.jpg
│   └── autumn-mountain/
│       ├── mountain-01.jpg
│       └── mountain-02.jpg
└── favicon.svg
```

## ⚠️ 注意事项

1. **路径格式**：图片路径必须以 `/` 开头
2. **文件大小**：大图片会影响加载速度
3. **文件格式**：推荐使用 WebP 格式
4. **命名规范**：避免使用中文和特殊字符
5. **备份**：部署前备份原始图片

## 🆘 常见问题

### 图片不显示
- 检查文件路径是否正确
- 确认文件存在于 `public/images/` 目录
- 检查文件名大小写

### 图片加载慢
- 压缩图片文件大小
- 使用 WebP 格式
- 启用懒加载（已内置）

### 部署后图片丢失
- 确认 `public/` 目录被正确复制
- 检查部署平台配置

## 🎉 完成！

现在你的相册网站已经可以使用本地图片了！

- ✅ 图片正确显示
- ✅ 支持轮播和预览
- ✅ 响应式设计
- ✅ 懒加载优化
- ✅ 可以部署到任何平台

享受你的个人相册网站吧！📸✨ 