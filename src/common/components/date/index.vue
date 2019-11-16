<template>
  <div class="date-container">
      <div class="work-experience col flex-item-start flex-justify-start">
       <div class="title1">
         工作日历
       </div>
        <div class="title2 row flex-item flex-justify">
          <div class="item" style="color: #8A8F9B">日</div>
          <div class="item">一</div>
          <div class="item">二</div>
          <div class="item">三</div>
          <div class="item">四</div>
          <div class="item">五</div>
          <div class="item" style="color: #8A8F9B">六</div>
        </div>
      </div>
      <div class="date-time" v-for="(item,index) in infoData" :key="index">
      <div class="month">
        {{item.month}}月
      </div>
      <div class="day-time row flex-item flex-justify wrap">
        <div class="item item-none"></div>
        <div class="item item-none"></div>
        <div class="item" :class="isClass((index2+1),item.occupy)" v-for="(item2,index2) in item.days" :key="index2">{{index2+1}}</div>
<!--        <div class="item item-start item-end">2</div>-->
<!--        <div class="item ">30</div>-->
        <div class="item item-none" v-for="item3 in (33-item.days)" :key="item3+'-none'"></div>
      </div>
    </div>

  </div>
</template>

<script>
  let _data=[
      {
      time:'',
      month:10,
      days:31,
      occupy:[]
      },
      {
          month:11,
          days:30,
          occupy:[[2,5],[9,30]]
      },
      {
          month:12,
          days:30,
          occupy:[[2,6],[9,30]]
      },
      {
          month:1,
          days:30,
          occupy:[[2,7],[9,30]]
      }
      ];


    //预约时间
    export default {
        name: 'date',
        props:{

        },
        data () {
            return {
                isToday:true,
                infoData:_data
            }
        },
//组件
        components: {},
//初始化数据
        created () {

        },
//一些自定义方法
        methods: {
            isClass(day,days){
                for(let i=0,len=days.length;i<len;i++){
                    for(let k=0,len2=days[i].length;k<len2;k++){
                        if(day==days[i][0]&&day==days[i][1]){
                            return 'item-radius'
                        };
                        if(day==days[i][0]){
                            return  'item-start'
                        }
                        if(day==days[i][1]){
                            return 'item-end'
                        };
                        if(day>days[i][0]&&day<days[i][1]){
                            return ''
                        };
                    };
                };
                return 'item-none'
            }

        }
    }
</script>

<style scoped lang="scss">
  .date-container{
      width: 100%;
      overflow: hidden;
      .work-experience{
        width: 100%;
        height: 80px;
        background: #ffffff;
        overflow: hidden;
        .title1{
          margin-left: 16px;
          margin-top: 10px;
          height: 20px;
          line-height: 20px;
          text-align: left;
          font-size:16px;
          font-family:PingFangSC-Regular,PingFangSC;
          font-weight:400;
          color:rgba(0,2,18,1);
        }
        .title2{
          margin-top: 10px;
          width: 100%;
          height: 20px;
          .item{
            width:53.5px;
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(3,8,24,1);
            line-height:20px;
            text-align: center;
            letter-spacing:1px;
          }

        }
      }
  }
  .date-time{
    width: 100%;
    align-items: flex-start;
    overflow: hidden;
    .month{
      text-indent: 16px;
      height: 28px;
      line-height: 28px;
      background: #F7F7F7;
      font-size:14px;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(3,8,24,1);
      letter-spacing:1px;
    }
    .day-time{
      background: #ffffff;
      padding-top: 10px;
      padding-bottom: 16px;
      .item{
        background: #F7F7F7;
        margin-top: 6px;
        width:53.5px;
        height:24px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(3,8,24,1);
        line-height:24px;
        text-align: center;
        letter-spacing:1px;
        color: #C8C9CB;
      }
      .item-radius{
         border-radius: 12px;
      }
      .item-start{
        border-radius: 12px 0 0 12px;
      }
      .item-end{
        border-radius: 0 12px 12px 0;
      }
      .item-none{
        background: none;
        color: #030818;
      }
    }
  }
</style>
