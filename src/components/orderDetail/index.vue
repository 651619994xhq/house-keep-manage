<template>
    <div class="container">
        this is order-detail-page
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {}
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        overflow: hidden;
    }
    .header{
        width: 750px;
        height: 750px;
        background: #FFFFFF;
        .img-view{
            width: 366px;
            height: 507px;
            background: #F7F6FB;
        }
    }
    .commodity-info{
        min-height: 220px;
        width: 100%;
        background: #ffffff;
        margin-top: 20px;
        .money{
            height: 100px;
            line-height: 100px;
            width: 678px;
            text-align: left;
            color: #ff6666;
            font-size: 40px;
        }
        .content{
            color: #3A3E51FF;
            width: 678px;
            min-height: 80px;
            line-height: 44px;
            font-size: 32px;
            margin-bottom: 32px;
        }
    }
    .address{
        margin-top: 20px;
        width: 100%;
        height: 240px;
        background: #FFFFFF;
        overflow: hidden;
        .item{
            margin-top: 30px;
            height: 40px;
            width: 678px;
            background: #F7F6FB;
        }
    }
</style>
