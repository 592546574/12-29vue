<!--嵌套路由要注意得是在当前文件夹创建子路由  然后在route引入子路由 用children定义子路由-->
<template>
  <div class="app">
    <div class="app-m">
      <header class="header">
        <div class="header_min">
          <div class="min">
            <div class="psc">
              <div class="psc-i">
                <a href="/Msite" class="psc-a">
                  <i class="iconfont icon-shouye2"></i>
                </a>
              </div>
              <div class="disc">
                <a href="###" class="disc-ove">发现</a>
                <a href="###" class="fam">甄选家</a>
              </div>
              <div class="copy">
                <a href="">
                  <i class="iconfont icon-sousuo1"@click="$router.push(`/search`)"></i>
                </a>
                <a href="">
                  <i class="iconfont icon-qicheqianlian-1-copy" @click="$router.push(`/ShopCart`)"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/materi/recommend" replace >推荐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/materi/intelligent" replace>达人</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/materi/update" replace>上新</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/materi/baskinasingle" replace>晒单</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/materi/home" replace>HOME</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{

    },
    mounted(){


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .app-m
    overflow hidden
    .header
      position fixed
      left 0
      top 0
      z-index 10
      width 100%
      .header_min
        width 100%
        background #333
        .min
          background-color #fafafa
          height 50px
          line-height 50px
          text-align center
          box-sizing border-box
          border-bottom 1px solid #d9d9d9
          .psc
            position relative
            margin auto
            box-sizing border-box
            padding 0 15px
            .psc-i
              float left
              width 23px
              display block
              .psc-a
                display block
                .iconfont
                   display block
                   font-size 25px
            .disc
              left 50%
              top 0
              width 160px
              height 100%
              line-height 50px
              text-align center
              margin-left -95px
              color #7F7F7F
              position absolute
              .disc-ove
                font-size 20px
                color #b4282d
                font-weight bold
              .fam
                padding 5px
            .copy
              width 76px
              float right
              height 100%
              margin-right -5px
              display block
              .iconfont
                 padding 5px
                 font-size 25px

  .tab
    width 100%
    height 45px
    line-height 45px
    background #fff
    border 1px solid #d9d9d9
    box-sizing border-box
    position fixed
    left 0
    top 40px
    z-index 10
    .tab-item
      float left
      width: 20%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #b4282d
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #b4282d
</style>
