<template>
    <div class="container">
        <div class="header col flex-item flex-justify-start">
              <div class="img-view">
                  <img src="~image/header.png" alt="">
              </div>
               <div class="login-btn" @click="hanldeGoToLogin">登录</div>
        </div>
        <div class="main row flex-item flex-justify-between">
            <div class="item flex-grow col flex-item flex-justify" @click="handleGoToOrder">
                 <div class="img-icon1">

                 </div>
                <div class="img-title">我的订单</div>
            </div>
            <div class="item-border"></div>
            <div class="item flex-grow col flex-item flex-justify" @click="handleGoToAdress">
                <div class="img-icon2">

                </div>
                <div class="img-title">收货地址</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
        data() {
            return {}
        },
//组件
        components: {},
//初始化数据
        created() {
          console.log('mine is created')
        },
//一些自定义方法
        methods: {
            handleGoToOrder(){
              this.$router.push({
                  path:'/order'
              })
            },
            handleGoToAdress(){
                this.$router.push({
                   path:'/address'
                });
            },
            hanldeGoToLogin(){
                this.$router.push({
                    path:'/login'
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .header{
        width:100%;
        height:213px;
        background:rgba(255,102,0,1);
        border-radius:0px 0px 60px 60px;
        overflow: hidden;
    }
    .main{
        margin: 14px auto;
        width:347px;
        height:140px;
        background:rgba(255,255,255,1);
        border-radius:5px;
        overflow: hidden;
    }
    .img-view{
        margin-top: 100px;
        width: 48px;
        height: 48px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .login-btn{
        margin-top: 19px;
        width: 93.5px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ffffff;
        border-radius: 15px;
        font-size: 12px;
        color: #ffffff;
    }
    .item{
        height: 100%;
        /*background: #ff6666;*/
    }
    .item:last-of-type{
        /*background: #0A81FB;*/
    }
    .item-border{
        width: 1px;
        height: 75px;
        background: #CBCCCC;
    }
    .img-icon1{
       width: 25px;
       height: 25px;
       background: #0A81FB;
    }
    .img-title{
      margin-top: 14px;
      font-size: 12px;
      height: 14px;
      line-height: 14px;
    }
    .img-icon2{
        width: 19px;
        height: 26px;
        background: #ff6666;
    }



</style>
