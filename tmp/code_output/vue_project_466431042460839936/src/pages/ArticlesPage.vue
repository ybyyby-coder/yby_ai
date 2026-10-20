<template>
  <div class="articles-page">
    <div class="container">
      <h1 class="page-title">所有文章</h1>
      
      <!-- Filters -->
      <div class="filters-bar">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          :class="['filter-btn', { active: activeFilter === filter.value }]"
          @click="activeFilter = filter.value"
        >
          {{ filter.name }}
        </button>
      </div>
      
      <!-- Search -->
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="搜索文章..." 
          class="search-input"
        />
      </div>
      
      <!-- Articles List -->
      <div class="articles-list">
        <article-card 
          v-for="article in filteredArticles" 
          :key="article.id"
          :article="article"
          class="article-item"
        />
        
        <div v-if="filteredArticles.length === 0" class="empty-state">
          <p>没有找到相关文章 😕</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'

const activeFilter = ref('all')
const searchQuery = ref('')

const filters = [
  { name: '全部', value: 'all' },
  { name: 'Vue', value: 'Vue' },
  { name: 'JavaScript', value: 'JavaScript' },
  { name: 'CSS', value: 'CSS' },
  { name: '工具', value: '工具' }
]

const articles = [
  {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    excerpt: '深入了解 Vue 3 Composition API 的设计理念和在实际项目中的应用技巧',
    image: 'https://picsum.photos/400/300?random=2',
    category: 'Vue',
    tags: ['Vue 3', 'Composition API'],
    author: 'Alex',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Vite 构建工具深度解析',
    excerpt: '从源码角度分析 Vite 为什么能够提供如此快速的开发体验',
    image: 'https://picsum.photos/400/300?random=3',
    category: '工具',
    tags: ['Vite', '构建工具'],
    author: 'Alex',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: '现代 CSS 布局技巧',
    excerpt: '掌握 Grid 和 Flexbox 的高级用法，打造响应式页面布局',
    image: 'https://picsum.photos/400/300?random=4',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox'],
    author: 'Alex',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: 'JavaScript Promise 完全指南',
    excerpt: '深入理解异步编程，掌握 Promise、async/await 等高级特性',
    image: 'https://picsum.photos/400/300?random=5',
    category: 'JavaScript',
    tags: ['Promise', 'Async/Await'],
    author: 'Alex',
    date: '2024-01-01'
  },
  {
    id: 5,
    title: 'Vue Router 进阶技巧',
    excerpt: '探索路由守卫、动态路由和嵌套路由的高级应用模式',
    image: 'https://picsum.photos/400/300?random=6',
    category: 'Vue',
    tags: ['Vue Router', '路由'],
    author: 'Alex',
    date: '2023-12-28'
  },
  {
    id: 6,
    title: 'TypeScript 实战教程',
    excerpt: '从零开始学习 TypeScript，提升代码质量和开发效率',
    image: 'https://picsum.photos/400/300?random=7',
    category: 'JavaScript',
    tags: ['TypeScript', '类型系统'],
    author: 'Alex',
    date: '2023-12-20'
  }
]

const filteredArticles = computed(() => {
  return articles.filter(article => {
    const matchesFilter = activeFilter.value === 'all' || article.category === activeFilter.value
    const matchesSearch = searchQuery.value === '' || 
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesFilter && matchesSearch
  })
})
</script>

<style scoped>
.page-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

.filters-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-secondary);
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.search-box {
  margin-bottom: 40px;
}

.search-input {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 1rem;
  background-color: var(--bg-card);
}

.articles-list {
  display: grid;
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--text-secondary);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .filters-bar {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
}
</style>
