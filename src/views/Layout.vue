<template>
  <div class="home">
    <Loading :active="isLoading"></Loading>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Front/UserNavbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed:{
    isLoading () {
      return this.$store.state.isLoading;
    },
  }
}
</script>
