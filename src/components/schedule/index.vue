<template>
  <div class="container">
    <resume :itemInfo="itemInfo"></resume>
    <date :dateInfo="dateInfo"></date>
  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import date from '@/common/components/date/index';
    import {getEmployeeBaseInfo,getScheduleTime} from '@/common/utils/service'

    export default {
        name: "schedule",
        data() {
            return {
                itemInfo:{},
                dateInfo:[],
            }
        },
//组件
        components: {
            resume,
            date
        },
//初始化数据
        created() {
            this.$getEmployeeBaseInfo();
            this.$getScheduleTime();
        },
//一些自定义方法
        methods: {
            async $getEmployeeBaseInfo(){
                let id=this.$route.query.id;
                let [err,data]=await getEmployeeBaseInfo({auntId:id});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                this.initWithData(data);
            },
            async $getScheduleTime(){
                let id=this.$route.query.id;
                this.$loading();
                let time=new Date();
                let $month=time.getMonth()+1;
                let $fullYear=time.getFullYear();
                let yearMonth1=`${$fullYear}${$month>9?$month:('0'+$month)}`;
                let yearMonth2=($month+1>12)?`${$fullYear+1}${($month+1-12)>9?($month+1-12):('0'+($month+1-12))}`:`${$fullYear}${($month+1)>9?($month+1):('0'+($month+1))}`;
                let yearMonth3=($month+2>12)?`${$fullYear+1}${($month+2-12)>9?($month+2-12):('0'+($month+2-12))}`:`${$fullYear}${($month+2)>9?($month+2):('0'+($month+2))}`;
                let yearMonth4=($month+3>12)?`${$fullYear+1}${($month+3-12)>9?($month+3-12):('0'+($month+3-12))}`:`${$fullYear}${($month+3)>9?($month+3):('0'+($month+3))}`;
                let yearMonth5=($month+4>12)?`${$fullYear+1}${($month+4-12)>9?($month+4-12):('0'+($month+4-12))}`:`${$fullYear}${($month+4)>9?($month+4):('0'+($month+4))}`;
                let yearMonth6=($month+5>12)?`${$fullYear+1}${($month+5-12)>9?($month+5-12):('0'+($month+5-12))}`:`${$fullYear}${($month+5)>9?($month+5):('0'+($month+5))}`;
                let yearMonth7=($month+6>12)?`${$fullYear+1}${($month+6-12)>9?($month+6-12):('0'+($month+6-12))}`:`${$fullYear}${($month+6)>9?($month+6):('0'+($month+6))}`;
                let yearMonth8=($month+7>12)?`${$fullYear+1}${($month+7-12)>9?($month+7-12):('0'+($month+7-12))}`:`${$fullYear}${($month+7)>9?($month+7):('0'+($month+7))}`;
                let yearMonth9=($month+8>12)?`${$fullYear+1}${($month+8-12)>9?($month+8-12):('0'+($month+8-12))}`:`${$fullYear}${($month+8)>9?($month+8):('0'+($month+8))}`;
                let yearMonth10=($month+9>12)?`${$fullYear+1}${($month+9-12)>9?($month+9-12):('0'+($month+9-12))}`:`${$fullYear}${($month+9)>9?($month+9):('0'+($month+9))}`;
                let yearMonth11=($month+10>12)?`${$fullYear+1}${($month+10-12)>9?($month+10-12):('0'+($month+10-12))}`:`${$fullYear}${($month+10)>9?($month+10):('0'+($month+10))}`;
                let yearMonth12=($month+11>12)?`${$fullYear+1}${($month+11-12)>9?($month+11-12):('0'+($month+11-12))}`:`${$fullYear}${($month+11)>9?($month+11):('0'+($month+11))}`;


                let [err1,data1]=await getScheduleTime({auntId:id,yearMonth:yearMonth1});
                if(err1!==null){this.$toast(err1||'系统错误');this.$clear();return ;};
                let [err2,data2]=await getScheduleTime({auntId:id,yearMonth:yearMonth2});
                if(err2!==null){this.$toast(err2||'系统错误');this.$clear();return ;};
                let [err3,data3]=await getScheduleTime({auntId:id,yearMonth:yearMonth3});
                if(err3!==null){this.$toast(err3||'系统错误');this.$clear();return ;};
                let [err4,data4]=await getScheduleTime({auntId:id,yearMonth:yearMonth4});
                if(err4!==null){this.$toast(err4||'系统错误');this.$clear();return ;};
                let [err5,data5]=await getScheduleTime({auntId:id,yearMonth:yearMonth5});
                if(err5!==null){this.$toast(err5||'系统错误');this.$clear();return ;};
                let [err6,data6]=await getScheduleTime({auntId:id,yearMonth:yearMonth6});
                if(err6!==null){this.$toast(err6||'系统错误');this.$clear();return ;};
                let [err7,data7]=await getScheduleTime({auntId:id,yearMonth:yearMonth7});
                if(err7!==null){this.$toast(err7||'系统错误');this.$clear();return ;};
                let [err8,data8]=await getScheduleTime({auntId:id,yearMonth:yearMonth8});
                if(err8!==null){this.$toast(err8||'系统错误');this.$clear();return ;};
                let [err9,data9]=await getScheduleTime({auntId:id,yearMonth:yearMonth9});
                if(err9!==null){this.$toast(err9||'系统错误');this.$clear();return ;};
                let [err10,data10]=await getScheduleTime({auntId:id,yearMonth:yearMonth10});
                if(err10!==null){this.$toast(err10||'系统错误');this.$clear();return ;};
                let [err11,data11]=await getScheduleTime({auntId:id,yearMonth:yearMonth11});
                if(err11!==null){this.$toast(err11||'系统错误');this.$clear();return ;};
                let [err12,data12]=await getScheduleTime({auntId:id,yearMonth:yearMonth12});
                if(err12!==null){this.$toast(err12||'系统错误');this.$clear();return ;};
                this.dateInfo=[data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12];
                this.$clear();
            },
            initWithData(data){
                this.itemInfo=data||{};
                console.log('data==>',data);
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
