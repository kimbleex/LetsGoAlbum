// 全局个性化配置文件

export interface Album {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
}

export interface SiteConfig {
  title: string;
  subtitle: string;
  description: string;
  albums: Album[];
}

const config: SiteConfig = {
  title: "我的相册 - 记录美好时光",
  subtitle: "记录美好时光",
  description: "这里是我记录生活、旅行和美好瞬间的地方",
  albums: [
    {
      id: "1",
      title: "春日樱花",
      description: "在樱花盛开的季节，漫步在樱花大道上，感受春天的气息。粉色的花瓣随风飘落，美不胜收。",
      date: "2024-03-15",
      location: "北京玉渊潭公园",
      images: [
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "2",
      title: "海边日落",
      description: "在青岛的海边，看着夕阳西下，天空被染成了金黄色。海浪轻拍着沙滩，一切都那么宁静美好。",
      date: "2024-02-20",
      location: "青岛栈桥",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "3",
      title: "城市夜景",
      description: "夜晚的城市灯火通明，高楼大厦的灯光倒映在江面上，构成了一幅美丽的夜景画卷。",
      date: "2024-01-10",
      location: "上海外滩",
      images: [
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "4",
      title: "山间晨雾",
      description: "清晨的山间被薄雾笼罩，远处的山峰若隐若现，仿佛置身于仙境之中。",
      date: "2023-12-05",
      location: "黄山",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "5",
      title: "古镇风情",
      description: "漫步在古老的街道上，感受历史的厚重感。青石板路、古建筑、小桥流水，一切都那么有韵味。",
      date: "2023-11-18",
      location: "乌镇",
      images: [
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "6",
      title: "秋日枫叶",
      description: "秋天的枫叶红似火，漫步在枫叶林中，感受秋天的浪漫与诗意。",
      date: "2023-10-25",
      location: "香山公园",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=600&h=400&fit=crop"
      ]
    }
  ]
};

export default config;