<template>
  <van-popup
    :value="isShow"
    @input="handleInput"
    round="true"
    :style="{borderRadius:'13px'}"
  >
    <div class="birthday-box">
      <div class="title">
        日历组件
      </div>
      <div class="select-day-container">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :visible-item-count="3"
          :show-toolbar="false"
          :min-date="minDate"
          :max-date="maxDate"
          ref="datetimePickerElement"
        />
      </div>
      <div class="control-btn-container row flex-item flex-justify-between">
        <div class="cancel-btn flex-grow" @click="handleCancelEvent">
          取消
        </div>
        <div class="fill-border">

        </div>
        <div class="sure-btn flex-grow" @click="handleSureEvent">
          确定
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
    //预约时间
    export default {
        name: 'birthday',
        props: {
            isShow: {
                type: Boolean,
                value: false
            }
        },
        data() {
            return {
                currentDate: new Date(),
                minDate: new Date(1900, 1, 1),
                maxDate: new Date()
            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            formatter(type, value) {
                // if (type === 'year') {
                //   return `${value}年`;
                // } else if (type === 'month') {
                //   return `${value}月`
                // }
                // return value;
            },
            //确认事件
            handleSureEvent() {
                let $time = this.currentDate.getTime();
                console.log('$time==>', $time);
                this.$emit('sureEvent',$time);
            },
            //取消事件
            handleCancelEvent() {
                this.$emit('cancelEvent')
            },
            handleInput(){
                this.$emit('closeEvent')
            }

        }
    }
</script>

<style scoped lang="scss">
  .birthday-box {
    width: 245px;
    height: 214px;
    background: rgba(255, 255, 255, 1);
    border-radius: 13px;
    overflow: hidden;

    .title {
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);

    }

    .select-day-container {
      width: 100%;
      height: 130px;
      overflow: hidden;
    }

    .control-btn-container {
      height: 40px;
      width: 100%;
      background: #FFFFFF;
      border-top: 1px solid #d3d2d3;

      .cancel-btn {
        height: 100%;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(149, 149, 149, 1);
      }

      .fill-border {
        height: 40px;
        width: 1px;
        background: #d3d2d3;
      }

      .sure-btn {
        height: 100%;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(1, 122, 255, 1);
      }
    }
  }

</style>
