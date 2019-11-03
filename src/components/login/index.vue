<template>
  <div class="container">
    <div class="info col flex-item flex-justify">
      <div class="header-img">
        <img src="" alt="">
      </div>
      <p class="name">海强</p>
    </div>
    <div class="col flex-item flex-justify-start">
      <div class="item hairlines row flex-item flex-justify-between">
        <div class="title">
          手机号
        </div>
        <div class="flex-grow">
          <van-field type="number" v-model="phone" placeholder="请输入手机号"/>
        </div>
      </div>
      <div class="item hairlines row flex-item flex-justify-between">
        <div class="title">
          验证码
        </div>
        <div class="row flex-grow flex-item flex-justify-between">
          <van-field type="number" v-model="sms" :border="border" placeholder="请输入验证码" class="sms-input"/>
          <div class="border-div"></div>
          <div class="send-sms-btn" v-if="isShowBtn" @click="handleSendSms">发送验证码</div>
          <div class="send-sms-text" v-else>{{count}}秒后重发</div>
        </div>
      </div>
      <div class="item2 row flex-item flex-justify-start flex-item-start">
        <div class="title2">
          身份选择
        </div>
        <div class="label-content row flex-grow flex-item flex-justify-start flex-item-start wrap">
          <div :class="index==selectIndex?'label-active':'label'" v-for="(item,index) in labelList"
               @click="handleSelectEvent(index)">{{item.text}}
          </div>
        </div>
      </div>
    </div>

    <div class="submit-btn" @click="handleRegisterEvent">
      立即注册
    </div>
  </div>
</template>

<script>
    import {sendRegisterCode} from '@/common/utils/service'

    export default {
        name: "index",
        data() {
            return {
                border:false,
                phone: 18614084016,//手机号
                sms: '', //验证码
                isShowBtn: true, //是否展示发送按钮
                timer: null, //定时器
                count: 60,
                selectIndex: 0, //选中的下标
                labelList: [
                    {
                        text: '准妈妈',
                        id: 1
                    },
                    {
                        text: '备孕妈妈',
                        id: 2
                    },
                    {
                        text: '宝妈',
                        id: 3
                    },
                    {
                        text: '家属',
                        id: 4
                    },
                    {
                        text: '神秘人',
                        id: 5
                    }
                ]
            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
        destroyed() {
            this.clearTimer();

        },
//一些自定义方法
        methods: {
            async handleSendSms() {
                this.isShowBtn = false;
                this.startTimer(); //开始定时器
                await this.$sendRegisterCode(); //发送验证码
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
            async $sendRegisterCode() {
                let [err, data] = await sendRegisterCode({phone: this.phone});
                if (err !== null) {
                    this.$toast(err || '发送验证码失败');
                    this.clearTimer();
                    return;
                }
                ;
                this.$toast('验证码已发送');
            },
            handleSelectEvent(index) {
                this.selectIndex = index;
            },
            handleRegisterEvent(){
                console.log('handleRegisterEvent is run');
                this.$router.replace({
                    path:'/index'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $white;
  }

  .info {
    height: 217px;
    width: 100%;

    .header-img {
      width: 56px;
      height: 56px;
      background: $fill-color;

      img {
        display: block;
        width: 100%;
        height: 100%;

      }
    }

    .name {
      margin-top: 10px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFangSC;
      font-weight: 600;
      color: $color-0;
      line-height: 25px;
    }
  }

  .item {
    width: 100%;
    height: 52px;
    overflow: hidden;

    .title {
      width: 50px;
      margin-left: 16px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
    }
  }

  .hairlines {
    border-bottom: 1px solid $bg-color;
  }

  .item2 {
    width: 100%;
    height: 80px;

    .title2 {
      margin-top: 16px;
      margin-left: 16px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
    }

    .label-content {
      margin-left: 10px;
      width: 100%;
      height: 100%;
      padding-top: 16px;

      .label-active {
        margin-left: 8px;
        margin-bottom: 8px;
        width: 68px;
        height: 22px;
        line-height: 22px;
        background: linear-gradient(328deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
        border-radius: 11px;
        color: #FFFFFF;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        text-align: center;
      }

      .label {
        margin-left: 8px;
        margin-bottom: 8px;
        width: 68px;
        height: 22px;
        line-height: 22px;
        border: 1px solid rgba(200, 201, 203, 1);
        border-radius: 11px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(200, 201, 203, 1);
        font-size: 12px;
        text-align: center;
      }
    }
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

  .submit-btn {
    margin: 0 auto;
    margin-top: 52px;
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
