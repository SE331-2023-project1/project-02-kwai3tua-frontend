import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import StudentInfoView from '../views/StudentInfoView.vue'
import StudentDashboardView from '../views/StudentDashboardView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import AdvisorDashboardView from '../views/AdvisorDashboardView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import AdminCreateTeacherVew from '../views/AdminCreateTeacherView.vue'
import AdminOverallView from '../views/AdminOverallView.vue'

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
      path: '/adminlogin',
      name: 'adminlogin',
      component: AdminLoginView
    },
    {
      path: '/adminoverall',
      name: 'adminoverall',
      component: AdminOverallView
    },
    {
      path: '/studentinfo',
      name: 'studentinfo',
      component: StudentInfoView
    },
    {
      path: '/admin',
      name: 'admindashboard',
      component: AdminDashboardView
    },
    {
      path: '/createteacher',
      name: 'createteacher',
      component: AdminCreateTeacherVew
    },
    {
      path: '/student',
      name: 'studentdashboard',
      component: StudentDashboardView
    },
    {
      path: '/studentdetail/:studentId',
      name: 'studentdetail',
      component: StudentDetailView,
      props: true
    },
    {
      path: '/advisor',
      name: 'advisordashboard',
      component: AdvisorDashboardView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    }
  ]
})

export default router
