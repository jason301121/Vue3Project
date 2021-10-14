<template>
    <div class="container">
        <div class="row ps-2">
            <div class="col-12">
                <a href="#" @click.prevent="goBack" >
                    <i class="bi bi-arrow-left" style="font-size:3rem;color:black;"></i>
                </a>
            </div>
            <div class="col-sm-7 col-12">
                <img 
                :src="product_detail.imageUrl" :alt="product_detail.title" class="product_detail_img">
            </div>
            <div class="col-sm-5 col-12 product_detail_word">
                <h1 class="display-4 fw-bold">{{ product_detail.title }}</h1>
                <p class="product_detail_description my-3">{{ product_detail.description }}</p>
                <p class="product_detail_content">
                    {{ product_detail.content }}</p>
                <hr>
                <div class="d-flex flex-column fw-bold">
                    <del class="fs-5" v-if="product_detail.origin_price !== product_detail.price">原價 : $ {{ $filters.currency(product_detail.origin_price) }}</del>
                    <p class="fs-3" v-else>$ {{ $filters.currency(product_detail.origin_price) }}</p>
                    <p class="fs-3 text-danger" v-if="product_detail.origin_price !== product_detail.price">特價 : $ {{ $filters.currency(product_detail.price) }}</p>
                </div>
                <div class="d-flex justify-content-evenly">
                    <div class="d-flex align-items-center circle_input fw-bold">
                        <button :disabled="qty == 1 " type="button" class="circle_input_btn" @click.prevent="editqty(qty-1)">
                            <i class="bi bi-dash-circle"></i>
                        </button>
                        <input type="number" class="text-center fw-bold border-0" v-model="qty" min="1">
                        <button type="button" class="circle_input_btn" @click.prevent="editqty(qty+1)">
                            <i class="bi bi-plus-circle"></i>
                        </button>
                    </div>
                    <button type="button" class="product_detail_btn fw-bold" @click="addCart">加入購物車</button>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-12">
                <h2 class="fw-bolder"><i class="bi bi-exclamation-circle"></i> 購物須知</h2>
            </div>
            <div class="col-12 product_detail_align py-3 lh-lg d-flex align-middle">
                <ol class="my-3 ms-2">
                    <li>農產品因受天氣影響價格，若價格有大幅度異動出貨前會進行告知義務。</li>
                    <li>產品顏色可能會因網頁呈現與拍攝畫質產生色差，圖片僅供參考，商品依實際供貨樣式為準。</li>
                    <li>加入買菜＋宅配官方line以便訂購完成時確認金額及配送時間。</li>
                    <li>蔬菜、海鮮、肉品為每日新鮮進貨,每批生長期樣式、大小不一定，出貨以實際商品為主。</li>
                </ol>
            </div>
        </div>
        <div class="row my-3">
            <h2 class="fw-bolder"><i class="bi bi-search"></i> 你可能也喜歡</h2>
            <ProductSwiper :data="filter_product_list" @go-to-product="goDetail"></ProductSwiper>
        </div>
    </div>
</template>

<script>
import ProductSwiper from '@/components/Front/ProductSwiper.vue';

export default {
    data() {
        return {
            product_detail:{},
            qty:1,
            category:'',
            allProducts:[],
            filter_product_list:[],
            favoriteList:[],
            product_id:'',
        }
    },
    components:{
        ProductSwiper
    },
    methods: {
        getProductDetail(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`;
            this.$http.get(api)
            .then((res)=>{
                this.product_detail = res.data.product;
                this.getProductAll();
            })
        },
        getProductAll(){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            this.$http.get(api)
            .then((res)=>{
                this.allProducts = res.data.products;
                this.filter_product_list = this.allProducts.filter(item=>item.category === this.product_detail.category && item.id !== this.product_detail.id)
            })
        },
        goBack(){
            this.$router.go(-1)
        },
        editqty(qty){
            this.qty = qty;
        },
        addCart(){
            const id = this.product_detail.id;
            const qty = this.qty;
            this.$store.dispatch('carts/addCart', {id,qty});
            setTimeout(() => {
                this.$swal({
                    title:`已加入購物車`,
                    icon: 'success',
                });
            }, 1000);
            this.qty = 1;
        },
        goDetail(id){
            this.$router.push(`/productdetail/${id}`);
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
    watch: {
    '$route' (to, from) {
        if (to.fullPath.match('/productdetail/')) {
        this.getProductDetail()
        }
    }
    },
    created() {
        this.getProductDetail();
    },
}
</script>