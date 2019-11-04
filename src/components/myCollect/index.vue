<template>
  <van-list
    v-model="load.loading"
    :finished="load.finished"
    finished-text="没有更多了"
    :error.sync="load.error"
    error-text="请求失败，点击重新加载"
    @load="loadEvent"
  >
    <div class="container">
      <li v-for="(item,index) of list" :key="index">
        <van-swipe-cell :right-width="70" :left-width="0" :on-close='onClose'>
          <van-cell-group>
            <staffInfo></staffInfo>
          </van-cell-group>
          <div class="delete" slot="right" @click="handleShowDeleteDialog">删除</div>
        </van-swipe-cell>
      </li>
    </div>
  </van-list>
</template>
<script>
    import staffInfo from '@/common/components/staffInfo'
    import {getMyCollectList} from '@/common/utils/service'

    export default {
        name: 'myCollect',
        data() {
            return {
                list: [],
                deleteId: '',
                load: {
                    error: false,  //错误
                    loading: false, //加载更多
                    finished: false //完成
                },
                currentPage:1
            }
        },
        components: {
            staffInfo
        },
        mounted() {

        },
        methods: {
            async loadEvent() {
                this.$loading();
                let [err,data]=await getMyCollectList({pageSize:this.currentPage});
                if(err!==null){this.$toast(err||'系统错误');this.$clear();return ;};
                let list=data.list||[];
                if(list.length==0){this.$toast('没有更多了');this.$clear();return ;};
                this.list=[...this.list,...list];
                this.currentPage+=1;
                this.load.loading=false;
                this.$clear();
                return ;
            },
            onClose(clickPosition, instance) {
                let e = window.event;
                e.preventDefault();
                e.stopPropagation()
                instance.close();//这个函数就是让滑动的模块返回的操作  e.preventDefault()阻止默认行为;e.stopPropagation()阻止冒泡
                console.log('正在左滑')
            },
            handleShowDeleteDialog(id) {
                this.deleteId = id;
                this.$dialog.confirm({
                    message: '确认删除吗',
                }).then(() => {
                    console.log('确认删除')
                }).catch(() => {
                    console.log('取消删除')
                });
            }
        },
        created() {

        }
    }
</script>
<style scoped lang="scss">
  .container {
    width: 100%;
  }

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
