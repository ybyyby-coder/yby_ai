<script setup>
import { ref } from 'vue'
import { BRAND_LOGO } from '@/assets/config'

const LINKS = [
  { title: '内容', items: ['编程教程', '系统架构', '实战案例', '技术书单'] },
  { title: '关于', items: ['站点介绍', '作者团队', '内容约定', '联系我们'] },
  { title: '支持', items: ['常见问题', '更新日志', 'RSS 订阅', '提交选题'] }
]

const email = ref('')
const done = ref(false)

function subscribe() {
  if (!email.value.includes('@')) return
  done.value = true
  email.value = ''
  setTimeout(() => (done.value = false), 2600)
}
</script>

<template>
  <footer class="ft">
    <div class="container ft__top">
      <div class="ft__intro">
        <div class="ft__brand">
          <img :src="BRAND_LOGO" alt="" class="ft__logo" />
          <span>CodeAtlas 码图集</span>
        </div>
        <p class="ft__slogan">把复杂的系统拆开讲，让每一层架构都能被看懂。</p>

        <form class="ft__sub" @submit.prevent="subscribe">
          <input v-model="email" type="email" placeholder="输入邮箱，订阅每周更新" />
          <button type="submit">{{ done ? '已订阅' : '订阅' }}</button>
        </form>
        <p v-if="done" class="ft__tip">订阅成功，下一封周刊将发送至你的邮箱。</p>
      </div>

      <div class="ft__links">
        <div v-for="col in LINKS" :key="col.title" class="ft__col">
          <h4>{{ col.title }}</h4>
          <RouterLink
            v-for="(it, i) in col.items"
            :key="it"
            :to="col.title === '内容' ? (i === 1 ? '/architecture' : '/tutorials') : '/about'"
          >{{ it }}</RouterLink>
        </div>
      </div>
    </div>

    <div class="container ft__bottom">
      <span>© 2021-2024 CodeAtlas 码图集 · 保留所有权利</span>
      <span class="ft__dots">
        <em>Vue 3</em><em>Vite</em><em>Hash Router</em>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.ft { background: #0f172a; color: #cbd5e1; margin-top: auto; }
.ft__top {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  padding: 56px 20px 36px;
}
.ft__brand { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 700; color: #fff; }
.ft__logo { width: 32px; height: 32px; border-radius: 8px; }
.ft__slogan { margin: 14px 0 22px; font-size: 14.5px; line-height: 1.85; color: #94a3b8; max-width: 380px; }

.ft__sub { display: flex; gap: 8px; max-width: 380px; }
.ft__sub input {
  flex: 1;
  padding: 11px 14px;
  font-size: 14px;
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9px;
  outline: none;
}
.ft__sub input::placeholder { color: #7c8aa5; }
.ft__sub input:focus { border-color: var(--brand-cyan); }
.ft__sub button {
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), var(--brand-cyan));
  border: none;
  border-radius: 9px;
}
.ft__tip { margin-top: 10px; font-size: 12.5px; color: #34d399; }

.ft__links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ft__col h4 { font-size: 14px; color: #fff; margin-bottom: 14px; }
.ft__col a {
  display: block;
  padding: 5px 0;
  font-size: 13.5px;
  color: #94a3b8;
  transition: color 0.2s;
}
.ft__col a:hover { color: var(--brand-cyan); }

.ft__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 12.5px;
  color: #7c8aa5;
}
.ft__dots { display: flex; gap: 16px; }
.ft__dots em { font-style: normal; }

@media (max-width: 880px) {
  .ft__top { grid-template-columns: 1fr; gap: 34px; padding: 44px 20px 30px; }
}
@media (max-width: 560px) {
  .ft__links { grid-template-columns: repeat(2, 1fr); }
  .ft__bottom { flex-direction: column; gap: 10px; align-items: flex-start; }
}
</style>
