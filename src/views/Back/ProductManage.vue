<template>
    <div class="container">
        <div class="row">
        <div class="col-12 py-5 text-center">
            <h1>商品管理</h1>
        </div>
        <div class="col-12 d-flex justify-content-between py-3">
            <div>
            </div>
            <button type="button" class="btn btn-primary btn-hv-style"  @click="openModal(true)">
            新增商品
            </button>
        </div>
        <div class="col-12" >
            <div class="table-responsive">
            <table class="table" id="table-product">
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
                <tbody >
                <tr  v-for="item in products" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.category }}</td>
                    <td>
                        <span class="text-success" v-if="item.is_enabled">啟用</span>
                        <span class="text-muted" v-else>未啟用</span></td>
                    <td>{{ item.origin_price }}</td>
                    <td>{{ item.price }}</td>
                    <button type="button" class="btn btn-outline-primary" @click="openModal(false,item)">
                        修改
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="openDelModal(item)">
                        刪除
                    </button>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/Back/ProductManageModal.vue';
import DelModal from '@/components/Back/DelModal.vue'
export default {
    data() {
        return {
            products:[],
            tempProduct:{},
            isNew: false,
        }
    },
    components:{
        ProductModal,
        DelModal,
    },
    methods: {
        getProducts(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
            this.$http.get(api)
            .then((res)=>{
                this.products=res.data.products;
                console.log(this.products);
            });
        },
        openModal(isNew, item){
        if (isNew) {
            this.tempProduct = {};
        } else {
            this.tempProduct = { ...item };
        }
            this.isNew=isNew;
            this.$refs.productModal.showModal();
            console.log(isNew);
        },
        updateProduct(item){
            this.tempProduct=item;
            let api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
            let httpMethod='post';
            if(!this.isNew){
                api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
                httpMethod = 'put';
            }
            this.$http[httpMethod](api,{data:this.tempProduct})
            .then((res)=>{
                this.$refs.productModal.hideModal();
                this.getProducts();
            });
        },
        openDelModal(item){
            this.tempProduct = { ...item };
            this.$refs.delModal.showModal();
        },
        delProduct(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
            this.$http.delete(api)
            .then((res)=>{
                this.$refs.delModal.hideModal();
                this.getProducts();
                console.log(res.data);
            })
        }
    },
    created() {
        this.getProducts();
    },
}
</script>