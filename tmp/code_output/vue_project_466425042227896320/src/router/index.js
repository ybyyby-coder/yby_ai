import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ArticleList from '@/pages/ArticleList.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'
import AboutMe from '@/pages/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticleList
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router