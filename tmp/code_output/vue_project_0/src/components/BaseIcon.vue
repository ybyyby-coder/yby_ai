<script setup>
defineProps({ icon: String })
</script>

<template>
  <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <template v-if="icon === 'grid'">
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </template>
    <template v-else-if="icon === 'user'">
      <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </template>
    <template v-else-if="icon === 'chart'">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H3" />
    </template>
    <template v-else-if="icon === 'shield'">
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" /><path d="M9.5 12.5l1.8 1.8 3.4-3.6" />
    </template>
    <template v-else-if="icon === 'gear'">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5l1.2 2.4 2.6-.7 1 2.5 2.5.9-.7 2.6 2 1.8-2 1.8.7 2.6-2.5.9-1 2.5-2.6-.7L12 21.5l-1.2-2.4-2.6.7-1-2.5-2.5-.9.7-2.6-2-1.8 2-1.8-.7-2.6 2.5-.9 1-2.5 2.6.7z" />
    </template>
    <template v-else-if="icon === 'search'">
      <circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" />
    </template>
    <template v-else-if="icon === 'plus'"><path d="M12 5v14M5 12h14" /></template>
    <template v-else-if="icon === 'edit'"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 00-3-3L5 17v3z" /></template>
    <template v-else-if="icon === 'trash'"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></template>
    <template v-else-if="icon === 'menu'"><path d="M4 7h16M4 12h16M4 17h16" /></template>
    <template v-else-if="icon === 'bell'"><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 20a2 2 0 004 0" /></template>
    <template v-else-if="icon === 'down'"><path d="M6 9l6 6 6-6" /></template>
    <template v-else-if="icon === 'left'"><path d="M15 18l-6-6 6-6" /></template>
    <template v-else-if="icon === 'right'"><path d="M9 6l6 6-6 6" /></template>
    <template v-else-if="icon === 'mail'"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></template>
    <template v-else-if="icon === 'phone'"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" /></template>
    <template v-else-if="icon === 'logout'"><path d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4" /><path d="M9 12H3M6 9l-3 3 3 3" /></template>
    <template v-else-if="icon === 'trend'"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></template>
    <template v-else><circle cx="12" cy="12" r="8" /></template>
  </svg>
</template>

<style scoped>
.ico { width: 18px; height: 18px; flex-shrink: 0; }
</style>
