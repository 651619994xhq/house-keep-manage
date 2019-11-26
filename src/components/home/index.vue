<template>
  <div>
    <div class="navlist navlist2"  v-if="navBarFixed" style="position: fixed;top: 0;left: 0;z-index: 100">
      <ul class="row flex-item flex-justify-around nav-container">
        <li class="navli" :class="(nowIndex==index)?'navli-active':''" v-for="(item,index) in navList"
            @click="tabClick(index)"><span :class="(nowIndex==index)?'purple-color':''">{{item.name}}</span>
        </li>
      </ul>
    </div>
  <div class="container" ref="wrapper" :scrollbar="options.scrollbar" :startY="options.startY">

    <div class="content">
      <div class="header-box">
        <swiper :options="swiperOption" class="swipe-container">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
                        class="item row flex-item flex-justify">
            <headerItem :pictureUrl="slide.pictureUrl" :bannerUrl="slide.bannerUrl"></headerItem>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination row flex-item flex-justify self-pagination" style="width: 100%" slot="pagination"></div>
      </div>
      <div class="navlist" >
        <ul class="row flex-item flex-justify-around nav-container" v-if="!navBarFixed">
          <li class="navli" :class="(nowIndex==index)?'navli-active':''" v-for="(item,index) in navList"
              @click="tabClick(index)"><span :class="(nowIndex==index)?'purple-color':''">{{item.name}}</span>
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
          <staffInfo2 v-for="(item,index) in moreList" :key="index" :itemInfo="item" @appointEvent="handleShowService"></staffInfo2>
<!--          <div style="width: 100%;text-align: center;color: #9c9c9c;margin-top: 80px" v-if="list4.length==0">没有更多数据了</div>-->
        </swiper-slide>
      </swiper>
<!--    </van-list>-->
    <backTop :backTop="backTop"></backTop>
    <Service :is-show="serviceData.isShow" @cancelEvent="serviceCancelEvent" @sureEvent="serviceSureEvent" @closeEvent="serviceCloseEvent"></Service>
    <div class="load row flex-item flex-justify" v-if="loading&&((nowIndex==0&&(list1.length>0))||(nowIndex==1&&(list2.length>0))||(nowIndex==2&&(list3.length>0))||(nowIndex==3&&(list4.length>0)))"><van-loading size="24px"></van-loading><div class="text">加载中...</div></div>
    <div class="load row flex-item flex-justify" v-if="finish&&!loading&&((nowIndex==0&&(list1.length>0))||(nowIndex==1&&(list2.length>0))||(nowIndex==2&&(list3.length>0))||(nowIndex==3&&(list4.length>0)))"><div class="text">没有更多数据了</div></div>
    </div>
  </div>
  </div>
