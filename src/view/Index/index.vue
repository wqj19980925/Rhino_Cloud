<template>
  <div class="headMap">
    <el-row>
      <el-carousel :interval="4000" type="card" height="360px">
        <el-carousel-item v-for="(item,index) in head_RotaryMap" :key="index">
          <img class="medium" :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 行业----- -->
    <el-row>
      <el-row  class="section-industry">
        <el-row>
          <el-col :offset="3" :span="18" class="industry-title">
            <img src="@/assets/images/qiyejianzhan.png">
            <span >颠覆建站行业，树立行业标杆</span>
          </el-col>
          <el-col class="title-describe" :span="16" :offset="4">
            <span>解决企业网站营销+品牌+管理+创意4大痛点</span>
          </el-col>
          <el-row class="describehesd">
            <el-col class="describe-section" :span="6">
              <el-col class="describe-img describe-imgone">
                </el-col>
              <el-col class="describe-title">
                <span>移动5核</span>
              </el-col>
              <el-col class="des-section">
                <p>建设集移动双核云网站+手机云网站+PC云网站+APP云网站+微信云网站于一体的移动5核云网站</p>
              </el-col>
            </el-col>
            <el-col class="describe-section" :span="6">
              <el-col class="describe-img describe-imgtwo">
              </el-col>
              <el-col class="describe-title">
                <span>立体创意品牌利器</span>
              </el-col>
              <el-col class="des-section">
                <p>独创"立体创意"，开启网站创意新时代，9大立体创意，任意搭配</p>
              </el-col>
            </el-col>
            <el-col class="describe-section" :span="6">
              <el-col class="describe-img describe-imgthree">
              </el-col>
              <el-col class="describe-title">
                <span>立体创意品牌利器</span>
              </el-col>
              <el-col class="des-section">
                <p>独创"立体创意"，开启网站创意新时代，9大立体创意，任意搭配</p>
              </el-col>
            </el-col>
            <el-col class="describe-section" :span="6">
              <el-col class="describe-img describe-imgthree">
              </el-col>
              <el-col class="describe-title">
                <span>牛人众包平台</span>
              </el-col>
              <el-col class="des-section">
                <p>企业创意需求，全球创意设计实践，满足企业立体创意需求</p>
              </el-col>
            </el-col>
          </el-row>
          <el-row class="trialrow">
              <el-button class="trialbut" type="primary">了解试用</el-button>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <!-- 服务区域 -->
    <el-row class="ServiceArea"> 
      <el-row  class="section-industry">
        <el-row >
          <el-col :offset="4" :span="16" class="industry-title">
            <img src="@/assets/images/fuwuzhongjiewuye.png">
            <span class="white">服务领域</span>
          </el-col>
          <el-col class="title-describe" :span="16" :offset="4">
              <span class="white">为企业提供优质营销内容服务</span>
          </el-col>
        </el-row>
        <el-row class="service-section">
          <el-col :span="8">
            <el-row class="serive-PC">
              <div class="PC-section">
                <div class="PC-title-img">
                  <img src="~@/assets/images/MacBook.png">
                </div>
              </div>
              <p class="PC-title-text">PC网站建设</p>
              <p class="PC-describe">符合pc电脑大屏的视觉设计效果，展现企业形象，宣传产品和服务</p>
            </el-row>
          </el-col>
          <el-col class="" :span="9">
            <el-row class="phone-build">
              <div class="phone-build-img">
                <img src="@/assets/images/phone-img.png" >
              </div>
              <div class="phone-build-text">
                <p class="phone-build-text-title">
                  移动端网站建设
                </p>
                <p class="phone-build-text-section">符合智能手机用户的UI，功能设计，自适应不同屏幕尺寸，访问速度快</p>
              </div>
            </el-row>
            <el-row class="phone-build"> 
              <div class="phone-build-img">
                <img src="@/assets/images/phone-img.png" >
              </div>
              <div class="phone-build-text">
                <p class="phone-build-text-title">
                  小程序/微商城制作
                </p>
                <p class="phone-build-text-section">微信公众号，小程序开发，微商城，让您轻松开启移动营销</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6" class="classinformation">
            <el-row class="H5-modular classmodular">
              <div class="classifcation-right">
                <img src="@/assets/images/h5e.png">
              </div>
              <div class="classification-left">
                <p class="classification-title">
                  H5场景制作
                </p>
                <p class="classification-sectiontext">
                  炫酷特效的H5应用制作，开启移动分享营销
                </p>
              </div>
            </el-row>
            <el-row class="H5-modular classmodular">
              <div class="classifcation-right">
                <img src="@/assets/images/SEO.png">
              </div>
              <div class="classification-left">
                <p class="classification-title">
                  SEO优化服务
                </p>
                <p class="classification-sectiontext">
                  全球领先AI营销机器人，7天关键词排名上首页
                </p>
              </div>
            </el-row>
            <el-row class="H5-modular classmodular">
              <div class="classifcation-right">
                <img src="@/assets/images/shipin.png">
              </div>
              <div class="classification-left">
                <p class="classification-title">
                  企业视频制作
                </p>
                <p class="classification-sectiontext">
                  企业宣传片，MG动画，微电影等视频制作
                </p>
              </div>
            </el-row>
            <el-row class="H5-modular classmodular">
              <div class="classifcation-right">
                <img src="@/assets/images/neirong.png">
              </div>
              <div class="classification-left">
                <p class="classification-title">
                  营销内容服务
                </p>
                <p class="classification-sectiontext">
                  海报图，LOGO，广告图，落地页等营销内容制作
                </p>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
    <!-- 产品介绍 -->
    <el-row>
       <el-row class="section-industry">
          <el-row >
            <el-col :offset="4" :span="16" class="industry-title">
              <img src="@/assets/images/Product-icon.png">
              <span class="themecolor">产品介绍</span>
            </el-col>
            <el-col class="title-describe" :span="16" :offset="4">
              <span class="ordinary">移动品牌营销专家</span>
            </el-col>
          </el-row>
          <el-row class="product-section">
            <el-row class="product-tabnav">
               <div class="product-list-nav"> 
                 <div class="list-nav-li" @click="productswitch(index)"  :class="productindex == index ? 'picon-product':''" v-for="(item, index) in productlist" :key="index"> 
                    <img :src="item.img_url">
                    <span>{{item.name}}</span>
                    <i v-if="productindex == index"></i>
                 </div>
               </div>
            </el-row>
            <el-row class="product-sectmodular">
          
              <div class="modular-list" :class="index == (productslist.length -1) ? 'border-right':''" v-for="(item, index) in productslist" :key="index">
                <div class="modular-list-head" :style="item.background">
                  <img :src="item.product_img">
                  <p>{{item.productname}}</p>
                </div>
                <div class="modular-list-details">
                  <p>{{item.product_text}}</p>
                </div>
              </div>
            </el-row>
          </el-row>
       </el-row>
    </el-row>
  </div>
