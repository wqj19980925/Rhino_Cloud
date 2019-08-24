<template>
    <div>
        <el-row class="consultation">
            <el-col>
                <span class="consul-icon"></span>
                <span class="consul-text">在线咨询</span>
            </el-col>
        </el-row>
        <el-row class="click-show" @click.native="conlut_show = !conlut_show" :class="!conlut_show ? 'conlut-hide' : 'conlut-show'">
            <el-col>
                <i class="el-icon-d-arrow-left"></i>
                <span>咨询</span>
            </el-col>
        </el-row>
        <el-row class="consulta-promotion" :class="conlut_show ? 'conlut-hide' : 'conlut-show'">
            <el-row class="promotion-img">
                <i class="el-icon-close" @click="conlut_show = false"></i>
                <img src="@/assets/images/conlut-icon.png">
            </el-row>
            <el-row class="conult-ul" >
                <ul>
                    <li>
                        <a class="phone-con-a" @mouseleave='phone_show = false' @mouseenter='phone_show = true'>
                            <i  class="phone-consultation"></i>
                            <p>电话咨询</p> 
                        </a>
                        <div v-if="phone_show"  class="phone-text">
                            <i></i>
                            <span>093-2091912</span>
                        </div>
                    </li>
                    <li>
                        <a class="phone-con-a">
                            <i  class="QQ-consultation"></i>
                            <p>QQ咨询</p>
                        </a>
                    </li>
                    <li>
                        <a class="phone-con-a"  @mouseleave='weixin_show = false' @mouseenter='weixin_show = true'>
                            <i  class="weixin-consultation"></i>
                            <p>微信咨询</p>
                        </a>
                        <div v-if="weixin_show" class="weixin-text">
                            <i></i>
                            <p>扫一扫，加微信</p>
                        </div>
                    </li>
                    <li class="pxx">
                        <a>
                            <img src="@/assets/images/jianzhansong_1.png"/>
                        </a>
                    </li>
                    <li>
                        <a class="phone-con-a">
                            <i  class="webmake-consultation"></i>
                            <p>网站制作</p>
                        </a>
                    </li>
                    <li>
                        <a class="phone-con-a">
                            <i  class="smallprocedures-consultation"></i>
                            <p>小程序开发</p>
                        </a>
                    </li>
                </ul>
            </el-row>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone_show:false,
            weixin_show:false,
            conlut_show:true,
        }
    },
    methods:{
        kejd(){
            console.log('kejd')
        }
    }
}
</script>
<style >
    .consultation{
        position: fixed;
        left: 10px;
        bottom: 10%;
        width: 68px;
        z-index: 99;
        height: 68px;
        background: #fff;
        border: 1px solid #ccc;
        padding-top: 10px;
        cursor: pointer;
    }
    .consul-icon{
        background: url('~@/assets/images/qq.png') no-repeat;
        background-size: 26px 26px;
        display: block;
        width: 26px;
        height: 26px;
        margin: 0 auto;
    }
    .consul-text{
        text-align: center;
        color: #1e2330;
        line-height: 30px;
        font-size: 14px;
    }
    .consulta-promotion{
        position: fixed;
        right: 0;
        top: 10%;
        z-index: 99;
    }
    .promotion-img{
        width: 90px;
        height: 100px;
        cursor: pointer;
    }
    .promotion-img img{
        width: 112%;
        height: 84%;
    }
    .promotion-img .el-icon-close{
        float: right;
        width: 20px;
        text-align: center;
    }
    .promotion-img .el-icon-close:hover{
        background: rgba(0,0,0,.2);
        color: #fff;
    }
    
    .conult-ul{
        margin-top: 5px;
        position: relative;
        border: 1px solid #FFF;
        border-radius: 4px;
        box-shadow: 0px 2px 27px 0px rgba(0, 0, 0, 0.14);
        background: #FFF;
    }
    .conult-ul ul{
        margin: 0;
    }
    .conult-ul ul li{
        position: relative;
        transition: all 0.6s;
        width: 70px;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
        margin: 1px;
    }
    .conult-ul ul li:hover{
        background: #c7000b;
    }
    .conult-ul ul .pxx:hover{
        background: none;
    }
    .pxx img{
        width: 100%;
        height: 100%;
    }
    .conult-ul ul li p{
        display: block;
        margin-top: 4px;
        line-height: 1;
        font-size: 13px;
        margin-bottom: 5px;
    }
    .conult-ul ul li i{
        display: block;
        width: 26px;
        height: 26px;
        margin: 0 auto;
    }
    .phone-consultation{
        background: url("~@/assets/images/dianhua_2.png") no-repeat;
        background-size: 100% 100%;
    }
    
    .conult-ul ul li:hover .phone-consultation {
        background: url("~@/assets/images/dianhua_3.png") no-repeat;
    }
    .QQ-consultation{
        background: url("~@/assets/images/QQ_1.png") no-repeat;
        background-size: 100% 100%;
    }
    .conult-ul ul li:hover .QQ-consultation {
        background: url("~@/assets/images/QQ_2.png") no-repeat;
    }
    .weixin-consultation{
        background: url("~@/assets/images/weixin_1.png") no-repeat;
        background-size: 100% 100%;
    }
    .conult-ul ul li:hover .weixin-consultation {
        background: url("~@/assets/images/weixin_2.png") no-repeat;
    }

    .webmake-consultation{
        background: url("~@/assets/images/wangzhan_1.png") no-repeat;
        background-size: 100% 100%;
    }
    .conult-ul ul li:hover .webmake-consultation {
        background: url("~@/assets/images/wangzhan_2.png") no-repeat;
    }
    .smallprocedures-consultation{
        background: url("~@/assets/images/wangzhan_1.png") no-repeat;
        background-size: 100% 100%;
    }
    .conult-ul ul li:hover .smallprocedures-consultation {
        background: url("~@/assets/images/wangzhan_2.png") no-repeat;
    }
    .conult-ul ul li:hover  p{
        color: #fff;
    }
    .phone-text{
        width: 240px;
        height: 58px;
        line-height: 58px;
        background: #c7000b;
        border-radius: 3px;
        position: absolute;
        right: 95px;
        top: 0;
        font-size: 0;
        letter-spacing: -3px;
        /* display: none; */
    }
    .weixin-text{
        position: absolute;
        left: -170px;
        top: -58px;
        background: #c7000b;
        width: 160px;
        height: 190px;
    }
    .conult-ul ul li .weixin-text i{
        height: 140px;
        width: 90%;
        margin: 10px auto;
        text-align: center;
        background: url('~@/assets/images/erweima.png') no-repeat;
        background-size: 100% 100%;
        display: block;
    }
    .weixin-text p{
        color: #FFF;
        font-size: 16px;
        text-align: center;
    }    
    .conult-ul ul li .phone-text i{
        display: inline-block;
        width: 27px;
        height: 25px;
        background: url("~@/assets/images/dianhua_3.png") no-repeat;
        margin-left: -50px;
        margin-right: 8px;
    }
    .phone-text span{
        display: inline-block;
        font-size: 21px;
        font-weight: bold;
        color: #fff;
        letter-spacing: normal;
    }
    
    .conlut-show{
        animation: consushow .35s 1;
        -webkit-animation:consushow .35s forwards 1; /*Safari and Chrome*/
    }
    .conlut-hide{
        animation: consuhide .35s 1;
        -webkit-animation:consuhide .35s forwards 1; /*Safari and Chrome*/
    }
    .click-show{
        position: fixed;
        z-index: 99;
        top: 50%;
        right: -100px;
        padding: 10px 5px;
        background: #b10;
        color: #fff;
        border-radius: 6px 0 0 6px;
        cursor: pointer;
    }
    @keyframes consushow{
        0%{
        right: 0px;
        }
        100% { 
            right: -100px;
            display: none;
        }
    }
    @keyframes consuhide{
        0%{
            right: -100px;
        }
        100% { 
            right: 0px;
            display: block;
        }
    }
</style>
