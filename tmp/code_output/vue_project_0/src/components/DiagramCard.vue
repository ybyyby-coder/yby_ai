<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '架构流程图' },
  title: { type: String, default: '' },
  caption: { type: String, default: '' }
})
</script>

<template>
  <figure class="diagram">
    <figcaption v-if="title" class="diagram__title">
      <span class="diagram__dot"></span>{{ title }}
    </figcaption>
    <img class="diagram__img" :src="src" :alt="alt" loading="lazy" />
    <figcaption v-if="caption" class="diagram__caption">
      <b>图示说明</b><span>{{ caption }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.diagram__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 14px;
}
.diagram__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand), var(--brand-cyan));
}
</style>
