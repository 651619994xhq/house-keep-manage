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
               let [err,data]=await isGoSupplementInfo();
               if(err!==null){
                   this.$toast(err||'系统错误');
                 return ;
               };
               if(data==1){
                   this.$router.replace({
                       path:'/index/home'
                   });
                   return ;
               }
               this.$router.replace({
                  path:'/login'
               });
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
