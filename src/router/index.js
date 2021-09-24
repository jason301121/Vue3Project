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
        path: '/product',
        component: () =>
            import ('../views/Front/Product.vue'),
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        path: '/cart',
        component: () =>
            import ('../views/Front/Cart.vue'),
    },
    {
        path: '/checkoutform',
        component: () =>
            import ('../views/Front/CheckoutForm.vue'),
    },
    {
        name: 'checkoutpay',
        path: '/checkoutpay/:orderId',
        component: () =>
            import ('../views/Front/CheckoutPay')
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