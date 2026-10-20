<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">📝</span>
        <span class="logo-text">我的博客</span>
      </router-link>
      
      <nav class="nav-menu">
        <router-link to="/" class="nav-link" active-class="active">
          首页
        </router-link>
        <router-link to="/articles" class="nav-link" active-class="active">
          文章
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          关于
        </router-link>
      </nav>

      <button class="mobile-menu-btn" @click="toggleMenu">
        <span class="hamburger"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <router-link to="/" class="mobile-nav-link" active-class="active" @click="toggleMenu">
          首页
        </router-link>
        <router-link to="/articles" class="mobile-nav-link" active-class="active" @click="toggleMenu">
          文章
        </router-link>
        <router-link to="/about" class="mobile-nav-link" active-class="active" @click="toggleMenu">
          关于
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
}

.logo-icon {
  font-size: 1.8rem;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-weight: 500;
  color: #666;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
  position: relative;
}

.nav-link:hover {
  color: #1890ff;
}

.nav-link.active {
  color: #1890ff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: #1890ff;
  border-radius: 2px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #333;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #333;
  transition: all 0.3s;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  top: 8px;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-nav-link {
  padding: 12px 20px;
  font-weight: 500;
  color: #666;
  border-radius: 6px;
  transition: all 0.3s;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: #f0f7ff;
  color: #1890ff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>