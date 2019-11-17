<template>
  <div class="staff-info row flex-item flex-justify-start" @click="handleClickItem(itemInfo.id)">
    <div class="left-module">
      <img :src="itemInfo.imageUrl?itemInfo.imageUrl:''" alt="">
      <div class="exclusive" v-if="itemInfo.isSole==1">
        独家
      </div>
    </div>
    <div class="right-module col flex-item flex-justify">
      <div class="item1 row flex-item flex-justify-between">
        <div class="name row flex-item flex-justify-start">
          <div class="name1">
            {{itemInfo.name||'未知'}}
          </div>
          <div class="order-number">
            {{itemInfo.code}}
          </div>
        </div>
        <div class="title row flex-item flex-justify-between" v-if="itemInfo.oneSentenceEvaluation">
          <div class="title-icon">
            <img src="~image/icon_red@2x.png" alt="">
          </div>
          <div class="text">
            {{itemInfo.oneSentenceEvaluation||''}}
          </div>
        </div>

      </div>
      <div class="item2">
        {{itemInfo.age||'0'}}岁 | {{itemInfo.nativePlace || ''}} {{itemInfo.nativePlace?'|':''}} 从业{{itemInfo.workYear||'0'}}年
      </div>
      <div class="item3 row flex-item flex-justify-start wrap">
        <div class="item-3" v-for="(item,index) in (itemInfo.labelList||[])" :key="index">
          {{item}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    //首页列表1
    export default {
        name: 'staffInfo',
        props: {
            itemInfo:{
                type:Object,
                default:{}
            }
        },
        data() {
            return {}
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            handleClickItem(id) {
                if(!id){
                    this.$toast('暂时无法查看详情')
                  return;
                };
                this.$router.push({
                    path: '/person-resume',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .staff-info {
    width: 375px;
    height: 112px;
    background: #fff;

    .left-module {
      margin-left: 16px;
      width: 60px;
      height: 60px;
      background: #666666;
      position: relative;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }

      .exclusive {
        position: absolute;
        top: -14px;
        right: -20px;
        width: 64px;
        height: 28px;
        line-height: 28px;
        background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
        border-radius: 14px 14px 14px 2px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        font-size: 20px;
        transform: scale(0.5);
      }
    }

    .right-module {
      margin-left: 16px;
      width: 267px;
      height: 100%;

      .item1 {
        height: 20px;
        width: 100%;
        line-height: 20px;

        .name {
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFangSC;
          font-weight: 600;
          color: rgba(54, 61, 79, 1);

          .order-number {
            margin-left: 10px;
            font-size: 12px;
            font-weight: normal;
            color: #949EA4;
          }
        }

        .title-icon {
          width: 10px;
          height: 10px;
          margin-right: 4px;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .text {
          font-size: 10px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(223, 83, 83, 1);
        }
      }

      .item2 {
        margin-top: 4px;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(148, 158, 164, 1);
      }

      .item3 {
        margin-top: 4px;
        width: 100%;

        .item-3 {
          margin-right: 6px;
          text-align: center;
          min-width: 60px;
          padding: 0 4px;
          box-sizing: border-box;
          height: 18px;
          line-height: 18px;
          background: rgba(245, 245, 246, 1);
          border-radius: 2px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(148, 158, 164, 1);
        }
      }
    }
  }
</style>
