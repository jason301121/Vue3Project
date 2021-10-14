<template>
    <div class="container mt-5">
        <form class="row justify-content-center" @submit.prevent="signIn">
        <div class="col-md-6">
            <h1 class="mb-3 fw-bold text-center">後台管理</h1>
            <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
            />
            </div>
            <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
            />
            </div>
        
            <div class="text-end my-4">
            <button class="main_btn py-2 px-3 fs-5" type="submit">登入</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                username:'',
                password:'',
            }
        }
    },
    methods: {
        signIn(){
            const api=`${process.env.VUE_APP_API}admin/signin`
            this.$http.post(api,this.user)
            .then((res)=>{
                if(res.data.success){
                const { token,expired } = res.data;
                document.cookie = `buyFresh=${token};expires=${new Date(expired)}`;
                this.$router.push('/dashboard/productManage');
                this.$swal({
                    title:`後臺登入成功`,
                    icon: 'success',
                })
                }
            })
        }
    },
}
</script>