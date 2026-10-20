<template>
  <footer class="footer">
    <div class="container footer-top">
      <div class="f-brand">
        <img :src="logo" alt="CodeArch" />
        <div>
          <strong>CodeArch 架构志</strong>
          <p>面向中高级开发者的技术写作与架构沉淀平台，把可复用的工程经验写清楚。</p>
        </div>
      </div>

      <div class="f-cols">
        <div v-for="col in columns" :key="col.title" class="f-col">
          <h4>{{ col.title }}</h4>
          <router-link v-for="item in col.links" :key="item.label" :to="item.path">{{ item.label }}</router-link>
        </div>
      </div>

      <div class="f-contact">
        <h4>联系与更新</h4>
        <p class="mono">editor@codearch.dev</p>
        <p class="f-tip">订阅周刊，每周五收到精选架构案例与写作选题。</p>
        <div class="f-social">
          <span v-for="s in socials" :key="s" class="f-social-item">{{ s }}</span>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© 2024 CodeArch 架构志 · 保留所有权利</span>
      <span>京ICP备2024009182号-1 · 增值电信业务经营许可证</span>
    </div>
  </footer>
</template>

<script setup>
import { LOGO_IMG } from '@/utils/blogData'

const logo = LOGO_IMG

const columns = [
  {
    title: '内容板块',
    links: [
      { label: '编程教程', path: '/tutorials' },
      { label: '系统架构', path: '/architecture' },
      { label: '创作者中心', path: '/author' },
      { label: '关于我们', path: '/about' }
    ]
  },
  {
    title: '热门方向',
    links: [
      { label: '高并发实战', path: '/post/a01' },
      { label: '微服务拆分', path: '/post/a02' },
      { label: 'Vue3 入门', path: '/post/t01' },
      { label: '可观测性', path: '/post/a04' }
    ]
  }
]

const socials = ['公众号', '掘金', 'GitHub', 'RSS']
</script>

<style scoped>
.footer {
  background: #051220;
  color: rgba(214, 230, 244, 0.72);
  padding-top: 56px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1.6fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.f-brand {
  display: flex;
  gap: 14px;
}

.f-brand img {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #f7f9fb;
  flex-shrink: 0;
}

.f-brand strong {
  display: block;
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
}

.f-brand p {
  font-size: 14px;
  max-width: 280px;
}

.f-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.f-col h4,
.f-contact h4 {
  font-size: 14px;
  color: #fff;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}

.f-col a {
  display: block;
  font-size: 14px;
  padding: 5px 0;
  color: rgba(214, 230, 244, 0.68);
  transition: color 0.2s ease, transform 0.2s ease;
}

.f-col a:hover {
  color: var(--teal);
  transform: translateX(3px);
}

.f-contact p {
  font-size: 13.5px;
  margin-bottom: 6px;
}

.f-tip {
  color: rgba(214, 230, 244, 0.55);
}

.f-social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.f-social-item {
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 12.5px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 22px 24px;
  font-size: 13px;
  color: rgba(214, 230, 244, 0.48);
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 520px) {
  .f-cols {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
