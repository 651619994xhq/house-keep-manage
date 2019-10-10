<template>
    <div class="container">
        <swiper :options="swiperOption" class="swipe-container">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="item">I'm Slide {{ slide }}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="navlist">
            <ul class="row flex-item flex-justify-around">
                <li class="navli" :class="(nowIndex==index)?'navli-active':''" v-for="(item,index) in navList" @click="tabClick(index)"><i>{{item.name}}</i>
                </li>
            </ul>
        </div>
        <swiper :options="switchOptions" ref="mySwiper" class="switch-container"  @slideChangeTransitionEnd="slideChangeTransitionEndCallback">
            <swiper-slide v-for="(slide, index) in navList" :key="index" class="switch-item">I'm Slide {{ index }}</swiper-slide>
        </swiper>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "home",
        data() {
            return {
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
              }
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
            swiperSlide
        },
//初始化数据
        created() {

        },
        mounted(){

        },
//一些自定义方法
        methods: {
          tabClick(index){
            this.nowIndex=index;
            this.swiper.slideTo(index,300,false)
          },
          slideChangeTransitionEndCallback(){
            this.nowIndex=this.swicthSwiper.activeIndex;
          }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background:#F7F6FB;
        padding-bottom: 50px;
    }
    .swipe-container{
        width: 100%;
        height: 160px;
        background: #FFFFFF;
        .item{
            width: 100%;
            height: 100%;
            font-size: 50px;
            line-height: 160px;
            text-align: center;
        }
    }
    .navlist{
        margin-top: 10px;
        height: 52px;
        width: 100%;
        background: #FFFFFF;
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
            height: 100%;
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
