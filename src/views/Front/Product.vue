<template>
<Navbar></Navbar>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-center">
                <ul class="d-flex list-unstyled my-5">
                    <li class="mx-5 fs-3" v-for="(item,key) in filters.list" :key="key" >
                        <a href="#" class="product-filter" @click.prevent="changeCategory(item)">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <div class="d-flex flex-wrap justify-content-center">
                <div class="card border-0 shadow h-100 mx-2 my-2"  v-for="item in filter_product" :key="item.id">
                    <div class="card-img-wrap">
                        <div class="card-img card-img-top" style="height:250px" :style="{ backgroundImage: `url(${item.imageUrl})` }" :alt="item.title"></div>
                        <div class="card-layer d-flex justify-content-center align-items-center">
                            <p class="card-layer-text d-flex align-items-center">查看詳細</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title fw-bold mb-2">{{ item.title }}</h4>
                        <div class="d-flex justify-content-between">
                            <del class="fs-5 text-muted">NT${{ $filters.currency(item.origin_price) }}</del>
                            <p class="fs-5 text-danger">NT${{ $filters.currency(item.price) }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <i class="bi bi-heart-fill favorite" style="font-size: 1.5rem;"></i>
                            <button class="btn btn-outline-primary ms-2" @click="addCart(item)">
                                加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Pagination :pages="pagination" @change-page=getProduct v-show="filters.category=='全部'"></Pagination>
</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue';
import Pagination from '@/components/all/Pagination.vue';

export default {
    components:{
        Navbar,
        Pagination,
    },
    data() {
        return {
            products:[],
            pagination:{},
            filter_product:[],
            category:'all',
            filters:{
                list:['全部','蔬菜','水果','肉品','海鮮'],
                category:'全部'
            },
            qty:1,
        }
    },
    methods: {
        getProduct(page=1){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
            this.category = 'all';
            this.filter_product = [];
            this.$http.get(api)
            .then((res)=>{
                this.products = res.data.products;
                this.pagination = res.data.pagination;
                this.filter_product = this.products;
            });
        },
        getProductAll(){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            this.filter_product = [];
            const vm = this;
            this.$http.get(api)
            .then((res)=>{
                if(vm.filters.category !== '全部'){
                    vm.filter_product = res.data.products.filter(function(item){
                    return item.category == vm.filters.category;
                    });
                }
            })
        },
        changeCategory(item){
            const vm = this;
            vm.filters.category = item;
            if(vm.filters.category === '全部'){
                vm.getProduct();
            }else{
                vm.getProductAll();
            }
        },
        addCart(item){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
                product_id:item.id,
                qty:this.qty,
            };
            this.$http.post(api, { data:cart })
            .then((res)=>{
                console.log(res);
                item.qty = '';
                this.getCart();
            })
        },
        getCart(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.get(api)
            .then((res)=>{
                this.carts = res.data.data;
            })
        },
    },
    created() {
        this.getProduct();
    },
}
</script>