<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>关于我</h1>
        <p>分享技术心得，记录成长历程</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section container">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-image">
          <img src="https://picsum.photos/200/200?random=9" alt="我的照片" />
        </div>
        <div class="profile-info">
          <h2>你好！我是开发者小王</h2>
          <p class="bio">
            一名热爱技术的前端工程师，专注于 Vue.js 和现代 Web 开发。
            热衷于探索新技术，并将其应用到实际项目中。希望通过这个博客与他人分享学习经验，共同成长。
          </p>
          
          <div class="skills">
            <h3>技术栈</h3>
            <div class="skill-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">JavaScript</span>
              <span class="tag">TypeScript</span>
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">CSS/SASS</span>
              <span class="tag">Git</span>
              <span class="tag">Webpack/Vite</span>
            </div>
          </div>

          <div class="experience">
            <h3>工作经历</h3>
            <div class="timeline-item">
              <span class="year">2023 - 至今</span>
              <h4>高级前端工程师 @ XX科技有限公司</h4>
              <p>负责核心产品前端架构设计和开发，带领团队完成多个大型项目。</p>
            </div>
            <div class="timeline-item">
              <span class="year">2021 - 2023</span>
              <h4>前端开发工程师 @ YY互联网公司</h4>
              <p>参与电商平台前端开发，优化用户体验和性能指标。</p>
            </div>
            <div class="timeline-item">
              <span class="year">2019 - 2021</span>
              <h4>初级前端工程师 @ ZZ科技公司</h4>
              <p>负责公司内部管理系统的前端开发和维护工作。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <div class="stat-number">156</div>
          <div class="stat-label">原创文章</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-number">2.5K</div>
          <div class="stat-label">读者朋友</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💡</div>
          <div class="stat-number">89</div>
          <div class="stat-label">技术教程</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">❤️</div>
          <div class="stat-number">5K+</div>
          <div class="stat-label">获得赞数</div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="contact-section">
        <h2>联系我</h2>
        <p>如果你有技术问题或者合作意向，欢迎通过以下方式联系我：</p>
        
        <div class="contact-methods">
          <div class="contact-item">
            <span class="icon">📧</span>
            <div>
              <h4>邮箱</h4>
              <p>developer@example.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="icon">🐙</span>
            <div>
              <h4>GitHub</h4>
              <p>github.com/developer-wang</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="icon">📱</span>
            <div>
              <h4>社交媒体</h4>
              <p>@developer-wang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  padding-bottom: 60px;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 80px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.content-section {
  padding-top: 40px;
}

.profile-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.profile-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.profile-info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.bio {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.skills h3,
.experience h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.tag {
  padding: 8px 16px;
  background: #f0f7ff;
  color: #1890ff;
  border-radius: 20px;
  font-weight: 500;
}

.timeline-item {
  padding-left: 20px;
  border-left: 3px solid #667eea;
  margin-bottom: 30px;
}

.year {
  display: inline-block;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 10px;
}

.timeline-item h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.timeline-item p {
  color: #666;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.stat-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-label {
  color: #666;
  font-size: 1rem;
}

.contact-section {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.contact-section > p {
  color: #666;
  margin-bottom: 30px;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item .icon {
  font-size: 2rem;
}

.contact-item h4 {
  margin-bottom: 5px;
  color: #2c3e50;
}

.contact-item p {
  color: #666;
}

@media (max-width: 768px) {
  .profile-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .profile-image img {
    max-width: 300px;
    margin: 0 auto;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>