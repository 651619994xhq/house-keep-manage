<template>
  <div class="container">
    <div class="mine-header row flex-item flex-justify-start" :style="{backgroundImage:`url(${imgPath})`}"
         style="background-repeat:no-repeat; background-size:100% 100%;">
      <div class="img-container">
        <img src="" alt="">
      </div>
      <div class="text-container col flex-justify flex-item-start">
        <p class="title1">{{userInfo.nickName}}</p>
        <p class="title2">会员编号：{{userInfo.code}}</p>
      </div>
    </div>
    <div class="item row flex-item flex-justify-between" @click="handleGoUpdatePhone">
      <div class="title1">
        联系电话
      </div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item-title1">{{userInfo.phone}}</div>
        <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>

    <div class="item row flex-item flex-justify-between" @click="handleShowIdentity">
      <div class="title1">
        身份信息
      </div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item-title1">{{userInfo.identityType | IDENTITY_TYPE_FILTER}}</div>
        <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>

    <div class="item row flex-item flex-justify-between">
      <div class="title1">
        家庭住址
      </div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item-title1">{{userInfo.address}}</div>
        <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>


    <div class="item row flex-item flex-justify-between" @click="handleShowBirthday">
      <div class="title1">
        您的生日
      </div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item-title1">{{userInfo.birthday}}</div>
        <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>

    <div class="item row flex-item flex-justify-between" @click="handleShowBirthday">
      <div class="title1">
        您宝贝的生日
      </div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item-title1">{{userInfo.babyBirthday}}</div>
        <div class="item-title2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>
    <identityInfo :is-show="identityInfoData.isShow" @sureEvent="handleIdentitySure"></identityInfo>
    <birthday :is-show="birthdayData.isShow" @sureEvent="handleBirthdaySure" @cancelEvent="handleBirthdayCancel" @closeEvent="handleBirthdayClose"></birthday>
  </div>
</template>
<script>
    import identityInfo from "./identityInfo";
    import birthday from '@/common/components/birthday';
    import {getMyInfo,updateUserInfo} from '@/common/utils/service'

    export default {
        name: "personInfo",
        data() {
            return {
                imgPath: require('image/bg@2x.png'),
                identityInfoData: {
                    isShow: false
                },
                birthdayData: {
                    isShow: false
                },
                userInfo:{},

            }
        },
        components: {
            identityInfo,
            birthday
        },
        mounted() {
            this.$getMyInfo();
        },
        methods: {
            //获取自己的信息
            async $getMyInfo(){
                let [err,data]=await getMyInfo();
                if(err!==null){
                    this.$toast(err||'系统错误');
                    return ;
                };
                this.userInfo=data||{};
            },
            handleGoUpdatePhone(){
              this.$router.push({
                 path:'/update-phone'
              });
            },
            handleIdentitySure() {
                this.identityInfoData.isShow = false;
            },
            handleShowIdentity() {
                this.identityInfoData.isShow = true;
            },
            handleShowBirthday(){
                this.birthdayData.isShow=true;
            },
            hideBirthday(){
                this.birthdayData.isShow=false;
            },
            handleBirthdaySure(time){
                console.log('handleBirthdaySure==>',time);
                this.hideBirthday();
            },
            handleBirthdayCancel(){
                this.hideBirthday();
            },
            handleBirthdayClose(){
                this.hideBirthday();
            }

        },
        created() {

        }
    }
</script>
<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #efefef;
  }

  .mine-header {
    width: 375px;
    height: 120px;
    /*background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);*/
    .img-container {
      width: 56px;
      height: 56px;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 1);
      margin-left: 16px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .text-container {
      margin-left: 11px;
    }

    .title1 {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFangSC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    .title2 {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }

  .item {
    width: 100%;
    height: 52px;
    background: #FFFFFF;
    border-bottom: 1px solid #cccccc;

    .title1 {
      margin-left: 16px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(54, 61, 79, 1);
    }

    .title2 {
      margin-right: 16px;

      .item-title1 {
        margin-right: 4px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(138, 143, 155, 1);
      }

      .item-title2 {
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
