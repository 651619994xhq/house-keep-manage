<template>
  <div class="container">
    <div class="col flex-item flex-justify-start update-container">
      <div class="row flex-item flex-justify-start item">
          <div class="title1">
             新手机号
          </div>
        <van-field type="tel" v-model="phone" :border="border" placeholder="请输入手机号" class="update-phone"/>
      </div>
      <div class="item hairlines row flex-item flex-justify-between">
        <div class="title1">
          验证码
        </div>
        <div class="row flex-grow flex-item flex-justify-between">
          <van-field type="number" v-model="sms" :border="border" placeholder="请输入验证码" class="sms-input"/>
          <div class="border-div"></div>
          <div class="send-sms-btn" v-if="isShowBtn" @click="handleSendSms">发送验证码</div>
          <div class="send-sms-text" v-else>{{count}}秒后重发</div>
        </div>
      </div>
    </div>

    <div class="submit-btn" @click="handleSubmitEvent">
      确定
    </div>
  </div>
</template>

<script>
    import {updatePhone,sendUpdatePhoneCode} from '@/common/utils/service'
    export default {
        name: "updatePhone",
        data() {
            return {
                border:false,
                phone:'18614084016',
                sms:'',
                isShowBtn:true,
                count:60,
                timer:null
            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
        destroyed(){
            this.clearTimer();
        },
//一些自定义方法
        methods: {
            isPoneAvailable($poneInput) {
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if (!myreg.test($poneInput)) {
                    return false;
                } else {
                    return true;
                }
            },
            async $updatePhone(){
                if(!this.phone){this.$toast('请输入手机号');return ;};
                if(!this.isPoneAvailable(this.phone)){this.$toast('请输入正确的手机号');return ;};
                if(!this.sms){this.$toast('请输入验证码');return ;};
                this.$loading();
                let [err,data]=await updatePhone({checkCode:this.sms,phone:this.phone});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                this.$clear();
            },
            async handleSendSms() {
                let $phone=this.phone;
                if(!$phone){this.$toast('请输入手机号');return ;};
                if(!this.isPoneAvailable($phone)){this.$toast('请输入正确的手机号');return ;};
                this.isShowBtn = false;
                let [err,data]=await sendUpdatePhoneCode({phone:$phone});
                if(err!==null){this.$toast(err||'系统错误');this.isShowBtn=true;return ;};
                this.$toast('验证码已发送');
                this.startTimer(); //开始定时器
            },
            startTimer() {
                this.count = 60;
                this.timer = setInterval(() => {
                    if (this.count == 0) {
                        this.clearTimer();
                        this.isShowBtn = true;
                    }
                    this.count -= 1;
                }, 1000);
            },
            clearTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                ;
                this.count = 60;
                this.isShowBtn = true;
            },
            handleSubmitEvent(){
                this.$updatePhone();

            }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    overflow: hidden;
  }
  .update-container{
     margin-top: 10px;
     width: 100%;
     background: #ffffff;
     overflow: hidden;
    .item{
      width: 100%;
      height: 52px;
      padding-left: 16px;
      border-bottom: 1px solid #f7f7f7;
      .title1{
        width: 58px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(54,61,79,1);

      }
      .update-phone{
        width: 200px;
      }
    }
  }


  .hairlines {
    border-bottom: 1px solid $bg-color;
  }
  .sms-input {
    width: 200px;
    border-bottom: none;
  }

  .border-div {
    height: 20px;
    width: 1px;
    background: $color-9;
  }

  .send-sms-btn {
    height: 52px;
    width: 76px;
    line-height: 52px;
    margin-right: 16px;
    color: $blue;
  }

  .send-sms-text {
    height: 52px;
    width: 76px;
    line-height: 52px;
    margin-right: 16px;
  }

  .submit-btn{
    margin: 0 auto;
    margin-top: 50px;
    width: 296px;
    height: 42px;
    background: linear-gradient(328deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
    border-radius: 21px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 42px;
    text-align: center;
  }
</style>
