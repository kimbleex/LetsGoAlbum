# 图片目录

将你的相册图片放在这个目录下。

## 使用说明

1. 支持的格式：JPG、PNG、WebP、GIF
2. 建议尺寸：宽度 600-1200px，高度 400-800px
3. 文件命名：使用有意义的名称，如 `spring-cherry-blossom-1.jpg`

## 在相册中使用本地图片

在 `src/data/albums.ts` 文件中，使用相对路径引用图片：

```typescript
{
  id: "1",
  title: "春日樱花",
  description: "樱花盛开的季节",
  date: "2024-03-15",
  location: "北京玉渊潭公园",
  images: [
    "/images/spring-cherry-blossom-1.jpg",
    "/images/spring-cherry-blossom-2.jpg",
    "/images/spring-cherry-blossom-3.jpg"
  ]
}
```

## 图片优化建议

- 使用 WebP 格式获得更好的压缩率
- 压缩图片大小以提高加载速度
- 考虑使用图片 CDN 服务进行自动优化 