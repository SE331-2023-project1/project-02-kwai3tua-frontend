import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdLoginView from '../views/AdLoginView.vue'
import StudentInfoView from '../views/StudentInfoView.vue'
import StudentDashboardView from '../views/StudentDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/Adlogin',
      name: 'adminlogin',
      component: AdLoginView
    },
    {
      path: '/StudentInfo',
      name: 'studentinfo',
      component: StudentInfoView
    },
    {
      path: '/student',
      name: 'studentdashboard',
      component: StudentDashboardView
    }
  ]
})

export default router
