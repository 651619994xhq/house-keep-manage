<template>
  <van-popup v-model="isShow" :close-on-click-overlay="isClickOverlay" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item flex-justify">
        <div class="title">预约成功</div>
        <div class="title2">稍后将有专属管家，为您提供贴心服务</div>
      </div>
      <div class="control-btn" @click="handleSureEvent">
       确定
      </div>
    </div>
  </van-popup>
</template>

<script>
    export default {
        name: "appointmentSuc",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isClickOverlay:false
            }
        },
        created() {

        },
        methods: {
            handleSureEvent(){
                this.$emit('sureEvent')
            },
            handleInput(){
                this.$emit('closeEvent')
            },

        },
    }
</script>

<style scoped lang="scss">
  .popup-box{
    border-radius: 13px;
  }
  .service-box {
    width: 245px;
    height: 148px;
    background: rgba(255, 255, 255, 1);
    border-radius: 13px;

    .content {
      .title {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }

      .title2 {
        margin-top: 8px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(148,158,164,1);
      }


    }

    .control-btn {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-top: 1px solid #D3D2D3;
      color: #959595;
      font-size:15px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }

</style>
