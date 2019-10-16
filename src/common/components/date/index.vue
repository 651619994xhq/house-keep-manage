<template>
  <div class="date-container">
      <div class="work-experience col flex-item-start flex-justify-start">
       <div class="title1">
         工作经历
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
      <div class="date-time">
        <div class="month">
          10月
        </div>
        <div class="day-time row flex-item flex-justify wrap">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>

          <div class="item">6</div>
          <div class="item">7</div>
          <div class="item">8</div>
          <div class="item">9</div>
          <div class="item">10</div>
          <div class="item">11</div>
          <div class="item">12</div>

          <div class="item">13</div>
          <div class="item">14</div>
          <div class="item">15</div>
          <div class="item">16</div>
          <div class="item">17</div>
          <div class="item">18</div>
          <div class="item">19</div>

          <div class="item">20</div>
          <div class="item">21</div>
          <div class="item">22</div>
          <div class="item">23</div>
          <div class="item">24</div>
          <div class="item">25</div>
          <div class="item">26</div>

          <div class="item">27</div>
          <div class="item">28</div>
          <div class="item">29</div>
          <div class="item">30</div>
          <div class="item">31</div>
          <div class="item"></div>
          <div class="item"></div>

        </div>
      </div>
      <div class="date-time">
      <div class="month">
        11月
      </div>
      <div class="day-time row flex-item flex-justify wrap">
        <div class="item item-none"></div>
        <div class="item item-none"></div>
        <div class="item item-start">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>

        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>

        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>

        <div class="item">20</div>
        <div class="item">21</div>
        <div class="item">22</div>
        <div class="item">23</div>
        <div class="item">24</div>
        <div class="item">25</div>
        <div class="item">26</div>

        <div class="item">27</div>
        <div class="item">28</div>
        <div class="item">29</div>
        <div class="item item-end">30</div>
        <div class="item item-none"></div>
        <div class="item item-none"></div>
        <div class="item item-none"></div>

      </div>
    </div>

  </div>
</template>

<script>
    //预约时间
    export default {
        name: 'date',
        props:{

        },
        data () {
            return {
                isToday:true

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
        background: #f7f7f7;
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
      }
      .item-start{
        border-radius: 12px 0 0 12px;
      }
      .item-end{
        border-radius: 0 12px 12px 0;
      }
      .item-none{
        background: none;
      }
    }
  }
</style>
