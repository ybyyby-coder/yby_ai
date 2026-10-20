<script setup>
import { ref } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppTopbar from '@/components/AppTopbar.vue'

const drawer = ref(false)
</script>

<template>
  <div class="layout">
    <AppSidebar :open="drawer" @navigate="drawer = false" />
    <div class="mask" v-if="drawer" @click="drawer = false"></div>

    <div class="main">
      <AppTopbar @toggle="drawer = !drawer" />
      <div class="content">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
        <footer class="foot">
          <span>© 2026 云枢科技有限公司 · 用户管理与数据展示平台</span>
          <span class="muted">浙ICP备 2026001888 号 · 服务可用性 99.98%</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout { min-height: 100vh; }
.main { margin-left: var(--sidebar-w); display: flex; flex-direction: column; min-height: 100vh; }
.content { flex: 1; padding: 22px; }
.foot {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--ink-3);
}
.mask { position: fixed; inset: 0; background: rgba(23, 43, 77, 0.35); z-index: 55; }

@media (max-width: 900px) {
  .main { margin-left: 0; }
  .content { padding: 14px; }
}
</style>
