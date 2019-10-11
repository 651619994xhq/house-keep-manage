<template>
    <div class="container">
        <resume></resume>
        <div class="interview-container col flex-item-start flex-justify-start">
            <div class="title">
                请选择面试方式
            </div>
            <div class="title2 row flex-item flex-justify-start">
                  <div class="item item-active">
                      到店面试
                  </div>
                <div class="item item-normal">
                    上门面试
                </div>
                <div class="item item-normal">
                    视频面试
                </div>
            </div>
            <div class="title3 row flex-item flex-justify-start">
                <div class="text1">到店面试地址：</div>
                <div class="text2">北京市朝阳区金茂府2期东区6号楼</div>
            </div>

        </div>
        <div class="appointment-btn row flex-item flex-justify-between">
          <div class="title1">预约面试时间</div>
          <div class="title2 row flex-item flex-justify-between">
              <div class="item1">请选择</div>
              <div class="item2">></div>
          </div>
        </div>
    </div>
</template>

<script>
  import resume from '@/common/components/resume/index';
  export default {
    name: "apponitment",
    data() {
      return {

      }
    },
//组件
    components: {
      resume
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
        background:#f7f7f7;
    }
    .interview-container{
        margin-top: 10px;
        background: $white;
        width: 100%;
        padding-left: 16px;
        min-height: 140px;
        .title{
            margin-top: 16px;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:600;
            color:#000212;
        }
        .title2{
            margin-top: 16px;
            width: 100%;
            height: 30px;
            .item{
                width: 102px;
                height: 28px;
                line-height: 28px;
                border-radius:6px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                text-align: center;
                margin-right: 19px;
                box-sizing: border-box;
            }
            .item-normal{
                color:rgba(0,2,18,1);
                background:rgba(241,241,241,1);
            }
            .item-active{
                border:1px solid;
                border-image:linear-gradient(338deg, rgba(201,141,253,1), rgba(250,119,119,1)) 1 1;
                color:rgba(0,2,18,1);
                background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
            }

        }
        .title3{
            margin-top: 16px;
            height: 20px;
            line-height: 20px;
            text-align: left;
            font-size:13px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            .text1{
                color:rgba(138,143,155,1);
            }
            .text2{
                color:#3B445C;
            }
        }
    }
    .appointment-btn{
        margin-top: 10px;
        height: 52px;
        line-height: 52px;
        width: 100%;
        background: #FFFFFF;
        .title1{
            margin-left: 16px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:600;
            color:rgba(0,2,18,1);
        }
        .title2{
            height: 100%;
            margin-right: 16px;
            .item1{
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(200,201,203,1);
                margin-right: 10px;
            }
            .item2{
                color: #949EA4;
            }

        }
    }
</style>
