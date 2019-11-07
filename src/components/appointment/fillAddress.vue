<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item flex-justify-start">
        <div class="title">您好，上门面试需提供上门地址，稍后工作人员，会及时与您取得联系～</div>
        <van-field
          class="title2"
          v-model="message"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="请输入上门地址，精确到门牌号"
          show-word-limit
        />
      </div>
      <div class="control-btn" @click="handleSureEvent">
        确定
      </div>
    </div>
  </van-popup>
</template>

<script>
    export default {
        name: "fillAddress",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                message:''
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
    height: 165px;
    background: rgba(255, 255, 255, 1);
    border-radius: 13px;

    .content {
      padding: 0 15px;
      .title {
        margin-top: 20px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:17px;
      }

      .title2 {
        margin-top: 6px;
        width: 216px;
        height: 48px;
        border: 1px solid #868687;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(200,201,203,1);
        line-height:17px;
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
