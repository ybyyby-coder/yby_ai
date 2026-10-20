import { createRouter, createWebHashHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes = [
  {
    path: '/',
    component: AdminLayout,
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', name: 'dashboard', component: () => import('@/pages/Dashboard.vue'), meta: { title: '仪表盘' } },
      { path: 'users', name: 'users', component: () => import('@/pages/Users.vue'), meta: { title: '用户管理' } },
      { path: 'users/:id', name: 'user-detail', component: () => import('@/pages/UserDetail.vue'), meta: { title: '用户详情' } },
      { path: 'analytics', name: 'analytics', component: () => import('@/pages/Analytics.vue'), meta: { title: '数据分析' } },
      { path: 'roles', name: 'roles', component: () => import('@/pages/Roles.vue'), meta: { title: '角色权限' } },
      { path: 'settings', name: 'settings', component: () => import('@/pages/Settings.vue'), meta: { title: '系统设置' } }
    ]
  },
  { path: '/:any(.*)', redirect: '/dashboard' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.afterEach((to) => {
  document.title = (to.meta.title ? to.meta.title + ' · ' : '') + '云枢 · 用户管理与数据展示平台'
})

export default router
