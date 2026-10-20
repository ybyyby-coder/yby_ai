<template>
  <div class="article-detail-page">
    <div class="container">
      <div class="article-header">
        <router-link to="/articles" class="back-btn">← 返回文章列表</router-link>
        <h1>{{ article.title }}</h1>
        <div class="meta-info">
          <span class="author">{{ article.author }}</span>
          <span class="date">{{ formatDate(article.date) }}</span>
          <span class="category-tag">{{ article.category }}</span>
        </div>
      </div>
      
      <div class="featured-image">
        <img :src="article.image" :alt="article.title" />
      </div>
      
      <div class="article-content">
        <p>在这篇文章中，我们将深入探讨 {{ article.tags.join('、') }} 的核心概念和实际应用。</p>
        
        <h2>引言</h2>
        <p>随着前端技术的不断发展，我们需要掌握更多现代化的开发工具和技巧。这篇文章将帮助您理解 {{ article.category }} 领域的最佳实践。</p>
        
        <h2>核心概念</h2>
        <p>首先，让我们了解基本原理。通过合理的设计和使用，我们可以大大提高开发效率和代码质量。</p>
        
        <blockquote>
          "好的代码像优美的诗歌一样，简洁、优雅且富有表现力。"
        </blockquote>
        
        <h2>实战示例</h2>
        <p>接下来，我们通过一些实际的例子来演示如何在项目中使用这些技术：</p>
        <ul>
          <li>第一个关键点是如何进行有效的代码组织</li>
          <li>第二个重点是性能优化和用户体验</li>
          <li>最后，我们要讨论如何维护和扩展应用</li>
        </ul>
        
        <h2>高级应用</h2>
        <p>掌握了基础之后，您可以开始探索更高级的用法。这包括集成测试、持续部署等工程化实践。</p>
        
        <h2>总结</h2>
        <p>希望通过这篇文章，您能够对 {{ article.tags[0] }} 有一个更深入的理解。在实际项目中灵活运用这些知识，您将能够构建更加健壮和高效的前端应用。</p>
      </div>
      
      <div class="tags-section">
        <div class="tags">
          <span v-for="tag in article.tags" :key="tag" class="tag-item">{{ tag }}</span>
        </div>
      </div>
      
      <div class="related-articles">
        <h3>相关文章</h3>
        <div class="related-grid">
          <article-card 
            v-for="item in relatedArticles" 
            :key="item.id"
            :article="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '@/components/ArticleCard.vue'

const route = useRoute()

const allArticles = [
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
  }
]

const article = computed(() => {
  return allArticles.find(a => a.id === Number(route.params.id)) || allArticles[0]
})

const relatedArticles = computed(() => {
  return allArticles.filter(a => a.id !== article.value.id).slice(0, 2)
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.article-header {
  margin-bottom: 40px;
}

.back-btn {
  display: inline-block;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 500;
}

.page-title {
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 20px;
}

.meta-info {
  display: flex;
  gap: 20px;
  color: var(--text-secondary);
  align-items: center;
}

.featured-image img {
  width: 100%;
  border-radius: var(--radius);
  margin-bottom: 40px;
}

.article-content {
  line-height: 1.8;
  color: var(--text-main);
}

.article-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-color);
}

.article-content p {
  margin-bottom: 20px;
}

.blockquote {
  background-color: rgba(14, 165, 233, 0.05);
  border-left: 4px solid var(--primary-color);
  padding: 20px 30px;
  margin: 30px 0;
  font-style: italic;
  color: var(--text-secondary);
}

.article-content ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

.article-content li {
  margin-bottom: 10px;
}

.tags-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag-item {
  background-color: var(--bg-page);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.related-articles {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
