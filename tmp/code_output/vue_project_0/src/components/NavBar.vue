<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
        <img :src="logo" alt="CodeArch" class="brand-logo" />
        <span class="brand-text">
          <strong>CodeArch</strong>
          <em>架构 · 代码 · 创作</em>
        </span>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
        <router-link to="/author" class="btn btn-primary nav-cta" @click="menuOpen = false">我要投稿</router-link>
      </nav>

      <button class="nav-toggle" :class="{ open: menuOpen }" aria-label="菜单" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { NAV_LINKS, LOGO_IMG } from '@/utils/blogData'

const links = NAV_LINKS
const logo = LOGO_IMG
const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 60;
  background: rgba(6, 21, 39, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.25s ease, background 0.25s ease;
}

.nav--scrolled {
  background: rgba(6, 21, 39, 0.98);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f7f9fb;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-text strong {
  font-size: 19px;
  color: #fff;
  letter-spacing: 0.3px;
}

.brand-text em {
  font-style: normal;
  font-size: 11.5px;
  letter-spacing: 3px;
  color: var(--teal);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  position: relative;
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(226, 238, 248, 0.78);
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-link.router-link-exact-active {
  color: var(--teal);
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 4px;
  height: 2px;
  border-radius: 2px;
  background: var(--teal);
}

.nav-cta {
  margin-left: 14px;
  padding: 10px 22px;
  font-size: 14px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 14px 18px 22px;
    background: rgba(6, 21, 39, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    pointer-events: none;
    transition: transform 0.22s ease, opacity 0.22s ease;
  }

  .nav-links.open {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    padding: 12px 14px;
  }

  .nav-link.router-link-exact-active::after {
    display: none;
  }

  .nav-cta {
    margin: 12px 0 0;
  }
}
</style>
