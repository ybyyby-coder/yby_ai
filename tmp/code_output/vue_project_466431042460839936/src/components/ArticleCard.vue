<template>
  <div class="article-card">
    <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
      <div class="card-image">
        <img :src="article.image" :alt="article.title" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ article.title }}</h3>
        <p class="card-excerpt">{{ article.excerpt }}</p>
        <div class="card-meta">
          <div class="tags">
            <span v-for="tag in article.tags" :key="tag" class="card-tag">{{ tag }}</span>
          </div>
          <span class="author-date">
            {{ article.author }} · {{ article.date }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.article-card {
  background-color: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  line-height: 1.4;
}

.card-excerpt {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 20px;
  flex: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 15px;
  margin-top: auto;
}

.tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 0.75rem;
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  padding: 2px 8px;
  border-radius: 4px;
}

.author-date {
  font-size: 0.85rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .card-image img {
    height: 160px;
  }
  
  .card-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
