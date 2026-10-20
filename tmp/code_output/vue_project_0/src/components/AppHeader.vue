<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { BRAND_LOGO } from '@/assets/config'

const NAV = [
  { name: '首页', path: '/' },
  { name: '编程教程', path: '/tutorials' },
  { name: '系统架构', path: '/architecture' },
  { name: '关于站点', path: '/about' }
]

const route = useRoute()
const router = useRouter()
const open = ref(false)
const solid = ref(false)

function onScroll() {
  solid.value = window.scrollY > 12
}
window.addEventListener('scroll', onScroll, { passive: true })

watch(
  () => route.path,
  () => {
    open.value = false
  }
)

function go(path) {
  router.push(path)
}
</script>

<template>
  <header class="hd" :class="{ 'hd--solid': solid }">
    <div class="hd__inner container">
      <RouterLink to="/" class="hd__brand">
        <img :src="BRAND_LOGO" alt="CodeAtlas" class="hd__logo" />
        <span class="hd__name">
          CodeAtlas
          <em>码图集</em>
        </span>
      </RouterLink>

      <nav class="hd__nav">
        <RouterLink
          v-for="item in NAV"
          :key="item.path"
          :to="item.path"
          class="hd__link"
          :class="{ 'is-active': route.path === item.path }"
        >{{ item.name }}</RouterLink>
      </nav>

      <div class="hd__right">
        <RouterLink to="/tutorials" class="hd__search">
          <span>搜索教程、案例</span>
          <kbd>⌘K</kbd>
        </RouterLink>
        <button class="hd__burger" :class="{ 'is-open': open }" aria-label="菜单" @click="open = !open">
          <i></i><i></i><i></i>
        </button>
      </div>
    </div>

    <Transition name="drop">
      <nav v-if="open" class="hd__mobile">
        <button
          v-for="item in NAV"
          :key="item.path"
          class="hd__mobile-item"
          :class="{ 'is-active': route.path === item.path }"
          @click="go(item.path)"
        >{{ item.name }}</button>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.hd {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 249, 252, 0.72);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.hd--solid {
  background: rgba(255, 255, 255, 0.92);
  border-bottom-color: var(--line);
  box-shadow: 0 4px 18px rgba(17, 24, 39, 0.05);
}
.hd__inner { display: flex; align-items: center; gap: 26px; height: 68px; }

.hd__brand { display: flex; align-items: center; gap: 10px; margin-right: auto; }
.hd__logo { width: 34px; height: 34px; border-radius: 9px; }
.hd__name { font-size: 18px; font-weight: 800; letter-spacing: -0.3px; }
.hd__name em {
  font-style: normal;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
}

.hd__nav { display: flex; gap: 4px; }
.hd__link {
  position: relative;
  padding: 8px 14px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-2);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}
.hd__link:hover { color: var(--brand); background: rgba(37, 99, 235, 0.06); }
.hd__link.is-active { color: var(--brand); }
.hd__link.is-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 1px;
  transform: translateX(-50%);
  width: 18px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--brand), var(--brand-cyan));
}

.hd__right { display: flex; align-items: center; gap: 12px; }
.hd__search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--muted);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
  transition: border-color 0.2s;
}
.hd__search:hover { border-color: var(--brand); color: var(--brand); }
.hd__search kbd {
  font-family: inherit;
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 5px;
  background: #f1f5f9;
  color: var(--ink-2);
}

.hd__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
}
.hd__burger i {
  display: block;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}
.hd__burger.is-open i:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hd__burger.is-open i:nth-child(2) { opacity: 0; }
.hd__burger.is-open i:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.hd__mobile {
  display: none;
  flex-direction: column;
  padding: 8px 20px 16px;
  background: #fff;
  border-top: 1px solid var(--line);
}
.hd__mobile-item {
  text-align: left;
  padding: 12px 4px;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-2);
  background: none;
  border: none;
  border-bottom: 1px solid var(--line);
}
.hd__mobile-item.is-active { color: var(--brand); }

.drop-enter-active, .drop-leave-active { transition: opacity 0.2s, transform 0.2s; }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 900px) {
  .hd__nav { display: none; }
  .hd__burger { display: flex; }
  .hd__mobile { display: flex; }
}
@media (max-width: 560px) {
  .hd__search span { display: none; }
  .hd__search { padding: 8px; }
  .hd__search kbd { display: none; }
}
</style>
