import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        path: '/dashboard',
        component: () =>
            import ('../views/Back/Dashboard.vue'),
        children: [{
                path: 'productManage',
                component: () =>
                    import ('../views/Back/ProductManage.vue')
            },
            {
                path: 'orderManage',
                component: () =>
                    import ('../views/Back/OrderManage.vue')
            },
            {
                path: 'couponManage',
                component: () =>
                    import ('../views/Back/CouponManage.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;