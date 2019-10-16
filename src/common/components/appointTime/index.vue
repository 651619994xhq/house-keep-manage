<template>
    <van-popup
            v-model="isShow"
            position="bottom"
            :style="{ width:'100%' }"
    >
        <div class="pop-container">
              <div class="top-pop">
               <div class="control-container row flex-item flex-justify-between">
                   <div class="cancel-btn">取消</div>
                    <div class="title">
                        请选择开始时间
                    </div>
                   <div class="sure-btn">
                       确定
                   </div>
               </div>
              </div>
        </div>
    </van-popup>
</template>

<script>
  export default {
    name: 'appointTime',
    props:{
      isShow:{
        type:Boolean,
        value:false
      }
    },
    data () {
      return {
      }
    },
//组件
    components: {},
//初始化数据
    created () {

    },
//一些自定义方法
    methods: {

    }
  }
</script>

<style scoped lang="scss">
    .pop-container{
        width: 100%;
        height: 380px;
        .top-pop{
            width: 100%;
            height: 112px;
            background:rgba(255,255,255,1);
            box-shadow:0px 3px 8px 0px rgba(0,0,0,0.07);
            .control-container{
                width: 100%;
                height: 50px;
                background: #ff6666;
                .cancel-btn{
                    padding-left: 16px;
                    text-align: left;
                    width: 80px;
                    height: 50px;
                    line-height: 50px;
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFangSC;
                }
                .sure-btn{
                    text-align: right;
                    padding-right: 16px;
                    width: 80px;
                    height: 50px;
                    line-height: 50px;
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                }
                .title{
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                }
            }
        }
    }

</style>
