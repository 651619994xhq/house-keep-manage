<template>
  <div class="enterport col flex-item flex-justify">
    <van-loading type="spinner" color="#1989fa" ></van-loading>
  </div>
</template>

<script>
  //在这个页面 判断 是否 跳转到 注册(补充信息页)
    import {isGoSupplementInfo} from '@/common/utils/service';
    export default {
        name: "enterport",
        created() {
            this.$isGoSupplementInfo();
        },
        methods:{
            async $isGoSupplementInfo(){
                setTimeout(()=>{
                    this.$router.replace({
                       path:'/login'
                    });
                },3000);
            }
        }
    }
</script>

<style scoped lang="scss">
  .enterport{
    width: 100%;
    height: 100%;
  }
</style>
