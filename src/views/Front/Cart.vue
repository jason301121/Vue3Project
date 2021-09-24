<template>
<Navbar></Navbar>
    <div class="container">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-10">
                <ul class="d-flex justify-content-between fw-bold fs-2 list-unstyled">
                    <li class="check_flow  check_flow_active">1.確認訂單</li>
                    <li class="check_flow">2.填寫資料</li>
                    <li class="check_flow">3.訂單結帳</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-3">
                <p class="fs-1 fw-bold">購物車清單</p>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table text-center align-middle" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>商品名稱</th>
                                <th>單價</th>
                                <th>數量</th>
                                <th>小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-nowrap" v-for="item in carts.carts" :key="item.id">
                                <td><a href="#" @click.prevent="delCart(item)"><i class="bi bi-trash-fill" style="font-size: 1.5rem; color:red;"></i></a></td>
                                <td>{{ item.product.title }}</td>
                                <td>{{ $filters.currency(item.product.price) }} / {{ item.product.unit }}</td>
                                <td>
                                    <div class="d-flex justify-content-center">
                                        <div class="input-group" style="width:150px;">
                                            <button type="button" class="btn btn-sm minus border border-1" @click.prevent="editCart(item, item.qty-1)">
                                                <i class="bi bi-dash"></i>
                                            </button>
                                            <input type="number" class="text-center form-control h-100 rounded-0" v-model="item.qty" min="1">
                                            <button type="button" class="btn btn-sm add border border-1 " @click.prevent="editCart(item, item.qty+1)">
                                                <i class="bi bi-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>$ {{ $filters.currency(item.total) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row pe-5">
            <div class="col-12 text-end fs-3">
                <p>總計 : <span>$ {{ $filters.currency(carts.total) }}</span></p>
                <p class="text-success" v-show="carts.total!==carts.final">優惠價 : <span>$ {{ $filters.currency(carts.final_total) }}</span></p>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-8">
                <div class="input-group mb-3" v-if="carts.length !== 0" style="width:50%;">
                    <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode">
                    <div class="input-group-append">
                        <button class="check_btn check_btn_sm" type="button" @click="useCoupon">
                            套用優惠碼
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-end pe-5">
            <button type="button" class="check_btn" @click="goCheckoutForm">下一步 : 填寫資料</button>
            </div>
        </div>
        <div class="row">
            
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue'
export default {
    components:{
        Navbar,
    },
    data() {
        return {
            carts:[],
            couponCode:'',
        }
    },
    methods: {
        getCart(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.get(api)
            .then((res)=>{
                this.carts = res.data.data;
                console.log(this.carts);
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
                this.getCart();
            })
        },
        delCart(item){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
            this.$http.delete(api)
            .then((res)=>{
                this.getCart();
            })
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
        }
    },
    created() {
        this.getCart();
    },
}
</script>