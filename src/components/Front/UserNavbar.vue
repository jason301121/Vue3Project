<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div class="container-fluid">
            <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/" class="navbar-brand logo_font fs-1 fw-bold">BuyFresh</router-link>
            <!-- 購物車md尺寸 -->
            <div class="d-flex d-lg-none d-md-block pt-1 dropdown">
                <a href="#" class="navbar-brand" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                    <i class="bi bi-cart-fill" style="font-size: 2rem;"></i>
                </a>
                    <!-- 購物車Dropdown -->
                <div class="p-1 me-2 dropdown-menu dropdown-menu-end navbar_cart" aria-labelledby="dropdownMenuButton1" >
                    <template v-if="cartLength !== 0">
                        <div v-for="item in cart.carts" :key="item.product.id" class="d-flex align-items-center my-2">
                            <div class="col-4 d-flex align-items-center ">
                                <a href="#" class="shake" @click.prevent="delCart(item.id)"><i class="bi bi-trash-fill" style="font-size: 1.5rem; color:red;"></i></a>
                                <div class="text-start ms-2">{{ item.product.title }}</div>
                            </div>
                            <div class="col-8 ps-2 d-flex align-items-center justify-content-start">
                                <div class="input-number-group-sm input-group-sm d-flex align-items-center">
                                    <button type="button" class="main_btn edit_dash_btn" @click.prevent="editCart(item, item.qty-1)"
                                    :disabled="item.qty == 1" >
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <input type="number" class="text-center form-control border-0" style="width:20%;" disabled v-model="item.qty" min="1">
                                    <button type="button" class="main_btn edit_add_btn" @click.prevent="editCart(item, item.qty+1)">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                    <strong class="ms-3 text-nowrap">$ {{ $filters.currency(item.total) }}</strong>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <p class="text-end me-3 fs-4 fw-bolder"><span>總金額 :</span> $ {{ $filters.currency(cart.total) }}</p>
                        <div class="d-grid gap-2">
                            <router-link to="/cart" class="main_btn navbar_btn">結帳去</router-link>
                        </div>
                    </template>
                    <div v-else class="text-center mt-2">
                        <h2 class="my-3">購物車內沒有商品哦~</h2>
                        <div class="d-grid gap-2">
                            <router-link to="/product" class="main_btn py-1 fs-5 fw-normal">再去逛逛</router-link>
                        </div>
                    </div>
                </div>
                
                <router-link to="/login" class="navbar-brand">
                    <i class="bi bi-person-circle" style="font-size: 2rem;"></i>
                </router-link>
            </div>
            <!-- 下拉選單 -->
            <div class="collapse navbar-collapse align-items-center" id="navbarNav">
                <ul class="navbar-nav me-5">
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link">產品列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/favorite" class="nav-link">我的收藏</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/checkorder" class="nav-link">訂單查詢</router-link>
                    </li>
                </ul>
            </div>
            <!-- 購物車lg尺寸 -->
            <div class="d-flex d-none d-lg-block pt-1 dropdown">
                <a href="#" class="navbar-brand" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                    <i class="bi bi-cart-fill" style="font-size: 2rem;"></i>
                </a>
                    <!-- 購物車Dropdown -->
                <div class="p-1 me-3 dropdown-menu dropdown-menu-end navbar_cart" aria-labelledby="dropdownMenuButton1" >
                    <template v-if="cartLength !== 0">
                        <div v-for="item in cart.carts" :key="item.product.id" class="d-flex align-items-center my-2">
                            <div class="col-6 d-flex align-items-center">
                                <a href="#" class="shake" @click.prevent="delCart(item.id)"><i class="bi bi-trash-fill" style="font-size: 1.5rem; color:red;"></i></a>
                                <div class="mx-3" :style="{ 'background-image' : `url(${ item.product.imageUrl })`}" style="background-size: cover; background-position: center center; height: 50px; width: 70px;"></div>
                                <div>{{ item.product.title }}</div>
                            </div>
                            <div class="col-6 ps-4">
                                <div class="input-number-group-sm input-group-sm d-flex align-items-center">
                                    <button type="button" class="main_btn edit_dash_btn" @click.prevent="editCart(item, item.qty-1)"
                                    :disabled="item.qty == 1" >
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <input type="number" class="text-center form-control border-0" style="width:50px;" disabled v-model="item.qty" min="1">
                                    <button type="button" class="main_btn edit_add_btn" @click.prevent="editCart(item, item.qty+1)">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                    <strong class="ms-5">$ {{ $filters.currency(item.total) }}</strong>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <p class="text-end me-4 fs-4 fw-bolder"><span>總金額 :</span> $ {{ $filters.currency(cart.total) }}</p>
                        <div class="d-grid gap-2">
                            <router-link to="/cart" class="main_btn py-1 fs-5 fw-normal">結帳去</router-link>
                        </div>
                    </template>
                    <div v-else class="mt-2">
                        <h2 class="text-center my-3">購物車內沒有商品哦~</h2>
                        <div class="d-grid gap-2">
                            <router-link to="/product" class="main_btn py-1 fs-5 fw-normal">再去逛逛</router-link>
                        </div>
                    </div>
                </div>
                
                <router-link to="/login" class="navbar-brand">
                    <i class="bi bi-person-circle" style="font-size: 2rem;"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods: {
        delCart(id){
            this.$store.dispatch('carts/delCart',id);
            setTimeout(() => {
                this.$swal({
                    title:`成功從購物車移除`,
                    icon: 'success',
                });
            }, 1000);
        },
        editCart(item,qty){
            const cart ={
                product_id:item.id,
                qty
            };
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            this.$http.put(api,{ data:cart})
            .then((res)=>{
                this.getCart();
            })
        },
        ...mapActions('carts',['getCart']),
    },
    computed:{
        isLoading () {
            return this.$store.state.isLoading;
        },
        ...mapGetters('carts', ['cart']),
        ...mapGetters('carts',['cartLength']),
    },
    watch: {
        $route () {
            let nav = document.getElementById('navbarNav');
            nav.classList.remove('show');
        }
    },
    created() {
        this.getCart();
    },
}
</script>
