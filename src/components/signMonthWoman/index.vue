<template>
  <div class="container">
    <resume :itemInfo="itemInfo"></resume>
    <div class="interview-container col flex-item-start flex-justify-start">
      <div class="title">
        请选择服务周期
      </div>
      <div class="title2 row flex-item flex-justify-start wrap">
        <div class="item" @click="handleClickServicePeriod(1)">
          <div class="item-normal" v-if="selectServicePeriod!=1">
            标准周期26天
          </div>
          <div class="item-active" v-if="selectServicePeriod==1">
            <div class="inner-item">
              <span class="purple-color">标准周期26天</span>
            </div>
          </div>
        </div>
        <div class="item" @click="handleClickServicePeriod(2)">
          <div class="item-normal" v-if="selectServicePeriod!=2">
            升级周期42天
          </div>
          <div class="item-active" v-if="selectServicePeriod==2">
            <div class="inner-item">
              <span class="purple-color">升级周期42天</span>
            </div>
          </div>
        </div>
        <div class="item" @click="handleClickServicePeriod(3)">
          <div class="item-normal" v-if="selectServicePeriod!=3">
            升级周期52天
          </div>
          <div class="item-active" v-if="selectServicePeriod==3">
            <div class="inner-item">
              <span class="purple-color">升级周期52天</span>
            </div>
          </div>
        </div>
        <div class="item" @click="handleClickServicePeriod(4)">
          <div class="item-normal" v-if="selectServicePeriod!=4">
            省心周期78天
          </div>
          <div class="item-active" v-if="selectServicePeriod==4">
            <div class="inner-item">
              <span class="purple-color">省心周期78天</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="appointment-btn row flex-item flex-justify-between" @click="handleShowTime">
      <div class="title1">选择服务开始时间</div>
      <div class="title2 row flex-item flex-justify-between">
        <div class="item1" :class="$selectStartTime?'item1-active':''">{{$selectStartTime?$selectStartTime:'请选择'}}</div>
        <div class="item2"><img src="~image/icon_next_gary@2x.png" alt=""></div>
      </div>
    </div>
    <div class="time-container">
      <div class="row flex-item flex-justify-start time">
        <div style="color: #8A8F9B">服务周期：</div>
        <div style="color: #3B445C">{{servicePeriod}}</div>
      </div>
    </div>
    <div class="submit-container col flex-item flex-justify" @click="handleSubmit($route.query.id,$route.query.orderId)">
      <div class="submit">
        签约
      </div>
    </div>
    <servicePeriod :is-show="servicePeriodData.isShow" @sureEvent="handleServicePeriodSure"
                   @cancelEvent="handleServicePeriodCancel" @closeEvent="handleServicePeriodClose"></servicePeriod>
  </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    import servicePeriod from "./servicePeriod";
    import {getEmployeeBaseInfo,sign} from '@/common/utils/service'

    export default {
        name: "signContract",
        data() {
            return {
                selectServicePeriod: 1,
                selectStartTime: '',
                itemInfo: {},
                servicePeriodData: {
                    isShow: false
                }

            }
        },
//组件
        components: {
            resume,
            servicePeriod
        },
        computed: {
            $selectStartTime: function () {
                if (!this.selectStartTime) {
                    return '';
                }
                ;
                let fullYear, month, day, time;
                time = new Date(this.selectStartTime);
                fullYear = time.getFullYear();
                month = time.getMonth() + 1;
                day = time.getDate();
                return `${fullYear}年${month}月${day}日`
            },
            servicePeriod: function () {
                if (!this.selectStartTime) {
                    return '';
                }
                ;
                let fullYear, month, day, time,endFullYear,endMonth,endDay;
                time = new Date(this.selectStartTime);
                fullYear = time.getFullYear();
                month = time.getMonth() + 1;
                day = time.getDate();
                if (this.selectServicePeriod == 1) {
                    let endTime= new Date(this.selectStartTime+26*24*60*60*1000);
                    endFullYear = endTime.getFullYear();
                    endMonth = endTime.getMonth() + 1;
                    endDay = endTime.getDate();
                    return `${fullYear}年${month}月${day}日 - ${endFullYear}年${endMonth}月${endDay}日`;
                }
                ;
                if (this.selectServicePeriod == 2) {
                    let endTime= new Date(this.selectStartTime+42*24*60*60*1000);
                    endFullYear = endTime.getFullYear();
                    endMonth = endTime.getMonth() + 1;
                    endDay = endTime.getDate();
                    return `${fullYear}年${month}月${day}日 - ${endFullYear}年${endMonth}月${endDay}日`;
                }
                ;
                if (this.selectServicePeriod == 3) {
                    let endTime= new Date(this.selectStartTime+52*24*60*60*1000);
                    endFullYear = endTime.getFullYear();
                    endMonth = endTime.getMonth() + 1;
                    endDay = endTime.getDate();
                    return `${fullYear}年${month}月${day}日 - ${endFullYear}年${endMonth}月${endDay}日`;
                }
                if (this.selectServicePeriod == 4) {
                    let endTime= new Date(this.selectStartTime+78*24*60*60*1000);
                    endFullYear = endTime.getFullYear();
                    endMonth = endTime.getMonth() + 1;
                    endDay = endTime.getDate();
                    return `${fullYear}年${month}月${day}日 - ${endFullYear}年${endMonth}月${endDay}日`;
                }
                return '';
            }
        },
//初始化数据
        created() {
            this.$getEmployeeBaseInfo();
        },
//一些自定义方法
        methods: {
            handleClickServicePeriod(period) {
                this.selectServicePeriod = period;
            },
            async handleSubmit(id,orderId) {
                if(!id){
                    this.$toast('id 为空')
                    return;
                }
                if(!orderId){
                    this.$toast('orderId 为空')
                    return;
                }
                if (!this.selectStartTime) {
                    this.$toast('请选择预约时间');
                    return
                }
                ;
                this.$loading({duration: 0, forbidClick: true, message: "签约中..."});
                let [err,data]=await sign({auntId: id,signCycle:this.servicePeriod,startTime:this.selectStartTime,serverType:this.selectServicePeriod,orderId:orderId})
                if(err!==null){
                    this.$toast(err||'系统错误');
                    this.$clear();
                    return ;
                };
                this.$clear();
                this.$toast.success('签约成功');
                this.$router.go(-1);

            },
            handleShowTime() {
                this.servicePeriodData.isShow = true;
            },
            handleServicePeriodSure($time) {
                this.selectStartTime = $time;
                this.servicePeriodData.isShow = false;
            },
            handleServicePeriodCancel() {
                this.servicePeriodData.isShow = false;
            },
            handleServicePeriodClose() {
                this.servicePeriodData.isShow = false;
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
                this.itemInfo=data||{};
                console.log(this.itemData)
            }

        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
  }

  .interview-container {
    margin-top: 10px;
    background: $white;
    width: 100%;
    padding-left: 16px;
    min-height: 100px;

    .title {
      margin-top: 16px;
      width: 100%;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 600;
      color: #000212;
    }

    .title2 {
      margin-top: 16px;
      width: 100%;

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
        &:last-of-type{
          margin-top: 12px;
          margin-bottom: 16px;
        }

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

      /*.item-normal {*/
      /*  color: rgba(0, 2, 18, 1);*/
      /*  background: rgba(241, 241, 241, 1);*/
      /*}*/

      /*.item-active {*/
      /*  border: 1px solid;*/
      /*  border-image: linear-gradient(338deg, rgba(201, 141, 253, 1), rgba(250, 119, 119, 1)) 1 1;*/
      /*  color: rgba(0, 2, 18, 1);*/
      /*  background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);*/
      /*  -webkit-background-clip: text;*/
      /*  -webkit-text-fill-color: transparent;*/
      /*}*/

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

      .item1-active {
        color: rgba(0, 2, 18, 1);
      }

      .item2 {
        width: 12px;
        height: 14px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

    }
  }

  .time-container {
    margin-top: 10px;
    padding-left: 16px;
    width: 100%;
    min-height: 240px;
    box-sizing: border-box;
    background: #FFFFFF;
    overflow: hidden;

    .time {
      margin-top: 16px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 143, 155, 1);
      line-height: 20px;
    }
  }
  .submit-container{
    height: 70px;
    width: 100%;
    background: #FFFFFF;
    border-top: 1px solid #F7F7F7;
    position: fixed;
    bottom: 0;
    left: 0;
    .submit{
      width:296px;
      height:42px;
      background:linear-gradient(328deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
      border-radius:21px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height: 42px;
      text-align: center;
    }

  }

</style>
