// 本地图片相册数据示例
// 复制这个文件的内容到 albums.ts 中使用

export interface Album {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
}

// 使用本地图片的相册数据示例
export const albumsLocalExample: Album[] = [
  {
    id: "1",
    title: "春日樱花",
    description: "在樱花盛开的季节，漫步在樱花大道上，感受春天的气息。粉色的花瓣随风飘落，美不胜收。",
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
    description: "在青岛的海边，看着夕阳西下，天空被染成了金黄色。海浪轻拍着沙滩，一切都那么宁静美好。",
    date: "2024-02-20",
    location: "青岛栈桥",
    images: [
      "/images/summer-beach/sunset-01.jpg",
      "/images/summer-beach/sunset-02.jpg"
    ]
  },
  {
    id: "3",
    title: "城市夜景",
    description: "夜晚的城市灯火通明，高楼大厦的灯光倒映在江面上，构成了一幅美丽的夜景画卷。",
    date: "2024-01-10",
    location: "上海外滩",
    images: [
      "/images/city-night/night-01.jpg",
      "/images/city-night/night-02.jpg",
      "/images/city-night/night-03.jpg"
    ]
  },
  {
    id: "4",
    title: "山间晨雾",
    description: "清晨的山间被薄雾笼罩，远处的山峰若隐若现，仿佛置身于仙境之中。",
    date: "2023-12-05",
    location: "黄山",
    images: [
      "/images/mountain-fog/fog-01.jpg",
      "/images/mountain-fog/fog-02.jpg"
    ]
  },
  {
    id: "5",
    title: "古镇风情",
    description: "漫步在古老的街道上，感受历史的厚重感。青石板路、古建筑、小桥流水，一切都那么有韵味。",
    date: "2023-11-18",
    location: "乌镇",
    images: [
      "/images/ancient-town/town-01.jpg",
      "/images/ancient-town/town-02.jpg",
      "/images/ancient-town/town-03.jpg"
    ]
  },
  {
    id: "6",
    title: "秋日枫叶",
    description: "秋天的枫叶红似火，漫步在枫叶林中，感受秋天的浪漫与诗意。",
    date: "2023-10-25",
    location: "香山公园",
    images: [
      "/images/autumn-maple/maple-01.jpg",
      "/images/autumn-maple/maple-02.jpg"
    ]
  }
];

// 使用说明：
// 1. 将你的图片文件放在 public/images/ 目录下
// 2. 按照相册主题创建子目录，如 spring-cherry-blossom/
// 3. 将图片文件重命名为有意义的名称，如 cherry-01.jpg
// 4. 在 images 数组中使用相对路径引用图片
// 5. 路径以 / 开头，表示从网站根目录开始 