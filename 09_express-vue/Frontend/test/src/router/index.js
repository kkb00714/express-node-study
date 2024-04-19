import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import PopularArtworks from '../views/PopularArtworks.vue'
import FreeArtworks from '../views/FreeArtworks.vue'
import PopularArtists from '../views/PopularArtists.vue'
import CreatorRegister from '../views/CreatorRegister.vue'
import CreatorView from '../views/CreatorView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mainview',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/registerview',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/loginview',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/popularartworks',
    name: 'PopularArtworks',
    component: PopularArtworks
  },
  {
    path: '/freeArtworks',
    name: 'FreeArtworks',
    component: FreeArtworks
  },
  {
    path: '/popularartists',
    name: 'PopularArtists',
    component: PopularArtists
  },
  {
    path: '/creator_register',
    name: 'CreatorRegister',
    component: CreatorRegister
  },
  {
    path: '/creator_view',
    name: 'CreatorView',
    component: CreatorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
