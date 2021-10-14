<template>
<Loading :active="isLoading"></Loading>
    <div class="top_background favorite_backImg d-flex justify-content-center align-items-center">
        <div class="mx-auto fw-bold">
            我的收藏
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 my-5 text-center" v-if="favoriteItem.length === 0">
                <div class="d-flex flex-column align-items-center">
                    <p class="fs-1 fw-bolder">還沒有收藏的商品哦</p>
                    <router-link to="/product" class="main_btn check_btn mt-3" style="width:15%;">點我選購</router-link>
                </div>
            </div>
            <div class="col-12" v-else>
                <div class="d-flex flex-wrap justify-content-center">
                    <div class="card border-0 shadow h-100 mx-2 my-2"  v-for="item in favoriteItem" :key="item.id" data-aos="zoom-in">
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
</template>

<script>

export default {
    data() {
        return {
            favoriteList:JSON.parse(localStorage.getItem('favorite')||[]),
            favoriteItem:[],
            allProducts:[],
            isLoading:false,
        }
    },
    methods: {
        getAllproducts(){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            this.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                this.allProducts = res.data.products;
                this.filterFavorite();
                this.isLoading = false;
            })
        },
        filterFavorite(){
            this.favoriteItem = this.allProducts.filter(item =>this.favoriteList.indexOf(item.id) !== -1);
        },
        goDetail(item){
            this.isLoading = false;
            this.$router.push(`/productdetail/${item.id}`);
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
            this.filterFavorite();
        },
        addCart(id,qty=1){
            this.$store.dispatch('carts/addCart', {id,qty});
            this.$swal({
                title:`已加入購物車`,
                icon: 'success',
            });
        },
    },
    created() {
        this.getAllproducts();
    },
}
</script>