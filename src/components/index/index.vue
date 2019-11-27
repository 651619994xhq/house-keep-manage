<template>
    <div>
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <tabBar :currentType="type"></tabBar>
    </div>
</template>

<script>
    import tabBar from '@/common/components/tabBar/index'
    export default {
        name: "index",
        data() {
            return {
                type:'home'
            }
        },
//组件
        components: {
            tabBar
        },
        watch:{
            '$route.path':function(newVal,oldVal){
                  console.log('newVal==>',newVal,'  oldVal==>',oldVal);
                if(newVal=='/index/home'){
                    this.type='home';
                }
                if(newVal=='/index/mine'){
                    this.type='mine';
                }
                if(newVal=='/index/order'){
                    this.type='order';
                }
             }
        },
//初始化数据
        created() {
            let name=this.$route.name;
            if(name=='mine'){
                this.type=name;
                return;
            }
            if(name=='home'){
                this.type=name;
                return;
            }
            if(name=='order'){
                this.type=name;
                return;
            }

        },
//一些自定义方法
        methods: {
            // changeTabBarType(e){
            //     console.log(e);
            //     this.type=e;
            // }
        }
    }
</script>

<style scoped lang="scss">

</style>
