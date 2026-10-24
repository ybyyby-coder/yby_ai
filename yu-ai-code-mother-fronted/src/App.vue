<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

const antdTheme = {
  token: {
    colorPrimary: '#087f72',
    colorSuccess: '#2f805c',
    colorWarning: '#8a5a0a',
    colorError: '#b8433d',
    colorInfo: '#087f72',
    colorLink: '#087f72',
    colorLinkHover: '#06665c',
    colorLinkActive: '#064f48',
    colorText: '#18312d',
    colorTextSecondary: '#536963',
    colorTextTertiary: '#687d76',
    colorTextQuaternary: '#82948e',
    colorTextPlaceholder: '#61756e',
    colorBorder: '#d6e3dd',
    colorBorderSecondary: '#e6eee9',
    colorBgLayout: '#f6f8f5',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorFillAlter: '#f0f5f2',
    colorFillSecondary: '#edf4f0',
    controlOutline: 'rgba(8, 127, 114, 0.18)',
    borderRadius: 10,
    borderRadiusLG: 14,
  },
  components: {
    Button: {
      defaultColor: '#244640',
      defaultBorderColor: '#d6e3dd',
      defaultHoverColor: '#087f72',
      defaultHoverBorderColor: '#8fbdb1',
      defaultActiveColor: '#064f48',
      defaultActiveBorderColor: '#6ca99a',
      primaryShadow: '0 2px 6px rgba(8, 127, 114, 0.18)',
    },
    Input: {
      activeBorderColor: '#087f72',
      hoverBorderColor: '#79ad9f',
      activeShadow: '0 0 0 3px rgba(8, 127, 114, 0.12)',
    },
    Menu: {
      itemSelectedColor: '#087f72',
      horizontalItemSelectedColor: '#087f72',
      itemHoverColor: '#06665c',
      horizontalItemHoverColor: '#06665c',
      itemSelectedBg: '#e8f4ef',
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
:root {
  color-scheme: light;
  --color-canvas: #f6f8f5;
  --color-surface: #ffffff;
  --color-surface-muted: #edf4f0;
  --color-surface-accent: #e3f2ec;
  --color-ink: #18312d;
  --color-ink-muted: #536963;
  --color-primary: #087f72;
  --color-primary-hover: #06665c;
  --color-primary-deep: #064f48;
  --color-border: #d6e3dd;
  --color-border-soft: #e6eee9;
  --shadow-card: 0 8px 24px rgba(28, 73, 62, 0.08);
  --shadow-card-hover: 0 14px 32px rgba(28, 73, 62, 0.13);
}

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
  color: var(--color-ink);
  background: var(--color-canvas);
}

html {
  overflow-x: hidden;
  background: var(--color-canvas);
}

::selection {
  color: var(--color-primary-deep);
  background: #c8e9dd;
}

:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
