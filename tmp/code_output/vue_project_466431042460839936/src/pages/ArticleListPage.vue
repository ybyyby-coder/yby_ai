<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="article-list-header">
        <h1>全部文章</h1>
        <p class="subtitle">探索前端、后端、设计与生活的有趣话题</p>
      </div>
      
      <!-- Category Filter -->
      <div class="category-filter">
        <button 
          v-for="cat in categories" 
          :key="cat" 
          :class="['filter-btn', activeCategory === cat ? 'active' : '']"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>
      
      <!-- Article Grid -->
      <div class="article-grid">
        <div 
          v-for="article in filteredArticles" 
          :key="article.id" 
          class="article-card"
          @click="viewArticle(article.id)"
        >
          <div class="card-cover">
            <img :src="article.cover" :alt="article.title" />
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="article-category">{{ article.category }}</span>
              <span class="article-date">{{ article.date }}</span>
            </div>
            <div class="card-tags">
              <span v-for="tag in article.tags" :key="tag">#{{ tag }}</span>
            </div>
            <h3 class="card-title">{{ article.title }}</h3>
            <p class="card-excerpt">{{ article.excerpt }}</p>
            <span class="read-more">阅读全文 →</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { mockData } from '@/utils/mockData.js'

const router = useRouter()
const activeCategory = ref('所有')

const categories = ['所有', ...mockData.categories]

const allArticles = computed(() => mockData.articles)

const filteredArticles = computed(() => {
  if (activeCategory.value === '所有') {
    return allArticles.value
  }
  return allArticles.value.filter(a => a.category === activeCategory.value)
})

const selectCategory = (cat) => {
  activeCategory.value = cat
}

const viewArticle = (id) => {
  router.push({ name: 'ArticleDetail', params: { id } })
}
</script>

<style scoped>
.article-list-header {
  text-align: center;
  margin-bottom: 40px;
}

.article-list-header h1 {
  font-size: 2rem;
  color: var(--text-main);
  margin-bottom: 10px;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.category-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 20px;
  background-color: var(--bg-surface);
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid var(--border-color);
}

.filter-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.filter-btn.active {
  background-color: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
}
</style>
