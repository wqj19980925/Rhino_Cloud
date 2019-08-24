<template>
    <div class="section">
      <!-- <section class="main">
        <transition name="fade-transform" mode="out-in"> -->
          <!-- <router-view :key="key"/> -->
          <router-view :key="key"></router-view>
        <!-- </transition>
      </section> -->
      <Consultation></Consultation>
    </div>
</template>
<script>
import Consultation from "../Consultation/index"
export default {
  components:{Consultation},
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  watch:{
    "$route":function(){
      // this.$router.go(0);
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="">

</style>
