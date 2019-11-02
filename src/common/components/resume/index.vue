<template>
    <div class="resume-header">
        <div class="bg"></div>
        <div class="card-info row flex-item flex-justify-start">
            <div class="header-img">
                <img src="" alt="">
            </div>
            <div class="info col flex-item flex-justify">
               <div class="item1 row flex-item flex-justify-between">
                   <div class="name">
                       张阿姨
                   </div>
                   <div class="money">
                       ￥ 7000/月
                   </div>
               </div>
               <div class="item2 row flex-item flex-justify-start">
                  <div class="item2-icon">
                      <img src="~image/icon_red@2x.png" alt="">
                  </div>
                   <div class="title">
                       2018十佳育婴师
                   </div>
               </div>
               <div class="item3 row flex-item flex-justify-start">
                   <div class="item-3 col flex-item-start flex-justify">
                       <div class="item-3-title">
                           54岁
                       </div>
                       <div class="item-3-title2">
                           年龄
                       </div>

                   </div>
                   <div class="item-3 col flex-item-start flex-justify">
                       <div class="item-3-title">
                           2年
                       </div>
                       <div class="item-3-title2">
                           经验
                       </div>
                   </div>
                   <div class="item-3 col flex-item-start flex-justify">
                       <div class="item-3-title">
                           湖南
                       </div>
                       <div class="item-3-title2">
                           籍贯
                       </div>
                   </div>
                   <div class="item-3 col flex-item-start flex-justify">
                       <div class="item-3-title">
                           高中
                       </div>
                       <div class="item-3-title2">
                           学历
                       </div>
                   </div>
               </div>
            </div>
        </div>

    </div>
</template>

<script>
    //简历介绍 头部
  export default {
    name: 'resume',
    data () {
      return {}
    },
//组件
    components: {},
//初始化数据
    created () {

    },
//一些自定义方法
    methods: {}
  }
</script>

<style scoped lang="scss">
.resume-header{
    width: 100%;
    height: 190px;
    background: $white;
    position: relative;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 132px;
        background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
    }
    .card-info{
        position: absolute;
        top: 16px;
        left: 13px;
        width: 350px;
        height: 150px;
        border-radius:6px;
        background: $white;
        box-shadow:0 5px 10px -5px #999;
        .header-img{
            margin-left: 16px;
            width: 114px;
            height: 114px;
            background: #999999;
            border-radius: 4px;
            overflow: hidden;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }

        }
        .info{
           margin-left: 16px;
           width: 188px;
           height: 100%;
           overflow: hidden;
            .item1{
                width: 100%;
                height: 30px;
                line-height: 30px;
                .name{
                    font-size:22px;
                    font-family:PingFangSC-Semibold,PingFangSC;
                    font-weight:600;
                    color:rgba(3,8,24,1);
                }
                .money{
                    font-family:PingFangSC-Medium,PingFangSC;
                    font-weight:500;
                    color:$pink;
                }
            }
            .item2{
                margin-top: 6px;
                height: 16px;
                width: 100%;
                line-height: 16px;
                .item2-icon{
                    width: 12px;
                    height: 12px;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .title{
                    margin-left: 6px;
                    font-size:10px;
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                    color:rgba(223,83,83,1);
                }

            }
            .item3{
                margin-top: 5px;
                width: 100%;
                height: 40px;
                .item-3{
                    margin-right: 8.5px;
                    height: 40px;
                    width: 40px;
                    .item-3-title{
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFangSC;
                        font-weight:400;
                        color:rgba(3,8,24,1);
                    }
                    .item-3-title2{
                        margin-top: 2px;
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFangSC;
                        font-weight:400;
                        color:rgba(138,143,155,1);
                    }
                }
                .item-3:last-of-type{
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
