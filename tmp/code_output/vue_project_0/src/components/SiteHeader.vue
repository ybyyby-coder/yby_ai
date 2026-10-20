<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { LOGO_IMG } from '@/utils/blogData'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { name: '首页', path: '/' },
  { name: '编程教程', path: '/tutorials' },
  { name: '系统架构', path: '/architecture' },
  { name: '作者指南', path: '/guide' },
  { name: '关于', path: '/about' }
]

const activePath = computed(() => route.path)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const go = (path) => {
  menuOpen.value = false
  if (route.path !== path) location.hash = `#${path}`
}
</script>

<template>
  <header class="header" :class="{ 'is-solid': scrolled || menuOpen }">
    <div class="container header-inner">
      <a class="brand" href="#/" @click="menuOpen = false">
        <img :src="LOGO_IMG" alt="CodeArch Logo" class="brand-logo" />
        <span class="brand-text">
          <strong>CodeArch</strong>
          <small>编程教程 · 系统架构</small>
        </span>
      </a>

      <nav class="nav" :class="{ open: menuOpen }">
        <a
          v-for="link in links"
          :key="link.path"
          :href="'#' + link.path"
          class="nav-link"
          :class="{ active: activePath === link.path || (link.path !== '/' && activePath.startsWith(link.path)) }"
          @click="go(link.path)"
        >
          {{ link.name }}
        </a>
        <a class="btn btn-primary nav-cta" href="#/tutorials">开始阅读</a>
      </nav>

      <button class="toggle" :class="{ open: menuOpen }" aria-label="切换导航" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 60;
  background: linear-gradient(180deg, rgba(6, 21, 39, 0.96), rgba(6, 21, 39, 0.9));
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

.header.is-solid {
  box-shadow: 0 10px 30px rgba(4, 14, 28, 0.35);
}

.header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-logo {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(34, 211, 197, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-text strong {
  color: #fff;
  font-size: 19px;
  letter-spacing: 0.4px;
}

.brand-text small {
  color: rgba(200, 222, 240, 0.62);
  font-size: 11.5px;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  position: relative;
  color: rgba(226, 238, 248, 0.82);
  font-size: 15px;
  font-weight: 500;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--teal);
  transition: width 0.26s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #fff;
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 10px 20px;
  font-size: 14px;
}

.toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
}

.toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  background: #dceaf6;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.toggle.open span:nth-child(2) {
  opacity: 0;
}
.toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .toggle {
    display: block;
  }
  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 72px;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 14px 18px 22px;
    background: rgba(6, 21, 39, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(2, 10, 20, 0.4);
    display: none;
  }
  .nav.open {
    display: flex;
  }
  .nav-link {
    padding: 12px 6px;
    border-radius: 8px;
  }
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  .nav-link::after {
    display: none;
  }
  .nav-cta {
    margin-top: 10px;
    justify-content: center;
  }
}
</style>
