<template>
  <div class="container">
    <resume></resume>
    <date></date>
  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import date from '@/common/components/date/index';
    import {getEmployeeInfo} from '@/common/utils/service'

    export default {
        name: "orderDetail",
        data() {
            return {
            }
        },
//组件
        components: {
            resume,
            date
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
        img{
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
