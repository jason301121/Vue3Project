<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center py-4">
                <h1 class="display-4">優惠券管理</h1>
            </div>
            <div class="col-12 d-flex justify-content-between flex-row-reverse py-3">
                <button type="button" class="btn btn-primary" @click="openCouponModal(true)">新增優惠券</button>
            </div>
            <div class="col-12">
                <table class="table table-hover align-middle text-center">
                    <thead>
                        <tr>
                            <th>名稱</th>
                            <th>優惠碼</th>
                            <th>折數</th>
                            <th>是否啟用</th>
                            <th>到期日</th>
                            <th>編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in coupons" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.code }}</td>
                            <td>{{ item.percent }} %</td>
                            <td>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else class="text-muted">未啟用</span>
                            </td>
                            <td>{{ $filters.date(item.due_date) }}</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary me-2" @click="openCouponModal(false,item)">修改</button>
                                <button type="button" class="btn btn-outline-danger" @click="openDelModal(item)">刪除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon">
        <template v-slot:modalCategory>{{ modalCategory }}</template>
    </CouponModal>
    <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"> 
        <template v-slot:modalCategory >{{ modalCategory }}</template>
    </DelModal>
    <Pagination :pages="pagination" @change-page="getCoupon"></Pagination>
</template>

<script>
import CouponModal from '@/components/Back/CouponManageModal.vue';
import DelModal from '@/components/Back/DelModal.vue';
import Pagination from '@/components/all/Pagination.vue';

export default {
    data() {
        return {
            coupons:[],
            tempCoupon:{},
            isLoading:false,
            isNew:false,
            modalCategory:'',
            pagination:{},
        }
    },
    components:{
        CouponModal,
        DelModal,
        Pagination,
    },
    methods: {
        getCoupon(page=1){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
            this.isLoading=true;
            this.$http.get(api)
            .then((res)=>{
                this.isLoading=false;
                this.coupons=res.data.coupons;
                this.pagination = res.data.pagination;
            })
        },
        openCouponModal(isNew,item){
            this.isNew = isNew;
            if(isNew){
                this.tempCoupon={
                    due_date : new Date().getTime() /1000,
                };
                this.modalCategory='新增優惠券'
            }else{
                this.tempCoupon = { ...item };
                this.modalCategory='編輯優惠券'
            }
            this.$refs.couponModal.showModal();
            console.log(this.tempCoupon);
        },
        updateCoupon(item){
            let api =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
            let httpMethod = 'post';
            let messageState='新增優惠券';
            if(!this.isNew){
                api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
                httpMethod = 'put';
                messageState='更新優惠券資訊';
            }
            this.isLoading=true;
            this.$http[httpMethod](api,{ data:item })
            .then((res)=>{
                this.isLoading=false;
                this.$MessageState(res,messageState)
                this.getCoupon();
                this.$refs.couponModal.hideModal();
            })
        },
        openDelModal(item){
            this.tempCoupon = { ...item };
            this.tempCoupon.category='優惠券';
            this.modalCategory='刪除優惠券'
            this.$refs.delModal.showModal();
        },
        delCoupon(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
            this.isLoading=true;
            this.$http.delete(api)
            .then((res)=>{
                this.isLoading=false;
                this.getCoupon();
                this.$MessageState(res,'刪除優惠券');
                this.$refs.delModal.hideModal();
            })
        }
    },
    created() {
        this.getCoupon();
    },
}
</script>