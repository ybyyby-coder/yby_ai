<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">关于我</h1>
      
      <div class="about-content">
        <div class="profile-section">
          <div class="profile-image">
            <img src="https://picsum.photos/300/300?random=8" alt="Profile" />
          </div>
          <div class="profile-info">
            <h2>Alex Chen</h2>
            <p class="role">高级前端工程师 / 技术博主</p>
            <p class="bio">热爱技术，专注于前端架构设计和用户体验优化。喜欢通过博客分享自己的技术思考和实践心得。</p>
            
            <div class="social-links">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">掘金</a>
              <a href="#" class="social-link">邮箱</a>
            </div>
          </div>
        </div>
        
        <div class="skills-section">
          <h2>技术栈</h2>
          <div class="skills-grid">
            <div v-for="skill in skills" :key="skill.name" class="skill-card">
              <div class="skill-icon">{{ skill.icon }}</div>
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.description }}</p>
              <div class="skill-level">
                <span>熟练度: {{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experience-section">
          <h2>工作经历</h2>
          <div class="timeline">
            <div v-for="job in experiences" :key="job.company" class="timeline-item">
              <div class="timeline-header">
                <h3>{{ job.role }}</h3>
                <span class="company">{{ job.company }}</span>
              </div>
              <p class="period">{{ job.period }}</p>
              <ul class="responsibilities">
                <li v-for="task in job.tasks" :key="task">{{ task }}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="contact-section">
          <h2>联系我</h2>
          <p>如果您有任何问题或合作意向，欢迎通过以下方式联系我：</p>
          <form class="contact-form" @submit.prevent="handleContact">
            <input type="text" placeholder="您的姓名" required />
            <input type="email" placeholder="您的邮箱" required />
            <textarea placeholder="留言内容" rows="5" required></textarea>
            <button type="submit" class="btn">发送消息</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const handleContact = () => {
  alert('感谢您的留言！我会尽快回复您。')
}

const skills = [
  { name: 'Vue.js', icon: '💚', description: 'Vue 2/3, Pinia, Vue Router', level: 95 },
  { name: 'React', icon: '⚛️', description: 'Hooks, Next.js, Redux', level: 85 },
  { name: 'TypeScript', icon: '📘', description: '类型系统, 泛型, 装饰器', level: 90 },
  { name: 'CSS/SCSS', icon: '🎨', description: 'Flexbox, Grid, 响应式设计', level: 92 }
]

const experiences = [
  {
    role: '高级前端工程师',
    company: '某科技公司',
    period: '2021 - 至今',
    tasks: [
      '负责核心产品的前端架构设计',
      '带领团队进行技术选型和优化',
      '推动组件库建设并制定开发规范'
    ]
  },
  {
    role: '前端开发工程师',
    company: '某互联网企业',
    period: '2018 - 2021',
    tasks: [
      '参与多个大型项目的开发',
      '性能优化和用户体验提升',
      '编写技术文档和教程'
    ]
  }
]
</script>

<style scoped>
.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.profile-section {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border-color);
}

.profile-image img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: var(--radius);
}

.role {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.bio {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  padding: 8px 20px;
  background-color: var(--bg-page);
  border-radius: 20px;
  transition: all 0.3s;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.skill-card {
  background-color: var(--bg-card);
  padding: 25px;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.skill-card h3 {
  margin-bottom: 10px;
}

.skill-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.skill-level {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
}

.timeline {
  margin-top: 20px;
}

.timeline-item {
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 3px solid var(--primary-color);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.company {
  color: var(--primary-color);
  font-weight: 500;
}

.period {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.responsibilities {
  list-style-position: inside;
  color: var(--text-secondary);
}

.responsibilities li {
  margin-bottom: 8px;
}

.contact-section {
  text-align: center;
  max-width: 600px;
  margin: 60px auto 0;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
}

.contact-section p {
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 1rem;
  font-family: inherit;
}

@media (max-width: 768px) {
  .profile-section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .profile-image img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>
