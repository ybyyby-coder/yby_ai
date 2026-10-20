// Mock data for the blog site

export const mockData = {
  articles: [
    {
      id: 1,
      title: "Vue 3 组合式 API 最佳实践",
      excerpt: "深入探讨 Composition API 的设计哲学和在实际项目中的应用技巧，让你的代码更加灵活可复用。",
      content: `
        <h2>为什么选择 Composition API</h2>
        <p>Composition API 是 Vue 3 引入的一项重要特性，它允许我们以更灵活的方式组织和复用组件逻辑...</p>
        
        <h2>使用 setup 语法糖</h2>
        <p><script setup> 是 Vue 3.2 引入的一个编译时语法糖，它能显著减少样板代码...</p>
        
        <h2>响应式系统</h2>
        <p>reactive() 和 ref() 是 Composition API 中最常用的响应式工具函数...</p>
      `,
      author: "Alex",
      date: "2024-01-15",
      category: "前端",
      tags: ["Vue", "JavaScript"],
      image: "https://picsum.photos/id/180/800/400"
    },
    {
      id: 2,
      title: "Node.js 性能优化实战",
      excerpt: "从内存管理到异步编程，全方位解析 Node.js 应用的性能瓶颈和优化方案。",
      content: `<h2>事件循环机制</h2><p>理解 Node.js 的事件循环是性能优化的第一步...</p>`,
      author: "Alex",
      date: "2024-01-10",
      category: "后端",
      tags: ["Node.js", "性能"],
      image: "https://picsum.photos/id/160/800/400"
    },
    {
      id: 3,
      title: "AI 时代的前端开发者该如何自处",
      excerpt: "人工智能正在改变我们编写代码的方式，作为前端开发者，我们应该如何应对这场变革？",
      content: `<h2>AI 辅助编程的现状</h2><p>GPT、Copilot 等 AI 工具正在重塑开发工作流程...</p>`,
      author: "Alex",
      date: "2024-01-05",
      category: "AI",
      tags: ["AI", "职业发展"],
      image: "https://picsum.photos/id/201/800/400"
    },
    {
      id: 4,
      title: "CSS Grid 布局完全指南",
      excerpt: "掌握 CSS Grid 的每一个属性，轻松实现复杂的页面布局设计。",
      content: `<h2>Grid vs Flexbox</h2><p>CSS Grid 和 Flexbox 各有适用场景，理解它们的区别至关重要...</p>`,
      author: "Alex",
      date: "2023-12-20",
      category: "前端",
      tags: ["CSS", "布局"],
      image: "https://picsum.photos/id/188/800/400"
    },
    {
      id: 5,
      title: "Docker 容器化部署教程",
      excerpt: "从零开始学习 Docker，将你的应用容器化并部署到生产环境。",
      content: `<h2>Docker 基本概念</h2><p>容器化技术是现代 DevOps 的核心组成部分...</p>`,
      author: "Alex",
      date: "2023-12-15",
      category: "后端",
      tags: ["Docker", "DevOps"],
      image: "https://picsum.photos/id/119/800/400"
    },
    {
      id: 6,
      title: " TypeScript 高级类型体操",
      excerpt: "深入学习 TypeScript 的类型系统，解锁条件类型、模板字面量类型等高级特性。",
      content: `<h2>泛型的艺术</h2><p>TypeScript 的泛型系统提供了强大的类型抽象能力...</p>`,
      author: "Alex",
      date: "2023-12-10",
      category: "前端",
      tags: ["TypeScript", "类型系统"],
      image: "https://picsum.photos/id/168/800/400"
    }
  ],
  
  categories: [
    { name: "前端", count: 3, color: "#3b82f6" },
    { name: "后端", count: 2, color: "#10b981" },
    { name: "AI", count: 1, color: "#f59e0b" },
    { name: "生活", count: 0, color: "#8b5cf6" }
  ],

  about: {
    name: "Alex",
    title: "全栈工程师 & 技术博主",
    avatar: "https://picsum.photos/id/64/200/200",
    bio: "拥有 5 年后端开发经验，最近专注于前端技术和 AI 应用开发。热衷于开源社区，喜欢分享技术心得。",
    stats: [
      { label: "发表文章", value: 50 },
      { label: "获得点赞", value: 2800 },
      { label: "关注者", value: 1200 },
      { label: "开源项目", value: 12 }
    ]
  }
}
