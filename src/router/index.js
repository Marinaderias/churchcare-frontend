import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

import Home from '../pages/Home.vue'
import Members from '../pages/Members.vue'
import Profile from '../pages/Profile.vue'
import Notifications from '../pages/Notifications.vue'
import MemberProfile from '../pages/MemberProfile.vue'
import EditMember from '../pages/EditMember.vue'
import ScanQrPage from '../pages/ScanQrPage.vue'

import MainLayout from '../layouts/MainLayout.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import Dashboard from '../pages/admin/Dashboard.vue'
import Servants from '../pages/admin/Servants.vue'

const routes = [

  // ==========================
  // Authentication
  // ==========================

  {
    path: '/',
    component: Login
  },

  {
    path: '/register',
    component: Register
  },

  // ==========================
  // Servant Layout
  // ==========================

  {
    path: '/',
    component: MainLayout,

    children: [

      {
        path: 'home',
        component: Home
      },

      {
        path: 'members',
        component: Members
      },

      {
        path: 'profile',
        component: Profile
      },

      {
        path: 'notifications',
        component: Notifications
      },

      {
        path: 'member/:id',
        component: MemberProfile
      },

      {
        path: 'member/:id/edit',
        component: EditMember
      },

      {
        path: 'scan',
        component: ScanQrPage
      },

      {
        path: 'preparations',
        component: () => import('../pages/Preparations.vue')
      }

    ]

  },

  // ==========================
  // Admin Layout
  // ==========================

  {
    path: '/admin',
    component: AdminLayout,

    children: [

      {
        path: '',
        component: Dashboard
      },

         {
            path:'servants',
            component:Servants
        },

    ]

  }

]

const router = createRouter({

  history: createWebHistory(),

  routes

})

export default router