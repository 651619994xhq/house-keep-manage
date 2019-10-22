<template>
    <div class="staff-info row flex-item flex-justify-start">
      <div class="left-module">
          <img src="" alt="">
          <div class="exclusive">
            独家
          </div>
      </div>
      <div class="right-module col flex-item flex-justify">
          <div class="item1 row flex-item flex-justify-between">
              <div class="name row flex-item flex-justify-start">
                 <div class="name1">
                   熊海强
                 </div>
                <div class="order-number">
                  90001
                </div>
              </div>
              <div class="title row flex-item flex-justify-between">
                <div class="title-icon">
                    <img src="" alt="">
                </div>
                <div class="text">
                    2018十佳月嫂
                </div>
              </div>

          </div>
          <div class="item2">
              49岁 | 河北人 | 从业2年
          </div>
          <div class="item3 row flex-item flex-justify-start wrap">
              <div class="item-3">
                     能力超强
              </div>
              <div class="item-3">
                  细心温暖
              </div>
          </div>

      </div>
    </div>
</template>

<script>
  //首页列表1
  export default {
    name: 'staffInfo',
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
.staff-info{
    width: 375px;
    height: 112px;
    background: #fff;
    .left-module{
        margin-left: 16px;
        width: 60px;
        height: 60px;
        background: #666666;
        position: relative;
        .exclusive{
          position: absolute;
          top: -14px;
          right: -20px;
          width:64px;
          height:28px;
          line-height: 28px;
          background:linear-gradient(338deg,rgba(201,141,253,1) 0%,rgba(250,119,119,1) 100%);
          border-radius:14px 14px 14px 2px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          text-align: center;
          font-size:20px;
          transform: scale(0.5);
        }
    }
    .right-module{
        margin-left: 16px;
        width: 267px;
        height: 100%;
        .item1{
            height: 20px;
            width: 100%;
            line-height: 20px;
            .name{
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFangSC;
                font-weight:600;
                color:rgba(54,61,79,1);
                .order-number{
                  margin-left: 10px;
                  font-size:12px;
                  font-weight:400;
                  color:#949EA4;
                }
            }
            .title-icon{
                width: 10px;
                height: 10px;
                background: #ff6666;
                margin-right: 4px;
            }
            .text{
                font-size:10px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(223,83,83,1);
            }
        }
        .item2{
            margin-top: 4px;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(148,158,164,1);
        }
        .item3{
            margin-top: 4px;
            width: 100%;
            .item-3{
                margin-right: 6px;
                text-align: center;
                width:60px;
                height:18px;
                line-height: 18px;
                background:rgba(245,245,246,1);
                border-radius:2px;
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(148,158,164,1);
            }
        }
    }
}
</style>