</template>
<script>
    import BScroll from 'better-scroll';
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import staffInfo from '@/common/components/staffInfo'
    import staffInfo2 from '@/common/components/staffInfo2'
    import headerItem from "./headerItem";
    import {debounce,Throttle} from '@/common/utils/tool'
    import {getBannerList, getEmployeeList} from '@/common/utils/service'
    import backTop from '@/common/components/backTop'
    import Service from '@/common/components/service/index'

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
                    },
                },
                serviceData:{
                    isShow:false
                },
                swiperSlides: [],
                nowIndex: 0, //当前选中的index
                navList: [
                    {
                        name: '月嫂',
                        // name: '1',
                        id: 1
                    }, {
                        name: '保姆',
                        // name: '2',
                        id: 2
                    }, {
                        name: '育儿嫂',
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
                moreList:[
                    {
                        workName:'小时工',
                        workInfo:'小时工，打扫卫生，做饭，接送孩子，简单保洁，定时或者不定时的为雇主按小时的提供家政服务',
                        headUrl:require('../../image/hourlyWork.png')
                    },
                    {
                        workName: '催乳师',
                        workInfo: '催乳师就是通过催乳技术即按摩手法，为产妇解决产后无乳、乳少等症状的专业护理人员',
                        headUrl:require('../../image/ProlactinDivision.png')
                    }
                ], //更多列表 暂时前端写死
                page: {
                    currentMoonWomanPage: 1,  //月嫂
                    currentChildRearingPage: 1, //育儿嫂
                    currentBabySitterPage: 1, //保姆
                    currentMorePage: 1        //更多
                },
                options: {
                    pullDownRefresh: {
                        threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                        stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                    },
                    pullUpLoad: {
                        threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                    },
//     pullDownRefresh: false, //关闭下拉
//     pullUpLoad: false, // 关闭上拉
                    click: true,
                    probeType: 3,
                    startY: 0,//欢迎加入全栈开发交流圈一起学习交流：864305860
                    scrollbar: true//面向1-3年前端人员
                },//帮助突破技术瓶颈，提升思维能力
                isLocked:false, //滑动加锁
                loading:false,
                finish:false

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
            backTop,
            Service
        },
//初始化数据
        created() {

        },
        mounted() {
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
            this.load();
        },
        destroyed() {
        },
//一些自定义方法
        methods: {
            async loadEvent() {
                if(this.nowIndex==0){
                    this.$loading();
                    let [err,data]=await getEmployeeList({type:1,pageNum:this.page.currentMoonWomanPage});
                    if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                    let list=data.list||[],totalPage=data.totalPage;
                    if(this.page.currentMoonWomanPage-1>=totalPage){this.$clear();this.finish=true;return ;};
                    this.list1=[...this.list1,...list];
                    this.page.currentMoonWomanPage+=1;
                    this.$clear();
                    return ;
                };
                if(this.nowIndex==1){
                    this.$loading();
                    let [err2,data2]=await getEmployeeList({type:2,pageNum:this.page.currentChildRearingPage});
                    if(err2!==null){this.$toast(err2||'系统错误');this.$clear();return ;};
                    let list=data2.list||[],totalPage=data2.totalPage;
                    if(this.page.currentChildRearingPage-1>=totalPage){this.$clear();this.finish=true;return ;};
                    this.list2=[...this.list2,...list];
                    this.page.currentChildRearingPage+=1;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==2){
                    this.$loading();
                    let [err3,data3]=await getEmployeeList({type:3,pageNum:this.page.currentBabySitterPage});
                    if(err3!==null){this.$toast(err3||'系统错误');this.$clear();return ;};
                    let list=data3.list||[],totalPage=data3.totalPage;
                    if(this.page.currentBabySitterPage-1>=totalPage){this.$clear();this.finish=true;return ;};
                    this.list3=[...this.list3,...list];
                    this.page.currentBabySitterPage+=1;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==3){
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
                    this.page.currentMoonWomanPage=2;
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
                    this.page.currentChildRearingPage=2;
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
                    this.page.currentBabySitterPage=2;
                    this.$clear();
                    return ;
                }
                if(this.nowIndex==3){
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
            watchScroll(y) {
                console.log('watchScroll==>',new Date().getTime());
                // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值；
                //  当滚动超过 50 时，实现吸顶效果
                let scrollTop=0-y;
                //  this.$toast('scrollTop==>'+scrollTop);
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
                    // this.navBarFixed = true
                },
                watchScroll2:Throttle(async function(){
                    let clientHeight  = document.documentElement.clientHeight; //浏览器高度
                    let scrollHeight = document.body.scrollHeight; //滚动高度
                    let distance = 50;  //距离视窗还用50的时候，开始触发；
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值；
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
                        console.log('loadEvent is finish')
                        this.isLocked=false;
                        this.loading=false;
                    };
                },300) ,
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
                },
                serviceCancelEvent(){
                    this.serviceData.isShow=false;
                },
                serviceSureEvent(){
                    this.serviceData.isShow=false;
                },
                serviceCloseEvent(){
                    this.serviceData.isShow=false;
                },
                handleShowService(){
                    this.serviceData.isShow=true;
                },
                load(){
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.wrapper, this.options);
                        // 上拉
                        this.scroll.on('pullingUp', () => {
                            // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
                            this.setData();
                        });
                        //下拉刷新
                        this.scroll.on('pullingDown', () => {
                          this.refreshData();
                        });

                        //实时监听
                        this.scroll.on('scroll',(e)=>{
                        this.watchScroll(e.y);
                        });
                } else {
                    this.scroll.refresh()
                }
            },
            async setData() {
                this.loading=true;
                console.log("到底了，开始加载数据");
                // this.isLocked=true;
                await  this.loadEvent();
                console.log('loadEvent is finish')
                // this.isLocked=false;
                this.loading=false;

                this.scroll.finishPullUp();
                this.pullingDownUp()
            },
            //刷新数据
            async refreshData() {
              this.$loading({duration: 0,forbidClick: true,message: "刷新中..."});
              await this.updateBannerList();

              setTimeout(()=>{
                this.$clear();
              },5000);

              this.scroll.finishPullDown();
              this.pullDownRefresh();
            },
            pullingDownUp() {
                    this.scroll.refresh() //重新计算元素高度
            },
            pullDownRefresh(){
                    this.scroll.refresh(); //重新计算元素高度
            }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    background: #F7F6FB;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 50px;
  }

  .header-box {
    width: 100%;
    height: 196px;
    background: #FFFFFF;
    overflow: hidden;
    .self-pagination{
      margin-top: 10px;
    }
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
      &::after {
        margin-top: -2px;
        margin-left: 40px;
        content: '';
        display: block;
        width: 16px;
        height: 2px;
        background:linear-gradient(338deg, rgba(201,141,253,1) 0%, rgba(250,119,119,1) 100%);
      }
    }
  }
  .navlist2{
    margin-top: 0;
  }

  .switch-container {
    width: 100%;
    .switch-item {
      width: 100%;
      min-height: 350px;
    }

  }
  .load{
    margin-top: 10px;
    .text{
      margin-left: 10px;
      color: #c9c9c9;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
    }
  }
</style>
