<template>
    <div class="footer row flex-item  flex-justify-around">
        <div class="item col flex-item flex-justify" @click="switchTab('home')">
            <img src="~image/home-light@2x.png" alt="" class="item-image" v-if="currentType=='home'">
            <img src="~image/home-gary@2x.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='home')?'active-item-title':''">首页</span>
        </div>
        <div class="item col flex-item flex-justify" @click="switchTab('order')">
            <img src="~image/Order-light@2x.png" alt="" class="item-image" v-if="currentType=='order'">
            <img src="~image/Order-gary@2x.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='order')?'active-item-title':''">订单</span>
        </div>
        <div class="item col flex-item flex-justify" @click="switchTab('mine')">
            <img src="~image/me-light@2x.png" alt="" class="item-image" v-if="currentType=='mine'">
            <img src="~image/mine-icon.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='mine')?'active-item-title':''">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            currentType:{
                type:String,
                default:'home'
            }
        },
        data() {
            return {
               type:'home'
            }
        },
//组件
        components: {},
//初始化数据
        created() {
          this.type=this._props.currentType;
        },
//一些自定义方法
        methods: {
            switchTab(type){
                if(type==this.type){
                    console.log('底部切换一致，不用切换')
                    return;
                };
                this.type=type;
                this.$emit('changeTabBarType',type);
                if(type=='home'){
                    this.$router.push({
                       path:'/index/home'
                    });
                    return;
                };
                if(type=='order'){
                    this.$router.push({
                        path:'/index/order'
                    });
                    return;
                };
                if(type=='mine'){
                    this.$router.push({
                        path:'/index/mine'
                    });
                    return;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cecece;
    z-index: 1;
    background: #ffffff;
    .item{
        width: 50px;
        height: 50px;
    }
    .item-image{
        width: 18.5px;
        height: 19px;
        display: block;
    }
    .item-title{
        margin-top: 6px;
        font-size: 12px;
        color: #3A3E51;
    }
    .active-item-title{
        color: #ff6666;
    }
}
</style>
