<template>
  <div>
    <myheader></myheader>
    <mysection></mysection>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './layout/header'
import mysection from './layout/section'
import myfooter from './layout/footer'
export default {
  components: {
    myheader, mysection, myfooter
  },
  data () {
    return {
      state:0,
      screenWidth: document.body.clientWidth,   // 这里是给到了一个默认值 （这个很重要）
    }
  },
  created(){
    // this.getwidthtwo();
  },
  mounted () {
    this.getwidth();
  },
  methods:{
    // getwidthtwo(){
    //   console.log('123werq')
    //   var scrwidth = document.getElementsByClassName("head-nav");
    //   if(document.body.clientWidth < 1280){
    //     // console.log('122lkdslalalask',scrwidth[0]);
    //     for(var i =0;i<scrwidth.length;i++){
    //       scrwidth[i].style.width = '96%';
    //       console.log('dolajdd');
    //     }
    //   }else{
    //     console.log('----0000');
    //     for(var i =0;i<scrwidth.length;i++){
    //       scrwidth[i].style.width = '80%';
    //     }
    //   }
    // },
    getwidth(){
      const that = this;
      window.onresize = () => {
        return (() => {
          that.state = 1;
          // console.log('123321');
          var scrwidth = document.getElementsByClassName("head-nav");
          if(document.body.clientWidth < 1280){
            for(var i =0;i<scrwidth.length;i++){
              scrwidth[i].style.width = '96%';
              // console.log('12346789');
            }
          }else{
            for(var i =0;i<scrwidth.length;i++){
              scrwidth[i].style.width = '80%';
            }
          }
        })()
      }
      if(that.state == 0){
         var scrwidth = document.getElementsByClassName("head-nav");
        // console.log("scrwidth",document.body.clientWidth);
        if(document.body.clientWidth < 1280){
          for(var i =0;i<scrwidth.length;i++){
            scrwidth[i].style.width = '90%';
            // console.log('12346789');
          }
        }else{
          for(var i =0;i<scrwidth.length;i++){
            scrwidth[i].style.width = '80%';
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
ul{
  margin: 0;
}
img{
  border: 0 none;
  vertical-align: top;
}
.white{
  color: #ffffff !important;
}
.themecolor{
  color: #d2000c;
}
.ordinary{
  color: #666666;
}
</style>
