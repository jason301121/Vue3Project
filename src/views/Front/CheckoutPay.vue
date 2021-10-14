<template>
    <div class="container">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-12">
                <ul class="d-flex flex-wrap justify-content-around  fw-bold fs-2 list-unstyled">
                    <li class="check_flow mb-3">1.確認訂單</li>
                    <li class="check_flow mb-3">2.填寫資料</li>
                    <li class="check_flow mb-3 check_flow_active">3.訂單結帳</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 checkout_orderlist table-responsive-md">
                <p class="fs-2 text-center fw-bold">購物清單</p>
                <table class="table align-middle text-nowrap">
                    <thead>
                        <tr>
                            <th width="30%" class="text-center">商品名稱</th>
                            <th width="20%" class="text-center">單價</th>
                            <th width="40%" class="text-center">數量</th>
                            <th width="10%" class="text-end">小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id" class="fs-6">
                            <td class="text-center ">{{ item.product.title }}</td>
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
                <div class="checkout_info p-3 d-flex text-nowrap">
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
                <button type="button" class="main_btn check_btn" style="width:40%;" v-if="order.is_paid" @click="backToHome">繼續逛逛</button>
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
        }
    },
    methods: {
        getOrder(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
            this.$http.get(api)
            .then((res)=>{
                this.order = res.data.order;
                history.pushState(null, null, document.URL)
                window.addEventListener('popstate', function (e) {
                history.pushState(null, null, document.URL)
                }, false)
            })
        },
        pay(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
            this.$http.post(api)
            .then((res)=>{
                this.getOrder();
            })
        },
        backToHome(){
            this.$router.push('/');
        }
    },
    created() {
        this.orderId = this.$route.params.orderId;
        this.getOrder();
        
    },
}
</script>