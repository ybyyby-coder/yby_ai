&lt;template&gt;
  &lt;div class="home-page"&gt;
    &lt;section class="hero-section"&gt;
      &lt;div class="container hero-content"&gt;
        &lt;h1&gt;欢迎来到我的博客&lt;/h1&gt;
        &lt;p class="subtitle"&gt;记录学习路上的点点滴滴，分享技术见解与实践经验&lt;/p&gt;
        &lt;router-link to="/articles" class="btn btn-primary"&gt;浏览文章&lt;/router-link&gt;
      &lt;/div&gt;
    &lt;/section&gt;

    &lt;section class="featured-articles"&gt;
      &lt;div class="container"&gt;
        &lt;div class="section-header"&gt;
          &lt;h2&gt;热门推荐&lt;/h2&gt;
          &lt;router-link to="/articles" class="view-all"&gt;查看全部 →&lt;/router-link&gt;
        &lt;/div&gt;
        &lt;div class="article-grid"&gt;
          &lt;div v-for="article in featuredArticles" :key="article.id" class="article-card"&gt;
            &lt;div class="card-image"&gt;
              &lt;img :src="article.coverImage" :alt="article.title" /&gt;
            &lt;/div&gt;
            &lt;div class="card-body"&gt;
              &lt;span class="category-tag"&gt;{{ article.category }}&lt;/span&gt;
              &lt;h3 class="card-title"&gt;
                &lt;router-link :to="`/article/${article.id}`"&gt;{{ article.title }}&lt;/router-link&gt;
              &lt;/h3&gt;
              &lt;p class="card-excerpt"&gt;{{ article.excerpt }}&lt;/p&gt;
              &lt;div class="card-meta"&gt;
                &lt;span class="author"&gt;{{ article.author }}&lt;/span&gt;
                &lt;span class="date"&gt;{{ article.date }}&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;

    &lt;section class="categories-section"&gt;
      &lt;div class="container"&gt;
        &lt;h2 class="section-title"&gt;文章分类&lt;/h2&gt;
        &lt;div class="categories-grid"&gt;
          &lt;router-link 
            v-for="category in categories" 
            :key="category" 
            :to="{ name: 'articles', query: { category } }"
            class="category-card"
          &gt;
            &lt;div class="icon-wrapper"&gt;
              &lt;span class="category-icon"&gt;{{ getCategoryEmoji(category) }}&lt;/span&gt;
            &lt;/div&gt;
            &lt;h3&gt;{{ category }}&lt;/h3&gt;
          &lt;/router-link&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;

    &lt;section class="latest-articles"&gt;
      &lt;div class="container"&gt;
        &lt;div class="section-header"&gt;
          &lt;h2&gt;最新文章&lt;/h2&gt;
          &lt;router-link to="/articles" class="view-all"&gt;更多 →&lt;/router-link&gt;
        &lt;/div&gt;
        &lt;div class="article-list"&gt;
          &lt;div v-for="article in latestArticles" :key="article.id" class="article-item"&gt;
            &lt;div class="item-content"&gt;
              &lt;span class="category-tag small"&gt;{{ article.category }}&lt;/span&gt;
              &lt;h3 class="item-title"&gt;
                &lt;router-link :to="`/article/${article.id}`"&gt;{{ article.title }}&lt;/router-link&gt;
              &lt;/h3&gt;
              &lt;p class="item-excerpt"&gt;{{ article.excerpt }}&lt;/p&gt;
              &lt;div class="item-meta"&gt;
                &lt;span class="author"&gt;{{ article.author }}&lt;/span&gt;
                &lt;span class="date"&gt;{{ article.date }}&lt;/span&gt;
                &lt;span class="views"&gt;👁 {{ article.views }}&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="item-image"&gt;
              &lt;img :src="article.coverImage" :alt="article.title" /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getFeaturedArticles, getLatestArticles, getCategories } from '@/utils/articles.js'

const route = useRoute()
const currentCategory = computed(() => route.query.category || null)
const allCategories = computed(() => getCategories())

const featuredArticles = computed(() => getFeaturedArticles())
const latestArticles = computed(() => getLatestArticles(5))
const categories = computed(() => allCategories.value.filter(cat => !currentCategory.value || cat === currentCategory.value))

function getCategoryEmoji(category) {
  const emojis = {
    'Vue3': '💚',
    'CSS': '🎨',
    'JavaScript': '⚡',
    'TypeScript': '🔷',
    '性能优化': '🚀',
    '框架对比': '⚖️',
    'DevOps': '📦',
    '工程化': '🏗️'
  }
  return emojis[category] || '📄'
}
&lt;/script&gt;

&lt;style scoped&gt;
.home-page {
  min-height: calc(100vh - 180px);
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary {
  background-color: white;
  color: #667eea;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.view-all {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.featured-articles, .latest-articles {
  padding: 4rem 0;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 1.5rem;
  background: white;
  border: 1px solid #e9ecef;
  border-top: none;
  border-radius: 0 0 10px 10px;
}

.category-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #f0f0f0;
  color: #667eea;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.card-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.card-title a:hover {
  color: #667eea;
}

.card-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-meta, .item-meta {
  display: flex;
  gap: 1rem;
  color: #999;
  font-size: 0.875rem;
}

.categories-section {
  background-color: #f8f9fa;
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
}

.category-card {
  display: block;
  padding: 2rem 1rem;
  background: white;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #e9ecef;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.category-card h3 {
  margin: 0;
  font-size: 1rem;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  transition: box-shadow 0.3s;
}

.article-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.item-content {
  flex: 1;
}

.item-title a {
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.item-title a:hover {
  color: #667eea;
}

.item-excerpt {
  color: #666;
  margin: 0.75rem 0;
  line-height: 1.6;
}

.item-image {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .article-item {
    flex-direction: column;
  }

  .item-image {
    width: 100%;
    height: 200px;
  }
}
&lt;/style&gt;