<template>
    <div class="container">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-12 col-sm-12">
                <ul class="d-flex flex-wrap justify-content-around  fw-bold fs-2 list-unstyled">
                    <li class="check_flow mb-3 check_flow_active">1.確認訂單</li>
                    <li class="check_flow mb-3">2.填寫資料</li>
                    <li class="check_flow mb-3">3.訂單結帳</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-3">
                <p class="fs-1 fw-bold">購物車清單</p>
            </div>
        </div>
        <div class="table-responsive-md" v-if="cartLength !== 0">
            <table class="table lh-lg text-center align-middle cart_table" >
                <thead>
                    <tr class="table-nowrap">
                        <th></th>
                        <th width="20%">商品名稱</th>
                        <th width="20%">單價</th>
                        <th width="35%">數量</th>
                        <th width="15%">小計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-nowrap fs-4" v-for="item in cart.carts" :key="item.id">
                        <td><a href="#" class="shake" @click.prevent="delCart(item.id)"><i class="bi bi-trash-fill" style="font-size: 1.5rem; color:red;"></i></a></td>
                        <td class="fw-bold fs-3">{{ item.product.title }}</td>
                        <td data-title="單價" class="td-before">{{ $filters.currency(item.product.price) }} / {{ item.product.unit }}</td>
                        <td data-title="數量" class="td-before circle_input d-flex align-items-center">
                                <button type="button" class="circle_input_btn" @click.prevent="editCart(item, item.qty-1)"
                                :disabled="item.qty===1">
                                    <i class="bi bi-dash-circle"></i>
                                </button>
                                <input type="number" class="text-center border-0" v-model="item.qty" min="1" >
                                <button type="button" class="circle_input_btn" @click.prevent="editCart(item, item.qty+1)">
                                    <i class="bi bi-plus-circle"></i>
                                </button>

                        </td>
                        <td data-title="小計" class="td-before">$ {{ $filters.currency(item.total) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div  v-if="cartLength !== 0">
            <div class="row">
                <div class="col-12 text-end fs-3">
                    <p>總計 : <span>$ {{ $filters.currency(cart.total) }}</span></p>
                    <p class="text-success" v-show="cart.total!==cart.final_total">優惠價 : <span>$ {{ $filters.currency(cart.final_total) }}</span></p>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-8 col-12">
                    <div class="input-group mb-3" v-if="cart.length !== 0 |cart.total===cart.final_total">
                        <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode" :disabled="cart.total !== cart.final_total">
                        <div class="input-group-append">
                            <button class="main_btn check_coupon_btn" type="button" @click="useCoupon" :disabled="cart.total !== cart.final_total">
                                套用優惠碼
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 d-flex justify-content-end">
                <button type="button" class="main_btn check_btn" @click="goCheckoutForm">下一步 : 填寫資料</button>
                </div>
            </div>
        </div>
        <div class="row mb-5" v-else>
            <div class="d-flex flex-column justify-content-center align-items-center my-2">
                <h2 class="my-5">購物車內沒有商品哦~</h2>
                <router-link to="/product" class="main_btn navbar_btn">再去逛逛</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data() {
        return {
            couponCode:'',
        }
    },
    methods: {
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
        delCart(id){
            this.$store.dispatch('carts/delCart',id);
            setTimeout(() => {
                this.$swal({
                    title:`成功從購物車移除`,
                    icon: 'success',
                });
            }, 1000);
        },
        useCoupon(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
            const coupon = {
                code:this.couponCode,
            };
            this.$http.post(api,{data:coupon})
            .then((res)=>{
                console.log(res);
                this.getCart();
            })
        },
        goCheckoutForm(){
            this.$router.push('/checkoutform');
        },
        ...mapActions('carts', ['getCart'])
    },
    computed:{
        ...mapGetters('carts', ['cart']),
        ...mapGetters('carts',['cartLength']),
    },
    created() {
        this.getCart();
    },
}
</script>