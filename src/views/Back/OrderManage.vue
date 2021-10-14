<template>
<Loading :active="isLoading"></Loading> 
<div class="container">
    <div class="row">
        <div class="col-12 text-center py-4">
            <h2><strong class="back_title display-3">訂單管理</strong></h2>
        </div>
        <div class="col-12 d-flex justify-content-between flex-row-reverse py-3">
            <button type="button" class="main_btn px-3 py-2 fs-6" @click="openDelModal(true,item)">清除所有訂單</button>
        </div>
        <div class="col-12">
            <table class="table table-hover align-middle text-center back_table">
                <thead>
                    <tr>
                        <th width="15%">購買時間</th>
                        <th width="40%">購買款項</th>
                        <th width="15%">應付金額</th>
                        <th width="15%">是否付款</th>
                        <th width="15%">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in orders" :key="item.id">
                        <td>{{ $filters.date(item.paid_date) }}</td>
                        <td>
                            <ul class="list-unstyled">
                                <li 
                                v-for="( product,i ) in item.products" :key="i">
                                {{ product.product.title }} / {{ product.qty }} {{ product.product.unit }}
                                </li>
                            </ul>
                        </td>
                        <td>{{ $filters.currency(item.total) }} 元</td>
                        <td>
                            <span v-if="item.is_paid" class="text-success">已付款</span>
                            <span v-else class="text-muted">未付款</span>
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-primary" @click="openOrderModal(item)">詳細</button>
                            <button type="button" class="btn btn-outline-danger" @click="openDelModal(false,item)">刪除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<OrderModal ref="orderModal" :order="tempOrder" @update-order="updateOrder">
</OrderModal>
<DelModal ref="delModal" :item="tempOrder" @del-item="delOrder">
    <template v-slot:modalCategory>{{ modalCategory }}</template>
</DelModal>
<Pagination :pages="pagination" @change-page="getOrders"></Pagination>
</template>

<script>
import OrderModal from '@/components/Back/OrderManageModal.vue';
import DelModal from '@/components/Back/DelModal.vue';
import Pagination from '@/components/all/Pagination.vue';

export default {
    data() {
        return {
            orders:[],
            isAll:false,
            tempOrder:{},
            modalCategory:'',
            pagination:{},
            isLoading:false,
        }
    },
    components:{
        OrderModal,
        DelModal,
        Pagination,
    },
    methods: {
        getOrders(page=1){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
            this.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                this.isLoading = false;
                this.orders = res.data.orders;
                this.pagination = res.data.pagination;
            })
        },
        openOrderModal(item){
            this.tempOrder = { ...item };
            this.$refs.orderModal.showModal();
        },
        updateOrder(item){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
            this.$http.put(api,{ data:item})
            .then((res)=>{
                this.$refs.orderModal.hideModal();
                this.getOrders();
            })
        },
        openDelModal(isAll,item){
            this.isAll = isAll;
            if(isAll){
                this.modalCategory = '刪除所有訂單';
            }else{
                this.tempOrder = { ...item };
                this.modalCategory = '刪除訂單';
            }
            this.$refs.delModal.showModal();
        },
        delOrder(){
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
            let messageState='刪除所有訂單';
            if(!this.isAll){
                api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
                messageState='刪除訂單';
            }
            this.$http.delete(api)
            .then((res)=>{
                this.$refs.delModal.hideModal();
                this.$MessageState(res,messageState);
                this.getOrders();
            })
        },
    },
    created() {
        this.getOrders();
    },
}
</script>