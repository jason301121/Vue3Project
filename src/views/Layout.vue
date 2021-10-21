<template>
  <div class="home">
    <Loading :active="isLoading"></Loading>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
  <Footer></Footer>

</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue';
import Footer from '@/components/all/Footer.vue';


export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
  computed:{
    isLoading () {
      return this.$store.state.isLoading;
    },
  }
}
</script>
