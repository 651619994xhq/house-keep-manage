<template>
    <div class="container">
        <swiper :options="swiperOption" class="swipe-container">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="item">I'm Slide {{ slide }}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
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
                // autoplay:true,
                autoplay: {
                 delay: 5000,
                 stopOnLastSlide: false,
                 disableOnInteraction: true,
                },
                pagination: {
                  el: '.swiper-pagination'
                }
              },
              swiperSlides: [1, 2, 3, 4, 5]
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
          // setInterval(() => {
          //   console.log('simulate async data')
          //   if (this.swiperSlides.length < 10) {
          //     this.swiperSlides.push(this.swiperSlides.length + 1)
          //   }
          // }, 3000)
        },
//一些自定义方法
        methods: {
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
        height: 150px;
        background: #FFFFFF;
        .item{
            width: 100%;
            height: 100%;
            font-size: 50px;
            line-height: 150px;
            text-align: center;
        }
    }
</style>
