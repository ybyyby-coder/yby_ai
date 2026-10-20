<script setup>
import BaseIcon from './BaseIcon.vue'

defineProps({
  label: String,
  value: [String, Number],
  unit: String,
  delta: Number,
  icon: String,
  color: { type: String, default: '#1668dc' },
  hint: String
})
</script>

<template>
  <div class="stat">
    <div class="ico" :style="{ background: color + '1a', color }"><BaseIcon :icon="icon" /></div>
    <div class="body">
      <p class="label">{{ label }}</p>
      <p class="value">{{ value }}<em v-if="unit">{{ unit }}</em></p>
      <div class="row">
        <span class="delta" :class="delta >= 0 ? 'up' : 'down'">
          <BaseIcon icon="trend" />{{ Math.abs(delta) }}%
        </span>
        <span class="hint muted">{{ hint }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 18px; display: flex; gap: 14px; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; }
.stat:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
.ico { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.ico :deep(svg) { width: 22px; height: 22px; }
.body { min-width: 0; flex: 1; }
.label { font-size: 13px; color: var(--ink-3); }
.value { font-size: 26px; font-weight: 600; line-height: 1.25; letter-spacing: -0.5px; margin: 2px 0 4px; }
.value em { font-style: normal; font-size: 13px; color: var(--ink-3); margin-left: 3px; font-weight: 500; }
.row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.delta { display: inline-flex; align-items: center; gap: 3px; font-size: 12px; font-weight: 600; }
.delta :deep(svg) { width: 13px; height: 13px; }
.delta.up { color: var(--ok); }
.delta.down { color: var(--err); transform: rotate(90deg); }
.delta.down :deep(svg) { display: none; }
.hint { font-size: 11px; }
</style>
