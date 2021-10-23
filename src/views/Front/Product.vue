<template>
<Loading :active="isLoading"></Loading>
    <div class="top_background product_backImg d-flex justify-content-center align-items-center">
        <div class="mx-auto fw-bold">
            {{ filters.category }}
        </div>
    </div>
    <div class="container">
        <div class="row my-3 m-0">
            <div class="col-12 d-flex justify-content-center">
                    <ul class="list-unstyled d-flex justify-content-center flex-wrap m-0">
                        <li class="product_filter_button m-2 py-1 px-3 fs-3" v-for="(item,key) in filters.list" :key="key" :class="{ product_filter_active: key === activeItem }">
                            <a class="text-decoration-none text-primary fw-bold" aria-current="page" href="#" @click.prevent="changeCategory(item,key)">{{ item }}
                            </a>
                        </li>
                    </ul>
            </div>
            <div class="col-12">
                <!-- 商品卡片 -->
                <div class="d-flex flex-wrap justify-content-center">
                    <div class="card border-0 shadow h-100 mx-2 my-2"  v-for="item in filter_product" :key="item.id" data-aos="zoom-in">
                        <div class="card-img-wrap" @click.prevent="goDetail(item)">
                            <div 
                            class="card-img card-img-top" 
                            style="height:250px" 
                            :style="{ backgroundImage: `url(${item.imageUrl})` }" 
                            :alt="item.title"></div>
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
                            <div class="d-flex justify-content-between align-items-center">
                                <i 
                                class="favorite" 
                                :class = "[favoriteList.includes(item.id)?'bi-heart-fill' :'bi-heart']"
                                style="font-size: 1.5rem;" 
                                @click="addFavorite(item)"></i>
                                <button class="main_btn ms-2 p-2" @click="addCart(item.id)">
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
import Pagination from '@/components/all/Pagination.vue';


export default {
    components:{
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
            isLoading:false,
            favoriteList:[],
            activeItem: null,
        }
    },
    methods: {
        getProduct(page=1){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
            this.category = 'all';
            this.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                this.products = res.data.products;
                this.isLoading = false;
                this.pagination = res.data.pagination;
                this.filter_product = this.products;
            });
        },
        getProductAll(){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            this.isLoading = true;
            const vm = this;
            this.$http.get(api)
            .then((res)=>{
                if(vm.filters.category !== '全部'){
                    vm.filter_product = res.data.products.filter(function(item){
                    return item.category == vm.filters.category;
                    });
                    vm.isLoading = false;
                }
            })
        },
        changeCategory(item,key){
            const vm = this;
            vm.filters.category = item;
            vm.activeItem = key;
            if(vm.filters.category === '全部'){
                vm.getProduct();
            }else{
                vm.getProductAll();
            }
        },
        addCart(id, qty=1){
            this.$store.dispatch('carts/addCart', {id,qty});
            setTimeout(() => {
                this.$swal({
                    title:`已加入購物車`,
                    icon: 'success',
                });
            }, 1000);
        },
        goDetail(item){
            console.log(item);
            this.$router.push(`/productdetail/${item.id}`);
        },
        getFavorite(){
            const favoriteList = localStorage.getItem('favorite')||'[]';
            this.favoriteList = JSON.parse(favoriteList);
        },
        addFavorite(item){
            // 判斷是否已存在
            if(this.favoriteList.includes(item.id)){
                const removeindex = this.favoriteList.findIndex(index => index === item.id);
                this.favoriteList.splice(removeindex,1);
                this.$swal({
                    title:`從我的收藏移除`,
                    icon: 'success',
                });
            }else{
                this.favoriteList.push(item.id);
                this.$swal({
                    title:`已加入我的收藏`,
                    icon: 'success',
                });
            }
            const favoriteStr = JSON.stringify(this.favoriteList);
            localStorage.setItem('favorite',favoriteStr);
            this.getFavorite();
        },
    },
    mounted() {
        this.getFavorite();
    },
    created() {
        this.getProduct();
    },
}
</script>

<style lang="scss">
    
</style>