<template>
  <div id="header-box" class="header-box">
    <el-row >
      <el-row class="head-relevant"> 
        <el-col>阿尼</el-col>
      </el-row>
      <el-row>
        <el-row class="head-nav">
          <el-col :span="8">
            <router-link to="/">
              <img class="logo-img"  src="@/assets/images/logo_top.png">
            </router-link>
          </el-col>
          <el-col class="head_empty" :span="8">

          </el-col>
          <el-col :span="8">
            <p class="head-contact-infor">销售热线4000 998 667售后热线400 0000 366</p>
          </el-col>
        </el-row>
        <el-row class="head-title">
          <el-row class="head-nav nav-title">
            <el-menu :default-active="activeIndex" class="el-menu-demo title-text"   active-text-color="#b10" mode="horizontal" @select="handleSelect">
              <el-menu-item index="Productpage"  >产品首页</el-menu-item>
              <el-menu-item index="servicecontent" >服务内容</el-menu-item>
              <el-menu-item index="hostcommodities" >热卖商品</el-menu-item>
            </el-menu>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return{
          activeIndex:'Productpage',
        }
    },
    watch:{
      $route:function(newVal,oldVal){
        console.log(newVal,oldVal);
      },
      // $route(to,path){
      //   console.log(to,path)
      // }
    },
    mounted(){
      this.getPath();
    },
    methods:{
      getPath(){
        var URled;
        URled = window.location.href.split('#/')[1].split('/');
        // console.log(URled);
        this.activeIndex = URled.join("/");
      },
      open (path) {
        this.$router.push({
          path: '/'+path,
        });
      },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.open(key);
      }
    }
}
</script>
<style>

</style>
