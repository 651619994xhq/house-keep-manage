<template>
  <div class="container">
    <resume></resume>
<!--    <div class="order-item">-->
<!--      <div class="item1 row flex-item flex-justify-between">-->
<!--        <div class="row flex-item flex-justify-start">-->
<!--          <div class="item-icon">-->
<!--            <img src="~image/work@2x.png" alt="">-->
<!--          </div>-->
<!--          <div class="occupation">-->
<!--            面试信息-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;          <div class="common-status item-status">&ndash;&gt;-->
<!--        &lt;!&ndash;             待面试&ndash;&gt;-->
<!--        &lt;!&ndash;          </div>&ndash;&gt;-->
<!--        &lt;!&ndash;          <div class="common-status item-status1">&ndash;&gt;-->
<!--        &lt;!&ndash;            面试结束&ndash;&gt;-->
<!--        &lt;!&ndash;          </div>&ndash;&gt;-->
<!--        <div class="common-status item-status2">-->
<!--          待签约-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item3 row flex-item flex-justify-start">-->
<!--        <div class="item-title">-->
<!--          面试方式：-->
<!--        </div>-->
<!--        <div class="content">-->
<!--          上门面试-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item3 row flex-item flex-justify-start">-->
<!--        <div class="item-title">-->
<!--          面试时间：-->
<!--        </div>-->
<!--        <div class="content">-->
<!--          2019-09-09-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item4 row flex-item flex-justify-start">-->
<!--        <div class="item-title">-->
<!--          面试地点：-->
<!--        </div>-->
<!--        <div class="content">-->
<!--          广东省广州市天河区XXXXXX-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="work-info">
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
    <div class="home-info">
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
    <userEvaluate></userEvaluate>

    <div class="submit-btn">
      立即预约
    </div>

  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import userEvaluate from "./userEvaluate";
    import {getEmployeeInfo} from '@/common/utils/service';

    export default {
        name: "personResume",
        data() {
            return {
                apponitPopupData:{
                    isShow:false
                },
                evaluateData:{
                    isShow:false
                }
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
                this.$loading();
                let [err,data]=await getEmployeeInfo({id:1});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                this.initWithData(data);
                this.$clear();
            },
            initWithData(data){

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

  .submit-btn {
    position: fixed;
    bottom: 15px;
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
</style>
