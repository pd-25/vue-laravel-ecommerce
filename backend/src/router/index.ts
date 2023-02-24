import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ResetPassword from "../views/Password/ResetPassword.vue";
import SetPassword from "../views/Password/SetPassword.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },

        {
            path: "/reset-password",
            name: "resetPassword",
            component: ResetPassword,
        },

        {
            path: "/set-password",
            name: "setPassword",
            component: SetPassword,
        },
        // {
        //   path: '/',
        //   name: 'home',
        //   component: HomeView
        // },
        // {
        //   path: '/about',
        //   name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('../views/AboutView.vue')
        // }
    ],
});

export default router;
