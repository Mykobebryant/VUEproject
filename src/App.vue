<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//只暴露一个函数
export default{
  mounted(){
    this.$store.dispatch('getAddress')
  },
  components:{
    FooterGuide
   }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
