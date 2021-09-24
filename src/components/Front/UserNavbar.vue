<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/" class="nav-link logo">BuyFresh</router-link>
            <div class="collapse navbar-collapse align-items-center">
                <ul class="navbar-nav me-5">
                    <li class="nav-item">
                        <router-link to="#" class="nav-link">關於我們</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link">產品列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="#" class="nav-link">訂單查詢</router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-between d-md-block pt-1 me-4 dropdown">
                <a href="#" class="navbar-brand text-dark">
                    <i class="bi bi-heart-fill" style="font-size: 1.5rem;"></i>
                </a>

                <a href="#" class="navbar-brand text-dark" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" @click.prevent="getCart">
                    <i class="bi bi-cart-fill" style="font-size: 1.5rem;"></i>
                </a>
                    <!-- 購物車Dropdown -->
                <div class="p-2 me-3 dropdown-menu dropdown-menu-end" style="min-width: 500px; position: absolute; left:-350px; top:65px" aria-labelledby="dropdownMenuButton1" >
                    <div v-for="item in carts.carts" :key="item.product.id" class="d-flex align-items-center my-2">
                        <div class="col-7 d-flex align-items-center">
                            <a href="#" @click.prevent="delCart(item)"><i class="bi bi-trash-fill" style="font-size: 1.5rem; color:red;"></i></a>
                            <div class="mx-3" :style="{ 'background-image' : `url(${ item.product.imageUrl })`}" style="background-size: cover; background-position: center center; height: 50px; width: 70px;"></div>
                            <div>{{ item.product.title }}</div>
                        </div>
                        <div class="col-5">
                            <div class="input-number-group-sm input-group-sm d-flex align-items-center">
                                <button type="button" class="btn btn-sm minus border border-1" @click.prevent="editCart(item, item.qty-1)">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input type="number" class="text-center form-control h-100 rounded-0" style="width:50px;" disabled v-model="item.qty" min="1">
                                <button type="button" class="btn btn-sm add border border-1 " @click.prevent="editCart(item, item.qty+1)">
                                    <i class="bi bi-plus"></i>
                                </button>
                                <strong class="ms-3">$ {{ $filters.currency(item.total) }}</strong>
                            </div>
                        </div>
                    </div>
                    <p class="text-end me-4 fs-4 fw-bolder"><span>總金額 :</span> $ {{ $filters.currency(carts.total) }}</p>
                    <div class="d-grid gap-2">
                        <router-link to="/cart" class="btn btn-primary">結帳去</router-link>
                    </div>
                </div>
                
                <router-link to="/login" class="navbar-brand text-dark">
                    <i class="bi bi-person-circle" style="font-size: 1.5rem;"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';
export default {
    data() {
        return {
            carts:[],
        }
    },
    methods: {
        getCart(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.get(api)
            .then((res)=>{
                this.carts = res.data.data;
            })
        },
        delCart(item){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
            this.$http.delete(api)
            .then((res)=>{
                console.log(res);
                this.getCart();
            })
        },
        editCart(item,qty){
            const cart ={
                product_id:item.id,
                qty
            };
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            this.$http.put(api,{ data:cart})
            .then((res)=>{
                console.log(res);
                this.getCart();
            })
        },
    },
    watch:{
        carts(){
            this.carts = this.carts;
        }
    },
    created() {
        this.getCart();
    },
}
</script>

<style lang="scss">
    .logo{
        font-family:'Caveat';
        font-size: 36px;
        font-weight:600;
        color: black;
    }
    // input[type=number]::-webkit-outer-spin-button,
    // input[type=number]::-webkit-inner-spin-button {
    //     -webkit-appearance: none;
    //     margin: 0;
    // }
    // input[type=number] {
    //     -moz-appearance: textfield;
    // }
</style>