<template>
  <div class="container">
<!--    <van-list-->
<!--      v-model="load.loading"-->
<!--      :finished="load.finished"-->
<!--      finished-text="没有更多了"-->
<!--      :error.sync="load.error"-->
<!--      error-text="请求失败，点击重新加载"-->
<!--      @load="loadEvent"-->
<!--    >-->


      <div class="header-box">
        <swiper :options="swiperOption" class="swipe-container">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
                        class="item row flex-item flex-justify">
            <headerItem></headerItem>
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
        <swiper-slide class="switch-item">
          <staffInfo v-for="(item ,index) in list1" :key="index" :itemInfo="item" v-if="list1.length>0"></staffInfo>
          <div style="width: 100%;text-align: center;color: #9c9c9c;margin-top: 80px" v-if="list1.length==0">没有更多数据了</div>
        </swiper-slide>
        <swiper-slide class="switch-item">
          <staffInfo v-for="(item ,index) in list2" :key="index" :itemInfo="item"  v-if="list2.length>0"></staffInfo>
          <div style="width: 100%;text-align: center;color: #9c9c9c;margin-top: 80px" v-if="list2.length==0">没有更多数据了</div>
        </swiper-slide>
        <swiper-slide class="switch-item">
          <staffInfo v-for="(item ,index) in list3" :key="index" :itemInfo="item" v-if="list3.length>0"></staffInfo>
          <div style="width: 100%;text-align: center;color: #9c9c9c;margin-top: 80px" v-if="list3.length==0">没有更多数据了</div>
        </swiper-slide>
        <swiper-slide class="switch-item">
          <staffInfo2 v-for="(item ,index) in list4" :key="index" :itemInfo="item" v-if="list4.length>0"></staffInfo2>
          <div style="width: 100%;text-align: center;color: #9c9c9c;margin-top: 80px" v-if="list4.length==0">没有更多数据了</div>
        </swiper-slide>
      </swiper>
<!--    </van-list>-->
    <backTop :backTop="backTop"></backTop>
    <div class="load row flex-item flex-justify" v-if="loading"><van-loading size="24px"></van-loading><div class="text">加载中...</div></div>
  </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import staffInfo from '@/common/components/staffInfo'
    import staffInfo2 from '@/common/components/staffInfo2'
    import headerItem from "./headerItem";
    import {debounce} from '@/common/utils/tool'
    import {getBannerList, getEmployeeList} from '@/common/utils/service'
    import backTop from '@/common/components/backTop'

    export default {
        name: 'home',
        data() {
            return {
                backTop:false,
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
                swiperSlides: [1],
                nowIndex: 0, //当前选中的index
                navList: [
                    {
                        name: '月嫂',
                        // name: '1',
                        id: 1
                    }, {
                        name: '育儿嫂',
                        // name: '2',
                        id: 2
                    }, {
                        name: '保姆',
                        // name: '3',
                        id: 3
                    }, {
                        name: '更多',
                        // name: '4',
                        id: 4
                    }
                ],
                //选项卡切换的参数
                switchOptions: {
                    initialSlide: 0,
                    autoHeight: true,
                },
                list1: [], //月嫂列表
                list2: [], //育儿嫂列表
                list3: [], //保姆列表
                list4: [], //更多列表
                page: {
                    currentMoonWomanPage: 1,  //月嫂
                    currentChildRearingPage: 1, //育儿嫂
                    currentBabySitterPage: 1, //保姆
                    currentMorePage: 1        //更多
                },
                isLocked:false, //滑动加锁
                loading:true

            }
        },
        computed: {
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
            headerItem,
            backTop
        },
//初始化数据
        created() {

        },
        mounted() {
            window.addEventListener('scroll', this.watchScroll);

            console.log(this.screenWidth)
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                    console.log(that.screenWidth)
                })()
            };
            this.updateBannerList();
            this.updateList();
        },
        destroyed() {
            window.removeEventListener('scroll', this.watchScroll)
        },
