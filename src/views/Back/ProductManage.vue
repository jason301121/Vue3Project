<template>
    <Loading :active="isLoading"></Loading> 
    <div class="container">
        <div class="row">
        <div class="col-12 text-center py-4">
            <h1 class="display-3">商品管理</h1>
        </div>
        <div class="col-12 d-flex justify-content-between flex-row-reverse py-3">
            <button type="button" class="btn btn-primary"  @click="openModal(true)">
            新增商品
            </button>
        </div>
        <div class="col-12" >
            <div class="table-responsive">
            <table class="table table-hover align-middle text-center" id="table-product">
                <thead>
                <tr>
                    <th>名稱</th>
                    <th>種類</th>
                    <th>是否啟用</th>
                    <th>原價</th>
                    <th>特價</th>
                    <th>編輯</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.category }}</td>
                    <td>
                        <span class="text-success" v-if="item.is_enabled">啟用</span>
                        <span class="text-muted" v-else>未啟用</span></td>
                    <td>{{ item.origin_price }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                    <button type="button" class="btn btn-outline-primary me-1" @click="openModal(false,item)">
                        修改
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="openDelModal(item)">
                        刪除
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct">
        <template v-slot:modalCategory>{{ modalCategory }}</template>
    </ProductModal>
    <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct">
        <template v-slot:modalCategory>{{ modalCategory }}</template>
    </DelModal>
    <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
</template>

<script>
import ProductModal from '@/components/Back/ProductManageModal.vue';
import DelModal from '@/components/Back/DelModal.vue';
import Pagination from '@/components/all/Pagination.vue';

export default {
    data() {
        return {
            products:[],
            tempProduct:{},
            isNew: false,
            isLoading:false,
            modalCategory:'',
            pagination:{},
            current_page:1,
        }
    },
    components:{
        ProductModal,
        DelModal,
        Pagination,
    },
    methods: {
        getProducts(page=1){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
            this.isLoading=true;
            this.$http.get(api)
            .then((res)=>{
                this.products = res.data.products;
                this.pagination = res.data.pagination;
                this.isLoading = false;
                console.log(res.data);
            });
        },
        openModal(isNew, item){
        if (isNew) {
            this.tempProduct = {};
            this.modalCategory = '新增商品';
        } else {
            this.tempProduct = { ...item };
            this.modalCategory = '編輯商品';
        }
            this.isNew=isNew;
            this.$refs.productModal.showModal();
            console.log(isNew);
        },
        updateProduct(item){
            this.tempProduct=item;
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
            let httpMethod='post';
            let messageState='新增產品'
            this.isLoading=true;
            if(!this.isNew){
                api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
                httpMethod = 'put';
                messageState='更新產品資訊'
            }
            this.$http[httpMethod](api,{data:this.tempProduct})
            .then((res)=>{
                this.isLoading=false;
                this.$refs.productModal.hideModal();
                this.getProducts();
                this.$MessageState(res,messageState);
            });
        },
        openDelModal(item){
            this.tempProduct = { ...item };
            this.modalCategory = '刪除商品';
            this.$refs.delModal.showModal();
        },
        delProduct(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
            this.isLoading=true;
            this.$http.delete(api)
            .then((res)=>{
                this.$refs.delModal.hideModal();
                this.isLoading=false;
                this.getProducts();
                this.$MessageState(res,'刪除產品');
                console.log(res);
            });
        },
    },
    created() {
        this.getProducts();
    },
}
</script>