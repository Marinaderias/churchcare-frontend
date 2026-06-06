import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

import Home from '../pages/Home.vue'
import Members from '../pages/Members.vue'
import Profile from '../pages/Profile.vue'
import Notifications from '../pages/Notifications.vue'
import MemberProfile from '../pages/MemberProfile.vue'

import MainLayout from '../layouts/MainLayout.vue'

const routes = [

  {
    path: '/',
    component: Login
  },

  {
    path: '/register',
    component: Register
  },

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
        path:'profile',
        component:Profile
      },

      {
        path:'notifications',
        component:Notifications
      },

      {
        path:'member/:id',
        component:MemberProfile
      },

    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router