<template>
  <van-popup
    :value="isShow"
    position="bottom"
    :style="{ width:'100%' }"
    @input="handleInput"
  >
    <div class="pop-container">
      <div class="top-pop">
        <div class="control-container row flex-item flex-justify-between">
          <div class="cancel-btn" @click="handleCancelEvent">取消</div>
          <div class="title">
            请选择开始时间
          </div>
          <div class="sure-btn" @click="handleSureEvent">
            确定
          </div>
        </div>
        <div class="date-container row flex-item flex-justify-between">
          <div class="today item col flex-item flex-justify" @click="handleSwitchDay('today')">
            <div class="title1" :class="(currentDay=='today')?'active-color':''">
              今天
            </div>
            <div class="title2" :class="(currentDay=='today')?'active-color':''">
              {{today}}
            </div>
            <div class="title3" :class="(currentDay=='today')?'active-bg':''">

            </div>

          </div>
          <div class="tomorrow item col flex-item flex-justify" @click="handleSwitchDay('tomorrow')">
            <div class="title1" :class="(currentDay=='tomorrow')?'active-color':''">
              明天
            </div>
            <div class="title2" :class="(currentDay=='tomorrow')?'active-color':''">
              {{tomorrow}}
            </div>
            <div class="title3" :class="(currentDay=='tomorrow')?'active-bg':''">

            </div>
          </div>
          <div class="after-tomorrow item col flex-item flex-justify" @click="handleSwitchDay('after-tomorrow')">
            <div class="title1" :class="(currentDay=='after-tomorrow')?'active-color':''">
              后天
            </div>
            <div class="title2" :class="(currentDay=='after-tomorrow')?'active-color':''">
              {{afterTomorrow}}
            </div>
            <div class="title3" :class="(currentDay=='after-tomorrow')?'active-bg':''">

            </div>
          </div>
        </div>
      </div>
      <div class="bottom-pop row flex-item-start flex-justify-start wrap">
        <div class="time" v-for="(item ,index) in times" :key="index">
          <div style="width: 100%;height: 100%" class="dis-time" v-if="((currentDay=='today')&&((nowDate-item)>=0))">
            {{`${item}:00`}}
          </div>
          <div style="width: 100%;height: 100%" :class="selectTimeIndex===index?'active-time':'normal-time'"  @click="handleClickTime(index,item)" v-else>
            {{`${item}:00`}}
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
    //预约时间
    export default {
        name: 'appointTime',
        props: {
            isShow: {
                type: Boolean,
                value: false
            },
            nowTime:''
        },
        data() {
            return {
                currentDay: 'today',
                times: ['8', '9', '10', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
                selectTimeIndex:'',
                selectTime:'',
            }
        },
        computed:{
            today:function () {
                let $time = new Date(this.nowTime);
                return ($time.getMonth()+1) + "月" + $time.getDate()+'日'
            },
            tomorrow:function () {
                let $time = new Date(this.nowTime+24*60*60*1000);
                return ($time.getMonth()+1) + "月" + $time.getDate()+'日'
            },
            afterTomorrow:function(){
                let $time = new Date(this.nowTime+24*60*60*1000*2);
                return ($time.getMonth()+1) + "月" + $time.getDate()+'日'
            },
            nowDate:function(){
                let $time = new Date(this.nowTime);
                return $time.getHours();
            }
        },
        components: {},
//初始化数据
        created() {
            console.log('created is run');

        },
        mounted() {
            console.log('mounted is run');
        },
        activated(){
            console.log('组件被激活了');
        },
//一些自定义方法
        methods: {
            handleCancelEvent() {
                this.$emit('cancelEvent');
            },
            handleSureEvent() {
                if(!this.selectTime){
                    this.$toast('请选择时间');
                    return;
                }
                let $time=''
                if(this.currentDay=='today'){
                    $time=`${this.today} ${this.selectTime}:00`
                };
                if(this.currentDay=='tomorrow'){
                    $time=`${this.tomorrow} ${this.selectTime}:00`
                };
                if(this.currentDay=='after-tomorrow'){
                    $time=`${this.afterTomorrow} ${this.selectTime}:00`
                };
                this.$emit('sureEvent',$time);
            },
            handleInput() {
                this.$emit('closeEvent');
            },
            handleSwitchDay(type) {
                if(type=='today'){
                    if(this.nowTime-this.selectTime>=0){
                        this.selectTimeIndex='';
                        this.selectTime='';
                    };
                };
                this.currentDay = type;
            },
            handleClickTime(index,time){
               this.selectTimeIndex=index;
               this.selectTime=time;
            }
        }
    }
</script>

<style scoped lang="scss">
  .pop-container {
    width: 100%;
    height: 380px;
    overflow: hidden;

    .top-pop {
      width: 100%;
      height: 112px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.07);
      overflow: hidden;

    }
  }

  .control-container {
    width: 100%;
    height: 50px;

    .cancel-btn {
      padding-left: 16px;
      text-align: left;
      width: 80px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFangSC;
    }

    .sure-btn {
      text-align: right;
      padding-right: 16px;
      width: 80px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }

  .date-container {
    height: 62px;
    width: 100%;
    overflow: hidden;

    .item {
      width: 60px;
      height: 100%;
      overflow: hidden;

      &:first-of-type {
        margin-left: 40px;
      }

      &:last-of-type {
        margin-right: 40px;
      }

      .title1 {
        width: 100%;
        height: 18px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(3, 8, 24, 1);
        line-height: 18px;
        text-align: center;
      }

      .title2 {
        margin-top: 4px;
        width: 100%;
        height: 14px;
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 14px;
        text-align: center;
      }

      .title3 {
        margin-top: 4px;
        width: 16px;
        height: 2px;
        border-radius: 1px;
      }

      .active-color {
        color: rgba(0, 0, 0, 1);
        background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .active-bg {
        background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
      }
    }
  }

  .bottom-pop {
    width: 100%;
    height: 100%;
    padding-top: 24px;
    padding-left: 15px;
    box-sizing: border-box;
    align-content: flex-start;

    .time {
      width: 85px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin: 0;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(3, 8, 24, 1);

    }
    .dis-time{
      background: rgba(250, 250, 250, 1);
      border-top: 1px solid rgba(241, 241, 241, 1);
      border-left: 1px solid rgba(241, 241, 241, 1);
    }
    .normal-time{
      border-top: 1px solid rgba(241, 241, 241, 1);
      border-left: 1px solid rgba(241, 241, 241, 1);
    }
    .active-time{
      border-top: 1px solid rgba(241, 241, 241, 1);
      border-left: 1px solid rgba(241, 241, 241, 1);
      background: red;
      background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      color:rgba(3,8,24,1);
    }

    .right-border {
      border-right: 1px solid rgba(241, 241, 241, 1);
    }

  }


</style>
