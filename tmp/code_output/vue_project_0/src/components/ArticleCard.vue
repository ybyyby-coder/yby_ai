<script setup>
const props = defineProps({
  article: { type: Object, required: true },
  index: { type: Number, default: 0 }
})

const levelClass = {
  初级: 'level--low',
  中级: 'level--mid',
  进阶: 'level--high',
  高级: 'level--high'
}
</script>

<template>
  <RouterLink :to="`/article/${article.id}`" class="post fade-up" :style="{ animationDelay: index * 45 + 'ms' }">
    <div class="post__cover">
      <img :src="article.cover" :alt="article.title" loading="lazy" />
      <span class="post__level" :class="levelClass[article.level]">{{ article.level }}</span>
    </div>

    <div class="post__body">
      <div class="post__meta">
        <span class="post__cat">{{ props.article.tags[0] }}</span>
        <span>{{ article.date }}</span>
        <span>{{ article.readTime }} 分钟</span>
      </div>

      <h3 class="post__title">{{ article.title }}</h3>
      <p class="post__summary">{{ article.summary }}</p>

      <div class="post__tags">
        <span v-for="t in article.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="post__foot">
        <span class="post__author">
          <i class="post__avatar">{{ article.author.slice(0, 1) }}</i>
          {{ article.author }}
        </span>
        <span class="post__stats">
          <em>♥ {{ article.likes }}</em>
          <em>◎ {{ (article.views / 1000).toFixed(1) }}k</em>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s;
}
.post:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 20px 40px rgba(17, 24, 39, 0.12);
}

.post__cover { position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: #eef2f7; }
.post__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.post:hover .post__cover img { transform: scale(1.05); }
.post__level {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 100px;
  color: #fff;
  background: rgba(17, 24, 39, 0.7);
}
.level--low { background: #16a34a; }
.level--mid { background: var(--brand); }
.level--high { background: #7c3aed; }

.post__body { display: flex; flex-direction: column; gap: 10px; padding: 18px 18px 16px; flex: 1; }
.post__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--muted);
}
.post__cat {
  color: var(--brand-deep);
  font-weight: 700;
  background: rgba(6, 182, 212, 0.12);
  padding: 2px 8px;
  border-radius: 5px;
}
.post__title { font-size: 17px; line-height: 1.5; letter-spacing: -0.2px; }
.post:hover .post__title { color: var(--brand); }
.post__summary {
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.8;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
.post__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  margin-top: 4px;
  border-top: 1px dashed var(--line);
  font-size: 12.5px;
  color: var(--ink-2);
}
.post__author { display: flex; align-items: center; gap: 7px; font-weight: 600; }
.post__avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-style: normal;
  font-size: 12px;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), var(--brand-cyan));
}
.post__stats { display: flex; gap: 12px; color: var(--muted); }
.post__stats em { font-style: normal; }
</style>
