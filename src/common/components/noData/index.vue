<template>
  <div class="no-data col flex-item flex-justify-start">
    <div class="img-container">
      <img src="~image/no_data.png" alt="">
    </div>
    <div class="title1">
      页面空空如也
    </div>
    <div class="title2">
      别紧张，试试去看看～
    </div>
    <div class="look-btn col flex-item flex-justify" @click="handleLook">
      <div class="look-btn2 col flex-item flex-justify">
        <span class="purple-color">去看看</span>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "noData",
        data() {
            return {

            }
        },
        created() {

        },
        methods: {
            handleLook(){
                this.$emit('lookEvent')
            }

        },
    }
</script>

<style scoped lang="scss">
   .no-data{
     width: 100%;
     height: 100%;
     overflow: hidden;
     position: fixed;
     top: 0;
     left: 0;
     .img-container{
       margin-top: 140px;
       width: 344px;
       height: 192px;
       img{
         display: block;
         width: 100%;
         height: 100%;
       }
     }
     .title1{
       font-size:14px;
       font-family:PingFangSC-Regular,PingFang SC;
       font-weight:400;
       color:rgba(50,50,51,1);
       line-height:16px;
     }
     .title2{
       margin-top: 8px;
       font-size:12px;
       font-family:PingFangSC-Regular,PingFang SC;
       font-weight:400;
       color:rgba(201,201,201,1);
       line-height:16px;
     }
     .look-btn{
       margin-top: 16px;
       width:106px;
       height:28px;
       border-radius:24px;
       padding: 1px;
       background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
       color: rgba(255, 255, 255, 1);
       .look-btn2{
         width: 100%;
         height: 100%;
         border-radius: 24px;
         background: #FFFFFF;
       }
       span{
         font-size:14px;
         font-family:PingFangSC-Regular,PingFang SC;
         font-weight:400;
         line-height:16px;
       }
     }
   }

</style>
