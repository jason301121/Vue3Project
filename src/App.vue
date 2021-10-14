<template>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/all/Footer.vue';

export default {
  components:{
    Footer,
  },
  
}
</script>
<style lang="scss">
@import "./assets/all.scss";
</style>
