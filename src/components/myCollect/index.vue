<template>
  <div class="container">
    <van-swipe-cell class="item-container">
<!--      <template slot="left">-->
<!--        <van-button square type="primary" text="选择" />-->
<!--      </template>-->

<!--      <van-cell :border="false" title="单元格" value="内容" />-->
        <div class="content">
          123
        </div>
      <span slot="right">test</span>
<!--      <template slot="right">-->
<!--       <div class="delete">-->
<!--          删除-->
<!--       </div>-->
<!--      </template>-->
    </van-swipe-cell>
  </div>
</template>
<script>
    export default {
        name: "myCollect",
        data() {
            return {
            }
        },
        components:{
        },
        mounted() {

        },
        methods: {

        },
        created(){

        }
    }
</script>
<style scoped lang="scss">
  .container{
    width: 100%;
    height: 100%;
    background: #efefef;
    overflow: hidden;
  }

  .item-container{
    background: #7DB5FB;
    height: 112px;
    width: 375px;
  }
  .content{
    width: 375px;
    height: 112px;
    text-align: center;
    background: red;
  }
  .delete{
    width: 70px;
    height: 76px;
    background:rebeccapurple;
    text-align: center;
  }
</style>
