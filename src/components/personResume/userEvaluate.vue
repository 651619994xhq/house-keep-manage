<template>
  <div class="user-evaluate" v-if="comments.length>0">
    <div class="item-header row flex-item flex-justify-start">
      <div class="item-icon">
        <img src="~image/comment@2x.png" alt="">
      </div>
      <div class="title">用户评价</div>
    </div>
    <div class="content" v-for="(item,index) in comments" :key="index">
      <div class="header row flex-item flex-justify-between">
        <div class="name">{{item.createUser||'未知'}}</div>
        <van-rate v-model="rateValue" :size="size" :readonly="readonly" :gutter="gutter" class="rate"/>
      </div>
      <div class="item-content">
       {{item.comment||'无'}}
      </div>
      <div class="time">
        {{item.commentTime||'未知'}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userEvaluate",
        props:{
          comments:{
              type:Array,
              default:[]
          }
        },
        data() {
            return {
                size:12,
                rateValue:3,
                readonly:true,
                gutter:1,
                content:[1]
            }
        },
    }
</script>

<style scoped lang="scss">
  .user-evaluate{
    min-height: 200px;
    padding-bottom: 100px;
    width: 100%;
    background: $white;
    margin-top: 10px;
    overflow: hidden;
    .item-header{
      margin-top: 16px;
      width: 100%;
      height: 20px;
      line-height: 20px;
      .item-icon{
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
      .title{
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 2, 18, 1);
      }
    }
    .content{
      width: 100%;
      min-height: 90px;
      padding: 20px 16px 0 16px;
      box-sizing: border-box;
      overflow: hidden;
      .header{
         height: 20px;
         width: 100%;
         .name{
           line-height: 20px;
           font-size:12px;
           font-family:PingFangSC-Regular,PingFang SC;
           font-weight:400;
           color:rgba(0,2,18,1);
         }
      }
      .item-content{
        margin-top: 8px;
        min-height: 20px;
        line-height: 20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,2,18,1);
      }
      .time{
        margin-top: 10px;
        height: 20px;
        line-height: 20px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(148,158,164,1);
      }
    }
  }
</style>
