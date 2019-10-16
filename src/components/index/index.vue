<template>
    <div>
      <keep-alive>
        <router-view v-keep-scroll-position></router-view>
      </keep-alive>
        <tabBar :currentType="type" @changeTabBarType="changeTabBarType"></tabBar>
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
            if(name=='shop'){
                this.type=name;
                return;
            }

        },
//一些自定义方法
        methods: {
            changeTabBarType(e){
                console.log(e);
                this.type=e;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
