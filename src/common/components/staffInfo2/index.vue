<template>
    <div class="staff-info2 col flex-item flex-justify-between">
        <div class="top-module row flex-item flex-justify-start">
           <div class="user-img">
             <img src="" alt="">
             <div class="exclusive">
               独家
             </div>
           </div>
            <div class="info col flex-item-start flex-justify-start">
                <div class="name">
                  {{itemInfo.workName}}
                </div>
                <div class="content">
                  {{itemInfo.workInfo}}
                </div>

            </div>
        </div>
        <div class="bottom-module row flex-item-start flex-justify-start">
          <div class="item" @click="handleClickAppoint">
              立即预约
          </div>
<!--          <div class="item2" @click="handleClickLookDetail">-->
<!--              查看详情-->
<!--          </div>-->
        </div>
    </div>
</template>

<script>
  //首页列表2
  export default {
    name: 'staffInfo2',
    props:{
      itemInfo:{
          type:Object,
          default:{}
      }
    },
    data () {
      return {}
    },
//组件
    components: {},
//初始化数据
    created () {

    },
//一些自定义方法
    methods: {
        handleClickAppoint(){
            this.$emit('appointEvent')
        },
        // handleClickLookDetail(){
        //     this.$router.push({
        //         path:'/person-resume'
        //     });
        // }
    }
  }
</script>

<style scoped lang="scss">
.staff-info2{
    width:100%;
    height: 130px;
    background: #FFFFFF;
    .top-module{
        margin-top: 24px;
        width: 100%;
        height: 60px;
        .user-img{
            margin-left: 16px;
            margin-right: 16px;
            width: 60px;
            height: 60px;
            background: #666666;
            position: relative;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          .exclusive{
            position: absolute;
            top: -14px;
            right: -20px;
            width: 64px;
            height: 28px;
            line-height: 28px;
            background: linear-gradient(338deg, rgba(201, 141, 253, 1) 0%, rgba(250, 119, 119, 1) 100%);
            border-radius: 14px 14px 14px 2px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            font-size: 20px;
            transform: scale(0.5);
          }
        }
        .info{
            width: 267px;
            height: 60px;
            .name{
                height:20px;
                line-height: 20px;
                text-align: center;
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFangSC;
                font-weight:600;
                color:rgba(54,61,79,1);
            }
            .content{
                margin-top: 4px;
                height: 32px;
                width: 100%;
                overflow: hidden;
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(148,158,164,1);
                line-height:16px;

            }
        }
    }
    .bottom-module{
        width: 100%;
        margin-bottom: 20px;
        .item{
            margin-left: 92px;
            margin-right: 8px;
            width:72px;
            height:22px;
            line-height: 22px;
            text-align: center;
            background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
            border-radius:11px;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            box-sizing: border-box;
        }
        .item2{
            width:72px;
            height:22px;
            line-height: 22px;
            text-align: center;
            border-radius:11px;
            border:1px solid rgba(250,119,119,1);
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            box-sizing: border-box;
        }
    }
}
</style>
