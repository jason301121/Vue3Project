import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        component: () =>
            import ('../views/Layout'),
        children: [{
                path: '/product',
                component: () =>
                    import ('../views/Front/Product.vue'),
            },
            {
                path: '/productdetail/:id',
                component: () =>
                    import ('../views/Front/ProductDetail.vue'),
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
                    import ('../views/Front/CheckoutPay.vue')
            },
            {
                path: '/favorite',
                component: () =>
                    import ('../views/Front/Favorite.vue')
            },
            {
                path: '/checkorder',
                component: () =>
                    import ('../views/Front/CheckOrder.vue')
            },
            {
                path: '/',
                component: () =>
                    import ('../views/Front/Home.vue')
            }
        ]
    },

    //後台
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
    linkActiveClass: 'nav-link_active',
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
});

export default router;