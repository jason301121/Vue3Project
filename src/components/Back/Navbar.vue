<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div class="container-fluid">
            <a class="navbar-brand logo_font fs-1 fw-bold" href="#">Buy Fresh</a>
            <button 
            class="navbar-toggler " 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/productManage">商品管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/couponManage">優惠券管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/orderManage">訂單管理</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="logout">登出</a>
                    </li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';

export default {
    methods: {
        logout(){
            const api=`${process.env.VUE_APP_API}logout`
            this.$http.post(api)
            .then((res)=>{
                if(res.data.success){
                    this.$router.push('/login');
                    this.$swal({
                    title:`後臺登出成功`,
                    icon: 'success',
                })
                }
            })
        },
    },
    watch: {
        $route () {
            let nav = document.getElementById('navbarNav');
            nav.classList.remove('show');
        }
    },
}
</script>