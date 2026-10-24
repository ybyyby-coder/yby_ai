<template>
  <a-layout-footer class="footer">
    <div class="footer-content">
      <p class="copyright">
        <span class="author-link">页匠 PageSmith</span>
      </p>
    </div>
  </a-layout-footer>
</template>

<script setup lang="ts">
// 无需额外的响应式数据
</script>

<style scoped>
.footer {
  background: #edf3ef;
  border-top: 1px solid var(--color-border-soft);
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.copyright {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: 14px;
}
</style>
