<template>
<Navbar></Navbar>
    <div class="container">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-10">
                <ul class="d-flex justify-content-between fw-bold fs-2 list-unstyled">
                    <li class="check_flow">1.確認訂單</li>
                    <li class="check_flow">2.填寫資料</li>
                    <li class="check_flow check_flow_active">3.訂單結帳</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 checkout_orderlist">
                <p class="fs-2 text-center fw-bold">購物清單</p>
                <table class="table align-middle ">
                    <thead>
                        <tr>
                            <th width="30%">商品名稱</th>
                            <th width="20%" class="text-center">單價</th>
                            <th width="40%" class="text-center">數量</th>
                            <th width="10%" class="text-end">小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id">
                            <td class="text-start">{{ item.product.title }}</td>
                            <td class="text-center">{{ $filters.currency(item.product.price) }}</td>
                            <td class="text-center">{{ item.qty }} / {{ item.product.unit }}</td>
                            <td class="text-end">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="fs-2">
                        <td colspan="3" class="text-end">總金額</td>
                        <td class="text-end">$ {{ $filters.currency(order.total) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="col-12 mt-3 ">
                <p class="fs-2 text-center fw-bold">訂購人資訊</p>
                <div class="checkout_info px-3 py-3 d-flex">
                    <table>
                        <tr>
                            <th>訂單編號</th>
                            <td>{{ order.id }}</td>
                        </tr>
                        <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ order.user.email }}</td>
                        </tr>
                        <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                        </tr>
                        <tr>
                            <th>備註</th>
                            <td>{{ order.message }}</td>
                        </tr>
                        <tr>
                            <th>訂單狀態</th>
                            <td>
                                <span v-if="order.is_paid">已付款</span>
                                <span v-else >尚未付款</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="row justify-content-center">
                <button type="button" class="btn btn-dark" v-if="!order.is_paid" @click="pay" style="width:20%;">確認付款</button>
                <button type="button" class="btn btn-dark" v-if="order.is_paid" @click="backToHome" >繼續逛逛</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue';

export default {
    data() {
        return {
            orderId:'',
            order:{},
        }
    },
    components:{
        Navbar,
    },
    methods: {
        getOrder(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
            this.$http.get(api)
            .then((res)=>{
                console.log(res);
                this.order = res.data.order;
            })
        },
        pay(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
            this.$http.post(api)
            .then((res)=>{
                console.log(res);
                this.getOrder();
            })
        },
        backToHome(){
            this.$router.push('/');
        }
    },
    created() {
        this.orderId = this.$route.params.orderId;
        console.log(this.orderId);
        this.getOrder();
    },
}
</script>