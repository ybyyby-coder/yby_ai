<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  desc: { type: String, default: '' }
})
</script>

<template>
  <div class="section-head">
    <span v-if="eyebrow" class="section-head__eyebrow">{{ eyebrow }}</span>
    <h2 class="section-head__title">{{ title }}</h2>
    <p v-if="desc" class="section-head__desc">{{ desc }}</p>
  </div>
</template>
