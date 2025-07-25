import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/Login.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (to.meta.requiresAuth && !isAuthenticated) {
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;