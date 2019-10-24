<template>
  <div class="container">
    <van-list
      v-model="load.loading"
      :finished="load.finished"
      finished-text="没有更多了"
      :error.sync="load.error"
      error-text="请求失败，点击重新加载"
      @load="loadEvent"
    >
      <div class="order-item" v-for="(item,index) in list" @click="handleGoToOrderDetailPage">
        <div class="item1 row flex-item flex-justify-between">
          <div class="row flex-item flex-justify-start">
            <div class="item-icon">

            </div>
            <div class="occupation">
              月嫂
            </div>
          </div>
          <!--          <div class="common-status item-status">-->
          <!--             待面试-->
          <!--          </div>-->
          <!--          <div class="common-status item-status1">-->
          <!--            面试结束-->
          <!--          </div>-->
          <div class="common-status item-status2">
            待签约
          </div>
        </div>
        <div class="item2 row flex-item flex-justify-between">
          <div class="name">
            吴阿姨
          </div>
          <div class="money">
            ¥ 7000/月
          </div>
        </div>
        <div class="item3 row flex-item flex-justify-start">
          <div class="item-title">
            面试方式：
          </div>
          <div class="content">
            上门面试
          </div>
        </div>
        <div class="item3 row flex-item flex-justify-start">
          <div class="item-title">
            面试时间：
          </div>
          <div class="content">
            2019-09-09
          </div>
        </div>
        <div class="item4 row flex-item flex-justify-start">
          <div class="item-title">
            面试地点：
          </div>
          <div class="content">
            广东省广州市天河区XXXXXX
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                list: [1, 2, 3],
                load: {
                    error: false,  //错误
                    loading: false, //加载更多
                    finished: false //完成
                },
                currentPage:1

            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            loadEvent() {
                console.log('loadEvent is run')
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.load.loading = false;
                    // if(this.list.length>=20){
                    //   this.error=true;
                    // }

                    // 数据全部加载完成
                    // if (this.list.length >= 40) {
                    //   this.load.finished = true;
                    // }
                }, 500);
            },
            handleGoToOrderDetailPage() {
                this.$router.push({
                    path: '/order-detail'
                })
            }

        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    padding-bottom: 100px;
  }

  .order-item {
    background: $white;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;

    .item1 {
      width: 100%;
      height: 30px;

      .item-icon {
        margin-left: 16px;
        margin-right: 10px;
        background: #666666;
        width: 14px;
        height: 16px;
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

    .item2 {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(0, 2, 18, 1);

      .name {
        margin-left: 16px;
      }

      .money {
        margin-right: 16px;
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

</style>
