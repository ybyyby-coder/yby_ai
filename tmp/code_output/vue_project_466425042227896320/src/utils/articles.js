export const articles = [
  {
    id: 1,
    title: '深入理解 Vue3 组合式 API',
    excerpt: '探讨 Vue3 组合式 API 的设计理念和最佳实践，帮助你更好地组织代码逻辑。',
    content: '# 深入理解 Vue3 组合式 API\n\n## 什么是组合式 API？\n\n组合式 API (Composition API) 是 Vue3 引入的一套新的 API，它提供了一种更灵活、更可复用的方式来组织和复用组件逻辑。\n\n## 为什么需要组合式 API？\n\n在 Options API 中，当组件变得复杂时，相关的逻辑可能会被分散到不同的选项中（data, methods, computed 等），这使得代码难以理解和维护。组合式 API 允许我们按照逻辑关注点来组织代码。\n\n## 基本用法\n\n```javascript\nimport { ref, onMounted } from "vue";\n\nexport default {\n  setup() {\n    const count = ref(0);\n    \n    function increment() {\n      count.value++;\n    }\n    \n    onMounted(() => {\n      console.log("组件已挂载");\n    });\n    \n    return { count, increment };\n  }\n};\n```\n\n## Composition Functions\n\n我们可以将复用的逻辑提取为 composition functions:\n\n```javascript\nexport function useCounter(initialValue = 0) {\n  const count = ref(initialValue);\n  \n  function increment() {\n    count.value++;\n  }\n  \n  function decrement() {\n    count.value--;\n  }\n  \n  return { count, increment, decrement };\n}\n```\n\n## 总结\n\n组合式 API 不仅让代码更加清晰，还提供了更好的 TypeScript 支持和逻辑复用能力。',
    category: 'Vue3',
    tags: ['Vue3', '组合式API', '前端'],
    author: '张明',
    date: '2024-01-15',
    views: 1580,
    commentsCount: 24,
    featured: true,
    coverImage: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'CSS Grid 布局完全指南',
    excerpt: '从基础到高级，全面掌握 CSS Grid 布局技术，构建复杂的网页布局。',
    content: '# CSS Grid 布局完全指南\n\n## Grid 基本概念\n\nCSS Grid 是一种二维布局系统，可以让您在行和列中安排元素。它是迄今为止最强大的 CSS 布局模块。\n\n## 创建 Grid 容器\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n```\n\n## Grid 项目放置\n\n```css\n.item {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n```\n\n## 实际应用场景\n\nGrid 非常适合用于创建仪表盘、画廊等复杂的响应式布局。',
    category: 'CSS',
    tags: ['CSS', 'Grid', '布局'],
    author: '李华',
    date: '2024-01-12',
    views: 960,
    commentsCount: 15,
    featured: false,
    coverImage: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: 'JavaScript 异步编程模式详解',
    excerpt: '深入理解 Promise、async/await 以及错误处理的最佳实践。',
    content: '# JavaScript 异步编程模式详解\n\n## Promise 回顾\n\nPromise 是对未来某个值的一种表示，它可能是成功的结果或失败的原因。\n\n## Async/Await\n\n```javascript\nasync function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error("请求失败:", error);\n  }\n}\n```\n\n## 并发执行\n\n```javascript\nconst [users, posts] = await Promise.all([\n  fetch("/api/users").then(r => r.json()),\n  fetch("/api/posts").then(r => r.json())\n]);\n```\n\n## 错误处理策略\n\n- 使用 try-catch 捕获同步错误\n- 使用 .catch() 处理 Promise 拒绝\n- 实现全局错误处理器',
    category: 'JavaScript',
    tags: ['JavaScript', '异步', 'Promise'],
    author: '王强',
    date: '2024-01-10',
    views: 2340,
    commentsCount: 38,
    featured: true,
    coverImage: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: 'TypeScript 类型体操入门',
    excerpt: '通过有趣的类型体操练习，提升你对 TypeScript 类型的理解深度。',
    content: '# TypeScript 类型体操入门\n\n## 联合类型与交叉类型\n\n```typescript\ntype Status = "success" | "loading" | "error";\ninterface User & { role: string } {}\n```\n\n## 条件类型\n\n```typescript\ntype IsString<T> = T extends string ? true : false;\n```\n\n## 映射类型\n\n```typescript\ntype ReadonlyUser<T> = {\n  readonly [P in keyof T]: T[P];\n};\n```\n\n## 模板字面量类型\n\n```typescript\ntype Greet<E extends string> = `Hello ${E}`;\ntype Msg = Greet<"world">; // Hello world\n```\n\n## 实战技巧\n\n1. 充分利用 infer 关键字\n2. 学会编写递归类型\n3. 合理使用工具类型',
    category: 'TypeScript',
    tags: ['TypeScript', '类型', '进阶'],
    author: '赵敏',
    date: '2024-01-08',
    views: 1750,
    commentsCount: 22,
    featured: false,
    coverImage: 'https://picsum.photos/800/400?random=4'
  },
  {
    id: 5,
    title: '现代 Web 性能优化实战',
    excerpt: '通过真实案例演示如何进行 Web 应用的性能诊断和优化。',
    content: '# 现代 Web 性能优化实战\n\n## Lighthouse 审计\n\n首先使用 Lighthouse 进行全面的性能审计，找出瓶颈所在。\n\n## 关键指标\n\n- First Contentful Paint (FCP)\n- Largest Contentful Paint (LCP)\n- Total Blocking Time (TBT)\n- Cumulative Layout Shift (CLS)\n\n## 图片优化\n\n```html\n<picture>\n  <source srcset="image.avif" type="image/avif">\n  <source srcset="image.webp" type="image/webp">\n  <img src="image.jpg" alt="描述">\n</picture>\n```\n\n## 代码分割\n\n使用动态 import 实现懒加载：\n\n```javascript\nconst LazyComponent = () => import("./LazyComponent.vue");\n```\n\n## 缓存策略\n\n合理设置 HTTP 缓存头，减少重复请求。',
    category: '性能优化',
    tags: ['性能优化', 'Web', 'Lighthouse'],
    author: '张伟',
    date: '2024-01-05',
    views: 3100,
    commentsCount: 45,
    featured: true,
    coverImage: 'https://picsum.photos/800/400?random=5'
  },
  {
    id: 6,
    title: 'React 与 Vue3 对比分析',
    excerpt: '从架构设计、开发体验、生态系统等方面对两大主流框架进行深入对比。',
    content: '# React 与 Vue3 对比分析\n\n## 设计理念差异\n\nReact 推崇 JSX 和函数式编程，而 Vue3 则提供了模板语法和组合式 API。\n\n## 状态管理\n\n- React: Redux, Zustand, Jotai\n- Vue3: Pinia, Vuex\n\n## 学习曲线\n\nVue3 对新手更加友好，React 的学习曲线相对陡峭。\n\n## 社区生态\n\n两者都有庞大的社区和丰富的第三方库支持。\n\n## 选型建议\n\n小型项目推荐 Vue3，大型复杂项目可以考虑 React。',
    category: '框架对比',
    tags: ['React', 'Vue3', '对比'],
    author: '刘洋',
    date: '2024-01-03',
    views: 4200,
    commentsCount: 67,
    featured: false,
    coverImage: 'https://picsum.photos/800/400?random=6'
  },
  {
    id: 7,
    title: 'Docker 容器化部署指南',
    excerpt: '从零开始学习如何使用 Docker 进行前端项目的容器化部署。',
    content: '# Docker 容器化部署指南\n\n## 为什么选择 Docker\n\nDocker 提供了轻量级的虚拟化方案，确保环境一致性。\n\n## Dockerfile 示例\n\n```dockerfile\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\nEXPOSE 80\nCMD ["nginx", "-g", "daemon off;"]\n```\n\n## 多阶段构建\n\n多阶段构建可以显著减小最终镜像的大小。\n\n## 编排工具\n\n- Docker Compose: 本地多容器应用\n- Kubernetes: 生产环境集群管理',
    category: 'DevOps',
    tags: ['Docker', 'DevOps', '部署'],
    author: '陈磊',
    date: '2024-01-01',
    views: 1890,
    commentsCount: 28,
    featured: false,
    coverImage: 'https://picsum.photos/800/400?random=7'
  },
  {
    id: 8,
    title: '前端工程化：CI/CD 流水线搭建',
    excerpt: '自动化测试、代码质量检查和持续集成部署的最佳实践。',
    content: '# 前端工程化：CI/CD 流水线搭建\n\n## GitHub Actions\n\nGitHub Actions 提供了强大的 CI/CD 支持。\n\n## 流程说明\n\n1. 代码推送触发流水线\n2. 自动安装依赖\n3. 运行单元测试\n4. 检查代码风格\n5. 构建生产版本\n6. 部署到服务器\n\n## 测试配置\n\n```yaml\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci\n      - run: npm test\n```\n\n## 部署流程\n\n可以使用 rsync 或专门的部署工具完成静态资源的上传。',
    category: '工程化',
    tags: ['CI/CD', '工程化', '自动化'],
    author: '孙婷',
    date: '2023-12-28',
    views: 2560,
    commentsCount: 34,
    featured: true,
    coverImage: 'https://picsum.photos/800/400?random=8'
  }
];

export function getAllArticles() {
  return [...articles];
}

export function getArticleById(id) {
  return articles.find(article => article.id === parseInt(id));
}

export function searchArticles(list, query) {
  if (!query.trim()) return list;
  const lowerQuery = query.toLowerCase();
  return list.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    article.category.includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getArticlesByCategory(category) {
  if (!category) return getAllArticles();
  return articles.filter(article => article.category === category);
}

export function getCategories() {
  return [...new Set(articles.map(article => article.category))];
}

export function getTags() {
  const allTags = articles.flatMap(article => article.tags);
  return [...new Set(allTags)];
}

export function getFeaturedArticles() {
  return articles.filter(article => article.featured).slice(0, 3);
}

export function getLatestArticles(limit = 5) {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
}