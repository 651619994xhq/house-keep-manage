<template>
    <div class="container">
        <li v-for="(item,index) of list" :key="index">
            <van-swipe-cell :right-width="70" :left-width="0">
                <van-cell-group>
                    <staffInfo></staffInfo>
                </van-cell-group>
                <div class="delete" slot="right">删除</div>
            </van-swipe-cell>
        </li>
    </div>
</template>
<script>
  import staffInfo from '@/common/components/staffInfo'

  export default {
    name: 'myCollect',
    data () {
      return {
        list: [1, 2, 3]
      }
    },
    components: {
      staffInfo
    },
    mounted () {

    },
    methods: {},
    created () {

    }
  }
</script>
<style scoped lang="scss">
    .delete {
        margin-top: 18px;
        height: 76px;
        width: 70px;
        line-height: 76px;
        text-align: center;
        background: #f44;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }
</style>
