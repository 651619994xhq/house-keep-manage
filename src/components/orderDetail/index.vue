<template>
  <div class="container">
    <resume :itemInfo="itemInfo"></resume>
    <div class="order-item">
      <div class="item1 row flex-item flex-justify-between">
        <div class="row flex-item flex-justify-start">
          <div class="item-icon">
            <img src="~image/work@2x.png" alt="">
          </div>
          <div class="occupation">
            面试信息
          </div>
        </div>
        <div class="common-status item-status2 hairlines" v-if="infoData.status==5" @click="handleShowCancelInterview">
          {{infoData.status | ORDER_DETAIL_STATUS_FILTER}}
        </div>
        <div class="common-status item-status2" v-if="infoData.status!=5">
          {{infoData.status | ORDER_DETAIL_STATUS_FILTER}}
        </div>
      </div>
      <div class="item3 row flex-item flex-justify-start">
        <div class="item-title">
          面试方式：
        </div>
        <div class="content">
          {{infoData.interviewType | INTERVIEW_TYPE_FILTER}}
        </div>
      </div>
      <div class="item3 row flex-item flex-justify-start">
        <div class="item-title">
          面试时间：
        </div>
        <div class="content">
          {{infoData.interviewTime}}
        </div>
      </div>
      <div class="item4 row flex-item flex-justify-start">
        <div class="item-title">
          面试地点：
        </div>
        <div class="content">
          {{infoData.interviewAddress}}
        </div>
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
        从业经验丰富，照顾过早产儿。有丰富的产后调理经验， 可协助孕妈的身材尽快恢复。 性格乐观，爱干净。 最多500个汉字
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
        爱人工作情况，子女情况，最多展示两行
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

    <div class="submit-container col flex-item flex-justify" @click="handleSubmit" v-if="infoData.status==20">
      <div class="submit-btn">
        立即签约
      </div>
    </div>
        <div class="submit-container col flex-item flex-justify" @click="handleSubmit2" v-if="infoData.status==10">
          <div class="submit-btn2">
            <div class="box">
              <span class="purple-color">去评价</span>
            </div>
          </div>
        </div>
    <cancelApponitPopup :is-show="cancelApponitPopup.isShow" @cancelEvent="handleCancelApponitCancel" @sureEvent="handleCancelApponitSure" @closeEvent="handleCancelApponitCancel"></cancelApponitPopup>
    <evaluate :is-show="evaluateData.isShow" @cancelEvent="handleEvaluateCancel" @closeEvent="handleEvaluateClose"
              @sureEvent="handleEvaluateSure"></evaluate>
  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import cancelApponitPopup from "./cancelApponitPopup";
    import evaluate from "./evaluate";
    import {getOrderDetail, cancelInterview, addComments} from '@/common/utils/service'

    export default {
        name: "orderDetail",
        data() {
            return {
                cancelApponitPopup: {
                    isShow: false
                },
                evaluateData: {
                    isShow: false
                },
                itemInfo: {},
                infoData: {},
            }
        },
//组件
        components: {
            resume,
            cancelApponitPopup,
            evaluate
        },
//初始化数据
        created() {
            this.$getOrderDetail();
        },
//一些自定义方法
        methods: {
            async $getOrderDetail() {
                let orderId = this.$route.query.id;
                this.$loading();
                let [err, data] = await getOrderDetail({orderId});
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
                let $data = data || {};
                let name = $data.employeeName;
                $data.name = name;
                this.itemInfo = $data;
                this.infoData = $data;
            },
            handleEvaluateCancel() {
                this.evaluateData.isShow = false;
            },
            handleEvaluateClose() {
                this.evaluateData.isShow = false;
            },
            async handleEvaluateSure(content) {
                console.log('content==>', content);
                this.$loading();
                let [err, data] = await addComments({employeeId: this.infoData.employeeId, comment: content.text, starClass: content.star});
                if (err !== null) {
                    this.$toast(err || '系统错误');
                    this.$clear();
                    return;
                };
                this.$toast.success('添加评论成功');
                this.$clear();
                this.evaluateData.isShow = false;
            },
            handleSubmit() {
                if (!this.infoData.id) {
                    this.$toast('缺少id');
                    return;
                }
                ;
                if(this.infoData.type==1){
                    this.$router.push({
                        path: '/sign-month-woman',
                        query: {
                            id: this.infoData.employeeId,
                            orderId: this.infoData.id
                        }
                    });
                    return;
                };
                if(this.infoData.type==2||this.infoData.type==3){
                    this.$router.push({
                        path: '/sign-contract',
                        query: {
                            id: this.infoData.employeeId,
                            orderId: this.infoData.id
                        }
                    });
                    return;
                }

            },
            handleSubmit2() {
                this.evaluateData.isShow = true;
            },
            handleShowCancelInterview(){
                 this.cancelApponitPopup.isShow=true;
            },
            handleCancelApponitCancel(){
                this.cancelApponitPopup.isShow=false;
            },
            async handleCancelApponitSure(){
                let orderId=this.infoData.id;
                this.$loading();
                let [err,data]=await cancelInterview({orderId});
                if(err!==null){this.$clear();this.$toast(err||'系统错误');return ;}
                this.$clear();
                this.$toast.success('取消面试成功');
                this.cancelApponitPopup.isShow=false;
            }

        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }

  .order-item {
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
        width: 60px;
        text-align: center;
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
      .hairlines{
        border: 1px solid #7DB5FB;
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
    margin-top: 10px;
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
    min-height: 310px;
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
    height: 70px;
    border-top: 1px solid #F7F7F7;
    background: #FFFFFF;
  }

  .submit-btn {
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

  .submit-btn2 {
    width: 296px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 21px;
    padding: 1px;
    background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);

    .box {
      width: 100%;
      height: 100%;
      border-radius: 21px;
      text-align: center;
      background: #FFFFFF;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 42px;
    }
  }
</style>
