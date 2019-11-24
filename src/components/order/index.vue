<template>
  <div class="container">
    <van-list
      v-model="load.loading"
      :finished="load.finished"
      finished-text="没有更多了"
      :error.sync="load.error"
      error-text="请求失败，点击重新加载"
      @load="loadEvent"
      v-if="isHasData"
    >
      <div class="order-item" v-for="(item,index) in list" @click="handleGoToOrderDetailPage(item.id)">
        <div class="item1 row flex-item flex-justify-between">
          <div class="row flex-item flex-justify-start">
            <div class="item-icon">
              <img src="~image/work@2x.png" alt="">
            </div>
            <div class="occupation">
              {{item.orderType | WORK_TYPE_FILTER}}
            </div>
          </div>
          <div class="common-status item-status2" style="color: #E9AC7E" v-if="item.status==5||item.status==15">
            {{item.status | ORDER_STATUS_FILTER}}
          </div>
          <div class="common-status item-status2" style="color: #CECFD1" v-if="item.status==10||item.status==35||item.status==40">
            {{item.status | ORDER_STATUS_FILTER}}
          </div>
          <div class="common-status item-status2" style="color: #7DB5FB" v-if="item.status==20">
            {{item.status | ORDER_STATUS_FILTER}}
          </div>
          <div class="common-status item-status2 purple-color" v-if="item.status==25||item.status==30 ">
            {{item.status | ORDER_STATUS_FILTER}}
          </div>
        </div>
        <div class="item2 row flex-item flex-justify-between">
          <div class="name">
            {{item.employeeName||'未知'}}
          </div>
          <div class="money">
            ¥ {{item.salary||'0'}}/月
          </div>
        </div>
        <div class="item3 row flex-item flex-justify-start">
          <div class="item-title">
            面试方式：
          </div>
          <div class="content">
            {{
            item.interviewType | INTERVIEW_TYPE_FILTER}}
          </div>
        </div>
        <div class="item3 row flex-item flex-justify-start">
          <div class="item-title">
            面试时间：
          </div>
          <div class="content">
            {{item.interviewTime||'未知'}}
          </div>
        </div>
        <div class="item4 row flex-item flex-justify-start" v-if="item.interviewType==1">
          <div class="item-title">
            面试地点：
          </div>
          <div class="content">
<!--            {{item.interviewAddress||'未知'}}-->
            北京市朝阳区首城国际C座727室
          </div>
        </div>
      </div>
    </van-list>
    <noData v-if="!isHasData" @lookEvent="handleLookEvent"></noData>
  </div>
</template>

<script>
    import {getMyOrderList} from '@/common/utils/service'
    import backTop from '@/common/components/backTop'
    import noData from "@/common/components/noData/index";

    export default {
        name: "order",
        data() {
            return {
                list: [],
                load: {
                    error: false,  //错误
                    loading: false, //加载更多
                    finished: false //完成
                },
                currentPage: 1,
                isHasData:false,

            }
        },
//组件
        components: {
            noData
        },
//初始化数据
        created() {
           this.updateList();
        },
//一些自定义方法
        methods: {
            async updateList(){
                let [err, data] = await getMyOrderList({pageNum: 1});
                if (err !== null) {
                    this.$toast(err || '系统错误');
                    return;
                };
                let list = data.list;
                if(list.length>0){
                    this.isHasData=true;
                    return ;
                };
                this.isHasData=false;

            },
            async loadEvent() {
                this.$loading();
                let [err, data] = await getMyOrderList({pageNum: this.currentPage});
                if (err !== null) {
                    this.$toast(err || '系统错误');
                    this.load.loading=false;
                    this.load.error=true;
                    this.$clear();
                    return;
                }
                ;
                let totalPage = data.totalPage, list = data.list;
                if (this.currentPage - 1>= totalPage) {
                    this.load.loading=false;
                    this.load.finished=true;
                    this.$clear();
                    return;
                }
                ;
                this.list = [...this.list, ...list];
                this.currentPage += 1;
                this.load.loading = false;
                this.$clear();
                return;
            },
            handleGoToOrderDetailPage(id) {
                if (!id) {
                    this.$toast('暂时无法查看订单详情');
                    return;
                }
                ;
                this.$router.push({
                    path: '/order-detail',
                    query: {
                        id
                    }
                })
            },
            handleLookEvent(){
                this.$router.push({
                    path:'/index/home'
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
    padding-bottom: 20px;

    .item1 {
      margin-top: 16px;
      width: 100%;
      height: 30px;

      .item-icon {
        margin-left: 16px;
        margin-right: 8px;
        width: 18px;
        height: 18px;

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
