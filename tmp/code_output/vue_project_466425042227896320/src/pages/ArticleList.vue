&lt;template&gt;
  &lt;div class="articles-page"&gt;
    &lt;div class="container"&gt;
      &lt;div class="page-header"&gt;
        &lt;h1&gt;全部文章&lt;/h1&gt;
        &lt;p class="subtitle"&gt;探索技术世界，分享编程经验&lt;/p&gt;
      &lt;/div&gt;

      &lt;div class="filters-section"&gt;
        &lt;div class="filter-group"&gt;
          &lt;label class="filter-label"&gt;分类筛选：&lt;/label&gt;
          &lt;button 
            v-for="category in categories" 
            :key="category"
            class="filter-btn"
            :class="{ active: activeCategory === category }"
            @click="handleCategoryChange(category)"
          &gt;
            {{ category }}
          &lt;/button&gt;
          &lt;button 
            v-if="activeCategory" 
            class="filter-btn clear-btn"
            @click="clearFilter"
          &gt;
            清除
          &lt;/button&gt;
        &lt;/div&gt;
        
        &lt;div class="search-box"&gt;
          &lt;input 
            type="text" 
            placeholder="搜索文章..." 
            v-model="searchQuery"
            @input="handleSearch"
            class="search-input"
          /&gt;
          &lt;span class="search-icon"&gt;🔍&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="articles-grid"&gt;
        &lt;div v-for="article in filteredArticles" :key="article.id" class="article-card-large"&gt;
          &lt;div class="card-image"&gt;
            &lt;img :src="article.coverImage" :alt="article.title" /&gt;
            &lt;div class="card-overlay"&gt;
              &lt;router-link :to="`/article/${article.id}`" class="read-more"&gt;阅读全文&lt;/router-link&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="card-body"&gt;
            &lt;span class="category-tag"&gt;{{ article.category }}&lt;/span&gt;
            &lt;h2 class="article-title"&gt;
              &lt;router-link :to="`/article/${article.id}`"&gt;{{ article.title }}&lt;/router-link&gt;
            &lt;/h2&gt;
            &lt;p class="article-excerpt"&gt;{{ article.excerpt }}&lt;/p&gt;
            &lt;div class="article-tags"&gt;
              &lt;span v-for="tag in article.tags" :key="tag" class="tag"&gt;#{{ tag }}&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="article-meta"&gt;
              &lt;span class="author"&gt;✍️ {{ article.author }}&lt;/span&gt;
              &lt;span class="date"&gt;📅 {{ article.date }}&lt;/span&gt;
              &lt;span class="views"&gt;👁 {{ article.views }}&lt;/span&gt;
              &lt;span class="comments"&gt;💬 {{ article.commentsCount }}&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-if="filteredArticles.length === 0" class="empty-state"&gt;
          &lt;div class="empty-icon"&gt;📭&lt;/div&gt;
          &lt;p&gt;没有找到匹配的文章&lt;/p&gt;
          &lt;button @click="resetFilters" class="btn-reset"&gt;重置筛选条件&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCategories, getTags, searchArticles as searchAPI, getArticlesByCategory } from '@/utils/articles.js'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const activeCategory = ref(route.query.category || '')
const allCategories = ref(getCategories())

const articles = ref([])

onMounted(() => {
  loadArticles()
})

function loadArticles() {
  if (activeCategory.value) {
    articles.value = getArticlesByCategory(activeCategory.value)
  } else {
    // Import default articles when no filter is applied
    import('@/utils/articles.js').then(module => {
      articles.value = module.getAllArticles()
    })
  }
}

const filteredArticles = computed(() => {
  let result = articles.value
  
  if (searchQuery.value.trim()) {
    result = searchAPI(result, searchQuery.value.trim())
  }
  
  return result
})

function handleCategoryChange(category) {
  activeCategory.value = category
  router.push({ query: { ...route.query, category } })
  loadArticles()
}

function clearFilter() {
  activeCategory.value = ''
  router.push({ query: {} })
  loadArticles()
}

function resetFilters() {
  searchQuery.value = ''
  clearFilter()
}
&lt;/script&gt;

&lt;style scoped&gt;
.articles-page {
  padding-top: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.filters-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.filter-btn:hover, .filter-btn.active {
  background-color: #4A90D9;
  color: white;
  border-color: #4A90D9;
}

.clear-btn {
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
}

.search-box {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #4A90D9;
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.articles-grid {
  display: grid;
  gap: 2rem;
}

.article-card-large {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card-large:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
  width: 300px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.article-card-large:hover .card-overlay {
  opacity: 1;
}

.read-more {
  color: white;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
}

.read-more:hover {
  background-color: white;
  color: #333;
}

.card-body {
  padding: 1.5rem;
  flex: 1;
}

.article-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.article-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.article-title a:hover {
  color: #4A90D9;
}

.article-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background-color: #eef2ff;
  color: #4A90D9;
  border-radius: 15px;
  font-size: 0.8rem;
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  color: #999;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.btn-reset {
  padding: 0.75rem 1.5rem;
  background-color: #4A90D9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .article-card-large {
    flex-direction: column;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
  }
  
  .filters-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    width: 100%;
  }
}
&lt;/style&gt;