<script setup>
defineProps({
  columns: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] },
  selectable: { type: Boolean, default: false },
  selected: { type: Array, default: () => [] }
})

const emit = defineEmits(['toggle-all', 'toggle-one', 'row-click'])

function allChecked(rows, sel) {
  return rows.length > 0 && sel.length === rows.length
}
</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th v-if="selectable" class="chk">
            <input
              type="checkbox"
              :checked="allChecked(rows, selected)"
              @change="emit('toggle-all')"
            />
          </th>
          <th v-for="c in columns" :key="c.key" :style="c.width ? { width: c.width } : null">{{ c.label }}</th>
          <th v-if="$slots.actions" class="act">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" @click="emit('row-click', row)">
          <td v-if="selectable" class="chk">
            <input
              type="checkbox"
              :checked="selected.includes(row.id)"
              @click.stop
              @change="emit('toggle-one', row.id)"
            />
          </td>
          <td v-for="c in columns" :key="c.key">
            <slot v-if="c.slot" :name="c.slot" :row="row" :value="row[c.key]" />
            <template v-else>{{ row[c.key] }}</template>
          </td>
          <td v-if="$slots.actions" class="act" @click.stop>
            <slot name="actions" :row="row" />
          </td>
        </tr>
        <tr v-if="!rows.length">
          <td :colspan="columns.length + (selectable ? 1 : 0) + ($slots.actions ? 1 : 0)" class="empty">暂无匹配数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 640px; }
thead th {
  text-align: left;
  padding: 11px 14px;
  background: #f7f9fc;
  color: var(--ink-3);
  font-weight: 500;
  font-size: 12px;
  border-bottom: 1px solid var(--line);
  white-space: nowrap;
}
tbody td { padding: 12px 14px; border-bottom: 1px solid var(--line); color: var(--ink-2); vertical-align: middle; }
tbody tr { cursor: default; transition: background 0.15s; }
tbody tr:hover { background: #f8fbff; }
tbody tr:last-child td { border-bottom: none; }
.chk { width: 42px; text-align: center; }
.chk input { width: 15px; height: 15px; accent-color: var(--brand); cursor: pointer; }
.act { width: 132px; }
.act :deep(.btn + .btn) { margin-left: 6px; }
.empty { text-align: center; padding: 40px 0; color: var(--ink-3); }
@media (max-width: 768px) { tbody td, thead th { padding: 10px; } }
</style>
