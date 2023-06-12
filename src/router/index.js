import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from "@/views/WorksView.vue";
import ContactsView from "@/views/ContactsView.vue";
import CurriculumView from "@/views/CurriculumView.vue";
import ThanksView from "@/views/ThanksView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: ThanksView
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: CurriculumView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
