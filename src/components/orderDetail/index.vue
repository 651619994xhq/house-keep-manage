<template>
    <div class="container">
        <resume></resume>
        <div class="order-item">
            <div class="item1 row flex-item flex-justify-between">
                <div class="row flex-item flex-justify-start">
                    <div class="item-icon">

                    </div>
                    <div class="occupation">
                        面试信息
                    </div>
                </div>
                <!--          <div class="common-status item-status">-->
                <!--             待面试-->
                <!--          </div>-->
                <!--          <div class="common-status item-status1">-->
                <!--            面试结束-->
                <!--          </div>-->
                <div class="common-status item-status2">
                    待签约
                </div>
            </div>
            <div class="item3 row flex-item flex-justify-start">
                <div class="item-title">
                    面试方式：
                </div>
                <div class="content">
                    上门面试
                </div>
            </div>
            <div class="item3 row flex-item flex-justify-start">
                <div class="item-title">
                    面试时间：
                </div>
                <div class="content">
                    2019-09-09
                </div>
            </div>
            <div class="item4 row flex-item flex-justify-start">
                <div class="item-title">
                    面试地点：
                </div>
                <div class="content">
                    广东省广州市天河区XXXXXX
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import resume from '@/common/components/resume/index';
    export default {
        name: "orderDetail",
        data() {
            return {}
        },
//组件
        components: {
          resume
        },
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
    .order-item{
        background: $white;
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
        .item1{
            width: 100%;
            height: 30px;
            margin-bottom: 8px;
            .item-icon{
                margin-left: 16px;
                margin-right: 10px;
                background: #666666;
                width: 14px;
                height: 16px;
            }
            .occupation{
                font-size:16px;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(0,2,18,1);
            }
            .common-status{
                margin-right: 16px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
            }
            .item-status{
                color:#E9AC7E;
            }
            .item-status1{
                color:#CECFD1;
            }
            .item-status2{
                color:#7DB5FB;
            }
        }
        .item3{
            width: 100%;
            height: 24px;
            .item-title{
                margin-left: 16px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(138,143,155,1);
            }
            .content{
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:#3B445C;
            }
        }
        .item4{
            width: 100%;
            height: 24px;
            margin-bottom: 20px;
            .item-title{
                margin-left: 16px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(138,143,155,1);
            }
            .content{
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:#3B445C;
            }
        }
    }
</style>
