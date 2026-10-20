<template>
  <nav class="navbar">
    <div class="container nav-content">
      <router-link to="/" class="logo">Alex's Tech Diary</router-link>
      
      <ul class="nav-links">
        <li>
          <router-link to="/" :class="{ active: $route.name === 'Home' }">首页</router-link>
        </li>
        <li>
          <router-link to="/blog" :class="{ active: $route.name === 'BlogList' }">技术博客</router-link>
        </li>
        <li>
          <router-link to="/about" :class="{ active: $route.name === 'About' }">关于作者</router-link>
        </li>
      </ul>

      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-menu" v-show="showMobileMenu">
      <router-link to="/" @click="closeMobileMenu">首页</router-link>
      <router-link to="/blog" @click="closeMobileMenu">技术博客</router-link>
      <router-link to="/about" @click="closeMobileMenu">关于作者</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>

<style scoped>
.navbar {
  background-color: var(--bg-card);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  transition: all 0.3s;
  color: var(--text-secondary);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
  background-color: rgba(14, 165, 233, 0.1);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 20px;
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-color);
}

.mobile-menu a {
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  border-radius: var(--radius);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu.show {
    display: flex;
  }
}
</style>
