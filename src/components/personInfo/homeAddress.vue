<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item-start flex-justify-start">
        <div class="title">家庭住址</div>
        <van-field
          class="title2"
          v-model="message"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="请输入家庭地址，精确到门牌号"
          show-word-limit
        />
      </div>
      <div class="control-btn-container row flex-item flex-justify-between">
        <div class="cancel-btn flex-grow" @click="handleCancelEvent">
          取消
        </div>
        <div class="fill-border">

        </div>
        <div class="sure-btn flex-grow" @click="handleSureEvent">
          确定
        </div>
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
                if(!this.message){
                    this.$toast('地址不能为空');
                    return;
                };
                this.$emit('sureEvent',this.message);
            },
            handleCancelEvent(){
                this.$emit('cancelEvent');
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
        padding: 2px;
        box-sizing: border-box;
        margin-top: 6px;
        width: 216px;
        height: 65px;
        border: 1px solid #868687;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(200,201,203,1);
        line-height:17px;
      }


    }

    .control-btn-container {
      height: 40px;
      width: 100%;
      background: #FFFFFF;
      border-top: 1px solid #d3d2d3;

      .cancel-btn {
        height: 100%;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(149, 149, 149, 1);
      }

      .fill-border {
        height: 40px;
        width: 1px;
        background: #d3d2d3;
      }

      .sure-btn {
        height: 100%;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(1, 122, 255, 1);
      }
    }
  }

</style>
