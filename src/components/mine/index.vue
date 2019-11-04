<template>
  <div class="container">
    <div class="mine-header row flex-item flex-justify-start" :style="{backgroundImage:`url(${imgPath})`}" style="background-repeat:no-repeat; background-size:100% 100%;">
      <div class="img-container">
        <img src="" alt="">
      </div>
      <div class="text-container col flex-justify flex-item-start">
        <p class="title1">Seve</p>
        <p class="title2">会员编号：0000239103</p>
      </div>
    </div>
    <div class="mine-bottom-module col flex-item  flex-justify-start">
      <div class="item hairlines row flex-item flex-justify-between" @click="handleGoToPage('/person-info')">
          <div class="left-item row flex-item flex-justify-start">
              <div class="item-icon">
                <img src="~image/message@2x.png" alt="">
              </div>
              <div class="item-title">
               个人信息
              </div>
          </div>
          <div class="right-item row flex-item flex-justify-between">
            <div class="item-title1">去完善</div>
            <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
          </div>
      </div>
      <div class="item hairlines row flex-item flex-justify-between" @click="handleGoToPage('/my-collect')">
        <div class="left-item row flex-item flex-justify-start">
          <div class="item-icon">
            <img src="~image/certificate@2x.png" alt="">
          </div>
          <div class="item-title">
            我的收藏
          </div>
        </div>
        <div class="right-item row flex-item flex-justify-between">
          <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
        </div>
      </div>
      <div class="item hairlines row flex-item flex-justify-between" @click="showServicePopup">
        <div class="left-item row flex-item flex-justify-start">
          <div class="item-icon">
            <img src="~image/Service@2x.png" alt="">
          </div>
          <div class="item-title">
            我的客服
          </div>
        </div>
        <div class="right-item row flex-item flex-justify-between">
          <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
        </div>
      </div>

    </div>

    <Service :is-show="service.isShow" @cancelEvent="serviceCancelEvent" @sureEvent="serviceSureEvent" @closeEvent="serviceCloseEvent"></Service>
  </div>
</template>
<script>
  import Service from './service'
  export default {
    name: "mine",
    data() {
      return {
        imgPath:require('image/bg@2x.png'),
        service:{
            isShow:false
        }
      }
    },
    components:{
        Service
    },
    mounted() {

    },
    methods: {
        handleGoToPage(path){
            this.$router.push({
                path
            })
        },
        serviceCancelEvent(){
           this.service.isShow=false;
        },
        serviceSureEvent(){
            this.service.isShow=false;
        },
        serviceCloseEvent(){
            this.service.isShow=false;
        },
        showServicePopup(){
            this.service.isShow=true;
        }
    },
    created(){

    }
  }
</script>
<style scoped lang="scss">
  .container{
    width: 100%;
    height: 100%;
    background: #efefef;
  }
  .mine-header{
    width:375px;
    height:120px;
    /*background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);*/
     .img-container{
       width: 56px;
       height: 56px;
       border-radius:4px;
       border:1px solid rgba(255,255,255,1);
       margin-left: 16px;
       img{
         display: block;
         width: 100%;
         height: 100%;
       }
     }
    .text-container{
      margin-left: 11px;
    }
    .title1{
      font-size:18px;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(255,255,255,1);
    }
    .title2{
      font-size:12px;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
  }
  .mine-bottom-module{
    width: 100%;
    .item{
      width: 100%;
      height: 52px;
      background: $white;
    }
    .hairlines{
      border-bottom: 1px solid #efefef;
    }
    .left-item{
      margin-left: 16px;

      .item-icon{
        width: 18px;
        height: 18px;
        margin-right: 10px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .item-title{
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(54,61,79,1);
      }
    }
    .right-item{
      margin-right: 18px;
      .item-title1{
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(223,83,83,1);
        margin-right: 6px;
      }
      .item-title2{
        width: 12px;
        height: 14px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>
