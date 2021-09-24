<template>
<Navbar></Navbar>
<Messages></Messages>
<router-view></router-view>
</template>

<script>
import emitter from '@/methods/emitter';
import Navbar from '@/components/Back/Navbar.vue';
import Messages from '@/components/all/MessageList.vue';

export default {
    components:{
        Navbar,
        Messages
    },
    provide() {
        return {
            emitter,
        };
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