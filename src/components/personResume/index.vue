<template>
  <div class="container">
    <resume :itemInfo="resumeData"></resume>
    <div class="work-info" v-if="infoData.personIntroduce">
      <div class="item1 row flex-item flex-justify-start">
        <div class="item1-icon">
          <img src="~image/work@2x.png" alt="">
        </div>
        <div class="item1-title">
          工作履历
        </div>
      </div>
      <div class="info">
        {{infoData.personIntroduce}}
      </div>
    </div>
    <div class="home-info" v-if="infoData.familySituation">
      <div class="item1 row flex-item flex-justify-start">
        <div class="item1-icon">
          <img src="~image/home@2x.png" alt="">
        </div>
        <div class="item1-title">
          家庭情况
        </div>
      </div>
      <div class="info">
        {{infoData.familySituation}}
      </div>
    </div>
    <div class="certificate-info">
      <div class="item1 row flex-item flex-justify-start">
        <div class="item1-icon">
          <img src="~image/certificate@2x.png" alt="">
        </div>
        <div class="item1-title">
          证书信息
        </div>
      </div>
      <div class="info row flex-item flex-justify-start wrap">
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            健康证
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            月嫂证
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            护照
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            港澳通行证
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            按摩技师证
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            小儿推拿师证
          </div>
        </div>
        <div class="item col flex-item flex-justify">
          <div class="item-icon">

          </div>
          <div class="item-text">
            幼儿护理证
          </div>
        </div>
      </div>
    </div>
    <userEvaluate :comments="comments"></userEvaluate>

    <div class="submit-container row flex-item flex-justify-between" v-if="infoData.type==1">
      <div class="left col flex-item-start flex-justify" @click="handleCollectEvent">
        <div class="item-icon">
          <img src="~image/Collection@2x.png" alt="" v-if="!isCollection">
        </div>
        <div class="text">
          {{isCollection?'取消':'收藏'}}
        </div>

      </div>
      <div class="right row flex-item flex-justify-between">
        <div class="left-btn flex-grow" @click="handleClickSchedule">
          查看档期
        </div>
        <div class="right-btn flex-grow" @click="handleClickAppoint">
          立即预约
        </div>
      </div>
    </div>


    <div class="submit-container row flex-item flex-justify-between" v-else>
      <div class="left col flex-item-start flex-justify" @click="handleCollectEvent">
        <div class="item-icon">
          <img src="~image/Collection@2x.png" alt="" v-if="!isCollection">
        </div>
        <div class="text">
          {{isCollection?'取消':'收藏'}}
        </div>

      </div>
      <div class="right row flex-item flex-justify-between">
        <div class="mid-btn flex-grow" @click="handleClickAppoint">
          立即预约
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import userEvaluate from "./userEvaluate";
    import {getEmployeeInfo,collect,deleteCollect} from '@/common/utils/service';

    export default {
        name: "personResume",
        data() {
            return {
                apponitPopupData:{
                    isShow:false
                },
                evaluateData:{
                    isShow:false
                },
                comments:[], //评论
                isMoonWoman:true,
                resumeData:{
                    name:'',
                    salary:'',
                    oneSentenceEvaluation:'',
                    age:'',
                    workYear:'',
                    nativePlace:'',
                    education:''
                },
                infoData:{},
                isCollection:false


            }
        },
//组件
        components: {
            resume,
            userEvaluate
        },
//初始化数据
        created() {
            this.$getEmployeeInfo();
        },
//一些自定义方法
        methods: {
            async $getEmployeeInfo(){
                let id=this.$route.query.id;
                this.$loading();
                let [err,data]=await getEmployeeInfo({id});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                this.initWithData(data);
                this.$clear();
            },
            initWithData(data){
                this.comments=data.comments||[];
                this.resumeData=data||[];
                this.infoData=data||{};
                this.isCollection=(this.infoData.isCollection==1)?true:false;
            },
            handleClickAppoint(){
                this.$router.push({
                    path:'/appointment'
                })
            },
            handleClickSchedule(){
                this.$router.push({
                   path:'/schedule'
                });
            },
            async handleCollectEvent(){
                this.$loading({duration: 0,forbidClick: true,message: ""})
                if(!this.isCollection){
                    let [err,data]=await collect({employeeId:this.infoData.id});
                    if(err!==null){this.$clear();this.$toast(err||'系统错误');return ;};
                    this.isCollection=true;
                    this.$clear();
                    this.$toast.success('已收藏');
                    return ;
                };
                let [err,data]=await deleteCollect({employeeIds:[this.infoData.id]});
                if(err!==null){this.$clear();this.$toast(err||'系统错误');return ;};
                this.isCollection=false;
                this.$clear();
                this.$toast.success('已取消');
            }

        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }
  .work-info {
    /*margin-top: 10px;*/
    min-height: 153px;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;

    .item1 {
      margin-top: 16px;
      height: 20px;
      width: 100%;

      .item1-icon {
        margin-left: 14px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .item1-title {
        line-height: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 2, 18, 1);
      }
    }

    .info {
      margin-left: 16px;
      margin-top: 16px;
      width: 343px;
      height: 80px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(59, 68, 92, 1);
      line-height: 20px;
    }
  }

  .home-info {
    margin-top: 10px;
    min-height: 92px;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;

    .item1 {
      margin-top: 16px;
      height: 20px;
      width: 100%;

      .item1-icon {
        margin-left: 14px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .item1-title {
        line-height: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 2, 18, 1);
      }
    }

    .info {
      margin-left: 16px;
      margin-top: 16px;
      width: 343px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(59, 68, 92, 1);
      line-height: 20px;
    }
  }

  .certificate-info {
    margin-top: 10px;
    min-height: 280px;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;

    .item1 {
      margin-top: 16px;
      height: 20px;
      width: 100%;

      .item1-icon {
        margin-left: 14px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .item1-title {
        line-height: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 2, 18, 1);
      }
    }

    .info {
      margin-top: 30px;
      width: 100%;

      .item {
        margin-bottom: 10px;
        margin-left: 26px;
        width: 60px;
        height: 60px;

        .item-icon {
          width: 22px;
          height: 18px;
          background: #666666;
          margin-bottom: 9px;
        }

        .item-text {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(59, 68, 92, 1);
          white-space: nowrap

        }

      }
    }
  }

  .submit-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    height: 70px;
    background: $white;
    .left{
      width: 40px;
      height: 70px;
      .item-icon{
        margin-left: 4px;
        width: 18px;
        height: 18px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .text{
        margin-top: 6px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(59,68,92,1);
        line-height:17px;
        white-space: nowrap;
      }
    }
    .right{
      width: 296px;
      height: 42px;
      border-radius: 42px;
      overflow: hidden;
      .left-btn{
        background:linear-gradient(327deg,rgba(201,141,253,1) 0%,rgba(250,119,166,1) 100%);
        line-height: 42px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
      }
      .right-btn{
        background:linear-gradient(323deg,rgba(237,119,250,1) 0%,rgba(150,141,253,1) 100%);
        line-height: 42px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
      }
      .mid-btn{
        background:linear-gradient(328deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
        line-height: 42px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
      }
    }
  }
</style>
