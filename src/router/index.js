import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import error from '../views/error.vue'

import info from '../views/apply/info.vue'
import applyPage from '../views/apply/applyPage.vue'
import applyForm from '../views/apply/applyForm.vue'
import registerPage from '../views/register/registerPage.vue'
import registerForm from '../views/register/registerForm.vue'

import member from '../views/member/member.vue'
import signIn from '../views/member/signIn.vue'
import signUp from '../views/member/signUp.vue'
import partnership from '../views/member/partnership.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'error',
    component: error
  },
  {
    path: '/',
    name: 'home',
    component: home
  },
  { 
    path: '/apply',
    component: applyPage,
    children: [
        { path: 'info', component: info },
        { path: 'applyForm', component: applyForm },
    ]
  },
  { 
    path: '/register',
    component: registerPage,
    children: [
        { path: 'registerForm', component: registerForm },
    ]
  },
  { 
    path: '/member',
    component: member,
    children: [
        { path: 'signIn', component: signIn },
        { path: 'signUp', component: signUp },
        { path: 'partnership', component: partnership},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
