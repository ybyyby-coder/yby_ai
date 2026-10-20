<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  desc: { type: String, default: '' }
})
</script>

<template>
  <section class="ph">
    <div class="container ph__inner">
      <span v-if="eyebrow" class="ph__eyebrow">{{ eyebrow }}</span>
      <h1 class="ph__title">{{ title }}</h1>
      <p v-if="desc" class="ph__desc">{{ desc }}</p>
      <slot name="extra" />
    </div>
  </section>
</template>

<style scoped>
.ph {
  padding: 52px 0 40px;
  background: linear-gradient(180deg, #fff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--line);
}
.ph__inner { position: relative; }
.ph__eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: var(--brand);
  text-transform: uppercase;
}
.ph__title {
  margin: 10px 0 12px;
  font-size: 34px;
  line-height: 1.28;
  letter-spacing: -0.8px;
}
.ph__desc {
  max-width: 720px;
  font-size: 15.5px;
  line-height: 1.9;
  color: var(--muted);
}
@media (max-width: 640px) {
  .ph { padding: 36px 0 28px; }
  .ph__title { font-size: 25px; }
}
</style>
