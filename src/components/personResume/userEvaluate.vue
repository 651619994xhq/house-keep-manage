<template>
  <div class="user-evaluate">
    <div class="item-header row flex-item flex-justify-start">
      <div class="item-icon">
        <img src="~image/comment@2x.png" alt="">
      </div>
      <div class="title">用户评价</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "userEvaluate"
    }
</script>

<style scoped lang="scss">
  .user-evaluate{
    min-height: 300px;
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
  }
</style>
