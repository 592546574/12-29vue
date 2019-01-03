<template>
  <div>
    <header class="header">
      <div class="header_min">
        <div class="min">
          <i class="icon"
             style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)"></i>
          <span>搜索商品,共20239款好物</span>
        </div>
      </div>
    </header>
    <div class="search">
      <div class="search-list">
        <div class="left">
          <ul class="list">
            <!--关于第二行跳转：左右两边列表必须用同一个数据首先绑定一个点击事件@click="handleClick在methods:里面定义这个点击事件然后在data里面存一个下标，下标可以自定义
             {pageCount: 0初始位置为0，然后把下标传进绑定监听里面@click="handleClick(index,，在定义绑定监听里传进去handleClick(index）{ this.pageCount = index然后完了以后点击左侧列表右侧列表
             跟着滑动到相应位置in categoryL1List[pageCount].subCateList因为subCateList数据在ategoryL1List里所以用用下标找-->
            <li class="item" v-for="(gore,index) in categoryL1List" :key="index" @click="handleClick(index,gore.wapBannerUrl)" :index="index" :class="{action:pageCount===index}">
              <a href="###" class="list-item">{{gore.name}}</a>
            </li>
          </ul>
        </div>
        <div class="tab">
          <div class="right">
            <div class="right-tab">
              <div class="right-top">
                <img :src="img" alt="">
              </div>
              <div class="right-list">
                <!--如果获取subCateList是undef得要用v-if判断-->
                <ul class="list-item" v-if="categoryL1List.length">
                  <li class="cage-item" v-for="(gore,index) in categoryL1List[pageCount].subCateList" :key="index"  >
                    <a href="###">
                      <div class="text">
                        <img :src="gore.bannerUrl" class="cage-text">
                      </div>
                      <div class="item-text">{{gore.name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        pageCount: 0,
        img:'http://yanxuan.nosdn.127.net/38b49a2863971efec7ec9b6ad3c0f96a.png'
      }
    },
    computed:{
      ...mapState([
        'category',
        'categoryL1List',
        'categoryL2List'
      ])
    },
    mounted(){
      new BScroll('.left')
      this.$nextTick(() =>{
        new BScroll('.right',{
          scrollY: true
        })

      })
      this.$store.dispatch(`getCategory`)
      this.$store.dispatch(`getCategoryL1List`)
      this.$store.dispatch(`getCategoryL2List`)
    },
    methods: {
      handleClick(index,img){
        this.pageCount = index
        this.img=img
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.header
  width 100%
  height 100%
  .header_min
    background #fff
    position fixed
    top 0
    width 100%
    height 45px
    text-align center
    line-height 45px
    z-index 10
    .min
      background-color #ededed
      align-items center
      display flex
      justify-content center
      height 30px
      margin 10px 10px
.search
  margin-top 50px
  border-top  3px solid #e4e4e4
  top 55px
  .search-list
     position relative
     width 100%
     height 100%
     overflow hidden
     .left
       width 82px
       height 600px
       .list
          padding 10px 0
          padding-bottom 3px
          .item
            width 82px
            text-align center
            height 50px
            position relative
            border-left 4px solid white
            &.action
              border-left 4px solid red
            .list-item
              text-overflow ellipsis
              font-size 14px
              line-height 20px
              display block
      .right
        height 600px
        border 3px solid #fff
        float right
        //margin-left 75px
        padding 15px 10px 10px 94px
        margin-top -588px
        .right-tab
          .right-top
            //background-image url("background-image: url()")
            width 100%
            height 100px
            display table
            img
             float right
             width 100%
             height 100%

          .right-list
             .list-item
                .cage-item
                  vert-align top
                  margin-right 10px
                  font-size 0
                  width 75px
                  display inline-block
                  a
                   .text
                     height 85px
                     width 85px
                     .cage-text
                       width 100%
                       height 100%
                       background #fff
                       display block
                   .item-text
                     width 85px
                     height 85px
                     color #333
                     line-height 15px
                     font-size 12px
                     text-align center
                     display -webkit-box
                     -webkit-line-clamp 2
                     -webkit-box-orient vertical
                     height 30px



</style>
