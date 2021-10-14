<template>
    <Banner></Banner>
    <div class="container">
        <div class="row mt-5 m-0 d-flex align-items-start justify-content-between w-100"  data-aos="fade-up">
            <div class="col-sm-4 col-12 home_Img m-0">
                <img src="https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="安全健康">
                <h3 class="fw-bold my-3">安全健康</h3>
                <p>BuyFresh希望讓每個人吃得健康，所有食材在出貨前品質皆經過嚴格把關，提供最新鮮的鮮蔬給您</p>
            </div>
            <div class="col-sm-4 col-12 home_Img">
                <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="友善環境">
                <h3 class="fw-bold my-3">友善環境</h3>
                <p>除了嚴選無毒有機的產品，我們更堅持在生產過程中不能使用除草劑，避免對土地和水源造成長期的傷害</p>
            </div>
            <div class="col-sm-4 col-12 home_Img">
                <img src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="產地合作">
                <h3 class="fw-bold my-3">產地合作</h3>
                <p>與在地小農合作，提供最新鮮的鮮蔬給您</p>
            </div>
        </div>
    </div>
    <div class="container-fluid my-3 home_coupon d-flex justify-content-center align-items-center">
        <p class="fs-2 text-center py-5"  data-aos="zoom-in-up">輸入折扣碼 <strong class="text-primary">BuyFresh88</strong><br> 即享88折優惠</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-column justify-content-center">
                <h2 class=" fw-bold text-center my-3">
                    <strong class="d-inline-block home_title">熱門商品</strong>
                </h2>
            </div>
        </div>
    </div>
    <div class="conteiner-fluid">
        <HotProductSwiper :data="hotProductJson" @go-to-product="goDetail"></HotProductSwiper>
    </div>
    <div class="container">
        <div class="row ">
            <div class="col-12">
                <h2 class=" fw-bold text-center my-3">
                    <strong class="d-inline-block home_title">聯絡我們</strong>
                </h2>
            </div>
        </div>
        <div class="row home_content mb-3 p-3">
            <div class="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0079554826816!2d121.56236741484187!3d25.03380408397246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1633594534432!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="col-md-6 d-flex">
                <Form class="row px-3 mb-2" v-slot="{ errors }" @submit="sentMessage">
                    <div class="mb-3">
                        <label for="userName" class="form-label">姓名</label>
                        <Field type="text" name="姓名" id="userName" class="form-control" 
                        :class="{ 'is-invalid': errors['姓名'] }" 
                        placeholder="請輸入姓名" rules="required"
                        v-model="user.name"></Field>
                        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label for="userEmail" class="form-label">信箱</label>
                        <Field type="email" name="信箱" id="userEmail" class="form-control" 
                        :class="{ 'is-invalid': errors['信箱'] }" 
                        placeholder="請輸入信箱" rules="required"
                        v-model="user.email"></Field>
                        <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label for="textarea" class="form-label">留言</label>
                        <textarea class="form-control" id="message" rows="5" name="備註" v-model="user.msg"></textarea>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="main_btn fs-4 py-1 px-3">送出</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Front/Banner.vue';
import hotProductJson from '@/assets/json/HotProduct.json';
import HotProductSwiper from '@/components/Front/ProductSwiper.vue';

export default {
    components:{
        Banner,
        HotProductSwiper,
    },
    data() {
        return {
            hotProductJson,
            user:{
                name:'',
                email:'',
                msg:''
            }
        }
    },
    methods: {
        goDetail(id){
            this.$router.push(`/productdetail/${id}`);
        },
        sentMessage(values, { resetForm }){
            if(values){
                this.$swal(
                    {
                        title:'送出成功',
                        icon:'success'
                    }
                )
                resetForm();
            }
            this.user.msg = '';
        }
    }
}
</script>