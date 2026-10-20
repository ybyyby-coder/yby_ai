<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ICON_USER } from '@/assets/images'
import BaseIcon from './BaseIcon.vue'

const emit = defineEmits(['toggle'])
const route = useRoute()
const router = useRouter()

const title = computed(() => route.meta.title || '仪表盘')
const crumbs = computed(() => ['首页', title.value])

function goSearch(e) {
  const kw = e.target.querySelector('input').value.trim()
  if (kw) router.push({ path: '/users', query: { kw } })
}
</script>

<template>
  <header class="topbar">
    <button class="hamburger" @click="emit('toggle')" aria-label="切换菜单"><BaseIcon icon="menu" /></button>

    <div class="crumbs">
      <span class="muted">{{ crumbs[0] }}</span>
      <BaseIcon icon="right" class="sep" />
      <strong>{{ crumbs[1] }}</strong>
    </div>

    <form class="search" @submit.prevent="goSearch">
      <BaseIcon icon="search" />
      <input placeholder="搜索用户姓名、账号或邮箱" />
    </form>

    <div class="actions">
      <button class="icon-btn" aria-label="通知"><BaseIcon icon="bell" /><i></i></button>
      <div class="user">
        <img :src="ICON_USER" alt="用户中心" class="user-ico" />
        <div class="user-meta">
          <strong>陈嘉宁</strong>
          <span>超级管理员</span>
        </div>
        <BaseIcon icon="down" class="muted" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  height: 62px;
  background: #fff;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 50;
}
.hamburger { display: none; border: none; background: transparent; color: var(--ink-2); cursor: pointer; padding: 6px; }
.crumbs { display: flex; align-items: center; gap: 6px; font-size: 13px; }
.crumbs strong { font-size: 15px; }
.sep { width: 14px; height: 14px; color: var(--ink-3); }

.search {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 260px;
  height: 34px;
  padding: 0 10px;
  background: #f4f6fa;
  border: 1px solid transparent;
  border-radius: 18px;
  color: var(--ink-3);
}
.search:focus-within { background: #fff; border-color: var(--brand); }
.search input { flex: 1; border: none; outline: none; background: transparent; font-size: 13px; color: var(--ink); min-width: 0; }

.actions { display: flex; align-items: center; gap: 12px; }
.icon-btn { position: relative; width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--line); background: #fff; color: var(--ink-2); cursor: pointer; display: flex; align-items: center; justify-content: center; }
.icon-btn:hover { color: var(--brand); border-color: var(--brand); }
.icon-btn i { position: absolute; top: 6px; right: 7px; width: 7px; height: 7px; border-radius: 50%; background: var(--err); border: 1.5px solid #fff; }

.user { display: flex; align-items: center; gap: 8px; padding: 4px 8px 4px 4px; border-radius: 24px; cursor: pointer; }
.user:hover { background: #f4f6fa; }
.user-ico { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; background: var(--brand-light); padding: 4px; }
.user-meta { display: flex; flex-direction: column; line-height: 1.25; }
.user-meta strong { font-size: 13px; }
.user-meta span { font-size: 11px; color: var(--ink-3); }

@media (max-width: 1100px) { .search { width: 180px; } }
@media (max-width: 900px) {
  .hamburger { display: flex; }
  .crumbs { display: none; }
  .search { width: 130px; }
  .user-meta { display: none; }
}
@media (max-width: 480px) { .search { display: none; } .actions { margin-left: auto; } }
</style>
