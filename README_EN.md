<div align="center">

# 📸 LetsGoAlbum - Static Web Photo Album System

[![Astro](https://img.shields.io/badge/Astro-5.12.7-000000?style=for-the-badge&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.0-FF6C37?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

[中文版 README](./README.md)

</div>

---

<!-- English content only, for Chinese please see README.md -->

## 🌟 Project Introduction

A modern static web photo album system built with **Astro** framework, featuring elegant design and rich functionality. Easily deployable to any static hosting service, providing a perfect platform for showcasing your photos.

### 🎯 Live Demo

**[🌐 Live Demo](https://album.demo.kimbleex.top/)** - Experience the full functionality

---

## ✨ Core Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🎨 **Modern Design** | Responsive interface built with Tailwind CSS | ✅ |
| 📱 **Fully Responsive** | Perfect experience on mobile, tablet, and desktop | ✅ |
| 🖼️ **Image Carousel** | Support for left/right switching of multiple images | ✅ |
| 🔍 **Full-screen Preview** | Click preview button for full-screen viewing | ✅ |
| 🔍 **Real-time Search** | Search albums by title in real-time | ✅ |
| 📄 **Pagination** | 4 albums per page with navigation support | ✅ |
| 📍 **Location Info** | Display shooting location for each photo | ✅ |
| ⌨️ **Keyboard Shortcuts** | ESC to close, arrow keys to switch images | ✅ |
| ⚡ **Lightning Fast** | Astro static generation for ultra-fast loading | ✅ |
| 🚀 **Easy Deployment** | Support for multiple hosting platforms | ✅ |

---

## 🛠️ Tech Stack

<div align="center">

![Astro](https://img.shields.io/badge/-Astro-000000?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![pnpm](https://img.shields.io/badge/-pnpm-FF6C37?style=flat-square&logo=pnpm)

</div>

---

## 📋 Prerequisites

- **Node.js** 18+ 
- **pnpm** 8+ (Recommended package manager)

### 🔧 Install pnpm

```bash
# Install pnpm using npm
npm install -g pnpm

# Or use other methods
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

## 🚀 Quick Start

### 1. Clone the project
```bash
git clone <your-repo-url>
cd LetsGoAlbum
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Start development server
```bash
pnpm dev
```

### 4. Build for production
```bash
pnpm build
```

### 5. Preview build result
```bash
pnpm preview
```

Visit `http://localhost:4321` to see the result

---

## 📝 Customization

All website information, albums, images, descriptions, and other content **should be maintained uniformly in the root directory `config.ts` file**.

- Website title, subtitle, description, etc.: Directly modify the `title`, `subtitle`, `description` fields at the top of `config.ts`
- Albums and images: Add, delete, modify, and query in the `albums` array in `config.ts`
- No longer need to modify files like `src/data/albums.ts`, all configurations are centralized in `config.ts`

**Example:**
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
  title: 'My Album - Record Beautiful Moments',
  subtitle: 'Record Beautiful Moments',
  description: 'This is where I record life, travel and beautiful moments',
  albums: [
    // ...album objects...
  ]
};
export default config;
```

**All pages and features automatically read from `config.ts`, no need to modify other files.**

---

## 📁 Project Structure

```
LetsGoAlbum/
├── src/
│   ├── components/          # Components directory
│   ├── layouts/
│   │   └── Layout.astro     # Main layout file
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── utils/               # Utility functions
│       ├── albumManager.ts   # Album manager
│       ├── searchManager.ts  # Search manager
│       ├── paginationManager.ts # Pagination manager
│       ├── displayManager.ts # Display manager
│       └── interactionManager.ts # Interaction manager
├── public/                  # Static resources
│   └── images/              # Image directory
├── scripts/                 # Script files
│   └── optimize-images.js   # Image optimization script
├── config.ts               # Global configuration file
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
├── package.json
├── pnpm-lock.yaml
├── README.md               # Chinese documentation
├── README_EN.md            # English documentation
├── vercel.json             # Vercel deployment configuration
├── netlify.toml            # Netlify deployment configuration
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages deployment configuration
```

---

## 🖼️ Local Image Usage

### Quick Start

1. **Place Images**: Put image files in the `public/images/` directory
2. **Configure Albums**: Use relative paths to reference images in `config.ts`
3. **Optimize Images**: Run `pnpm optimize-images` for batch optimization

### Detailed Guides

- 📖 [Complete Local Image Usage Guide](LOCAL_IMAGES_GUIDE.md)
- ⚡ [Quick Start Guide](QUICK_START_LOCAL_IMAGES.md)

### Image Optimization

```bash
# Batch optimize images (convert to WebP, resize)
pnpm optimize-images

# Check image status
pnpm check-images
```

---

## 🚀 Deployment Guide

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Select Astro framework
4. Click deploy

### Netlify Deployment

1. Push code to GitHub
2. Connect GitHub repository in [Netlify](https://netlify.com)
3. Build command: `pnpm build`
4. Publish directory: `dist`
5. Click deploy

### GitHub Pages Deployment

1. Project is configured with GitHub Actions for automatic deployment
2. Push code to `main` branch for automatic deployment
3. Enable GitHub Pages in repository settings

### Other Platforms

- **Cloudflare Pages**: Supports Astro projects
- **Firebase Hosting**: Configure `public` directory as `dist`
- **Alibaba Cloud OSS**: Upload contents of `dist` directory

---

## 🎨 Custom Styling

The project uses **Tailwind CSS**, you can:

1. Modify global styles in `src/layouts/Layout.astro`
2. Add custom CSS classes in various components
3. Create custom Tailwind configuration

### Theme Customization

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

## 📸 Image Optimization Tips

- **Format Selection**: Use WebP format for better compression
- **Size Recommendation**: Width 600-1200px, Height 400-800px
- **CDN Services**: Can use Cloudinary, Imgix and other CDNs for automatic optimization
- **Batch Optimization**: Use the built-in image optimization script

```bash
# Run image optimization script
pnpm optimize-images
```

---

## 🔧 Development Guide

### Modular Architecture

The project adopts a modular design with main modules including:

- **AlbumManager**: Album manager, coordinates all features
- **SearchManager**: Search functionality management
- **PaginationManager**: Pagination functionality management
- **DisplayManager**: Display logic management
- **InteractionManager**: Interaction functionality management

### Adding New Features

1. Create new managers in the `src/utils/` directory
2. Integrate new features in `AlbumManager`
3. Update related type definitions

---

## 🤝 Contributing

Welcome to submit **Issues** and **Pull Requests**!

### Contributing Guidelines

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Environment

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build project
pnpm build
```

---

## 📄 License

This project is licensed under **MIT License** - see the [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Excellent static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [pnpm](https://pnpm.io) - Fast package manager

---

<div align="center">

**Built with ❤️ and Astro**

[![GitHub stars](https://img.shields.io/github/stars/kimbleex/LetsGoAlbum?style=social)](https://github.com/kimbleex/LetsGoAlbum)
[![GitHub forks](https://img.shields.io/github/forks/kimbleex/LetsGoAlbum?style=social)](https://github.com/kimbleex/LetsGoAlbum)

</div>
