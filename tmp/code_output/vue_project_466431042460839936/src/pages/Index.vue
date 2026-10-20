<template>
  <div class="page-index">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">探索技术世界，分享开发智慧</h1>
        <p class="hero-subtitle">在这里找到前沿技术教程、最佳实践和深度解析</p>
        <router-link to="/articles" class="btn btn-primary">浏览所有文章</router-link>
      </div>
    </section>

    <!-- Featured Articles -->
    <section class="featured">
      <div class="container">
        <h2 class="section-title">精选文章</h2>
        <div class="article-grid">
          <div class="article-card" v-for="(item, index) in featuredArticles" :key="index">
            <img :src="item.image" alt="文章配图" />
            <div class="article-info">
              <span class="tag">{{ item.tag }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <div class="article-meta">
                <span>📅 {{ item.date }}</span>
                <span>⏱ {{ item.readTime }} 阅读</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container stats-grid">
        <div class="stat-item">
          <h3>{{ articleCount }}</h3>
          <p>技术文章</p>
        </div>
        <div class="stat-item">
          <h3>{{ readerCount }}</h3>
          <p>月均读者</p>
        </div>
        <div class="stat-item">
          <h3>{{ categoryCount }}</h3>
          <p>知识分类</p>
        </div>
        <div class="stat-item">
          <h3>{{ commentCount }}</h3>
          <p>读者评论</p>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">热门分类</h2>
        <div class="category-grid">
          <div class="category-card" v-for="(cat, index) in categories" :key="index">
            <span class="icon">{{ cat.icon }}</span>
            <h4>{{ cat.name }}</h4>
            <p>{{ cat.count }}篇文章</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
      <div class="container newsletter-content">
        <h2>订阅我们的周刊</h2>
        <p>每周精选技术文章直达你的邮箱</p>
        <form class="subscribe-form" @submit.prevent>
          <input type="email" placeholder="输入您的邮箱地址" />
          <button type="submit" class="btn btn-primary">立即订阅</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const articleCount = ref(58)
const readerCount = ref('12K')
const categoryCount = ref(12)
const commentCount = ref('2.5K')

const featuredArticles = ref([
  {
    image: 'https://picsum.photos/400/250?random=1',
    tag: 'Vue.js',
    title: 'Vue 3 Composition API 完全指南',
    summary: '深入理解 Vue 3 组合式 API 的优势与使用场景',
    date: '2024-01-15',
    readTime: '8分钟'
  },
  {
    image: 'https://picsum.photos/400/250?random=2',
    tag: 'React',
    title: 'React Hooks 最佳实践总结',
    summary: '掌握 React Hooks 的核心概念与实际应用技巧',
    date: '2024-01-10',
    readTime: '12分钟'
  },
  {
    image: 'https://picsum.photos/400/250?random=3',
    tag: 'TypeScript',
    title: 'TypeScript 高级类型系统解析',
    summary: '探索 TypeScript 类型系统的强大功能和设计模式',
    date: '2024-01-05',
    readTime: '15分钟'
  }
])

const categories = ref([
  { icon: '⚡', name: '前端框架', count: 18 },
  { icon: '🎨', name: 'UI/UX 设计', count: 12 },
  { icon: '🗄️', name: '后端开发', count: 9 },
  { icon: '☁️', name: '云原生', count: 7 },
  { icon: '🔧', name: '工程化', count: 10 },
  { icon: '📱', name: '移动端', count: 14 }
])
</script>

<style scoped>
.page-index {
  flex: 1;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background: white;
  color: #667eea;
}

.featured {
  padding: 60px 0;
  background: #f8fafc;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.article-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-info {
  padding: 20px;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #e0e7ff;
  color: #4a90d9;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.article-info h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #2c3e50;
}

.article-info p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.article-meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: #888;
}

.stats {
  padding: 60px 0;
  background: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #4a90d9;
  margin-bottom: 8px;
}

.stat-item p {
  color: #666;
  font-weight: 500;
}

.categories {
  padding: 60px 0;
  background: #f8fafc;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.category-card .icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 12px;
}

.category-card h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.category-card p {
  color: #666;
  font-size: 0.9rem;
}

.newsletter {
  padding: 60px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.newsletter-content {
  text-align: center;
}

.newsletter h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.newsletter p {
  margin-bottom: 32px;
  opacity: 0.9;
}

.subscribe-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 12px;
}

.subscribe-form input {
  flex: 1;
  padding: 14px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .subscribe-form {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 0;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>