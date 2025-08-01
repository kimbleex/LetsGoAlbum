# pnpm 使用说明

本项目使用 pnpm 作为包管理器，提供更快的安装速度和更好的依赖管理。

## 🚀 快速开始

### 安装 pnpm

```bash
# 使用 npm 安装
npm install -g pnpm

# 或使用官方安装脚本
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 项目命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 查看所有可用命令
pnpm run
```

## 📦 常用命令对比

| 功能 | npm | pnpm |
|------|-----|------|
| 安装依赖 | `npm install` | `pnpm install` |
| 启动开发 | `npm run dev` | `pnpm dev` |
| 构建项目 | `npm run build` | `pnpm build` |
| 预览构建 | `npm run preview` | `pnpm preview` |
| 添加依赖 | `npm install package` | `pnpm add package` |
| 删除依赖 | `npm uninstall package` | `pnpm remove package` |

## 🔧 项目配置

项目包含以下 pnpm 相关配置文件：

- `.npmrc` - pnpm 配置文件
- `pnpm-lock.yaml` - 依赖锁定文件
- `package.json` - 项目脚本和依赖定义

## 🌟 pnpm 优势

1. **更快的安装速度** - 使用硬链接和符号链接
2. **更少的磁盘空间** - 共享依赖存储
3. **更严格的依赖管理** - 避免幽灵依赖
4. **更好的 monorepo 支持** - 内置工作空间功能

## 🚀 部署配置

所有部署平台都已配置为使用 pnpm：

- **Vercel**: 使用 `pnpm build` 和 `pnpm install`
- **Netlify**: 使用 `pnpm build` 命令
- **GitHub Pages**: 使用 pnpm 工作流

## 📝 注意事项

- 确保使用 Node.js 18+ 版本
- 推荐使用 pnpm 8+ 版本
- 如果遇到权限问题，可能需要配置 pnpm 的存储位置 