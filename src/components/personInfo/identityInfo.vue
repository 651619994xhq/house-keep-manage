<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item flex-justify-start">
          <div class="header">
             身份信息
          </div>
          <div class="item" :class="curIdentityType==item.id?'item-active':''" v-for="(item,index) in IDENTITY_TYPE" :key="index" @click="handleSelectType(item.id)">
            {{item.name}}
          </div>
      </div>
      <div class="control-btn" @click="handleSureEvent">
        确定
      </div>
    </div>
  </van-popup>
</template>

<script>
    import {IDENTITY_TYPE} from '@/common/utils/constants'
    export default {
        name: "appointmentSuc",
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            selectType:{
                type:Number,
                default: 1
            }
        },
        data() {
            return {
                IDENTITY_TYPE,
                curIdentityType:''
            }
        },
        watch:{
            selectType(val){
                this.curIdentityType=val;
            },
        },
        created() {

        },
        methods: {
            handleSureEvent(){
                this.$emit('sureEvent',this.curIdentityType);
            },
            handleInput(){
                this.$emit('closeEvent')
            },
            handleSelectType(type){
               this.curIdentityType=type;
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
    min-height: 214px;
    background: rgba(255, 255, 255, 1);
    border-radius: 13px;

    .content {
      .header{
        height:18px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:18px;
        margin-top: 20px;
        margin-bottom: 4px;
      }
      .item{
        margin-top: 20px;
        height:14px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(138,143,155,1);
        line-height:14px;
        &:last-of-type{
          margin-bottom: 20px;
        }
      }
      .item-active{
        color:rgba(34,34,34,1);
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
