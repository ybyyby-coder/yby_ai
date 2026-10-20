<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>📝 MyBlog</h3>
          <p>分享技术心得，记录成长历程</p>
        </div>
        
        <div class="footer-section">
          <h4>快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/articles">文章</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>分类标签</h4>
          <div class="tags">
            <span>Vue.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>联系方式</h4>
          <p>💌 developer@example.com</p>
          <p>🐙 github.com/myblog</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 MyBlog. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 40px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #a0b4c8;
}

.footer-section p {
  color: #ccc;
  margin-bottom: 10px;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #ccc;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #667eea;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>