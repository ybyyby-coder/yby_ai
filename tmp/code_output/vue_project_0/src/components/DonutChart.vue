<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  colors: {
    type: Array,
    default: () => ['#1668dc', '#0fbfc4', '#7c5cff', '#f59e0b', '#16a34a', '#e5484d', '#8894a6']
  },
  centerLabel: String,
  centerValue: String
})

const total = computed(() => props.data.reduce((s, d) => s + d.value, 0) || 1)
const R = 54
const C = 2 * Math.PI * R

const arcs = computed(() => {
  let acc = 0
  return props.data.map((d, i) => {
    const ratio = d.value / total.value
    const seg = { label: d.label, value: d.value, ratio, dash: `${(ratio * C).toFixed(2)} ${(C - ratio * C).toFixed(2)}`, offset: -acc * C, color: props.colors[i % props.colors.length] }
    acc += ratio
    return seg
  })
})
</script>

<template>
  <div class="donut-wrap">
    <div class="chart">
      <svg viewBox="0 0 140 140">
        <circle cx="70" cy="70" :r="R" fill="none" stroke="#f0f3f8" stroke-width="18" />
        <circle
          v-for="a in arcs"
          :key="a.label"
          cx="70"
          cy="70"
          :r="R"
          fill="none"
          :stroke="a.color"
          stroke-width="18"
          :stroke-dasharray="a.dash"
          :stroke-dashoffset="a.offset"
          transform="rotate(-90 70 70)"
        />
      </svg>
      <div class="center">
        <strong>{{ centerValue || total }}</strong>
        <span>{{ centerLabel || '总计' }}</span>
      </div>
    </div>
    <ul class="legend">
      <li v-for="a in arcs" :key="a.label">
        <i :style="{ background: a.color }"></i>
        <span class="lb">{{ a.label }}</span>
        <span class="vl">{{ a.value }}</span>
        <span class="pc muted">{{ (a.ratio * 100).toFixed(1) }}%</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.donut-wrap { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
.chart { position: relative; width: 160px; height: 160px; flex-shrink: 0; }
.chart svg { width: 100%; height: 100%; }
.center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.center strong { font-size: 24px; font-weight: 600; }
.center span { font-size: 11px; color: var(--ink-3); }
.legend { flex: 1; min-width: 170px; display: flex; flex-direction: column; gap: 9px; }
.legend li { display: grid; grid-template-columns: 10px 1fr auto auto; align-items: center; gap: 8px; font-size: 12px; }
.legend i { width: 10px; height: 10px; border-radius: 3px; }
.lb { color: var(--ink-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl { font-weight: 600; }
.pc { width: 46px; text-align: right; }
</style>
