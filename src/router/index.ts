import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import StudentDashboardView from '../views/StudentDashboardView.vue'
import AdvisorDashboardView from '../views/AdvisorDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/student',
      name: 'studentdashboard',
      component: StudentDashboardView
    },
    {
      path: '/advisor',
      name: 'advisordashboard',
      component: AdvisorDashboardView
    }
  ]
})

export default router
