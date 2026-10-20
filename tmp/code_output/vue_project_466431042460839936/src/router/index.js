import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Articles from '@/pages/Articles.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router