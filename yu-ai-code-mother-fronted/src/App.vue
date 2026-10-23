<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

const antdTheme = {
  token: {
    colorPrimary: '#0f766e',
    colorInfo: '#0f766e',
    colorLink: '#0f766e',
    colorLinkHover: '#115e59',
    colorText: '#17231f',
    colorTextSecondary: '#5f716a',
    colorBorder: '#d8e5df',
    colorBgLayout: '#f4f8f5',
    colorBgContainer: '#ffffff',
    borderRadius: 8,
  },
  components: {
    Menu: {
      itemSelectedColor: '#0f766e',
      horizontalItemSelectedColor: '#0f766e',
      itemHoverColor: '#115e59',
      horizontalItemHoverColor: '#115e59',
    },
  },
}
</script>

<template>
  <a-config-provider :theme="antdTheme">
    <BasicLayout />
  </a-config-provider>
</template>

<style>
/* 全局样式优化 */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background: #f4f8f5;
}

html {
  overflow-x: hidden;
  background: #f4f8f5;
}

::selection {
  color: #123b35;
  background: #b9eee0;
}

:focus-visible {
  outline: 2px solid #0f766e;
  outline-offset: 2px;
}
</style>
