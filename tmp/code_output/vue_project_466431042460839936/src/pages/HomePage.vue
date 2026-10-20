<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-content">
        <h1>探索前端技术的无限可能</h1>
        <p class="hero-subtitle">记录学习之旅，分享最佳实践与深度思考</p>
        <router-link to="/blog" class="btn btn-large">开始阅读</router-link>
      </div>
    </section>

    <!-- Featured Posts -->
    <section class="featured-posts">
      <div class="container">
        <h2 class="section-title">精选文章</h2>
        <div class="posts-grid">
          <div 
            v-for="post in featuredPosts" 
            :key="post.id" 
            class="post-card"
            @click="$router.push(`/blog/${post.id}`)"
          >
            <img :src="post.cover" :alt="post.title" class="post-cover" />
            <div class="post-content">
              <span class="post-tag">{{ post.category }}</span>
              <h3>{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.summary }}</p>
              <div class="post-meta">
                <span>{{ post.date }}</span>
                <span class="read-time">{{ post.readTime }} 分钟阅读</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">技术分类</h2>
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.name" 
            class="category-card"
            @click="$router.push('/blog')"
          >
            <div class="category-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.count }} 篇文章</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section">
      <div class="container newsletter-content">
        <h2>订阅更新</h2>
        <p>获取最新的技术文章与开发心得</p>
        <form class="newsletter-form" @submit.prevent="handleSubscribe">
          <input 
            type="email" 
            placeholder="输入您的邮箱地址" 
            required
            v-model="email"
          />
          <button type="submit" class="btn">立即订阅</button>
        </form>
        <p v-if="subscribed" class="success-message">✓ 订阅成功！请查收确认邮件。</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const featuredPosts = [
  {
    id: 1,
    title: 'Vue 3 Composition API 完全指南',
    summary: '深入理解 Vue 3 组合式 API 的设计哲学与最佳实践，掌握 setup 语法的精髓。',
    cover: 'https://picsum.photos/id/1/600/400',
    category: 'Vue.js',
    date: '2024-01-15',
    readTime: 8
  },
  {
    id: 2,
    title: 'TypeScript 高级类型编程技巧',
    summary: '从基础类型到条件类型、映射类型，全面提升 TypeScript 类型系统的使用能力。',
    cover: 'https://picsum.photos/id/2/600/400',
    category: 'TypeScript',
    date: '2024-01-10',
    readTime: 12
  },
  {
    id: 3,
    title: '现代 CSS 布局方案详解',
    summary: 'Flexbox、Grid 与新推出的 Contain Layout，全面了解当前最主流的布局技术。',
    cover: 'https://picsum.photos/id/3/600/400',
    category: 'CSS',
    date: '2024-01-05',
    readTime: 10
  }
]

const categories = [
  { name: 'Vue.js', icon: '💚', count: 24, color: '#42b883' },
  { name: 'React', icon: '⚛️', count: 18, color: '#61dafb' },
  { name: 'TypeScript', icon: '📘', count: 15, color: '#3178c6' },
  { name: 'Node.js', icon: '🟢', count: 12, color: '#339933' },
  { name: 'CSS/Sass', icon: '🎨', count: 20, color: '#ff69b4' },
  { name: '性能优化', icon: '⚡', count: 8, color: '#f59e0b' }
]

const email = ref('')
const subscribed = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    subscribed.value = true
    setTimeout(() => {
      subscribed.value = false
      email.value = ''
    }, 3000)
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 120px 0;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-large {
  padding: 14px 36px;
  font-size: 1.1rem;
  background-color: white;
  color: #764ba2;
}

.btn-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.featured-posts {
  padding: 80px 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.post-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.3s;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.post-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 1.5rem;
}

.post-tag {
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.post-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.post-excerpt {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.categories-section {
  padding: 80px 0;
  background-color: #f1f5f9;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.newsletter-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto 1rem;
  gap: 0;
}

.newsletter-form input {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: var(--radius) 0 0 var(--radius);
  font-size: 1rem;
}

.newsletter-form .btn {
  border-radius: 0 var(--radius) var(--radius) 0;
  background-color: white;
  color: #764ba2;
}

.success-message {
  margin-top: 1rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form input,
  .newsletter-form .btn {
    border-radius: var(--radius);
  }
}
</style>
