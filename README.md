# 我的相册 - 静态网页相册系统

一个使用 Astro 框架构建的现代化静态网页相册系统，可以轻松部署到任何静态托管服务上。

## 📋 前置要求

- Node.js 18+ 
- pnpm 8+ (推荐使用 pnpm 作为包管理器)

### 安装 pnpm

```bash
# 使用 npm 安装 pnpm
npm install -g pnpm

# 或使用其他方式
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## ✨ 功能特点

- 🎨 **现代化设计** - 使用 Tailwind CSS 构建的响应式界面
- 📱 **完全响应式** - 在手机、平板、桌面设备上都有完美体验
- 🖼️ **图片轮播** - 支持多张图片的左右切换浏览
- 🔍 **全屏预览** - 点击预览按钮可全屏查看图片，支持左右切换
- 🔍 **搜索功能** - 支持按相册标题搜索，快速找到目标相册
- 📄 **分页浏览** - 每页显示4个相册，支持分页导航
- 📍 **位置信息** - 每张照片都显示拍摄地点
- ⌨️ **键盘快捷键** - 支持 ESC 关闭、左右箭头切换图片
- ⚡ **极速加载** - Astro 静态生成，加载速度极快
- 🚀 **易于部署** - 可部署到 Vercel、Netlify、GitHub Pages 等平台

## 🛠️ 技术栈

- **框架**: Astro
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **包管理器**: pnpm
- **图片**: Unsplash API (示例图片)

## 📦 安装和运行

### 1. 克隆项目
```bash
git clone <your-repo-url>
cd LetsGoAlbum
```

### 2. 安装依赖
```bash
pnpm install
```

### 3. 启动开发服务器
```bash
pnpm dev
```

### 4. 构建生产版本
```bash
pnpm build
```

### 5. 预览构建结果
```bash
pnpm preview
```

## 📝 自定义配置

### 修改网站标题和描述
编辑 `src/pages/index.astro` 文件中的标题和描述：

```astro
<Layout title="我的相册 - 记录美好时光">
  <!-- 修改这里的标题和描述 -->
  <h2 class="text-2xl font-bold text-gray-900 mb-2">我的相册</h2>
  <p class="text-gray-600">这里是我记录生活、旅行和美好瞬间的地方</p>
```

### 添加相册
在 `src/data/albums.ts` 文件的 `albums` 数组中添加新的相册：

```typescript
{
  id: "唯一ID",
  title: "相册标题",
  description: "相册描述",
  date: "YYYY-MM-DD",
  location: "拍摄地点",
  images: [
    "图片1的URL",
    "图片2的URL",
    "图片3的URL"
  ]
}
```

### 使用本地图片
1. 将图片文件放在 `public/images/` 目录下
2. 在相册数据中使用相对路径：`"/images/your-image.jpg"`
3. 详细指南请查看 [本地图片使用指南](LOCAL_IMAGES_GUIDE.md)
4. 快速开始请查看 [快速开始指南](QUICK_START_LOCAL_IMAGES.md)

## 🚀 部署指南

### Vercel 部署
1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 选择 Astro 框架
4. 点击部署

### Netlify 部署
1. 将代码推送到 GitHub
2. 在 Netlify 中连接 GitHub 仓库
3. 构建命令：`pnpm build`
4. 发布目录：`dist`
5. 点击部署

### GitHub Pages 部署
1. 在 `package.json` 中添加部署脚本
2. 配置 GitHub Actions 自动部署

## 📁 项目结构

```
LetsGoAlbum/
├── src/
│   ├── components/          # 组件
│   │   └── AlbumCard.astro      # 相册卡片组件（包含预览功能）
│   ├── data/
│   │   └── albums.ts        # 相册数据配置
│   ├── layouts/
│   │   └── Layout.astro     # 主布局
│   └── pages/
│       └── index.astro      # 主页
├── public/                  # 静态资源
├── astro.config.mjs        # Astro 配置
└── package.json
```

## 🎨 自定义样式

项目使用 Tailwind CSS，你可以：

1. 修改 `src/layouts/Layout.astro` 中的全局样式
2. 在各个组件中添加自定义 CSS 类
3. 创建自定义 Tailwind 配置

## 📸 图片优化建议

- 使用 WebP 格式图片以获得更好的压缩率
- 图片尺寸建议：宽度 600-1200px，高度 400-800px
- 可以使用图片 CDN 服务（如 Cloudinary、Imgix）进行自动优化

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

用 ❤️ 和 Astro 构建
