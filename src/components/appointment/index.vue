<template>
  <div class="container">
    <resume :itemInfo="itemData"></resume>
    <div class="interview-container col flex-item-start flex-justify-start">
      <div class="title">
        请选择面试方式
      </div>
      <div class="title2 row flex-item flex-justify-start">
        <div class="item" @click="handleClickInterview(1)">
          <div class="item-normal" v-if="selectInterviewType!=1">
            到店面试
          </div>
          <div class="item-active" v-if="selectInterviewType==1">
            <div class="inner-item">
              <span class="purple-color">到店面试</span>
            </div>
          </div>
        </div>
        <div class="item" @click="handleClickInterview(2)">
          <div class="item-normal" v-if="selectInterviewType!=2">
            上门面试
          </div>
          <div class="item-active" v-if="selectInterviewType==2">
            <div class="inner-item">
              <span class="purple-color">上门面试</span>
            </div>
          </div>
        </div>
        <div class="item" @click="handleClickInterview(3)">
          <div class="item-normal" v-if="selectInterviewType!=3">
            视频面试
          </div>
          <div class="item-active" v-if="selectInterviewType==3">
            <div class="inner-item">
              <span class="purple-color">视频面试</span>
            </div>
          </div>
        </div>
      </div>
      <div class="title3 row flex-item flex-justify-start">
        <div class="text1"><span v-if="selectInterviewType==1">到店面试地址：</span><span v-if="selectInterviewType==2">上门面试：</span><span v-if="selectInterviewType==3">视频面试：</span></div>
        <div class="text2"><span v-if="selectInterviewType==1">北京市朝阳区首城国际C座727室</span><span v-if="selectInterviewType==2">请添加客服微信号Baiming-duoduo了解详情~</span><span v-if="selectInterviewType==3">请添加客服微信号Baiming-duoduo了解详情~</span></div>
      </div>
      <div class="copy-btn-container row flex-item flex-justify-end">
         <div class="copy-btn" v-clipboard:copy="copyAddress" v-clipboard:success="onCopy" v-clipboard:error="onError" v-if="selectInterviewType==1">
            <span>复制地址</span>
         </div>
         <div class="copy-btn" v-clipboard:copy="copyWeixin" v-clipboard:success="onCopy" v-clipboard:error="onError" v-if="selectInterviewType==2||selectInterviewType==3">
          <span>复制微信号</span>
         </div>
      </div>

    </div>
    <div class="appointment-btn row flex-item flex-justify-between" @click="handleShowTime">
      <div class="title1">预约面试时间</div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item1" :class="selectTime?'item1-active':''">{{selectTime?selectTime:'请选择'}}</div>
        <div class="item2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>
    <div class="other-ask col flex-item-start flex-justify-start">
      <div class="title1">
        其他要求
      </div>
      <van-field
        class="text-area"
        v-model="message"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="如有其他要求，请您备注，会根据需求为您匹配阿姨"
        show-word-limit
      />
    </div>
    <div class="submit-container col flex-item flex-justify">
      <div class="submit-btn" @click="handleSubmit">
        立即预约
      </div>
    </div>

    <appointTime :nowTime="popup.nowTime" :isShow="popup.isShow" :data="popup.data" @closeEvent="handleCloseEvent('appointTime')" @cancelEvent="handleTimeCancel" @sureEvent="handleTimeSure"></appointTime>
    <appointmentSuc :is-show="appointmentSucData.isShow" @sureEvent="handleAppointSureEvent"></appointmentSuc>
    <appointmentError :is-show="appointmentErrorData.isShow" @sureEvent="handleAppointErrorSureEvent" @closeEvent="handleAppointErrorCloseEvent"></appointmentError>
    <fillAddress :is-show="fillAddressData.isShow" @sureEvent="handleFillAddressSureEvent" @closeEvent="handleFillAddressCloseEvent"></fillAddress>
  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import appointTime from './appointTime'
    import appointmentSuc from "./appointmentSuc";
    import appointmentError from "./appointmentError";
    import fillAddress from "./fillAddress";
    import {getEmployeeBaseInfo,appointInterview,getOccupyTime} from '@/common/utils/service'

    export default {
        name: "apponitment",
        data() {
            return {
                popup: {
                    isShow: false,
                    nowTime:'',
                    data:[]
                },
                appointmentSucData:{
                    isShow:false
                },
                appointmentErrorData:{
                    isShow:false
                },
                fillAddressData:{
                    isShow:false
                },
                selectTime:'',
                realTime:'',
                selectInterviewType:1, //面试方式1到点 2上门 3视频
                message:'',
                itemData:{},
                copyAddress:'北京市朝阳区首城国际C座727室',
                copyWeixin:'Baiming-duoduo'


            }
        },
//组件
        components: {
            resume,
            appointTime,
            appointmentSuc,
            appointmentError,
            fillAddress
        },
//初始化数据
        created() {
           this.$getEmployeeBaseInfo();
        },
//一些自定义方法
        methods: {
            async showPopup() {
                let auntId=this.$route.query.id;
                if(!auntId){
                    this.$toast('auntId is null');
                  return ;
                };
                this.$loading();
                let [err,data]=await getOccupyTime({auntId});
                if(err!==null){this.$clear();this.$toast(err||'系统错误');return ;};
                this.$clear();
                this.popup.data=data||[];
                this.popup.isShow = true;
            },
            hidePopup() {
                this.popup.isShow = false;
            },
            handleAppointSureEvent(){
                this.appointmentSucData.isShow=false;
                this.$router.go(-1);
            },
            handleAppointErrorSureEvent(){
                this.appointmentErrorData.isShow=false;
            },
            handleAppointErrorCloseEvent(){
                this.appointmentErrorData.isShow=false;
            },
            handleCloseEvent(type){
                if(type=='appointTime'){
                    this.popup.isShow=false;
                };
            },
            handleTimeCancel(){
               this.hidePopup();
            },
            handleTimeSure(time,time2){
               console.log(time);
               console.log('time2==>',time2);
               this.selectTime=time;
               this.realTime=time2;
               this.hidePopup();
            },
            handleShowTime(){
                this.popup.nowTime=new Date().getTime();
                this.showPopup();
            },
            async handleFillAddressSureEvent(value){
                this.$loading({duration: 0,forbidClick: true,message: "提交中..."});
                let auntId=this.$route.query.id,interviewType=this.selectInterviewType,interviewTime=this.realTime
                    ,remark=this.message,interviewAddress=value;
                let [err,data]=await appointInterview({auntId,interviewType,interviewTime,remark,interviewAddress});
                if(err!==null){this.$clear();this.$toast(err||'系统错误');this.appointmentErrorData.isShow=true;;return ;};
                this.$clear();
                this.appointmentSucData.isShow=true;
                this.fillAddressData.isShow=false;
            },
            handleFillAddressCloseEvent(){
                this.fillAddressData.isShow=false;
            },
            handleClickInterview(type){
                this.selectInterviewType=type;
            },
            async handleSubmit(){
                if(!this.selectTime){
                    this.$toast('请选择预约时间');
                    return
                };
                if(this.selectInterviewType==2){
                    this.fillAddressData.isShow=true;
                    return ;
                }
                this.$loading({duration: 0,forbidClick: true,message: "提交中..."});
                let auntId=this.$route.query.id,interviewType=this.selectInterviewType,interviewTime=this.realTime
                    ,remark=this.message,interviewAddress='';
                let [err,data]=await appointInterview({auntId,interviewType,interviewTime,remark,interviewAddress});
                if(err!==null){this.$clear();this.$toast(err||'系统错误');this.appointmentErrorData.isShow=true;;return ;};
                this.$clear();
                this.appointmentSucData.isShow=true;

            },
            async $getEmployeeBaseInfo(){
                let id=this.$route.query.id;
                this.$loading();
                let [err,data]=await getEmployeeBaseInfo({auntId:id});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                this.initWithData(data);
                this.$clear();

            },
            initWithData(data){
                this.itemData=data||{};
                console.log(this.itemData)
            },
            onCopy(e){
                // console.log('copy is run',e);
                this.$toast.success('复制成功');
            },
            onError(){
                console.log('copy is error');
                this.$toast.success('复制失败');
            },

        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    background: #f7f7f7;
    overflow: hidden;
    padding-bottom: 100px;
  }

  .interview-container {
    margin-top: 10px;
    background: $white;
    width: 100%;
    padding-left: 16px;
    min-height: 140px;

    .title {
      margin-top: 16px;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 600;
      color: #000212;
    }

    .title2 {
      margin-top: 16px;
      width: 100%;
      height: 30px;

      .item {
        width: 102px;
        height: 28px;
        line-height: 28px;
        border-radius: 6px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        text-align: center;
        margin-right: 19px;
        box-sizing: border-box;
        .item-normal{
            width: 100%;
            height: 100%;
            color: rgba(0, 2, 18, 1);
            background: rgba(241, 241, 241, 1);
            border: 1px solid rgba(241, 241, 241, 1);
            box-sizing: border-box;
            border-radius: 6px;
        }

        .item-active{
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 6px;
          padding: 1px;
          background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
          .inner-item{
            width: 100%;
            height: 100%;
            border-radius: 6px;
            text-align: center;
            background: #FFFFFF;
            font-family: PingFangSC-Regular, PingFang SC;
          }

        }

      }
    }

    .title3 {
      margin-top: 16px;
      height: 20px;
      line-height: 20px;
      text-align: left;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;

      .text1 {
        color: rgba(138, 143, 155, 1);
      }

      .text2 {
        color: #3B445C;
      }
    }
    .copy-btn-container{
      margin-top: 10px;
      margin-bottom: 16px;
      height: 28px;
      width: 100%;
      padding-right: 16px;
      box-sizing: border-box;
      overflow: hidden;
      .copy-btn{
        width: 102px;
        height: 28px;
        line-height: 28px;
        border-radius: 6px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        text-align: center;
        margin-right: 16px;
        box-sizing: border-box;
        color:#FFFFFF;
        background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
      }
    }
  }

  .appointment-btn {
    margin-top: 10px;
    height: 52px;
    line-height: 52px;
    width: 100%;
    background: #FFFFFF;

    .title1 {
      margin-left: 16px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 600;
      color: rgba(0, 2, 18, 1);
    }

    .title2 {
      height: 100%;
      margin-right: 16px;

      .item1 {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(200, 201, 203, 1);
      }
      .item1-active{
        color: rgba(0, 2, 18, 1);
      }

      .item2 {
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

  .other-ask {
    margin-top: 10px;
    width: 100%;
    height: 192px;
    background: #ffffff;

    .title1 {
      width: 100%;
      height: 52px;
      line-height: 52px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 600;
      color: rgba(0, 2, 18, 1);
      text-indent: 16px;
    }

    .text-area {
      margin-left: 16px;
      width: 343px;
      min-height: 70px;
      border: 1px solid #999999;
      border-radius: 4px;
      padding: 4px;
      box-sizing: border-box;
    }



  }

  .submit-container{
    position: fixed;
    z-index: 1;
    bottom: 0;
    left:0;
    width: 100%;
    height: 70px;
    border-top: 1px solid #F7F7F7;
    background: #FFFFFF;
    .submit-btn {
      left: 40px;
      width: 296px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      background: linear-gradient(328deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
      border-radius: 21px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }

</style>
