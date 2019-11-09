<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item flex-justify">
        <div class="title">您好，您对我们很重要。</div>
        <div class="title2">是否取消预约？</div>
      </div>
      <div class="control-btn row flex-item flex-justify-between">
        <div class="item-btn cancel-btn flex-grow" @click="handleCancelEvent">取消</div>
        <div class="fill-border"></div>
        <div class="item-btn sure-btn flex-grow" @click="handleSureEvent">确定</div>
      </div>
    </div>
  </van-popup>
</template>

<script>
    export default {
        name: "apponitPopup",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            handleCancelEvent(){
                this.$emit('cancelEvent')
            },
            handleSureEvent(){
                this.$emit('sureEvent')
            },
            handleInput(){
                this.$emit('closeEvent')
            }

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
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
      }

      .title2 {
        margin-top: 4px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
      }


    }

    .control-btn {
      width: 100%;
      height: 40px;
      border-top: 1px solid #D3D2D3;
      .item-btn{
        line-height: 40px;
        text-align: center;
        color: #959595;
        font-size:15px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
      }
      .sure-btn{
        background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
      .fill-border{
        width: 1px;
        height: 100%;
        background: #D3D2D3;
      }
    }
  }

</style>
