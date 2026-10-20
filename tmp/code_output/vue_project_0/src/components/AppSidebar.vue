<script setup>
import { NAV_ITEMS, LOGO_MAIN } from '@/assets/images'
import BaseIcon from './BaseIcon.vue'

defineProps({ open: Boolean })
const emit = defineEmits(['navigate'])
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="brand">
      <img :src="LOGO_MAIN" alt="云枢科技" class="brand-logo" />
      <div class="brand-text">
        <strong>云枢科技</strong>
        <span>用户管理与数据展示平台</span>
      </div>
    </div>

    <nav class="nav">
      <RouterLink
        v-for="item in NAV_ITEMS"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        @click="emit('navigate')"
      >
        <span class="nav-ico"><BaseIcon :icon="item.icon" /></span>
        <span class="nav-label">{{ item.label }}</span>
        <span class="nav-desc">{{ item.desc }}</span>
      </RouterLink>
    </nav>

    <div class="side-foot">
      <div class="tip">
        <p class="tip-title">当前版本 v3.2.1</p>
        <p class="muted">数据同步时间 2026-01-01 10:00</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-w);
  background: #fff;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 60;
  overflow-y: auto;
}
.brand { display: flex; align-items: center; gap: 10px; padding: 18px 16px; border-bottom: 1px solid var(--line); }
.brand-logo { width: 40px; height: 40px; object-fit: contain; border-radius: 9px; background: #f6f8fc; }
.brand-text { display: flex; flex-direction: column; min-width: 0; }
.brand-text strong { font-size: 15px; letter-spacing: 0.5px; }
.brand-text span { font-size: 11px; color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.nav { padding: 12px 10px; flex: 1; display: flex; flex-direction: column; gap: 4px; }
.nav-item {
  position: relative;
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 10px;
  color: var(--ink-2);
  transition: background 0.18s, color 0.18s;
}
.nav-item:hover { background: #f4f7fc; color: var(--brand); }
.nav-item.router-link-active { background: var(--brand); color: #fff; box-shadow: 0 6px 16px rgba(22, 104, 220, 0.28); }
.nav-ico { display: flex; align-items: center; justify-content: center; }
.nav-label { font-size: 14px; font-weight: 500; }
.nav-desc { grid-column: 2; font-size: 11px; color: var(--ink-3); margin-top: -2px; }
.nav-item.router-link-active .nav-desc { color: rgba(255, 255, 255, 0.8); }

.side-foot { padding: 14px 16px; border-top: 1px solid var(--line); }
.tip { background: var(--brand-light); border-radius: 10px; padding: 10px 12px; }
.tip-title { font-size: 12px; font-weight: 600; color: var(--brand-dark); }
.tip .muted { font-size: 11px; }

@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); transition: transform 0.26s ease; width: 250px; box-shadow: 0 0 40px rgba(23, 43, 77, 0.16); }
  .sidebar.open { transform: translateX(0); }
}
</style>
