<template>
  <article class="card" :class="`card--${size}`">
    <router-link :to="`/post/${post.id}`" class="card-cover">
      <img :src="post.cover" :alt="post.title" loading="lazy" />
      <span class="badge">{{ post.category }}</span>
      <span v-if="post.feature" class="badge badge--feature">精选</span>
    </router-link>

    <div class="card-body">
      <div class="card-meta">
        <span>{{ post.author }}</span>
        <i></i>
        <span>{{ post.date }}</span>
        <i></i>
        <span>{{ post.minutes }} 分钟</span>
      </div>

      <h3 class="card-title">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </h3>

      <p class="card-sum">{{ post.summary }}</p>

      <div class="card-tags">
        <span v-for="t in post.tags" :key="t" class="tag"># {{ t }}</span>
      </div>

      <div class="card-foot">
        <span class="stat">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {{ formatNum(post.views) }}
        </span>
        <span class="stat">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.8 6.6a5 5 0 00-7.1 0L12 8.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 22l8.8-8.3a5 5 0 000-7.1z" />
          </svg>
          {{ formatNum(post.likes) }}
        </span>
        <span class="read">阅读全文 →</span>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: { type: Object, required: true },
  size: { type: String, default: 'normal' }
})

const formatNum = (n) => (n >= 10000 ? `${(n / 10000).toFixed(1)}万` : n.toLocaleString('en-US'))
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(13, 148, 136, 0.35);
}

.card-cover {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #e7edf4;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-cover img {
  transform: scale(1.06);
}

.badge {
  position: absolute;
  left: 14px;
  top: 14px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: rgba(6, 21, 39, 0.72);
  backdrop-filter: blur(4px);
}

.badge--feature {
  left: auto;
  right: 14px;
  background: linear-gradient(135deg, var(--violet), #4c2ba8);
}

.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding: 20px 22px 22px;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12.5px;
  color: var(--muted);
}

.card-meta i {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c3cfdd;
}

.card-title {
  font-size: 18.5px;
  line-height: 1.45;
  font-weight: 700;
}

.card-title a {
  color: var(--ink);
  transition: color 0.2s ease;
}

.card-title a:hover {
  color: var(--teal-dark);
}

.card-sum {
  font-size: 14px;
  color: #5b6f85;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-foot {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed var(--line);
  font-size: 13px;
  color: var(--muted);
}

.stat {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.read {
  margin-left: auto;
  font-weight: 600;
  color: var(--teal-dark);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.card:hover .read {
  opacity: 1;
  transform: translateX(0);
}

.card--large .card-title {
  font-size: 24px;
}

.card--large .card-sum {
  -webkit-line-clamp: 3;
  font-size: 15px;
}

.card--wide {
  flex-direction: row;
}

.card--wide .card-cover {
  width: 38%;
  aspect-ratio: auto;
  flex-shrink: 0;
}

.card--wide .card-body {
  padding: 24px 26px;
}

@media (max-width: 768px) {
  .card--wide {
    flex-direction: column;
  }
  .card--wide .card-cover {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
  .card--large .card-title {
    font-size: 20px;
  }
}
</style>
