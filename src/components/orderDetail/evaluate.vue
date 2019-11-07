<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item-start flex-justify">
        <div class="title">您好，您对我们很重要。</div>
        <div class="title2 row flex-item flex-justify-start">面试评分：<van-rate v-model="rateValue" :size="size" @change="handleChangeRate" class="rate"/></div>
        <div class="evaluate-container">
          <input type="text" placeholder="请填写您的评价，谢谢" v-model="evaluateText" class="evaluate-input">
        </div>
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
        name: "evaluate",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                rateValue:5,
                size:16,
                evaluateText:'',
            }
        },
        created() {

        },
        methods: {
            handleCancelEvent(){
                this.$emit('cancelEvent');
            },
            handleSureEvent(){
                if(!this.evaluateText){
                    this.$toast('评论不能为空');
                    return;
                };
                this.$emit('sureEvent',{star:this.rateValue,text:this.evaluateText});
            },
            handleInput(){
                this.$emit('closeEvent');
            },
            handleChangeRate(value){
                console.log('handleChangeRate==>',value);
                this.rateValue=value;
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
        height: 18px;
        line-height: 18px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
      }

      .title2 {
        margin-top: 6px;
        height: 18px;
        font-size: 12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        .rate{
          margin-top: 2px;
        }
      }

      .evaluate-container{
        margin-top: 18px;
        width: 215px;
        height: 24px;
        border: 1px solid #868687;
        .evaluate-input{
          padding-left: 4px;
          display: block;
          width: 100%;
          height: 100%;
          border: none;
          font-size: 12px;
          &::placeholder{
            color: #C8C9CB;
          }
        }
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
