<template>
  <div class="container">
    <resume :itemInfo="itemInfo"></resume>
    <div class="interview-container col flex-item-start flex-justify-start">
      <div class="title">
        请选择服务周期
      </div>
      <div class="title2 row flex-item flex-justify-start">
        <div class="item" :class="selectServicePeriod==1?'item-active':'item-normal'"
             @click="handleClickServicePeriod(1)">
          标准周期12个月
        </div>
        <div class="item" :class="selectServicePeriod==2?'item-active':'item-normal'"
             @click="handleClickServicePeriod(2)">
          灵活周期6个月
        </div>
        <div class="item" :class="selectServicePeriod==3?'item-active':'item-normal'"
             @click="handleClickServicePeriod(3)">
          随心周期3个月
        </div>
      </div>
      <!--      <div class="title3 row flex-item flex-justify-start">-->
      <!--        <div class="text1">到店面试地址：</div>-->
      <!--        <div class="text2">北京市朝阳区金茂府2期东区6号楼</div>-->
      <!--      </div>-->
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
    <div class="submit-container col flex-item flex-justify">
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
    import {getEmployeeBaseInfo} from '@/common/utils/service'

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
                let fullYear, month, day, time;
                time = new Date(this.selectStartTime);
                fullYear = time.getFullYear();
                month = time.getMonth() + 1;
                day = time.getDate();
                if (this.selectServicePeriod == 1) {
                    return `${fullYear}年${month}月${day}日 - ${fullYear + 1}年${month}月${day}日`;
                }
                ;
                if (this.selectServicePeriod == 2) {
                    if (month + 6 > 12) {
                        return `${fullYear}年${month}月${day}日 - ${fullYear + 1}年${month + 6 - 12}月${day}日`;
                    }
                    ;
                    return `${fullYear}年${month}月${day}日 - ${fullYear}年${month + 6}月${day}日`;
                }
                ;
                if (this.selectServicePeriod == 3) {
                    if (month + 3 > 12) {
                        return `${fullYear}年${month}月${day}日 - ${fullYear + 1}年${month + 3 - 12}月${day}日`;
                    }
                    ;
                    return `${fullYear}年${month}月${day}日 - ${fullYear}年${month + 3}月${day}日`;
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
            handleSubmit() {
                if (!this.selectTime) {
                    this.$toast('请选择预约时间');
                    return
                }
                ;
                this.$loading({duration: 0, forbidClick: true, message: "提交中..."});

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
      }

      .item-normal {
        color: rgba(0, 2, 18, 1);
        background: rgba(241, 241, 241, 1);
      }

      .item-active {
        border: 1px solid;
        border-image: linear-gradient(338deg, rgba(201, 141, 253, 1), rgba(250, 119, 119, 1)) 1 1;
        color: rgba(0, 2, 18, 1);
        background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
