<template>
  <div class="page-articles">
    <section class="page-header">
      <div class="container">
        <h1>技术文章</h1>
        <p>探索前端开发的最新趋势和最佳实践</p>
      </div>
    </section>

    <section class="articles-section">
      <div class="container articles-container">
        <!-- Filter Section -->
        <div class="filter-bar">
          <div class="filter-tabs">
            <button 
              v-for="tab in tabs" 
              :key="tab"
              class="tab-btn"
              :class="{ active: activeTab === tab }"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
          <div class="search-box">
            <input type="text" placeholder="搜索文章..." />
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="articles-list">
          <article class="article-item" v-for="(article, index) in filteredArticles" :key="index">
            <div class="article-thumbnail">
              <img :src="article.image" :alt="article.title" />
              <span class="article-tag">{{ article.category }}</span>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="date">📅 {{ article.date }}</span>
                <span class="read-time">⏱ {{ article.readTime }}</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p class="article-summary">{{ article.summary }}</p>
              <div class="article-footer">
                <router-link :to="'/article/' + (index + 1)" class="read-more">阅读全文 →</router-link>
                <div class="author-info">
                  <img :src="article.author.avatar" :alt="article.author.name" />
                  <span>{{ article.author.name }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="page-btn" disabled>上一页</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">下一页</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = ['全部', 'Vue.js', 'React', 'TypeScript', 'Node.js', 'CSS']
const activeTab = ref('全部')

const articles = ref([
  {
    image: 'https://picsum.photos/400/200?random=1',
    category: 'Vue.js',
    title: 'Vue 3 Composition API 深度解析与实战应用',
    summary: '学习如何使用 Vue 3 的组合式 API 构建更灵活、可复用的组件结构，提升代码质量...',
    date: '2024-01-20',
    readTime: '8分钟',
    author: { name: '张明', avatar: 'https://picsum.photos/100/100?random=1' }
  },
  {
    image: 'https://picsum.photos/400/200?random=2',
    category: 'React',
    title: 'React 18 Concurrent Features 全面指南',
    summary: '深入了解 React 18 的并发特性，掌握 Suspense 和 useTransition 的使用技巧...',
    date: '2024-01-18',
    readTime: '12分钟',
    author: { name: '李华', avatar: 'https://picsum.photos/100/100?random=2' }
  },
  {
    image: 'https://picsum.photos/400/200?random=3',
    category: 'TypeScript',
    title: 'TypeScript 高级类型体操教程',
    summary: '通过实际案例学习 TypeScript 的类型系统，包括条件类型、映射类型等高级特性...',
    date: '2024-01-15',
    readTime: '15分钟',
    author: { name: '王芳', avatar: 'https://picsum.photos/100/100?random=3' }
  },
  {
    image: 'https://picsum.photos/400/200?random=4',
    category: 'CSS',
    title: '现代 CSS 布局技巧：Grid 与 Flexbox',
    summary: '掌握现代 CSS 布局的核心技术，使用 Grid 和 Flexbox 构建响应式网页...',
    date: '2024-01-12',
    readTime: '10分钟',
    author: { name: '陈强', avatar: 'https://picsum.photos/100/100?random=4' }
  },
  {
    image: 'https://picsum.photos/400/200?random=5',
    category: 'Node.js',
    title: 'Express 框架性能优化完全手册',
    summary: '学习如何优化 Express 应用程序的性能，包括缓存策略、连接池管理等...',
    date: '2024-01-10',
    readTime: '9分钟',
    author: { name: '赵磊', avatar: 'https://picsum.photos/100/100?random=5' }
  },
  {
    image: 'https://picsum.photos/400/200?random=6',
    category: 'Vue.js',
    title: 'Vue Router 4 路由配置详解',
    summary: '深入理解 Vue Router 的配置选项和使用技巧，实现复杂的路由功能...',
    date: '2024-01-08',
    readTime: '7分钟',
    author: { name: '孙悦', avatar: 'https://picsum.photos/100/100?random=6' }
  }
])

const filteredArticles = computed(() => {
  if (activeTab.value === '全部') return articles.value
  return articles.value.filter(article => article.category === activeTab.value)
})
</script>

<style scoped>
.page-articles {
  flex: 1;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.articles-section {
  padding: 40px 0;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.filter-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 8px 16px;
  border-radius: 20px;
  background: white;
  color: #666;
  border: 2px solid transparent;
  transition: all 0.3s;
  font-weight: 500;
}

.tab-btn:hover {
  border-color: #4a90d9;
  color: #4a90d9;
}

.tab-btn.active {
  background: #4a90d9;
  color: white;
  border-color: #4a90d9;
}

.search-box input {
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  width: 250px;
  transition: border-color 0.3s;
}

.search-box input:focus {
  border-color: #4a90d9;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.article-item {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.article-thumbnail {
  position: relative;
  height: 100%;
  min-height: 180px;
}

.article-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.95);
  color: #4a90d9;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.article-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 12px;
}

.article-content h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.article-summary {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.read-more {
  color: #4a90d9;
  font-weight: 600;
  transition: color 0.3s;
}

.read-more:hover {
  color: #667eea;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-info img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn {
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.page-btn:hover:not(:disabled) {
  border-color: #4a90d9;
  color: #4a90d9;
}

.page-btn.active {
  background: #4a90d9;
  color: white;
  border-color: #4a90d9;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .article-item {
    grid-template-columns: 1fr;
  }

  .article-thumbnail {
    height: 200px;
  }

  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box input {
    width: 100%;
  }
}
</style>