//一些自定义方法
        methods: {
            async loadEvent() {
                console.log('loadEvent is run');
                this.$loading();
                if(this.nowIndex==0){
                    let [err,data]=await getEmployeeList({type:1,pageNum:this.page.currentMoonWomanPage});
                    if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                    let list=data.list||[];
                    if(list.length==0){this.$clear();return ;};
                    this.list1=[...this.list1,...list];
                    this.page.currentMoonWomanPage+=1;
                    // this.load.loading=false;
                    this.$clear();
                    return ;
                };
                if(this.nowIndex==1){
                    let [err2,data2]=await getEmployeeList({type:2,pageNum:this.page.currentChildRearingPage});
                    if(err2!==null){this.$toast(err2||'系统错误');this.$clear();return ;};
                    let list=data2.list||[];
                    if(list.length==0){this.$clear();return ;};
                    this.list2=[...this.list2,...list];
                    this.page.currentChildRearingPage+=1;
                    // this.load.loading=false;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==2){
                    let [err3,data3]=await getEmployeeList({type:3,pageNum:this.page.currentBabySitterPage});
                    if(err3!==null){this.$toast(err3||'系统错误');this.$clear();return ;};
                    let list=data3.list||[];
                    if(list.length==0){this.$clear();return ;};
                    this.list3=[...this.list3,...list];
                    this.page.currentBabySitterPage+=1;
                    // this.load.loading=false;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==3){
                    let [err4,data4]=await getEmployeeList({type:4,pageNum:this.page.currentMorePage});
                    if(err4!==null){this.$toast(err4||'系统错误');this.$clear();return ;};
                    let list=data4.list||[];
                    if(list.length==0){this.$clear();return ;};
                    this.list4=[...this.list4,...list];
                    this.page.currentMorePage+=1;
                    // this.load.loading=false;
                    this.$clear();
                    return ;
                }
            },
            async updateList(){
                window.scrollTo(0,0)
                if(this.nowIndex==0){
                    if(this.list1.length>0){return;};
                    this.$loading();
                    let [err,data]=await getEmployeeList({type:1,pageNum:1});
                    if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                    let list=data.list||[];
                    this.list1=[...list];
                    this.page.currentMoonWomanPage=1;
                    this.$clear();
                    return ;
                };
                if(this.nowIndex==1){
                    if(this.list2.length>0){return;};
                    this.$loading();
                    let [err2,data2]=await getEmployeeList({type:2,pageNum:1});
                    if(err2!==null){this.$toast(err2||'系统错误');this.$clear();return ;};
                    let list=data2.list||[];
                    this.list2=[...list];
                    this.page.currentChildRearingPage=1;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==2){
                    if(this.list3.length>0){return;};
                    this.$loading();
                    let [err3,data3]=await getEmployeeList({type:3,pageNum:1});
                    if(err3!==null){this.$toast(err3||'系统错误');this.$clear();return ;};
                    let list=data3.list||[];
                    this.list3=[...list];
                    this.page.currentBabySitterPage=1;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==3){
                    if(this.list4.length>0){return;};
                    this.$loading();
                    let [err4,data4]=await getEmployeeList({type:4,pageNum:1});
                    if(err4!==null){this.$toast(err4||'系统错误');this.$clear();return ;};
                    let list=data4.list||[];
                    this.list4=[...list];
                    this.page.currentMorePage=1;
                    this.$clear();
                    return ;
                }

            },
            tabClick(index) {
                this.nowIndex = index;
                this.updateList();
                this.swicthSwiper.slideTo(index, 300, false);
            },
            slideChangeTransitionEndCallback() {
                this.nowIndex = this.swicthSwiper.activeIndex
                this.updateList();
            },
            async watchScroll() {
                let clientHeight  = document.documentElement.clientHeight; //浏览器高度
                let scrollHeight = document.body.scrollHeight; //滚动高度
                let distance = -50;  //距离视窗还用50的时候，开始触发；
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值；
                //  当滚动超过 50 时，实现吸顶效果
                if (scrollTop > 206 * this.screenWidth / 375) {
                    this.navBarFixed = true
                } else {
                    this.navBarFixed = false
                }
                if(scrollTop>1000){
                    this.backTop=true;
                }else{
                    this.backTop=false;
                }


                //是否触底
                if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {
                    if(this.isLocked){
                        console.log('加锁了');
                        return ;
                    }
                    this.loading=true;
                    console.log("到底了，开始加载数据");
                    this.isLocked=true;
                    await  this.loadEvent();
                    this.isLocked=false;
                    this.loading=false;
                };
            },
            //更新头部bannerList 数据
            async updateBannerList() {
                let [err, data] = await getBannerList();
                if (err !== null) {
                    this.$toast(err || '系统错误')
                    return;
                }
                ;
                let list=data||[];
                this.swiperSlides=[...list];
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
      min-height: 350px;
    }

  }
  .load{
    .text{
      margin-left: 10px;
      color: #c9c9c9;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
    }
  }
</style>
