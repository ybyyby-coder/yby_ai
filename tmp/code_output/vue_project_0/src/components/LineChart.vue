<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  color: { type: String, default: '#7c5cff' }
})

const W = 620
const H = 220
const PAD = { l: 34, r: 12, t: 14, b: 26 }

const points = computed(() => {
  const vals = props.data.map((d) => d.value)
  const max = Math.max(...vals) * 1.1 || 1
  const min = Math.min(...vals) * 0.85
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const step = vals.length > 1 ? innerW / (vals.length - 1) : 0
  return props.data.map((d, i) => ({
    x: PAD.l + i * step,
    y: PAD.t + innerH - ((d.value - min) / (max - min)) * innerH,
    label: d.label,
    value: d.value
  }))
})

const line = computed(() => points.value.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '))
const area = computed(() => `${line.value} L${points.value[points.value.length - 1]?.x},${H - PAD.b} L${points.value[0]?.x},${H - PAD.b} Z`)
const grid = computed(() => [0, 1, 2, 3].map((i) => PAD.t + ((H - PAD.t - PAD.b) / 3) * i))
</script>

<template>
  <svg class="line" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none">
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" :stop-color="color" stop-opacity="0.28" />
        <stop offset="100%" :stop-color="color" stop-opacity="0.02" />
      </linearGradient>
    </defs>
    <line v-for="g in grid" :key="g" :x1="PAD.l" :y1="g" :x2="W - PAD.r" :y2="g" stroke="#eef1f6" stroke-width="1" />
    <path :d="area" fill="url(#lg)" />
    <path :d="line" fill="none" :stroke="color" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    <g v-for="p in points" :key="p.label">
      <circle :cx="p.x" :cy="p.y" r="3.4" fill="#fff" :stroke="color" stroke-width="2" />
      <text :x="p.x" :y="H - 8" text-anchor="middle" class="axis">{{ p.label }}</text>
      <text :x="p.x" :y="p.y - 9" text-anchor="middle" class="val">{{ p.value }}</text>
    </g>
  </svg>
</template>

<style scoped>
.line { width: 100%; height: 230px; display: block; }
.axis { font-size: 11px; fill: var(--ink-3); }
.val { font-size: 10px; fill: var(--ink-2); opacity: 0; }
.line:hover .val { opacity: 1; }
</style>
