<template>
  <van-popup :value="isShow" @input="handleInput" class="popup-box">
    <div class="service-box col flex-item flex-justify-between">
      <div class="content flex-grow col flex-item flex-justify-start">
          <div class="header">
             服务信息
          </div>
          <div class="select-container">
            <van-picker :columns="columns" :defaultIndex="selectType-1" :visible-item-count="3" @change="handleSelectType"/>
          </div>
      </div>
      <div class="control-btn" @click="handleSureEvent">
        确定
      </div>
    </div>
  </van-popup>
</template>

<script>
    import {SELECT_SERVICE_TYPE} from '@/common/utils/constants'
    export default {
        name: "appointmentSuc",
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            selectType:{
                type:Number,
                default: 1
            }
        },
        data() {
            return {
                SELECT_SERVICE_TYPE,
                curIdentityType:'',
            }
        },
        watch:{
            selectType(val){
                this.curIdentityType=val;
            },
        },
        computed:{
            columns:function(){
                let $columns=[];
                $columns=this.SELECT_SERVICE_TYPE.map((item,index)=>{
                    return item.name
                });
                return $columns

            }
        },
        created() {

        },
        methods: {
            handleSureEvent(){
                this.$emit('sureEvent',this.curIdentityType);
            },
            handleInput(){
                this.$emit('closeEvent')
            },
            handleSelectType(picker,value){
                let $index=picker.getIndexes()[0];
                console.log("$index==>",$index)
                let type=this.SELECT_SERVICE_TYPE[$index].id;
                this.curIdentityType=type;
            }

        },
    }
</script>

<style scoped lang="scss">
  .popup-box{
    border-radius: 13px;
  }
  .service-box {
    width: 245px;
    height: 214px;
    background: rgba(255, 255, 255, 1);
    border-radius: 13px;

    .content {
      .header{
        height:18px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:18px;
        margin-top: 20px;
        margin-bottom: 4px;
      }
      .select-container{
        width: 100%;
        height: 130px;
        overflow: hidden;
      }
    }

    .control-btn {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-top: 1px solid #D3D2D3;
      color: #959595;
      font-size:15px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }

</style>
