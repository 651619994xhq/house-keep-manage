<template>
<div class="item-container">
  <div class="time-limit col flex-item flex-justify">
     <span>限时抢购</span>
  </div>
  <div class="new-user-title">
    新用户专享
  </div>
  <div class="work-money">
    日常保洁  3小时/40元
  </div>
  <div class="shopping-btn col flex-item flex-justify">
    <span class="purple-color">
      立即抢购
    </span>
  </div>

</div>
</template>

<script>
    export default {
        name: "headerItem"
    }
</script>

<style scoped lang="scss">
  .item-container {
    font-size: 50px;
    line-height: 160px;
    text-align: center;
    width: 343px;
    height: 160px;
    background: #999;
    overflow: hidden;
    position: relative;
    .time-limit{
      position: absolute;
      top: 0;
      left: 36px;
      width: 60px;
      height: 18px;
      background:rgba(255,209,182,1);
      border-radius:0px 0px 6px 6px;
      span{
        font-size:12px;
        font-family:SourceHanSansCN-Medium,SourceHanSansCN;
        font-weight:500;
        color:rgba(255,255,255,1);
        background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

    }
    .new-user-title{
      width: 100%;
      height: 34px;
      line-height: 34px;
      margin-top: 44px;
      font-size:32px;
      font-family:SourceHanSansCN-Bold,SourceHanSansCN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      padding-left: 36px;
      text-align: left;
    }
    .work-money{
      margin-top: 8px;
      width: 100%;
      height: 14px;
      line-height: 14px;
      font-size:12px;
      font-family:SourceHanSansCN-Normal,SourceHanSansCN;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding-left: 36px;
      text-align: left;
    }
    .shopping-btn{
      position: absolute;
      bottom: 24px;
      left: 36px;
      width:80px;
      height:22px;
      background:rgba(255,255,255,1);
      border-radius:11px;
      span{
        font-size:14px;
        font-family:SourceHanSansCN-Bold,SourceHanSansCN;
        font-weight:bold;

      }

    }
  }

</style>
