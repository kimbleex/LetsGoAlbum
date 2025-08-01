<div align="center">

# 📸 LetsGoAlbum - 静态网页相册系统

[![Astro](https://img.shields.io/badge/Astro-5.12.7-000000?style=for-the-badge&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.0-FF6C37?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

[English README](./README_EN.md)

</div>

---

<!-- 以下为中文内容，英文内容请见 README_EN.md -->

## 🌟 项目简介

一个使用 **Astro** 框架构建的现代化静态网页相册系统，具有优雅的设计和丰富的功能。可以轻松部署到任何静态托管服务上，为你的照片提供一个完美的展示平台。

### 🎯 在线演示

**[🌐 在线演示](https://album.demo.kimbleex.top/)** - 体验完整功能

---

## ✨ 核心功能

| 功能 | 描述 | 状态 |
|------|------|------|
| 🎨 **现代化设计** | Tailwind CSS 响应式界面 | ✅ |
| 📱 **完全响应式** | 手机、平板、桌面完美适配 | ✅ |
| 🖼️ **图片轮播** | 支持多张图片左右切换 | ✅ |
| 🔍 **全屏预览** | 点击预览按钮全屏查看 | ✅ |
| 🔍 **实时搜索** | 按相册标题实时搜索 | ✅ |
| 📄 **分页浏览** | 每页4个相册，支持导航 | ✅ |
| 📍 **位置信息** | 每张照片显示拍摄地点 | ✅ |
| ⌨️ **键盘快捷键** | ESC关闭、箭头切换图片 | ✅ |
| ⚡ **极速加载** | Astro静态生成，加载极快 | ✅ |
| 🚀 **易于部署** | 支持多种托管平台 | ✅ |

---

## 🛠️ 技术栈

<div align="center">

![Astro](https://img.shields.io/badge/-Astro-000000?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![pnpm](https://img.shields.io/badge/-pnpm-FF6C37?style=flat-square&logo=pnpm)

</div>

---

## 📋 前置要求

- **Node.js** 18+ 
- **pnpm** 8+ (推荐使用 pnpm 作为包管理器)

### 🔧 安装 pnpm

```bash
# 使用 npm 安装 pnpm
npm install -g pnpm

# 或使用其他方式
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

## 🚀 快速开始

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

访问 `http://localhost:4321` 查看效果

---

## 📝 个性化配置

所有网站信息、相册、图片、描述等内容，**请统一在根目录 `config.ts` 文件中维护**。

- 网站标题、副标题、描述等：直接修改 `config.ts` 顶部的 `title`、`subtitle`、`description` 字段
- 相册与图片：在 `config.ts` 的 `albums` 数组中增删改查
- 不再需要修改 `src/data/albums.ts` 等文件，所有配置都集中在 `config.ts`

**示例：**
```ts
// config.ts
export interface Album {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
}

const config = {
  title: '我的相册 - 记录美好时光',
  subtitle: '记录美好时光',
  description: '这里是我记录生活、旅行和美好瞬间的地方',
  albums: [
    // ...相册对象...
  ]
};
export default config;
```

**所有页面和功能都自动读取 `config.ts`，无需修改其他文件。**

---

## 📁 项目结构

```
LetsGoAlbum/
├── src/
│   ├── components/          # 组件目录
│   ├── layouts/
│   │   └── Layout.astro     # 主布局文件
│   ├── pages/
│   │   └── index.astro      # 主页
│   └── utils/               # 工具函数
│       ├── albumManager.ts   # 相册管理器
│       ├── searchManager.ts  # 搜索管理器
│       ├── paginationManager.ts # 分页管理器
│       ├── displayManager.ts # 显示管理器
│       └── interactionManager.ts # 交互管理器
├── public/                  # 静态资源
│   └── images/              # 图片目录
├── scripts/                 # 脚本文件
│   └── optimize-images.js   # 图片优化脚本
├── config.ts               # 全局配置文件
├── astro.config.mjs        # Astro 配置
├── tailwind.config.mjs     # Tailwind 配置
├── package.json
├── pnpm-lock.yaml
├── README.md               # 中文说明
├── README_EN.md            # 英文说明
├── vercel.json             # Vercel 部署配置
├── netlify.toml            # Netlify 部署配置
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages 部署配置
```

---

## 🖼️ 本地图片使用

### 快速开始

1. **放置图片**：将图片文件放在 `public/images/` 目录下
2. **配置相册**：在 `config.ts` 中使用相对路径引用图片
3. **优化图片**：运行 `pnpm optimize-images` 批量优化

### 详细指南

- 📖 [本地图片使用完整指南](LOCAL_IMAGES_GUIDE.md)
- ⚡ [快速开始指南](QUICK_START_LOCAL_IMAGES.md)

### 图片优化

```bash
# 批量优化图片（转换为WebP，调整尺寸）
pnpm optimize-images

# 检查图片状态
pnpm check-images
```

---

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 选择 Astro 框架
4. 点击部署

### Netlify 部署

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 中连接 GitHub 仓库
3. 构建命令：`pnpm build`
4. 发布目录：`dist`
5. 点击部署

### GitHub Pages 部署

1. 项目已配置 GitHub Actions 自动部署
2. 推送代码到 `main` 分支即可自动部署
3. 在仓库设置中启用 GitHub Pages

### 其他平台

- **Cloudflare Pages**：支持 Astro 项目
- **Firebase Hosting**：配置 `public` 目录为 `dist`
- **阿里云 OSS**：上传 `dist` 目录内容

---

## 🎨 自定义样式

项目使用 **Tailwind CSS**，你可以：

1. 修改 `src/layouts/Layout.astro` 中的全局样式
2. 在各个组件中添加自定义 CSS 类
3. 创建自定义 Tailwind 配置

### 主题定制

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6B7280',
      },
    },
  },
}
```

---

## 📸 图片优化建议

- **格式选择**: 使用 WebP 格式获得更好的压缩率
- **尺寸建议**: 宽度 600-1200px，高度 400-800px
- **CDN 服务**: 可以使用 Cloudinary、Imgix 等 CDN 进行自动优化
- **批量优化**: 使用项目内置的图片优化脚本

```bash
# 运行图片优化脚本
pnpm optimize-images
```

---

## 🔧 开发指南

### 模块化架构

项目采用模块化设计，主要模块包括：

- **AlbumManager**: 相册管理器，协调所有功能
- **SearchManager**: 搜索功能管理
- **PaginationManager**: 分页功能管理
- **DisplayManager**: 显示逻辑管理
- **InteractionManager**: 交互功能管理

### 添加新功能

1. 在 `src/utils/` 目录下创建新的管理器
2. 在 `AlbumManager` 中集成新功能
3. 更新相关类型定义

---

## 🤝 贡献

欢迎提交 **Issue** 和 **Pull Request**！

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 开发环境

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建项目
pnpm build
```

---

## 📄 许可证

本项目采用 **MIT License** - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 🙏 致谢

- [Astro](https://astro.build) - 优秀的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 实用的 CSS 框架
- [pnpm](https://pnpm.io) - 快速的包管理器

---

<div align="center">

**用 ❤️ 和 Astro 构建**

[![GitHub stars](https://img.shields.io/github/stars/your-username/LetsGoAlbum?style=social)](https://github.com/kimbleex/LetsGoAlbum)
[![GitHub forks](https://img.shields.io/github/forks/your-username/LetsGoAlbum?style=social)](https://github.com/kimbleex/LetsGoAlbum)

</div>
