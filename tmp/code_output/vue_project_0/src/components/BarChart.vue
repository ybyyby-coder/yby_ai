<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  color: { type: String, default: '#1668dc' },
  unit: { type: String, default: '' }
})

const max = computed(() => Math.max(...props.data.map((d) => d.value), 1))
</script>

<template>
  <div class="bars">
    <div v-for="d in data" :key="d.label" class="col">
      <span class="val">{{ d.value }}{{ unit }}</span>
      <div class="track">
        <div class="bar" :style="{ height: (d.value / max * 100) + '%', background: color }"></div>
      </div>
      <span class="lbl">{{ d.label }}</span>
    </div>
  </div>
</template>

<style scoped>
.bars { display: flex; align-items: flex-end; gap: 8px; height: 220px; padding-top: 10px; }
.col { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; min-width: 0; }
.val { font-size: 11px; color: var(--ink-3); margin-bottom: 6px; opacity: 0; transition: opacity 0.2s; }
.col:hover .val { opacity: 1; color: var(--ink); font-weight: 600; }
.track { flex: 1; width: 100%; max-width: 40px; background: linear-gradient(#f4f6fa, #eef1f6); border-radius: 8px 8px 4px 4px; display: flex; align-items: flex-end; overflow: hidden; }
.bar { width: 100%; border-radius: 8px 8px 4px 4px; transition: height 0.6s cubic-bezier(0.22, 1, 0.36, 1); background-image: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,0)); }
.col:hover .bar { filter: brightness(1.08); }
.lbl { margin-top: 8px; font-size: 11px; color: var(--ink-3); white-space: nowrap; }
@media (max-width: 600px) { .bars { height: 170px; gap: 4px; } .lbl { font-size: 10px; } }
</style>
