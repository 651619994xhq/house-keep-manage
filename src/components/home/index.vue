<template>
    <div class="container">
        <van-swipe :autoplay="3000" indicator-color="white" class="swipe-container">
            <van-swipe-item class="item">1</van-swipe-item>
            <van-swipe-item class="item">2</van-swipe-item>
            <van-swipe-item class="item">3</van-swipe-item>
            <van-swipe-item class="item">4</van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    export default {
        name: "home",
        data() {
            return {
            }
        },
//组件
        components: {

        },
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background:#F7F6FB;
        padding-bottom: 100px;
    }
    .swipe-container{
        width: 100%;
        height: 300px;
        background: #0A81FB;
        .item{
            width: 100%;
            height: 100%;
            font-size: 100px;
            line-height: 300px;
            text-align: center;
        }
    }
</style>
