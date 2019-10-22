<template>
    <div class="container">
        <van-list
                v-model="load.loading"
                :finished="load.finished"
                finished-text="没有更多了"
                :error.sync="load.error"
                error-text="请求失败，点击重新加载"
                @load="loadEvent"
        >
            <div class="header-box">
                <swiper :options="swiperOption" class="swipe-container">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
                                  class="item row flex-item flex-justify">
                        <div class="item-container">
                            I'm Slide {{ slide }}
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="navlist">
                <ul class="row flex-item flex-justify-around nav-container" :class="navBarFixed?'nav-fixed':''">
                    <li class="navli" :class="(nowIndex==index)?'navli-active':''" v-for="(item,index) in navList"
                        @click="tabClick(index)"><i>{{item.name}}</i>
                    </li>
                </ul>
            </div>
            <swiper :options="switchOptions" ref="mySwiper" class="switch-container"
                    @slideChangeTransitionEnd="slideChangeTransitionEndCallback">
                <swiper-slide v-for="(slide, index) in navList" :key="index" class="switch-item">
                    <!--                <staffInfo></staffInfo>-->
                    <!--                <staffInfo2></staffInfo2>-->
                    <van-cell
                            v-for="item in list"
                            :key="item"
                            :title="item"
                    />
                </swiper-slide>
            </swiper>
        </van-list>
    </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import staffInfo from '@/common/components/staffInfo'
  import staffInfo2 from '@/common/components/staffInfo2'
  import {debounce} from '@/common/utils/tool'
  import {getBannerList,getEmployeeList} from '@/common/utils/service'

  export default {
    name: 'home',
    data () {
      return {
        screenWidth: document.body.clientWidth, //获取屏幕宽度
        navBarFixed: false,
        swiperOption: {
          initialSlide: 0,
          loop: true,
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
        nowIndex: 0, //当前选中的index
        navList: [
          {
            // name:'月嫂',
            name: '1',
            id: 1
          }, {
            // name:'育儿嫂',
            name: '2',
            id: 2
          }, {
            // name:'保姆',
            name: '3',
            id: 3
          }, {
            // name:'更多',
            name: '4',
            id: 4
          }
        ],
        //选项卡切换的参数
        switchOptions: {
          initialSlide: 0,
        },
        list: [],
        load:{
          error: false,  //错误
          loading: false, //加载更多
          finished: false //完成
        },
        page:{
          currentMoonWomanPage:1,  //月嫂
          currentChildRearingPage:1, //育儿嫂
          currentBabySitterPage:1, //保姆
          currentMorePage:1        //更多
        }

      }
    },
    computed: {
      swicthSwiper () {
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
    created () {

    },
    mounted () {
      window.addEventListener('scroll', this.watchScroll)
      console.log(this.screenWidth)
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          console.log(that.screenWidth)
        })()
      }

      this.updateBannerList();

    },
    destroyed () {
      window.removeEventListener('scroll', this.watchScroll)
    },
//一些自定义方法
    methods: {
      loadEvent(){
        console.log('loadEvent is run')
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.load.loading = false;
          // if(this.list.length>=20){
          //   this.error=true;
          // }

          // 数据全部加载完成
          // if (this.list.length >= 40) {
          //   this.load.finished = true;
          // }
        }, 500);
      },
      tabClick (index) {
        this.nowIndex = index
        this.swicthSwiper.slideTo(index, 300, false)
      },
      slideChangeTransitionEndCallback () {
        this.nowIndex = this.swicthSwiper.activeIndex
      },
      watchScroll () {
        // let clientHeight  = document.documentElement.clientHeight; //浏览器高度
        // let scrollHeight = document.body.scrollHeight; //滚动高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值；
        // let distance = 50;  //距离视窗还用50的时候，开始触发；
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 206 * this.screenWidth / 375) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }

        //是否触底
        // if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {
        //   console.log("到底了，开始加载数据");
        // };
      },
      //更新头部bannerList 数据
      async updateBannerList(){
          let [err,data]=await getBannerList();
          if(err!==null){
            this.$toast(err||'系统错误')
            return ;
          };
          console.log('data==>',data);
      }
    }
  }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        background: #F7F6FB;
        padding-bottom: 80px;
    }

    .header-box {
        width: 100%;
        height: 196px;
        background: #FFFFFF;
        overflow: hidden;
    }

    .swipe-container {
        margin-top: 12px;
        width: 100%;
        height: 160px;

        .item {
            width: 100%;
            height: 100%;

            .item-container {
                font-size: 50px;
                line-height: 160px;
                text-align: center;
                width: 343px;
                height: 160px;
                background: #999;
            }
        }
    }

    .navlist {
        margin-top: 10px;
        height: 52px;
        width: 100%;
        background: #FFFFFF;

        .nav-container {
            width: 100%;
            height: 52px;
            background: $white;
            border-bottom: 1px solid #ececec;
        }

        .nav-fixed {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
        }

        .navli {
            width: 25%;
            height: 100%;
            color: $color-3;
            font-size: 14px;
            line-height: 52px;
            text-align: center;
            font-family: PingFangSC-Regular, PingFangSC;

        }

        .navli-active {
            color: $pink;

            &::after {
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

    .switch-container {
        width: 100%;
        .switch-item {
            width: 100%;
            min-height: 800px;
        }
        .switch-item:first-of-type {
            background: #0A81FB;
        }
        .switch-item:nth-of-type(2) {
            background: #FFFFFF;
        }
        .switch-item:nth-of-type(3) {
            background: bisque;
        }
        .switch-item:nth-of-type(4) {
            background: black;
        }
    }
</style>
