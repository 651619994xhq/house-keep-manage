<template>
    <div class="container">
        <div class="header-box">
          <swiper :options="swiperOption" class="swipe-container">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="item row flex-item flex-justify">
              <div class="item-container">
                I'm Slide {{ slide }}
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="navlist">
            <ul class="row flex-item flex-justify-around nav-container" :class="navBarFixed?'nav-fixed':''">
                <li class="navli" :class="(nowIndex==index)?'navli-active':''" v-for="(item,index) in navList" @click="tabClick(index)"><i>{{item.name}}</i>
                </li>
            </ul>
        </div>
        <swiper :options="switchOptions" ref="mySwiper" class="switch-container"  @slideChangeTransitionEnd="slideChangeTransitionEndCallback">
            <swiper-slide v-for="(slide, index) in navList" :key="index" class="switch-item">
<!--                <staffInfo></staffInfo>-->
<!--                <staffInfo2></staffInfo2>-->
            </swiper-slide>
        </swiper>

    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import staffInfo from '@/common/components/staffInfo'
    import staffInfo2 from '@/common/components/staffInfo2'
    export default {
        name: "home",
        data() {
            return {
              screenWidth: document.body.clientWidth, //获取屏幕宽度
              navBarFixed:false,
              swiperOption: {
                initialSlide:0,
                loop:true,
                autoplay: {
                 delay: 5000,
                 stopOnLastSlide: false,
                 disableOnInteraction: true
                },
                pagination: {
                  el: '.swiper-pagination'
                }
              },
              swiperSlides: [1, 2, 3, 4, 5],
              nowIndex:0, //当前选中的index
              navList:[
                {
                  // name:'月嫂',
                  name:'1',
                  id:1
                },{
                  // name:'育儿嫂',
                  name:'2',
                  id:2
                },{
                  // name:'保姆',
                  name:'3',
                  id:3
                },{
                  // name:'更多',
                  name:'4',
                  id:4
                }
              ],
              //选项卡切换的参数
              switchOptions:{
                initialSlide:0,
              },

            }
        },
        computed:{
          swicthSwiper() {
            return this.$refs.mySwiper.swiper
          }
        },
//组件
        components: {
            swiper,
            swiperSlide,
            staffInfo,
            staffInfo2,
        },
//初始化数据
        created() {

        },
        mounted(){
          window.addEventListener('scroll',this.watchScroll);
          console.log(this.screenWidth)
                const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                    console.log(that.screenWidth)
                })();
            }
        },
        destroyed(){
            window.removeEventListener('scroll',this.watchScroll);
        },
//一些自定义方法
        methods: {

          tabClick(index){
            this.nowIndex=index;
            this.swicthSwiper.slideTo(index,300,false);
          },
          slideChangeTransitionEndCallback(){
            this.nowIndex=this.swicthSwiper.activeIndex;
          },
          watchScroll(){
              var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
              // console.log('scrollTop==>',scrollTop)
              //  当滚动超过 50 时，实现吸顶效果
              if (scrollTop > 170*this.screenWidth/375) {
                  this.navBarFixed = true
              } else {
                  this.navBarFixed = false
              }
          }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        background:#F7F6FB;
        padding-bottom: 80px;

    }
    .header-box{
      width: 100%;
      height: 196px;
      background: #ff6666;
      overflow: hidden;
    }
    .swipe-container{
        margin-top: 12px;
        width: 100%;
        height: 160px;
        background: #FFFFFF;
        .item{
            width: 100%;
            height: 100%;
            background: #7DB5FB;
            .item-container{
              font-size: 50px;
              line-height: 160px;
              text-align: center;
              width: 343px;
              height: 160px;
              background: #ffffff;
            }
        }
    }
    .navlist{
        margin-top: 10px;
        height: 52px;
        width: 100%;
        background: #FFFFFF;
        .nav-container{
          width: 100%;
          height: 52px;
          background: $white;
          border-bottom: 1px solid #ececec;
        }
        .nav-fixed{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
        }
        .navli{
            width: 25%;
            height: 100%;
            color: $color-3;
            font-size: 14px;
            line-height: 52px;
            text-align: center;
            font-family:PingFangSC-Regular,PingFangSC;

        }
        .navli-active{
            color: $pink;
            &::after{
                margin-top: -2px;
                margin-left: 40px;
                content: '';
                display: block;
                width: 16px;
                height: 2px;
                background: $pink;
            }
        }
    }
    .switch-container{
        width: 100%;
        height: 100%;
        .switch-item{
            width: 100%;
            /*height: 100%;*/
            min-height: 800px;
            /*height: 1000px;*/
        }
        .switch-item:first-of-type{
            background: #0A81FB;
        }
        .switch-item:nth-of-type(2){
            background: #FFFFFF;
        }
        .switch-item:nth-of-type(3){
            background: bisque;
        }
        .switch-item:nth-of-type(4){
            background: black;
        }
    }
</style>