</template>
<script>
// import { request } from 'http';
export default {
  data(){
    return{
      productindex:0,
      productslist:[],
      productstemplatelist:[
        {
          background:'background:#b7b940;',
          productname:'企业官网',
          product_img:require('@/assets/images/modular1.jpg'),
          product_text:'发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#47bf82;',
          productname:'外贸专业型',
          product_img:require('@/assets/images/modular2.jpg'),
          product_text:'外贸企业，多语言版本企业网站。支持语言：English。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#6e8bd6;',
          productname:'会员服务型',
          product_img:require('@/assets/images/modular3.jpg'),
          product_text:'互联网投资企业、行业协会、行业领军企业、产业整合类企业。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#ad53c4;',
          productname:'企业电商型',
          product_img:require('@/assets/images/modular4.jpg'),
          product_text:'电商企业、传统企业转型、自建电商平台的淘企业。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#e05d6d;',
          productname:'微商专业型',
          product_img:require('@/assets/images/modular5.png'),
          product_text:'电商企业、专注移动电商企业平台、微信营销行业。支持平台：手机、微信'
        },

      ],
      // app 产品模板
      appproductlist:[
        {
          background:'background:#b7b940;',
          productname:'产品杂志型',
          product_img:require('@/assets/images/box4_1.jpg'),
          product_text:'初创期企业，产品官网。以展示和宣传产品为主要方向。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#47bf82;',
          productname:'企业官网型',
          product_img:require('@/assets/images/box4_2.jpg'),
          product_text:'发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信'
        },
      ],
      // 微信 产品模板
      weixinproductlist:[
        {
          background:'background:#b7b940;',
          productname:'粉丝互动型',
          product_img:require('@/assets/images/box5_1.jpg'),
          product_text:'发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信'
        },
        {
          background:'background:#47bf82;',
          productname:'微商专业型',
          product_img:require('@/assets/images/box5_2.jpg'),
          product_text:'电商企业、专注移动电商企业平台、微信营销行业。支持平台：手机、微信'
        }
      ],
      // SSL 模板
      sslproductlist:[
        {
          background:'background:#b7b940;',
          productname:'SSL证书',
          product_img:require('@/assets/images/box6_1.jpg'),
          product_text:'数字证书向用户展示您对隐私的重视，实现网站的可信身份认证与安全数据传输。'
        }
      ],
      smallprocsdureslist:[
          {
          background:'background:#b7b940;',
          productname:'小程序',
          product_img:require('@/assets/images/x_main_lx_ul_applets.png'),
          product_text:'小程序，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。'
        }
      ],
      // all 产品模板
      productlist:[
        {
          name:"移动云网站",
          img_url:require('@/assets/images/jp_0825_i_a10.png'),
        },
        {
          name:"手机云网站",
          img_url:require('@/assets/images/x_main_lx_ul_phone.png'),
        },
        {
          name:"PC云网站",
          img_url:require('@/assets/images/x_main_lx_ul_PC.png'),
        },
        {
          name:"App云网站",
          img_url:require('@/assets/images/x_main_lx_ul_App.png'),
        },
        {
          name:"微信云网站",
          img_url:require('@/assets/images/x_main_lx_ul_weixin.png'),
        },
        {
          name:"SSI云网站",
          img_url:require('@/assets/images/x_main_lx_ul_ssl.png'),
        },
        {
          name:"小程序",
          img_url:require('@/assets/images/x_main_lx_ul_applets.png'),
        }
      ],
      head_RotaryMap:[
        {
          url:require("@/assets/images/CgAGfFzmASaANmITAAFkCkOefP8437.jpg"),
        },
        {
          url:require("@/assets/images/CgAGS10ml4-AJLrCAAFVn-bvYJY502.jpg"),
        },
        {
          url:require("@/assets/images/CgAGS10QIZ2AF-A1AAGUVtzPAGw807.png"),
        }
      ],
    }
  },
  created() {
    this.productslist = this.productstemplatelist;
  },
  methods:{
    productswitch(index){
      this.productindex = index;
      if(index == 3){
        this.productslist = this.appproductlist;
      }else if(index == 4){
        this.productslist =  this.weixinproductlist;
      }else if(index == 5){
        this.productslist = this.sslproductlist;
      }else if(index == 6){
        this.productslist = this.smallprocsdureslist;
      } else{
        this.productslist = this.productstemplatelist;
      }
    }
  }
}
</script>
<style>
/* [class*=el-col-]{
  float: none;
} */
.headMap{
  margin-top: -2px;
}
.section-industry{
  width: 80%;
  margin: 0 auto;
  padding-top: 14px;
}
.industry-title {
  height: 80px;
}
.industry-title span{
  font-size: 45px;
  line-height: 80px;
  color: #b10;
  margin-left: 10px;
  font-weight: bold;
}
.industry-title img{
  width: 58px;
  height: 46px;
  margin-top: 18px;
}
.title-describe{
  color: #666666;
  font-size: 20px;
  text-align: center;
}
.describe-section {
  cursor: pointer;
  overflow: hidden;
  min-height: 348px;
  padding-bottom: 20px;
}
.describehesd{
  margin-top: 12%;
  margin-bottom: 20px;
}
.describe-section:hover{
  -webkit-box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.describe-section .describe-img{
  height: 138px;
  width: 138px;
  margin: 38px auto;
  border: 1px solid #eee;
  transition: all .2s linear;
  border-radius: 50%;
  -webkit-box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
  margin-bottom: 20px;
  float: none;
}
.describe-section .describe-imgone{
  background: url("~@/assets/images/box1_1.png") no-repeat center;
}
.describe-section:hover .describe-imgone{
  background: #d2000c url("~@/assets/images/box1_1a.png") no-repeat center;
}
.describe-section .describe-imgtwo{
  background: url("~@/assets/images/box1_2.png") no-repeat center;
}
.describe-section:hover .describe-imgtwo{
  background: #d2000c url("~@/assets/images/box1_2a.png") no-repeat center;
}
.describe-section .describe-imgthree{
  background: url("~@/assets/images/box1_3.png") no-repeat center;
}
.describe-section:hover .describe-imgthree{
  background: #d2000c url("~@/assets/images/box1_3a.png") no-repeat center;
}
.describe-section .describe-imgfour{
  background: url("~@/assets/images/box1_4.png") no-repeat center;
}
.describe-section:hover .describe-imgfour{
  background: #d2000c url("~@/assets/images/box1_4a.png") no-repeat center;
}
.describe-section .describe-title{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  float: none;
}
.describe-section:hover .describe-title{
  color:#b10;
}
.des-section{
  width: 80%;
  margin-left: 10%;
  text-align: center;
}
.des-section p{
  color: #666666;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
}
.trialbut{
  font-size: 20px;
  padding: 12px 50px;
}
.trialrow{
  margin-bottom: 20px;
}
.ServiceArea{
  width: 100%;
  background: #f95738 url('~@/assets/images/box2.png') no-repeat;
  overflow: hidden;
}
.service-section{
  margin-top: 40px;
}
.serive-PC{
  margin-right: 10px;
  margin-bottom: 40px;
  background: #feefec;
}
.PC-section{
  margin: 30px 20px 10px 20px;
}
.PC-title-img{
  width: 100%;
  /* height: 250px; */
  margin: 15px auto;
}
.PC-title-img img{
  width: 100%;
}
.serive-PC .PC-title-text{
  text-align: left;
  line-height: 40px;
  margin: 0 20px;
  font-weight: bold;
  font-size: 20px;
}
.serive-PC .PC-describe{
  height: 40px;
  line-height: 24px;
  text-align: left;
  width: 80%;
  margin: 0 20px;
  color: #666666;
  margin-bottom: 26px;
  font-size: 14px;
}
.phone-build{
  text-align: center;
  width: 100%;
  height: 220px;
  z-index: 2;
  background: #feefec;
  margin: 1px;
  transform: perspective(226px) rotateY(0deg);
  opacity: 1;
  transition: transform 400ms ease,opacity 400ms ease;
  -webkit-transition: transform 400ms ease,opacity 400ms ease;
  margin-bottom: 10px;
}
.phone-build-img{
  width: 157px;
  height: 206px;
  display: inline-block;
  float: left;
  margin-left: 50px;
}
.phone-build-img img{
  width: 100%;
  height: 100%;
}
.phone-build-text{
  width: 180px;
  float: left;
  display: inline-block;
  overflow: hidden;
  height: 180px;
  margin-left: 25px;
  margin-top: 40px;
}
.phone-build-text-title{
  height: 40px;
  line-height: 40px;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  color: #444444;
  font-weight: bold;
  font-size: 20px;
}
.phone-build-text-section{
  height: auto;
  line-height: 24px;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  color: #666666;
  font-size: 14px;
}
.classinformation{
 margin-left: 10px; 
}
.classinformation > .el-row{
  height: 105px;
  margin-bottom: 10px;
  width: 100%;
  background: #ffffff;
}
.classmodular > div{
  display:  inline-block;
  float: left;
}
.classifcation-right{
  width: 100px;
  height: 100%;
  background: #FFF;
  overflow: hidden;
}
.classifcation-right img{
  width: 64px;
  height: 65px;
  margin: 0 auto;
  margin-top: 20px;
}
.classification-left{
  float: left;
  width: 180px;
  text-align: left;
}
.classification-title{
  color: #444444;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  line-height: 52px;
  margin: 0;
}
.classification-sectiontext{
  color: #666666;
  font-size: 14px;
  height: 24px;
  margin: 0;
  line-height: 24px;
}
.product-tabnav{
  margin:15px 0;
}
.product-list-nav{
  width: 100%;
  height: auto;
  text-align: center;
}
.list-nav-li{
  height: 28px;
  min-width: 58px;
  display: inline-block;
  /* float: left; */
  cursor: pointer;
  margin-left: 10px;
  background: #959595;
  color:#fff;
  position: relative;
  padding: 0 10px;
  border-radius: 2px;
  line-height: 28px;
}
.list-nav-li img{
  width: 16px;
  height: 16px;
  vertical-align: text-top;
  padding-right: 5px;
}
.list-nav-li i{
  position: absolute;
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
  border-right-color: #e00112;
  top: 23px;
  left: 5px;
}
.picon-product{
  background: #e00112;
}

.product-sectmodular{
  height: 100%;
  width: 100%;  
}
.product-sectmodular > div{
  display: inline-block;
  float: left;
  
}
.modular-list{
  height: 402px;
  width: 19.8%;
  cursor: pointer;
  border: 1px #dfdfdf solid;
  border-right: 0;
}
.border-right{
  border: 1px #dfdfdf solid;
}
@keyframes backgrou
{
from  {  background: rgba(187,17,0,.3);}
to   {  background: rgba(187,17,0,1);}
}
.modular-list:hover{
  animation: backgrou .5s 1;
  animation-fill-mode: forwards;
}
.modular-list:hover .modular-list-details{
  color: #fff;
}
.modular-list:hover .modular-list-head{
  animation: backgrou .5s 1;
  animation-fill-mode: forwards;
}
/* .modular1{
  background: #b7b940;
} */
.modular-list-head{
  height: 150px;
}
.modular-list-head img{
  margin-top: 25px;
  width: 50px;
  height: 50px;
}
.modular-list-head p{
  padding: 25px 0;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
.modular-list-details{
  width: 180px;
  line-height: 24px;
  font-size: 14px;
  text-align: left;
  margin-left: 25px;
  color: #999;
  margin-top: 110px;
  display: block;
}
</style>