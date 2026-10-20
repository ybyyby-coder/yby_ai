<template>
  <div class="app">
    <nav class="navbar">
      <div class="container nav-container">
        <div class="logo">📚 TechBlog</div>
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/articles">文章</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-section">
          <h4>关于本站</h4>
          <p>TechBlog是一个分享前端技术、开发心得的学习平台，旨在帮助开发者成长。</p>
        </div>
        <div class="footer-section">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/articles">所有文章</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>联系方式</h4>
          <p>📧 techblog@example.com</p>
          <p>🐙 GitHub: @techblog</p>
        </div>
      </div>
      <div class="copyright">
        <p>© 2024 TechBlog. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a90d9;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 24px;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
  padding: 8px 12px;
  border-radius: 4px;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #4a90d9;
  background: #f0f7ff;
}

.footer {
  background: #2c3e50;
  color: #fff;
  padding: 40px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 20px;
}

.footer-section h4 {
  margin-bottom: 12px;
  color: #fff;
}

.footer-section p,
.footer-section a {
  color: #bdc3c7;
  line-height: 1.8;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #4a90d9;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #95a5a6;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 12px;
  }
  
  .nav-links a {
    padding: 6px 8px;
    font-size: 0.9rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>