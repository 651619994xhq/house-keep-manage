<template>
  <div class="no-data col flex-item flex-justify">
    <div class="img-container">
      <img src="~image/no-data.png" alt="">
    </div>
    <div class="title1">
      页面空空如也
    </div>
    <div class="title2">
      别紧张，试试去看看～
    </div>
    <div class="look-btn col flex-item flex-justify" @click="handleLook">
      <span class="purple-color">去看看</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "noData",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {

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
       font-size:12px;
       font-family:PingFangSC-Regular,PingFang SC;
       font-weight:400;
       color:rgba(201,201,201,1);
       line-height:16px;
     }
     .look-btn{
       width:106px;
       height:28px;
       border-radius:21px;
       border:1px solid;
       border-image:linear-gradient(338deg, rgba(201,141,253,1), rgba(250,119,119,1)) 1 1;
       span{
         font-size:14px;
         font-family:PingFangSC-Regular,PingFang SC;
         font-weight:400;
         line-height:16px;
       }
     }
   }

</style>
