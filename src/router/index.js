import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/Login.vue'; // Your login form
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/home', // This is the route for your home form
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // This meta field indicates that this route requires authentication
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard: This prevents unauthorized access to the /home route
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check our simple auth flag

  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires auth and user is not authenticated, redirect to login
    next('/login');
  } else if (to.path === '/' && isAuthenticated) {
    // If user is authenticated and tries to go to '/', redirect to home
    next('/home');
  }
  else {
    // Otherwise, allow navigation
    next();
  }
});

export default router;