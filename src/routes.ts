import abc from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: abc, meta: { title: 'Home' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
