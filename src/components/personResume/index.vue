<template>
  <div class="container">
    <resume :itemInfo="resumeData"></resume>
    <div class="job-intention">
      <div class="item1 row flex-item flex-justify-between">
        <div class="row flex-item flex-justify-start">
          <div class="item-icon">
            <img src="~image/work@2x.png" alt="">
          </div>
          <div class="occupation">
            求职意向
          </div>
        </div>
      </div>
      <div class="item3 row flex-item flex-justify-start">
        <div class="item-title">
          求职状态：
        </div>
        <div class="content">
          {{infoData.workStatus | WORK_STATUS_FILTER}}
        </div>
      </div>
      <div class="item3 row flex-item flex-justify-start">
        <div class="item-title">
          求职意向：
        </div>
        <div class="content">
          {{infoData.serviceType | SERVICE_TYPE_FILTER}}
        </div>
      </div>
      <div class="item4 row flex-item flex-justify-start">
        <div class="item-title">
          现居住地：
        </div>
        <div class="content">
          {{infoData.currentAddress||'未知'}}
        </div>
      </div>
      <div class="item5 row flex-item flex-justify-start">
        <div class="item-title">
          接受外派：
        </div>
        <div class="content">
          {{infoData.intentionAddress||'未知'}}
        </div>
      </div>
    </div>
    <div class="base-info work-info" v-if="infoData.baseInfo">
      <div class="item1 row flex-item flex-justify-start">
        <div class="item1-icon">
          <img src="~image/work@2x.png" alt="">
        </div>
        <div class="item1-title">
          基本信息
        </div>
      </div>
      <div class="info">
        {{infoData.baseInfo}}
      </div>
    </div>
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
    <div class="certificate-info" v-if="infoData.personCert">
      <div class="item1 row flex-item flex-justify-start">
        <div class="item1-icon">
          <img src="~image/certificate@2x.png" alt="">
        </div>
        <div class="item1-title">
          证书信息
        </div>
      </div>
      <div class="info row flex-item flex-justify-start wrap">
        <div class="item col flex-item flex-justify" v-for="(item,index) in infoData.personCert.split(',')" :key="index">
          <div class="item-icon">
            <img src="~image/zhengshu.png" alt="" style="display: block;width: 100%;height: 100%">
          </div>
          <div class="item-text">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <userEvaluate :comments="comments"></userEvaluate>

    <div class="submit-container row flex-item flex-justify-between" v-if="infoData.type==1">
      <div class="left col flex-item flex-justify" @click="handleCollectEvent">
        <div class="item-icon">
          <img src="~image/Collection@2x.png" alt="" v-if="!isCollection">
          <img src="~image/Collection_light@2x.png" alt="" v-if="isCollection">
        </div>
        <div class="text">
          {{isCollection?'已收藏':'收藏'}}
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
      <div class="left col flex-item flex-justify" @click="handleCollectEvent">
        <div class="item-icon">
          <img src="~image/Collection@2x.png" alt="" v-if="!isCollection">
          <img src="~image/Collection_light@2x.png" alt="" v-if="isCollection">
        </div>
        <div class="text">
          {{isCollection?'已收藏':'收藏'}}
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
    import {getEmployeeInfo, collect, deleteCollect} from '@/common/utils/service';

    export default {
        name: "personResume",
        data() {
            return {
                apponitPopupData: {
                    isShow: false
                },
                evaluateData: {
                    isShow: false
                },
                comments: [], //评论
                isMoonWoman: true,
                resumeData: {
                    name: '',
                    salary: '',
                    oneSentenceEvaluation: '',
                    age: '',
                    workYear: '',
                    nativePlace: '',
                    education: ''
                },
                infoData: {},
                isCollection: false


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
            async $getEmployeeInfo() {
                let id = this.$route.query.id;
                this.$loading();
                let [err, data] = await getEmployeeInfo({id});
                if (err !== null) {
                    this.$toast(err || '系统错误');
                    this.$clear();
                    return;
                }
                ;
                this.initWithData(data);
                this.$clear();
            },
            initWithData(data) {
                this.comments = data.comments || [];
                this.resumeData = data || [];
                this.infoData = data || {};
                this.isCollection = (this.infoData.isCollection == 1) ? true : false;
            },
            handleClickAppoint() {
                console.log('id==>',this.infoData.id);
                if(!this.infoData.id){
                    this.$toast('id为空')
                    return;
                }
                this.$router.push({
                    path: '/appointment',
                    query: {
                        id: this.infoData.id
                    }
                })
            },
            handleClickSchedule() {
                this.$router.push({
                    path: '/schedule',
                    query: {
                        id: this.infoData.id
                    }
                });
            },
            async handleCollectEvent() {
                this.$loading({duration: 0, forbidClick: true, message: ""})
                if (!this.isCollection) {
                    let [err, data] = await collect({employeeId: this.infoData.id});
                    if (err !== null) {
                        this.$clear();
                        this.$toast(err || '系统错误');
                        return;
                    }
                    ;
                    this.isCollection = true;
                    this.$clear();
                    this.$toast.success('已收藏');
                    return;
                }
                ;
                let [err, data] = await deleteCollect({employeeIds: [this.infoData.id]});
                if (err !== null) {
                    this.$clear();
                    this.$toast(err || '系统错误');
                    return;
                }
                ;
                this.isCollection = false;
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

  .job-intention {
    background: $white;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;

    .item1 {
      width: 100%;
      height: 30px;
      margin-bottom: 8px;

      .item-icon {
        margin-left: 14px;
        margin-right: 10px;
        width: 20px;
        height: 20px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .occupation {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(0, 2, 18, 1);
      }

      .common-status {
        margin-right: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
      }

      .item-status {
        color: #E9AC7E;
      }

      .item-status1 {
        color: #CECFD1;
      }

      .item-status2 {
        color: #7DB5FB;
      }
    }

    .item3 {
      width: 100%;
      height: 24px;

      .item-title {
        margin-left: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(138, 143, 155, 1);
      }

      .content {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #3B445C;
      }
    }

    .item4 {
      width: 100%;
      height: 24px;

      .item-title {
        margin-left: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(138, 143, 155, 1);
      }

      .content {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #3B445C;
      }
    }

    .item5 {
      width: 100%;
      height: 24px;
      margin-bottom: 20px;

      .item-title {
        margin-left: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(138, 143, 155, 1);
      }

      .content {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #3B445C;
      }
    }

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

        img {
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
      margin-bottom: 16px;
      width: 343px;
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

        img {
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
    min-height: 240px;
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

        img {
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
          /*background: #666666;*/
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
    padding: 0 16px 0 0;
    box-sizing: border-box;
    height: 70px;
    background: $white;

    .left {
      width: 50px;
      height: 70px;

      .item-icon {
        width: 18px;
        height: 18px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .text {
        margin-top: 6px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(59, 68, 92, 1);
        line-height: 17px;
        white-space: nowrap;
      }
    }

    .right {
      width: 296px;
      height: 42px;
      border-radius: 42px;
      overflow: hidden;

      .left-btn {
        background: linear-gradient(327deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 166, 1) 100%);
        line-height: 42px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }

      .right-btn {
        background: linear-gradient(323deg, rgba(237, 119, 250, 1) 0%, rgba(150, 141, 253, 1) 100%);
        line-height: 42px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }

      .mid-btn {
        background: linear-gradient(328deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
        line-height: 42px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
    }
  }
</style>
