<template>
<Navbar></Navbar>
<router-view></router-view>
</template>

<script>
import Navbar from '@/components/Back/Navbar.vue';

export default {
    components:{
        Navbar
    },
    created() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)buyFresh\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        this.$http.defaults.headers.common['Authorization'] = token;
        const api=`${process.env.VUE_APP_API}api/user/check`
            this.$http.post(api,this.user)
            .then((res)=>{
                if(!res.data.success){
                    // this.$router.push('/login');
                }
            });
    },
}
</script>