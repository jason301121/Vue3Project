<template>
<Navbar></Navbar>
    <div class="container">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-10">
                <ul class="d-flex justify-content-between fw-bold fs-2 list-unstyled">
                    <li class="check_flow">1.確認訂單</li>
                    <li class="check_flow check_flow_active">2.填寫資料</li>
                    <li class="check_flow">3.訂單結帳</li>
                </ul>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center my-3">
                <p class="fs-1 fw-bold">訂購人資訊</p>
            </div>
        <Form class="row checkout_form px-3 py-3 mb-2" v-slot="{ errors }" @submit="createOrder">
            <div class="col-6 py-3">
                <label for="userName" class="form-label">姓名</label>
                <Field type="text" name="姓名" id="userName" class="form-control" 
                :class="{ 'is-invalid': errors['姓名'] }" 
                placeholder="請輸入姓名" rules="required"
                v-model="form.user.name"></Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-6 py-3">
                <label for="tel" class="form-label">收件人電話</label>
                <Field type="tel" name="電話" id="tel" class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" rules="required"
                v-model="form.user.tel"></Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-6 py-3">
                <label for="email" class="form-label">Email</label>
                <Field type="email" name="Email" id="email" class="form-control"
                :class="{ 'is-invalid': errors['Email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email"></Field>
                <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-6 py-3">
                <label for="address" class="form-label">收件人地址</label>
                <Field type="text" name="地址" id="address" class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址" rules="required"
                v-model="form.user.address"></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-12 py-3">
                <label for="message" class="form-label">留言/備註</label>
                <textarea name="" id="message" class="form-control" cols="20" rows="5"
                v-model="form.msg"></textarea>
            </div>
            <div class="col-12 d-flex justify-content-center my-3">
                <button type="submit" class="check_btn">結帳付款</button>
            </div>
        </Form>
    </div>
</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue';

export default {
    data() {
        return {
            form:{
                user:{
                    name:'',
                    tel:'',
                    email:'',
                    address:'',
                },
                msg:'',
            }
        }
    },
    components:{
        Navbar,
    },
    methods: {
        createOrder(){
            const api =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
            const order = this.form;
            this.$http.post(api,{ data:order })
            .then((res)=>{
                console.log(res);
                if(res.data.success){
                    this.$router.push(`/checkoutpay/${res.data.orderId}`);
                }
            })
        }
    },
}
</script>