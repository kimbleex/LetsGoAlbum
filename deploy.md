# 部署指南

## 🚀 快速部署

### 1. Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. 选择 Astro 框架
6. 点击 "Deploy"

### 2. Netlify 部署

1. 将代码推送到 GitHub
2. 访问 [Netlify](https://netlify.com)
3. 点击 "New site from Git"
4. 连接 GitHub 仓库
5. 构建命令：`pnpm build`
6. 发布目录：`dist`
7. 点击 "Deploy site"

### 3. GitHub Pages 部署

1. 在仓库设置中启用 GitHub Pages
2. 选择 "GitHub Actions" 作为源
3. 创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v1
        with:
          path: ./
```

## 📝 自定义域名

### Vercel
1. 在项目设置中添加自定义域名
2. 配置 DNS 记录指向 Vercel

### Netlify
1. 在站点设置中添加自定义域名
2. 配置 DNS 记录指向 Netlify

## 🔧 环境变量

如果需要使用环境变量，可以在部署平台中设置：

- `NODE_ENV=production`
- 其他自定义环境变量

## 📊 性能优化

部署后可以：

1. 启用 CDN 加速
2. 配置图片优化
3. 启用 Gzip 压缩
4. 设置缓存策略

## 🐛 常见问题

### 构建失败
- 检查 Node.js 版本（推荐 18+）
- 确保所有依赖已安装
- 检查 TypeScript 错误

### 图片不显示
- 确保图片路径正确
- 检查图片文件是否存在
- 验证图片格式是否支持

### 样式问题
- 确保 Tailwind CSS 配置正确
- 检查 CSS 文件是否正确加载 