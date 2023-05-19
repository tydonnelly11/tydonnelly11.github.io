import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: App },
    { path: '/:catchAll(.*)',
    component: App}
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router