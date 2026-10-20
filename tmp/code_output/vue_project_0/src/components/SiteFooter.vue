<script setup>
import { ref } from 'vue'
import { LOGO_IMG, ARCH_IMG } from '@/utils/blogData'

const email = ref('')
const submitted = ref(false)

const subscribe = () => {
  if (!/.+@.+\..+/.test(email.value)) return
  submitted.value = true
  email.value = ''
  setTimeout(() => (submitted.value = false), 2600)
}

const groups = [
  { title: '内容板块', links: ['编程教程', '系统架构', '数据架构', '稳定性专栏', '算法专题'] },
  { title: '创作者', links: ['作者指南', '投稿规范', '选题池', '收益说明', '常见问题'] },
  { title: '关于站点', links: ['关于我们', '团队介绍', '联系我们', '友情链接', '站点地图'] }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-top">
      <div class="footer-brand">
        <div class="brand-row">
          <img :src="LOGO_IMG" alt="CodeArch" class="brand-logo" />
          <div>
            <strong>CodeArch</strong>
            <p>让每一次架构决策，都有迹可循。</p>
          </div>
        </div>
        <p class="brand-desc">
          我们是一群长期在一线写代码、画架构图的人。CodeArch 只做两件事：把编程教程讲清楚，把系统架构讲透彻。
        </p>
        <div class="mini-arch">
          <img :src="ARCH_IMG" alt="CodeArch 站点整体架构图" />
          <span>站点整体架构示意</span>
        </div>
      </div>

      <div class="footer-links">
        <div v-for="group in groups" :key="group.title" class="link-col">
          <h4>{{ group.title }}</h4>
          <ul>
            <li v-for="item in group.links" :key="item">
              <a href="#/tutorials">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-sub">
        <h4>订阅周刊</h4>
        <p>每周一封，只推送最有价值的教程与架构拆解，绝不打扰。</p>
        <div class="sub-form">
          <input v-model="email" type="email" placeholder="your.name@example.com" @keyup.enter="subscribe" />
          <button class="btn btn-primary" @click="subscribe">订阅</button>
        </div>
        <p v-if="submitted" class="sub-ok">订阅成功，欢迎加入 CodeArch 读者社区</p>
        <ul class="social">
          <li><a href="#/">GitHub</a></li>
          <li><a href="#/">掘金</a></li>
          <li><a href="#/">RSS</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© 2024 CodeArch Tech Blog · 保留所有权利</span>
      <span>用心写作，专注长期价值</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #071a2f, #051324);
  color: rgba(214, 230, 244, 0.76);
  padding-top: 62px;
  border-top: 3px solid var(--teal);
}

.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1.5fr 1fr;
  gap: 48px;
  padding-bottom: 44px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  object-fit: cover;
  background: #fff;
}

.brand-row strong {
  color: #fff;
  font-size: 20px;
  display: block;
}

.brand-row p {
  font-size: 13px;
  color: var(--teal);
}

.brand-desc {
  margin-top: 18px;
  font-size: 14.5px;
  line-height: 1.85;
}

.mini-arch {
  margin-top: 22px;
  padding: 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mini-arch img {
  width: 100%;
  max-height: 130px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  padding: 8px;
}

.mini-arch span {
  display: block;
  margin-top: 10px;
  font-size: 12px;
  color: rgba(214, 230, 244, 0.55);
  text-align: center;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.link-col h4,
.footer-sub h4 {
  color: #fff;
  font-size: 15.5px;
  margin-bottom: 16px;
}

.link-col li {
  margin-bottom: 11px;
}

.link-col a {
  font-size: 14.2px;
  color: rgba(214, 230, 244, 0.72);
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.link-col a:hover {
  color: var(--teal);
  padding-left: 4px;
}

.footer-sub p {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.sub-form {
  display: flex;
  gap: 8px;
}

.sub-form input {
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.sub-form input:focus {
  border-color: var(--teal);
}

.sub-form .btn {
  padding: 12px 20px;
  font-size: 14px;
}

.sub-ok {
  margin-top: 10px;
  color: var(--teal);
  font-size: 13px;
}

.social {
  display: flex;
  gap: 18px;
  margin-top: 22px;
}

.social a {
  font-size: 13.5px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: all 0.2s ease;
}

.social a:hover {
  border-color: var(--teal);
  color: var(--teal);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  color: rgba(214, 230, 244, 0.5);
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
  .footer-sub {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-bottom {
    justify-content: center;
    text-align: center;
  }
}
</style>
