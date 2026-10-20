<script setup>
defineProps({ block: { type: Object, required: true } })
</script>

<template>
  <p v-if="block.type === 'text'" class="blk blk--text">{{ block.content }}</p>

  <h4 v-else-if="block.type === 'sub'" class="blk blk--sub">{{ block.content }}</h4>

  <ul v-else-if="block.type === 'list'" class="blk blk--list">
    <li v-for="(li, i) in block.items" :key="i">{{ li }}</li>
  </ul>

  <blockquote v-else-if="block.type === 'quote'" class="blk blk--quote">{{ block.content }}</blockquote>

  <pre v-else-if="block.type === 'code'" class="blk code-block"><code>{{ block.content }}</code></pre>

  <div v-else-if="block.type === 'table'" class="blk blk--table">
    <table>
      <thead>
        <tr><th v-for="h in block.head" :key="h">{{ h }}</th></tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in block.rows" :key="i">
          <td v-for="(c, j) in r" :key="j">{{ c }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.blk { margin-bottom: 18px; }
.blk--text { font-size: 15.5px; line-height: 1.95; color: var(--ink-2); }
.blk--sub {
  font-size: 17.5px;
  margin: 28px 0 12px;
  padding-left: 12px;
  border-left: 4px solid var(--brand);
  color: var(--ink);
}
.blk--list { display: flex; flex-direction: column; gap: 9px; }
.blk--list li {
  position: relative;
  padding-left: 22px;
  font-size: 15px;
  line-height: 1.85;
  color: var(--ink-2);
}
.blk--list li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 11px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: linear-gradient(135deg, var(--brand), var(--brand-cyan));
}
.blk--quote {
  margin: 22px 0;
  padding: 16px 20px;
  background: rgba(37, 99, 235, 0.06);
  border-left: 4px solid var(--brand);
  border-radius: 0 10px 10px 0;
  font-size: 15px;
  color: var(--brand-deep);
  line-height: 1.85;
}
.blk--table { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 14px; min-width: 420px; }
th, td { padding: 10px 14px; border: 1px solid var(--line); text-align: left; }
th { background: #f1f5f9; color: var(--ink); font-weight: 700; }
td { color: var(--ink-2); background: #fff; }
</style>
