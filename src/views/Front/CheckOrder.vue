<template>
<Loading :active="isLoading"></Loading>
    <div class="top_background checkOrder_backImg d-flex justify-content-center align-items-center">
        <div class="mx-auto fw-bold">
            訂單查詢
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
                <div class="input-group justify-content-center">
                    <input type="text" placeholder="請輸入訂單編號" v-model="orderId" style="width:80%;" class="fs-3">
                    <button type="button" class="main_btn edit_add_btn fs-3" @click="checkOrder">送出</button>
                    </div>
            </div>
        </div>
        <div class="row my-5" v-if="order.total">
            <div class="col-12 checkout_orderlist">
                <p class="fs-2 text-center fw-bold">購物明細</p>
                <table class="table align-middle ">
                    <thead>
                        <tr>
                            <th width="30%" class="text-center">商品名稱</th>
                            <th width="20%" class="text-center">單價</th>
                            <th width="40%" class="text-center">數量</th>
                            <th width="10%" class="text-end">小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id">
                            <td class="text-center">{{ item.product.title }}</td>
                            <td class="text-center">{{ $filters.currency(item.product.price) }}</td>
                            <td class="text-center">{{ item.qty }} / {{ item.product.unit }}</td>
                            <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="fs-2">
                        <td colspan="4" class="text-end">總金額 $ {{ $filters.currency(order.total) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="col-12 mt-3">
                <p class="fs-2 text-center fw-bold">訂購人資訊</p>
                <div class="checkout_info p-3 d-flex">
                    <table>
                        <tbody>
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
                        <tr v-if="order.message">
                            <th>備註</th>
                            <td>{{ order.message }}</td>
                        </tr>
                        <tr>
                            <th>訂單狀態</th>
                            <td>
                                <span v-if="order.is_paid" class="text-success">已付款</span>
                                <span v-else >尚未付款</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row justify-content-center py-3">
                <button type="button" class="main_btn check_btn" v-if="!order.is_paid" @click="pay" style="width:40%;">確認付款</button>
                <router-link to="/" class="main_btn check_btn" style="width:40%;" v-else>繼續逛逛</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderId:'',
            order:{
                user:{},
            },
            isLoading:false,
        }
    },
    methods: {
        checkOrder(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
            this.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                if(res.data.success){
                    this.order = res.data.order;
                }
                this.isLoading = false;
            })
        },
        pay(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
            this.isLoading = true;
            this.$http.post(api)
            .then((res)=>{
                console.log(res);
                this.checkOrder();
                this.isLoading = false;
            })
        },
    },
    created() {
        this.checkOrder();
    },
}
</script>