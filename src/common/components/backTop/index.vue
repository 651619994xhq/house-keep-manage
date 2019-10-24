<template>
  <!--        跳转到顶部-->
  <div class="backTop col flex-item flex-justify" v-if="backTop" @click='backTopHandle'>
    <img src='~image/backTop2.png' />
  </div>
</template>

<script>
    export default {
        name: "backTop",
        props:{
            backTop:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            backTopHandle(){
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                });

                // let scrollToTop = window.setInterval(()=>{
                //     let Top = document.documentElement.scrollTop || document.body.scrollTop
                //     if(Top>0){
                //         window.scrollTo( 0, Top - 80)
                //     }else{
                //         window.clearInterval( scrollToTop );
                //     }
                // },10)
            }
        }
    }
</script>

<style scoped lang="scss">
  .backTop {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 20px;
    bottom: 80px;
    z-index: 100;
    background: #fff;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    img{
      width: 30px;
      height: 30px;
    }
  }

</style>
